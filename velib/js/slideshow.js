// Changing class function
function newSelected(element) {

    // New selected element
    if (element === 'next') {
        var selected = $('.selected').next();
    } else if (element === 'previous') {
        var selected = $('.selected').prev();
    } else {
        var selected = element;
    }

    // New next and previous elements
    var next = selected.next();
    var previous = selected.prev();

    // New second next and second previous elements
    var nextSecond = next.next();
    var previousSecond = previous.prev();

    // Class replacement
    selected.removeClass().addClass('selected');
    next.removeClass().addClass('next');
    previous.removeClass().addClass('previous');
    nextSecond.removeClass().addClass('nextSecond');
    previousSecond.removeClass().addClass('previousSecond');
    nextSecond.nextAll().removeClass().addClass('hideNext');
    previousSecond.prevAll().removeClass().addClass('hidePrevious');
}

// Arrow keys movement
$(document).keydown(function (e) {
    switch (e.which) {
        case 37:
            newSelected('previous');
            break;

        case 39:
            newSelected('next');
            break;

        default:
            return;
    }
    e.preventDefault();
});

// Button disabling function
function buttonDisable() {
    if ($('#slideshow div:first-child').hasClass('selected')) {
        $('#previous').addClass('disabled');
    } else if ($('#slideshow div:last-child').hasClass('selected')) {
        $('#next').addClass('disabled');
    } else {
        $('#previous').removeClass('disabled');
        $('#next').removeClass('disabled');
    }
}

// Slide click movement
$('#slideshow > div').click(function () {
    newSelected($(this));
    buttonDisable()
});

// Button click movement
$('#previous').click(function () {
    newSelected('previous');
    buttonDisable()
});
$('#next').click(function () {
    newSelected('next');
    buttonDisable()
});
