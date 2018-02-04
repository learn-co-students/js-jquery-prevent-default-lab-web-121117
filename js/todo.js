$(document).ready(function() {
	submitForm();
});

function submitForm(e) {
	$("form").on("submit", function(e) {
		var item = $("#item").val();
		let newLi = `<li>${item}</li>`;
		$("ol").append(newLi);
		e.preventDefault();
	});
}
