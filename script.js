const questions = document.getElementsByClassName("faq-list-q");
const pressed = (questions.getAttribute("aria-pressed") === "true");

questions.setAttribute("aria-pressed", !pressed);

