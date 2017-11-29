function newSelected(element) {

  if (element === "next") {
    var selected = $(".selected").next();
  } else if (element == "previous") {
    var selected = $(".selected").prev();
  } else {
    var selected = element;
  }

  var next = $(selected).next();
  var previous = $(selected).prev();
  var previousSecond = $(previous).prev();
  var nextSecond = $(next).next();

  $(selected).removeClass().addClass("selected");

  $(previous).removeClass().addClass("previous");
  $(next).removeClass().addClass("next");

  $(nextSecond).removeClass().addClass("nextSecond");
  $(previousSecond).removeClass().addClass("previousSecond");

  $(nextSecond).nextAll().removeClass().addClass('hideNext');
  $(previousSecond).prevAll().removeClass().addClass('hidePrevious');

}

// Eventos teclado
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        newSelected('previous');
        break;

        case 39: // right
        newSelected('next');
        break;

        default: return;
    }
    e.previousentDefault();
});

$('#slideshow div').click(function() {
  newSelected($(this));
});

$('#previous').click(function() {
  newSelected('previous');
});

$('#next').click(function() {
  newSelected('next');
});

