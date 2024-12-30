const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
},
{
    question: "Which programming language is known as the 'mother of all languages'?",
    a: "Python",
    b: "C++",
    c: "Fortran",
    d: "Assembly",
    correct: "c",
},
{
    question: "Which company developed the first graphical web browser?",
    a: "Mozilla",
    b: "Google",
    c: "Netscape",
    d: "Microsoft",
    correct: "c",
},
{
    question: "What does SQL stand for?",
    a: "Structured Query Language",
    b: "Simple Question Language",
    c: "System Query Language",
    d: "Structured Question Language",
    correct: "a",
},
{
    question: "In object-oriented programming, what is encapsulation?",
    a: "A way to hide data within an object",
    b: "A way to organize code using classes",
    c: "A way to connect to databases",
    d: "A way to execute code repeatedly",
    correct: "a",
},
{
    question: "What does CPU stand for?",
    a: "Computer Personal Unit",
    b: "Central Processing Unit",
    c: "Control Process Unit",
    d: "Central Personal Unit",
    correct: "b",
},
{
    question: "Which of the following data types is used for whole numbers in JavaScript?",
    a: "String",
    b: "Float",
    c: "Boolean",
    d: "Number",
    correct: "d",
},
{
    question: "What does CSS stand for in web development?",
    a: "Cascading Style Sheets",
    b: "Creative Style Solutions",
    c: "Computer Software Styles",
    d: "Colorful Style Symbols",
    correct: "a",
},
{
    question: "What is the purpose of the 'img' element in HTML?",
    a: "To create hyperlinks",
    b: "To format text",
    c: "To embed videos",
    d: "To display images",
    correct: "d",
},
{
    question: "What is the role of a web browser?",
    a: "To create web pages",
    b: "To manage databases",
    c: "To host websites",
    d: "To display web pages",
    correct: "d",
},
{
    question: "Which symbol is used to access an ID in CSS?",
    a: "#",
    b: ".",
    c: "*",
    d: "$",
    correct: "a",
},
{
    question: "What is the purpose of the 'for' loop in programming?",
    a: "To define functions",
    b: "To declare variables",
    c: "To create arrays",
    d: "To repeat a block of code",
    correct: "d",
},
{
    question: "Which of the following is a valid way to declare a variable in JavaScript?",
    a: "variable = 5;",
    b: "5 = variable;",
    c: "var 5 = variable;",
    d: "var variable = 5;",
    correct: "d",
},
{
    question: "What does the acronym 'HTML' stand for?",
    a: "Hyper Transfer Markup Language",
    b: "Hyper Text Makeup Language",
    c: "Home Tool Markup Language",
    d: "HyperText Markup Language",
    correct: "d",
},
{
    question: "What is the purpose of the 'onclick' attribute in HTML?",
    a: "To define styles for an element",
    b: "To create links to other pages",
    c: "To specify the width of an element",
    d: "To execute JavaScript when an element is clicked",
    correct: "d",
}
,
{
    question: "What does URL stand for?",
    a: "Universal Resource Locator",
    b: "Uniform Resource Locator",
    c: "Unified Resource Locator",
    d: "Ultra-Reliable Link",
    correct: "b",
},
{
    question: "Which HTML tag is used to create a hyperlink?",
    a: "<hl>",
    b: "<link>",
    c: "<a>",
    d: "<hyperlink>",
    correct: "c",
},
{
    question: "What is the purpose of a function in programming?",
    a: "To define a variable",
    b: "To store data",
    c: "To create loops",
    d: "To group and reuse code",
    correct: "d",
},
{
    question: "Which of the following is NOT a primitive data type in JavaScript?",
    a: "Number",
    b: "String",
    c: "Array",
    d: "Boolean",
    correct: "c",
},
{
    question: "What is the HTML element used for creating an unordered list?",
    a: "<ol>",
    b: "<ul>",
    c: "<li>",
    d: "<dl>",
    correct: "b",
},
{
    question: "In CSS, which property is used to change the color of text?",
    a: "font-color",
    b: "text-color",
    c: "color",
    d: "text-style",
    correct: "c",
},
{
    question: "Which operator is used for concatenating strings in JavaScript?",
    a: "+",
    b: "-",
    c: "*",
    d: "/",
    correct: "a",
},
{
    question: "What does the 'if' statement do in programming?",
    a: "Declares a variable",
    b: "Loops through an array",
    c: "Defines a function",
    d: "Executes code conditionally",
    correct: "d",
},
{
    question: "What is the purpose of the 'alt' attribute in the 'img' tag?",
    a: "To provide a title for the image",
    b: "To define the image source",
    c: "To add a border around the image",
    d: "To specify alternative text for the image",
    correct: "d",
},
{
    question: "What is the result of the expression '5 + '5' in JavaScript?",
    a: "'10'",
    b: "10",
    c: "55",
    d: "undefined",
    correct: "a",
}
,
{
    question: "What is the purpose of a CSS class?",
    a: "To define a new data type",
    b: "To create a new function",
    c: "To group and apply styles to multiple elements",
    d: "To declare a variable",
    correct: "c",
},
{
    question: "Which HTML tag is used for creating a heading?",
    a: "<h>",
    b: "<hd>",
    c: "<head>",
    d: "<h1>",
    correct: "d",
},
{
    question: "What is the purpose of the 'return' statement in a function?",
    a: "To exit the program",
    b: "To define a variable",
    c: "To output text to the console",
    d: "To provide a value back to the caller",
    correct: "d",
},
{
    question: "What does the 'padding' property in CSS control?",
    a: "The size of the text",
    b: "The space between elements",
    c: "The space inside an element's content area",
    d: "The margin around an element",
    correct: "c",
},
{
    question: "Which symbol is used to select elements by their class in CSS?",
    a: "#",
    b: ".",
    c: "@",
    d: "*",
    correct: "b",
},
{
    question: "What is the purpose of a 'for' loop?",
    a: "To create a function",
    b: "To declare variables",
    c: "To add interactivity to a web page",
    d: "To repeat a block of code a specific number of times",
    correct: "d",
},
{
    question: "What does the term 'syntax' refer to in programming?",
    a: "The process of debugging code",
    b: "The layout and structure of code",
    c: "The speed of code execution",
    d: "The way code is documented",
    correct: "b",
},
{
    question: "Which operator is used to compare two values for equality in JavaScript?",
    a: "==",
    b: "=",
    c: "===",
    d: "<>",
    correct: "a",
},
{
    question: "In HTML, which tag is used to create a line break?",
    a: "<br>",
    b: "<lb>",
    c: "<newline>",
    d: "<linebreak>",
    correct: "a",
},
{
    question: "What is the purpose of the 'push' method in JavaScript?",
    a: "To add a new item to the beginning of an array",
    b: "To remove an item from an array",
    c: "To sort the elements of an array",
    d: "To add a new item to the end of an array",
    correct: "d",
}


];

let index = 0 ;
let corrections = 0;
let wrongAns = 0;
let total = quizData.length;

const nextBtn = document.getElementById('submit')
const questions = document.querySelector("#main-div h4");
const options = document.querySelectorAll(".option label");
const inputsValue = document.querySelectorAll(".option input")



const loadQuestion = ()=>{
    if(index === total){
        qizzEnd()
    }
    reset()
    const data = quizData[index]
    questions.innerHTML = ` ${index + 1} :${data.question}`;
    options[0].innerHTML = data.a;
options[1].innerHTML = data.b;
options[2].innerHTML = data.c;
options[3].innerHTML = data.d;
}


const selectedValue = ()=>{
    let ans;
    inputsValue.forEach((selVal)=>{
        if(selVal.checked){
            ans = selVal.value
        }
    })
    return ans;
}


nextBtn.addEventListener("click",()=>{
    const value = selectedValue()
    const data = quizData[index]
    if(value ===data.correct){
        corrections ++
    }else{
        wrongAns++
    }
    index ++
    loadQuestion()
})





const reset = ()=>{
    inputsValue.forEach((val)=>{
            val.checked = false
    })
}


const qizzEnd = ()=>{
    const heading  =  document.querySelector('#main-div h1')
    const ques  =  document.querySelector('#main-div h4')
    const optionCon = document.getElementById('options')
    heading.innerHTML = `${corrections} Right Answer from ${index} numbers`
    optionCon.style.display = "none"
    ques.style.display = "none"
    nextBtn.style.display = "none"
    resetBtn = document.getElementById('reset')
    resetBtn.style.display = "block"

    resetBtn.addEventListener("click",()=>{
        location.reload()
    })
}


loadQuestion()