jQuery(
    function(){
        $("#faq-q0").click( 
            function(){
                $("#faq-q0").toggleClass("changeQ");
                $("#faq-item0").toggleClass("changeItem");
                $("#arrow-icon0").toggleClass("changeArrow");
                $("#faq-a0").toggle();
                $("#faq-a0").toggleClass("showA");
            }
        );//end question0 event
        $("#faq-q1").click( 
            function(){
                $("#faq-q1").toggleClass("changeQ");
                $("#faq-item1").toggleClass("changeItem");
                $("#arrow-icon1").toggleClass("changeArrow");
                $("#faq-a1").toggle();
                $("#faq-a1").toggleClass("showA");
            }
        );//end question1 event
        $("#faq-q2").click( 
            function(){
                $("#faq-q2").toggleClass("changeQ");
                $("#faq-item2").toggleClass("changeItem");
                $("#arrow-icon2").toggleClass("changeArrow");
                $("#faq-a2").toggle();
                $("#faq-a2").toggleClass("showA");
            }
        );//end question2 event    
        $("#faq-q3").click( 
            function(){
                $("#faq-q3").toggleClass("changeQ");
                $("#faq-item3").toggleClass("changeItem");
                $("#arrow-icon3").toggleClass("changeArrow");
                $("#faq-a3").toggle();
                $("#faq-a3").toggleClass("showA");
            }
        );//end question3 event 
        $("#faq-q4").click( 
            function(){
                $("#faq-q4").toggleClass("changeQ");
                $("#faq-item4").toggleClass("changeItem");
                $("#arrow-icon4").toggleClass("changeArrow");
                $("#faq-a4").toggle();
                $("#faq-a4").toggleClass("showA");
            }
        );//end question event        
    }//end main function container
); //end jQuery main container

// const question0 = document.getElementById("faq-q0");
// const question1 = document.getElementById("faq-q1");
// const question2 = document.getElementById("faq-q2");
// const question3 = document.getElementById("faq-q3");
// const question4 = document.getElementById("faq-q4");


// question0.addEventListener("click", showAnswer0);
// question1.addEventListener("click", showAnswer1);
// question2.addEventListener("click", showAnswer2);
// question3.addEventListener("click", showAnswer3);
// question4.addEventListener("click", showAnswer4);


// function showAnswer0(){
//     var faqItem = document.getElementById("faq-item0");
//     var question = question0;
//     var answer = document.getElementById("faq-a0");
//     var icon = document.getElementById("arrow-icon0");

//     if(answer.style.visibility == "visible"){
//         faqItem.style.borderBottom = "1px solid var(--light-grey)";
//         question.style.fontWeight = "400";  
//         icon.style.transform = "unset";
//         icon.style.transition = "0.4s";     
//         answer.style.visibility = "hidden";
//         answer.style.position = "absolute";
//         answer.style.borderBottom = "none";
//         answer.style.paddingBottom = "0";

//     } else {
//         faqItem.style.borderBottom = "none";
//         question.style.fontWeight = "700";        
//         icon.style.transform = "rotate(0.5turn)";
//         icon.style.transition = "0.4s";
//         answer.style.visibility = "visible";
//         answer.style.position = "static";
//         answer.style.fontSize = "13px";
//         answer.style.margin = "0";
//         answer.style.borderBottom = "1px solid var(--light-grey)";
//         answer.style.paddingBottom = "1em";
//     }
// }

// function showAnswer1(){
//     var faqItem = document.getElementById("faq-item1");
//     var question = question1;
//     var answer = document.getElementById("faq-a1");
//     var icon = document.getElementById("arrow-icon1");


//     if(answer.style.visibility == "visible"){
//         faqItem.style.borderBottom = "1px solid var(--light-grey)";
//         question.style.fontWeight = "400";  
//         icon.style.transform = "unset";
//         icon.style.transition = "0.4s";     
//         answer.style.visibility = "hidden";
//         answer.style.position = "absolute";
//         answer.style.borderBottom = "none";
//         answer.style.paddingBottom = "0";
//     } else {
//         faqItem.style.borderBottom = "none";
//         question.style.fontWeight = "700";        
//         icon.style.transform = "rotate(0.5turn)";
//         icon.style.transition = "0.4s";
//         answer.style.visibility = "visible";
//         answer.style.position = "static";
//         answer.style.fontSize = "13px";
//         answer.style.margin = "0";
//         answer.style.borderBottom = "1px solid var(--light-grey)";
//         answer.style.paddingBottom = "1em";
//     }
// }

// function showAnswer2(){
//     var faqItem = document.getElementById("faq-item2");
//     var question = question2;
//     var answer = document.getElementById("faq-a2");
//     var icon = document.getElementById("arrow-icon2");


//     if(answer.style.visibility == "visible"){
//         faqItem.style.borderBottom = "1px solid var(--light-grey)";
//         question.style.fontWeight = "400";  
//         icon.style.transform = "unset";
//         icon.style.transition = "0.4s";     
//         answer.style.visibility = "hidden";
//         answer.style.position = "absolute";
//         answer.style.borderBottom = "none";
//         answer.style.paddingBottom = "0";
//     } else {
//         faqItem.style.borderBottom = "none";
//         question.style.fontWeight = "700";        
//         icon.style.transform = "rotate(0.5turn)";
//         icon.style.transition = "0.4s";
//         answer.style.visibility = "visible";
//         answer.style.position = "static";
//         answer.style.fontSize = "13px";
//         answer.style.margin = "0";
//         answer.style.borderBottom = "1px solid var(--light-grey)";
//         answer.style.paddingBottom = "1em";
//     }
// }

// function showAnswer3(){
//     var faqItem = document.getElementById("faq-item3");
//     var question = question3;
//     var answer = document.getElementById("faq-a3");
//     var icon = document.getElementById("arrow-icon3");


//     if(answer.style.visibility == "visible"){
//         faqItem.style.borderBottom = "1px solid var(--light-grey)";
//         question.style.fontWeight = "400";  
//         icon.style.transform = "unset";
//         icon.style.transition = "0.4s";     
//         answer.style.visibility = "hidden";
//         answer.style.position = "absolute";
//         answer.style.borderBottom = "none";
//         answer.style.paddingBottom = "0";
//     } else {
//         faqItem.style.borderBottom = "none";
//         question.style.fontWeight = "700";        
//         icon.style.transform = "rotate(0.5turn)";
//         icon.style.transition = "0.4s";
//         answer.style.visibility = "visible";
//         answer.style.position = "static";
//         answer.style.fontSize = "13px";
//         answer.style.margin = "0";
//         answer.style.borderBottom = "1px solid var(--light-grey)";
//         answer.style.paddingBottom = "1em";
//     }
// }

// function showAnswer4(){
//     var faqItem = document.getElementById("faq-item4");
//     var question = question4;
//     var answer = document.getElementById("faq-a4");
//     var icon = document.getElementById("arrow-icon4");


//     if(answer.style.visibility == "visible"){
//         faqItem.style.borderBottom = "1px solid var(--light-grey)";
//         question.style.fontWeight = "400";  
//         icon.style.transform = "unset";
//         icon.style.transition = "0.4s";     
//         answer.style.visibility = "hidden";
//         answer.style.position = "absolute";
//         answer.style.borderBottom = "none";
//         answer.style.paddingBottom = "0";
//     } else {
//         faqItem.style.borderBottom = "none";
//         question.style.fontWeight = "700";        
//         icon.style.transform = "rotate(0.5turn)";
//         icon.style.transition = "0.4s";
//         answer.style.visibility = "visible";
//         answer.style.position = "static";
//         answer.style.fontSize = "13px";
//         answer.style.margin = "0";
//         answer.style.borderBottom = "1px solid var(--light-grey)";
//         answer.style.paddingBottom = "1em";
//     }
// }