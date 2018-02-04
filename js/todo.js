$(document).ready(function() {
  submitForm();
});

function submitForm() {
  $("form").on("submit", function(event) {
    var item = $("#item").val();
    $("ol").append($("<li>").text(item));
    event.preventDefault();
  });
}
