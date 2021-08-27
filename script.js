const faqItem = document.getElementsByClassName("faq-list-item");
const question0 = document.getElementById("faq-q0");
const answer0 = document.getElementById("faq-a0");
const question1 = document.getElementById("faq-q1");
const answer1 = document.getElementById("faq-a1");
const question2 = document.getElementById("faq-q2");
const answer2 = document.getElementById("faq-a2");
const question3 = document.getElementById("faq-q3");
const answer3 = document.getElementById("faq-a3");
const question4 = document.getElementById("faq-q4");
const answer4 = document.getElementById("faq-a4");

question0.addEventListener("click", showAnswer0);
question1.addEventListener("click", showAnswer1);
question2.addEventListener("click", showAnswer2);
question3.addEventListener("click", showAnswer3);
question4.addEventListener("click", showAnswer4);


function showAnswer0(){
    question0.style.fontWeight = "700";
    question0.style.borderBottom = "none"
    answer0.style.visibility = "visible";
    answer0.style.position = "static";
    answer0.style.fontSize = "13px";
    answer0.style.margin = "0";
}