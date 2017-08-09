var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 808740610000
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1325412610000
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1456866842000
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

function renderTweets(tweets) {
    tweets.forEach(function(key) {
        let $tweet = createTweetElement(key);
        $('#tweets-container').append($tweet);
    });  
}

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

function convertDate(unix) {
  let date = unix / 1000;
  let dateString = moment.unix(date).format("MM/DD/YYYY");
  return dateString;
}

$(document).ready(function () {
    renderTweets(data);
});