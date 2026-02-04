/* Valentine card interaction logic */
(function () {
  let phrase = 0;
  const questionEl = document.getElementById("valentine-question");
  const btnYes = document.getElementById("btn-yes");
  const btnNo = document.getElementById("btn-no");

  const followUpQuestions = [
    "You accidentally pressed no",
    "Pretty please?",
    "Can you reconsider?",
    "Meow?",
    "Try again?",
    "But I love you!",
    "Last chance?",
    "But you love me!",
    "Please please please...",
    "Did you mean to press no?"
  ];

  /* On No: replace question with a random follow-up prompt */
  btnNo.addEventListener("click", function () {
    questionEl.textContent = followUpQuestions[phrase];
    phrase = phrase + 1;
    phrase = phrase % followUpQuestions.length;
  });

  /* On Yes: redirect to the success page */
  btnYes.addEventListener("click", function () {
    window.location.href = "yes.html";
  });
})();
