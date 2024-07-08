// const questions = document.querySelector(".question")
// const btn = document.querySelectorAll(".question-btn")
// const showText1 = document.querySelector(".show-text-1")
// const showText2 = document.querySelector(".show-text-2")
// const showText3 = document.querySelector(".show-text-3")

// const clickButton = function(){
//     btn.forEach(button => {
//         button.addEventListener("click",function(){
//             showText1.style.display = "block"
//         })
//     });
// }


// const showText = document.querySelector(".show-test-1")
// const showText2 = document.querySelector(".show-test-2")
// const showText3 = document.querySelector(".show-test-2")

// const btnfunction = function(question){
//   const btn = question.querySelector(".question-btn");

//   btn.addEventListener("click",function(){
//     showText.style.display = "block"
//   });
// }
// const questions = document.querySelectorAll(".question");

// // Itera su tutti gli elementi question e chiama btnfunction su ciascuno di essi
// questions.forEach(function(question) {
//   btnfunction(question);
// });



const questions = document.querySelectorAll(".question");


questions.forEach(function(question) {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", function() {
    console.log("Button clicked:", question);

    // Nascondi il testo di tutte le altre domande
    questions.forEach(function(item) {
      if (item !== question) {
        item.classList.remove("show-text");
        
      }
    });

    // Mostra/nascondi il testo della domanda corrente
    question.classList.toggle("show-text");
  });
});

