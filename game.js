// Questions were asked
const Questions = [{
	id: 0,
	q: "What is the HTML code that plays music in the background when the web page is opened?",
	a: "<body bgsound='clouds.wav'>", isCorrect: true,
	b: "<body bgsound src='clouds.wav'>",
	c: "<bgsound='clouds.wav'>" ,
	d: "<bgsound src='clouds.wav'>",
	true: "a"

},
{
	id: 1,
	q: "What is the attribute that determines the frame thickness in the table?",
	a: "Width" ,
	b: "Cellspacing",
	c: "Cellpadding",
	d: "Border", isCorrect: true,
	true: "d"

},
{
	id: 2,
	q: "What is the attribute that determines the spacing between cells in the table?",
	a: "Cellpadding",
	b: "Border" ,
	c: "Cellspacing", isCorrect: true ,
	d: "Width" ,
	true: "c"

},
{
	id: 3,
	q: "Who is making the Web standards?",
	a: "Mozilla",
	b: "Google" ,
	c: "Microsoft" ,
	d: "The World Wide Web Consortium", isCorrect: true ,
	true: "d"

},
{
	id: 4,
	q: "Which of the following tag is used to add rows in the table?",
	a: "<td> and </td>" ,
	b: "<th> and </th>" ,
	c: "<tr> and </tr>", isCorrect: true,
	d: "None of the above", 
	true: "c" 
},
{
	id: 5,
	q: "If we want define style for an unique element, then which css selector will we use ?",
	a: "text" ,
	b: "Id", isCorrect: true ,
	c: "class" ,
	d: "name" ,
	true: "b",

},
{
	id: 6,
	q: "How can we write comment along with CSS code ?",
	a: "/* a comment */", isCorrect: true ,
	b: "/ a comment /" ,
	c: "// a comment //" ,
	d: "<' a comment'>" ,
	true: "a",

},
{
	id: 7,
	q: "Are the negative values allowed in padding property?",
	a: "Yes" ,
	b: "No", isCorrect: true ,
	 c: "Only in whole numbers" ,
	 d: "Only in prime numbers" ,
	true: "b" ,

},
{
	id: 8,
	q: "How to select the elements with the class name 'example'?",
	a: "example" ,
	b: "#example",
	c: ".example", isCorrect: true,
	d: "Class example" ,
	true: "c",

},
{
	id: 9,
	q: "The CSS property used to specify the transparency of an element is -",
	a: "Hover" ,
	b: "opacity", isCorrect: true ,
	c: "clearfix" ,
	d: "overlay" ,
	true : "b",

},
{
	id: 10,
	q: "Which of the following keywords is used to define a variable in Javascript?",
	a: "var" ,
	b: "let" ,
	c: "var and let", isCorrect: true ,
	d: "int" ,
	true: "c" ,

},
{
	id: 11,
	q: "Which type of JavaScript language is ___",
	a: "Object-Oriented", isCorrect: true ,
	b: "Object-Based" ,
	c: "Assembly-language" ,
	d: "High-level" ,
	true: "a" ,

},
{
	id: 12,
	q: "Which of the following is the correct syntax to create a cookie using JavaScript?",
	a: "navigator.cookie = 'key1 = value1; key2 = value2; expires = date';" ,
	b: "browser.cookie = 'key1 = value1; key2 = value2; expires = date';" ,
	c: "document.cookie = 'key1 = value1; key2 = value2; expires = date';", isCorrect: true ,
	d: "window.cookie = 'key1 = value1; key2 = value2; expires = date';" ,
	true: "c" ,

},
{
	id: 13,
	q: "Which of the following function of String object combines the text of two strings and returns a new string?",
	a: "add()",
	b: "concat()", isCorrect: true ,
	c: "merge()" ,
	d: "append()" ,
	true: "b",

},
{
	id: 14,
	q: "Which of the following function of Array object reverses the order of the elements of an array?",
	a: "reverse()", isCorrect: true ,
	b: "push()" ,
	c: "reduceRight()" ,
	d: "reduce()" ,
	true: "a" ,

}];

const quiz = document.getElementById("quiz");
const options = document.querySelectorAll(".answer");
const questions = document.getElementById("q");

let iterate = 0;
let score = 0;

const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");
const op3 = document.getElementById("op3");
const op4 = document.getElementById("op4");
const nextBtn = document.getElementById("next");

const deselectOption = () => {
	options.forEach((option) => (option.checked = false));
};
const selectedOption = () => {
	let userChoice;
	options.forEach((option) => {
		if (option.checked) {
			userChoice = option.id;
		} 
	});
	return userChoice;
};
const next_step = () => {
	deselectOption();
	const currentQuestion = Questions[iterate];
	questions.innerText = currentQuestion.q;
	op1.innerText = currentQuestion.a;
	op2.innerText = currentQuestion.b;
	op3.innerText = currentQuestion.c;
	op4.innerText = currentQuestion.d;
};
next_step();  
nextBtn.addEventListener("click", () => {  
  const userChoice = selectedOption();  
  if (userChoice) {  
   if (userChoice === Questions[iterate].true ) 
   score++;  
   iterate++;  
   if (iterate < Questions.length) 
   next_step();  
   else {  
	alert("Game Over!..");
    quiz.innerHTML =` <h3> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Congratulations! &nbsp; You answered ${score} / ${Questions.length} questions correctly.</h3>  
	<button onclick="history.go(0)">Play Again</button>  ` 
	  }  
  }  
 }); 
 