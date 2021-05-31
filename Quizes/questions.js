// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: 'Inside which HTML element do we put the JavaScript?',
    answer: 'script tag',
    options: [
      'scripting tag',
      'javaScripting tag',
      'script tag',
      'js tag',
    ]
  },
  {
    numb: 2,
    question: 'What is the correct JavaScript syntax to change the content of the HTML element below?\n &ltp id="demo"&gtThis is a demonstration.&lt/p&gt',
    answer: 'document.getElementById("demo").innerHTML="Hello World!";',
    options: [
      'document.getElementByName("p").innerHTML="Hello World!";',
      'document.getElementById("demo").innerHTML="Hello World!";',
      '#demo.innerHTML="Hello World!";',
      'document.getElement("p").innerHTML="Hello World!";'
    ]
  },
  {
    numb: 3,
    question: 'Where is the correct place to insert a JavaScript?',
    answer: 'Both the head and body section are correct',
    options: [
      'The &lthead&gt section',
      'The &ltbody&gt section',
      'Both the head and body section are correct',
      'none'
    ]
  },
  {
    numb: 4,
    question: 'How do you write "Hello World" in an alert box?',
    answer: 'alert("Hello World");',
    options: [
      'msgBox("Hello World");',
      'alertBox("Hello World");',
      'alert("Hello World");',
      'msg("Hello World");'
    ]
  },
  {
    numb: 5,
    question: "How do you create a function in JavaScript?",
    answer: "function myFunction()",
    options: [
      "function = myFunction()",
      "function:myFunction()",
      "function myFunction()",
      "None"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  {
    numb: 6,
    question: "How to write an IF statement in JavaScript?",
    answer: "if (i == 5)",
    options: [
      "if i = 5 then",
      "if (i == 5)",
      "if i == 5 then",
      "if i = 5"
    ]
  },
  {
    numb: 7,
    question: "How does a WHILE loop start?",
    answer: "while (i <= 10)",
    options: [
      "while (i <= 10)",
      "while i = 1 to 10",
      "while (i <= 10; i++)",
      "None"
    ]
  },
  {
    numb: 8,
    question: "How does a FOR loop start?",
    answer: "for (i = 0; i <= 5; i++)",
    options: [
      "for (i = 0; i <= 5)",
      "for (i <= 5; i++)",
      "for i = 1 to 5",
      "for (i = 0; i <= 5; i++)"
    ]
  },
  {
    numb: 9,
    question: "How can you add a comment in a JavaScript?",
    answer: "//This is a comment",
    options: [
      "//This is a comment",
      "'This is a comment'",
      "&lt!--This is a comment-->",
      "#This is a comment"
    ]
  },
  {
    numb: 10,
    question: "What is the correct way to write a JavaScript array?",
    answer: 'var colors = ["red", "green", "blue"]',
    options: [
      'var colors = "red", "green", "blue"',
      'var colors = ["red", "green", "blue"]',
      'var colors = (1:"red", 2:"green", 3:"blue")',
      'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")'
    ]
  },
  {
    numb: 11,
    question: "How do you round the number 7.25, to the nearest integer?",
    answer: "Math.round(7.25)",
    options: [
      "Math.rnd(7.25)",
      "round(7.25)",
      "Math.round(7.25)",
      "rnd(7.25)"
    ]
  },{
    numb: 12,
    question: "How do you find the number with the highest value of x and y?",
    answer: "Math.max(x, y)",
    options: [
      "top(x, y)",
      "ceil(x, y)",
      "Math.ceil(x, y)",
      "Math.max(x, y)"
    ]
  },{
    numb: 13,
    question: "What is the correct JavaScript syntax for opening a new window called 'w2' ?",
    answer: 'w2 = window.open("http://www.w3schools.com");',
    options: [
      'w2 = window.open("http://www.w3schools.com");',
      'w2 = window.new("http://www.w3schools.com");',
      'w2 = window.target("http://www.w3schools.com");',
      'None'
     
    ]
  },{
    numb: 14,
    question: "How do you declare a JavaScript variable?",
    answer: "var carName;",
    options: [
      "var carName;",
      "variable carName;",
      "v carName;",
      "vrbe carName;"
    ]
  },{
    numb: 15,
    question: "Which event occurs when the user clicks on an HTML element?",
    answer: "onclick",
    options: [
      "onmouseclick",
      "onmouseover",
      "onclick",
      "onchange"
    ]
  },
];