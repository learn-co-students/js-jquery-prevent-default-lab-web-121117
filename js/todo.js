$(document).ready(function(){
  submitForm()
});


function submitForm(){
  $('form').on('submit', function(event){
      const inputText = document.querySelector('input[type="text"]').value
      let l_item = document.createElement("li")
      l_item.innerHTML = inputText
      $('ol').append(l_item);
      event.preventDefault();

    });

}

// function submitForm() {
//   $('form').on('submit', function(event){
//     var item = $('#item').val();
//     $("ol").append($('<li>').text(item));
//     event.preventDefault();
//   });
// }
