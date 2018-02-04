$(document).ready(function() {
  // call functions here
  submitForm();
});

// define functions here

function submitForm() {
  $("form").on("submit", function(event) {
    event.preventDefault();
    var data = $("#item").val();
    $("#item").val("");
    $("#list ol").append("<li>" + data + "</li>");
  });
}
