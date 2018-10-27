$("#submitBtn").on("click", function(event) {
  event.preventDefault();
  // Form validation
  var valid = true;
  if($("#name").val() === "" || $("#photo").val() === "") {
    valid = false;
  } else if($("#questionOne").val() === "empty" || $("#questionTwo").val() === "empty" || $("#questionThree").val() === "empty" || $("#questionFour").val() === "empty" || $("#questionFive").val() === "empty" || $("#questionSix").val() === "empty" || $("#questionSeven").val() === "empty" || $("#questionEight").val() === "empty" || $("#questionNine").val() === "empty" || $("#questionTen").val() === "empty") {
    valid = false;
  }
  if(valid === true) {
    var newUser = {
      name: $("#name").val(),
      photo: $("#photo").val(),
      scores: [
        $("#questionOne").val(),
        $("#questionTwo").val(),
        $("#questionThree").val(),
        $("#questionFour").val(),
        $("#questionFive").val(),
        $("#questionSix").val(),
        $("#questionSeven").val(),
        $("#questionEight").val(),
        $("#questionNine").val(),
        $("#questionTen").val()
      ]
    };
    var currentURL = window.location.origin;
    // Ajax call for receiving response after POST req
    $.post(currentURL + "/api/employee", newUser, function(data) {
      $("#matchName").text(data.name);
      $("#matchImg").attr("src", data.photo);
      $("#resultsModal").modal("toggle");
    });
  } else {
    // If a required field is missing, show alert
    alert("Survey is incomplete!");
  }
});













// let config = {
//     '.chosen-select': {},
//     '.chosen-select-deselect': {
//       allow_single_deselect: true
//     },
//     '.chosen-select-no-single': {
//       disable_search_threshold: 10
//     },
//     '.chosen-select-no-results': {
//       no_results_text: 'Oops, nothing found!'
//     },
//     '.chosen-select-width': {
//       width: "95%"
//     }
//   }

// $('#submitBtn').on('click',function(event){
//     event.preventDefault();
//     console.log('button was clicked.');
//     function validateForm() {
//       let isValid = true;
//       $('.form-control').each(function() {
//         if ($(this).val() === '')
//           isValid = false;
//       });
//       $('.chosen-select').each(function() {
//         if ($(this).val() === "")
//           isValid = false
//       })
//       return isValid;
//     }
//     // If all required fields are filled
//     if (validateForm() == true) {
//       // Create an object for the user's data
//       let userData = {
//           name: $("#name").val(),
//           photo: $("#photo").val(),
//           scores: [$("#questionOne").val(), $("#questionTwo").val(), $("#questionThree").val(), $("#questionFour").val(), $("#question5").val(), $("#questionSix").val(), $("#questionSeven").val(), $("#questionEight").val(), $("#questionNine").val(), $("#questionTen").val(), ]
//         }
//         // Grab the URL of the website
//       let currentURL = window.location.origin;
//       // AJAX post the data to the employees API. 
//       $.post(currentURL + "/api/employee", userData, function(data) {
//         // Grab the result from the AJAX post so that the best match's name and photo are displayed.
//         $("#matchName").text(data.name);
//         $('#matchImg').attr("src", data.photo);
//         // Show the modal with the best match 
//         $("#resultsModal").modal('toggle');
//       });
//     } else {
//       alert("Please fill out all fields before submitting!");
//     }

//     return false;
//   });