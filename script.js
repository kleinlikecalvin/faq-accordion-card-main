const question0 = document.getElementById("faq-q0");
const question1 = document.getElementById("faq-q1");
const question2 = document.getElementById("faq-q2");
const question3 = document.getElementById("faq-q3");
const question4 = document.getElementById("faq-q4");


question0.addEventListener("click", showAnswer0);
question1.addEventListener("click", showAnswer1);
question2.addEventListener("click", showAnswer2);
question3.addEventListener("click", showAnswer3);
question4.addEventListener("click", showAnswer4);


function showAnswer0(){
    const faqItem = document.getElementById("faq-item0");
    const question = question0;
    const answer = document.getElementById("faq-a0");

    if(answer.style.visibility == "visible"){
        answer.style.visibility = "hidden";
        faqItem.style.borderBottom = "1px solid var(--light-grey)";
        question.style.fontWeight = "400";
        answer.style.position = "absolute";
        answer.style.borderBottom = "none";
        answer.style.paddingBottom = "0";
    } else {
        faqItem.style.borderBottom = "none";
        question.style.fontWeight = "700";
        answer.style.visibility = "visible";
        answer.style.position = "static";
        answer.style.fontSize = "13px";
        answer.style.margin = "0";
        answer.style.borderBottom = "1px solid var(--light-grey)";
        answer.style.paddingBottom = "1em";
    }
}

function showAnswer1(){
    const faqItem = document.getElementById("faq-item1");
    const question = question1;
    const answer = document.getElementById("faq-a1");

    if(answer.style.visibility == "visible"){
        answer.style.visibility = "hidden";
        faqItem.style.borderBottom = "1px solid var(--light-grey)";
        question.style.fontWeight = "400";
        answer.style.position = "absolute";
        answer.style.borderBottom = "none";
        answer.style.paddingBottom = "0";
    } else {
        faqItem.style.borderBottom = "none";
        question.style.fontWeight = "700";
        answer.style.visibility = "visible";
        answer.style.position = "static";
        answer.style.fontSize = "13px";
        answer.style.margin = "0";
        answer.style.borderBottom = "1px solid var(--light-grey)";
        answer.style.paddingBottom = "1em";
    }
}

function showAnswer2(){
    const faqItem = document.getElementById("faq-item2");
    const question = question2;
    const answer = document.getElementById("faq-a2");

    if(answer.style.visibility == "visible"){
        answer.style.visibility = "hidden";
        faqItem.style.borderBottom = "1px solid var(--light-grey)";
        question.style.fontWeight = "400";
        answer.style.position = "absolute";
        answer.style.borderBottom = "none";
        answer.style.paddingBottom = "0";
    } else {
        faqItem.style.borderBottom = "none";
        question.style.fontWeight = "700";
        answer.style.visibility = "visible";
        answer.style.position = "static";
        answer.style.fontSize = "13px";
        answer.style.margin = "0";
        answer.style.borderBottom = "1px solid var(--light-grey)";
        answer.style.paddingBottom = "1em";
    }
}

function showAnswer3(){
    const faqItem = document.getElementById("faq-item3");
    const question = question3;
    const answer = document.getElementById("faq-a3");

    if(answer.style.visibility == "visible"){
        answer.style.visibility = "hidden";
        faqItem.style.borderBottom = "1px solid var(--light-grey)";
        question.style.fontWeight = "400";
        answer.style.position = "absolute";
        answer.style.borderBottom = "none";
        answer.style.paddingBottom = "0";
    } else {
        faqItem.style.borderBottom = "none";
        question.style.fontWeight = "700";
        answer.style.visibility = "visible";
        answer.style.position = "static";
        answer.style.fontSize = "13px";
        answer.style.margin = "0";
        answer.style.borderBottom = "1px solid var(--light-grey)";
        answer.style.paddingBottom = "1em";
    }
}

function showAnswer4(){
    const faqItem = document.getElementById("faq-item4");
    const question = question4;
    const answer = document.getElementById("faq-a4");

    if(answer.style.visibility == "visible"){
        answer.style.visibility = "hidden";
        faqItem.style.borderBottom = "1px solid var(--light-grey)";
        question.style.fontWeight = "400";
        answer.style.position = "absolute";
        answer.style.borderBottom = "none";
        answer.style.paddingBottom = "0";
    } else {
        faqItem.style.borderBottom = "none";
        question.style.fontWeight = "700";
        answer.style.visibility = "visible";
        answer.style.position = "static";
        answer.style.fontSize = "13px";
        answer.style.margin = "0";
        answer.style.borderBottom = "1px solid var(--light-grey)";
        answer.style.paddingBottom = "1em";
    }
}