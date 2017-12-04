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

	var nextSecond = $(next).next();
	var previousSecond = $(previous).prev();

	$(selected).removeClass().addClass("selected");

	$(next).removeClass().addClass("next");
  $(previous).removeClass().addClass("previous");

	$(nextSecond).removeClass().addClass("nextSecond");
	$(previousSecond).removeClass().addClass("previousSecond");

	$(nextSecond).nextAll().removeClass().addClass('hideNext');
	$(previousSecond).prevAll().removeClass().addClass('hidePrevious');
  
}

$(document).keydown(function(e) {
	switch(e.which) {
		case 37:
		newSelected('previous');
		break;

		case 39:
		newSelected('next');
		break;

		default: return;
	}
	e.preventDefault();
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