var rand = getRandomInt(5, 20);
$(document).ready(function() {

	$(".top-link").click(function(event) {
		const elem = event.target;
		$(".top-link-active").removeClass("top-link-active");
		$(elem).addClass("top-link-active");
		box_elem = "#" + elem.innerText
		const box_sections = ["#about", "#experience", "#favorites", "#testimonials"];
		box_sections.forEach((section) => $(section).hide());
		$(box_elem).show();
	});
});


// @SOURCE mozilla libraries
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

