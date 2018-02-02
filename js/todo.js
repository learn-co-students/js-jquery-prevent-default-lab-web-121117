$(document).ready(function(){
  submitForm()
});

function submitForm() {
  $('form').on("submit", function(event) {
    event.preventDefault()
    const newItem = document.createElement("li")
    newItem.innerHTML = $("#item").val()
    $('ol').append(newItem)
    $("#item").val("")
  })
}