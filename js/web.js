// giving a survey for my educational website students 
// give the access to the survey only for programing student 2020

var studentMajor="programing"
var studentYear="2020"

confirm("are you one of our students?");

var studentName=prompt("what's your name?");
console.log("welcome");

var studentMajorInput=prompt("what's your major?").toLowerCase();

if (studentMajorInput===studentMajor){
    console.log("you're free to continue");
}else {
    alert("this survey is only for programing students");
}

var year=prompt("entry year?");
if (year===studentYear){
    alert("please fill the survey");
}else {
    alert("this survey is for 2020 students only;")
}

