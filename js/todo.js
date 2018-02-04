$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here
function submitForm() {
  $('form').on("submit", function(event){
    event.preventDefault();
    const li = document.createElement("li")
    li.innerHTML = $("#item").val();
    $("ol").append(li);
    $("#item").val("")
  });
}
