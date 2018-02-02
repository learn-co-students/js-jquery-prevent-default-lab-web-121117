$(document).ready(function() {
  submitForm();
});

function submitForm() {
  $("form").on("submit", function(event) {
    let item = $("#item").val();
    $("ol").append("<li>" + item + "</li>");
    event.preventDefault();
  });
}
