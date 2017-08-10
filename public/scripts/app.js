// render tweets on main page
function renderTweets(tweets) {
  $('#tweets-container').html('');
  tweets.forEach(function(key) {
      let $tweet = createTweetElement(key);
      $('#tweets-container').prepend($tweet);
  });  
}

// create HTML for the tweet
function createTweetElement(data) {
  let date = convertDate(data.created_at);
  let $tweet = $('<article>')
      .append($('<header>')
          .append($('<img>').attr('src', data.user.avatars.regular))
          .append($('<h3>').text(data.user.name))
          .append($('<h5>').text(data.user.handle))
      )
      .append($('<div>')
          .append($('<p>').text(data.content.text))
      )
      .append($('<footer>')
          .append($('<p>').text(date))
          .append($('<span>')
              .append($('<i>').attr('class', 'material-icons').text('flag'))
              .append($('<i>').attr('class', 'material-icons').text('loop'))
              .append($('<i>').attr('class', 'material-icons').text('favorite'))
          )
      )
  return $tweet;
}

// convert unix time to date
function convertDate(unix) {
  let date = unix / 1000;
  let dateString = moment.unix(date).format("MM/DD/YYYY");
  return dateString;
}

$(document).ready(function () {
  
  // slide up/down new-tweet section
  $(".composeButton").click(function(){
    $(".new-tweet").slideToggle(600);
    $(".new-tweet form textarea").focus();
  })
  
  // load exisitng tweets on page load
  loadTweets();
  
  // post new tweet
  let $form = $(".new-tweet form");
  $form.on("submit", function(event) {
    event.preventDefault();

    // input validation
    let input = $form.find('textarea').val().length
    if (input > 140) {
      $("form p").text("Please enter a tweet with less than 140 characters!");
      return;
    } else if (input == "" || null) {
       $("form p").text("Please enter a tweet!");
       return;
    }
    
    // add new tweet to database
    $.ajax({
      url: "/tweets",
      method: "POST",
      data: $form.serialize()
    }).done(function() {
      // clear form after successful submission
      $form.find("input[type=text], textarea").val("");
      loadTweets();
      // clear any erorr messages
      $("form p").text("");
    });
  });
  
  // pass all tweets to render function
  function loadTweets() {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: function(result) {
        renderTweets(result);
      }
    });
  }
});