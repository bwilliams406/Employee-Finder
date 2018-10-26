$('#submitSurvey').on('click',function(event){
    event.preventDefault();
    console.log('button was clicked.');
    let scoreArray = [];
    scoreArray.push($("#questionOne").val());
    scoreArray.push($("#questionTwo").val());
    scoreArray.push($("#questionThree").val());
    scoreArray.push($("#questionFour").val());
    scoreArray.push($("#questionFive").val());
    scoreArray.push($("#questionSix").val());
    scoreArray.push($("#questionSeven").val());
    scoreArray.push($("#questionEight").val());
    scoreArray.push($("#questionNine").val());
    scoreArray.push($("#questionTen").val());
    console.log(scoreArray);
    let employees = {
        name:$("#name").val(),
        photo:$("#photo").val(),
        scores: scoreArray,
    }
    console.log(employees);
    $.ajax({
        url:"/api/employee",
        method:"POST",
        data:employees
    }).then(function(response){
        console.log(response);
    })
});

