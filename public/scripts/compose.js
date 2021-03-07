
// function check(input) {
  

//     var checkboxes = document.getElementsByClassName("radioCheck");

//     for (var i = 0; i < checkboxes.length; i++) {
//         //uncheck all
//         if (checkboxes[i].checked == true) {
//             checkboxes[i].checked = false;
//         }
//     }

//     //set checked of clicked object
//     if (input.checked == true) {
//         input.checked = false;
//     } else {
//         input.checked = true;
//     }
// }

$(document).on('click', 'input[type="checkbox"]', function() {      
    $('input[type="checkbox"]').not(this).prop('checked', false);      
});
