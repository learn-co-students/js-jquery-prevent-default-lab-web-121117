$(document).ready(function(){

  $('form:first').on('submit', function(e){
    let newItem = $('#item').val()
    $('#list ol').append(`<li>${newItem}</li>`)
    e.preventDefault()
  })
});
