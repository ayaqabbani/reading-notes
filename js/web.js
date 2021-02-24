// giving a survey for my educational website students 
// give the access to the survey only for students who got more of 50% of the full mark

// document.getElementById("allow").innerHTML;
function avgCalculator(Mark1, Mark2, Mark3) {
    var sum = parseInt(Mark1) + parseInt(Mark2) + parseInt(Mark3);
    var avg = sum / 3;
    alert("your total mark is" + avg);

    if (avg >= 50) {
        alert("please fill the survey");
    } else if (avg < 50) {

        alert("this survey is for students who passed only;")
        document.getElementById('page').innerText = ''
    }

}
var counter = 0;
var Mark1 = 0;
var Mark2 = 0;
var Mark3 = 0;

confirm("are you one of our students?");
var studentName = prompt("what's your name?");
confirm("we offer great books if you want to check them out in the survey page");

while (counter < 3) {
    if (counter === 0) {
        Mark1 = prompt("what was your mark in first exam?");
    } else if (counter == 1) {
        Mark2 = prompt("what was your mark in med exam?");
    } else {
        Mark3 = prompt("what was your mark in final exam?");
    }

    counter += 1;

}
avgCalculator(Mark1, Mark2, Mark3);



