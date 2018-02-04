$(document).ready(function(){
  // call functions here
  addTask();

});

function addTask() {
  $('form').on('submit', function(event){
    event.preventDefault()
    const newItem = $('#item').val()
    $('#list ol').append(`<li>${newItem}</li>`)
    $('#item').val("");
  })
}
