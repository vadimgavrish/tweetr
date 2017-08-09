$(document).ready(function() {
    $('.new-tweet textarea').on('keyup', function(event) {
        let input = $(this).val().length;
        let totalChars = 140;
        let remainingChars = totalChars - input;    
        let counter = $(this).siblings(".counter");
        if (remainingChars >= 0) {
            counter.text(remainingChars);
            counter.removeClass("makeRed");
        } else {
            counter.text(remainingChars);
            counter.addClass("makeRed");
        }
    });
});

