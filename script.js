const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const nextBtn = document.querySelector(".next-btn");

let nextClicked = false;

nextBtn.addEventListener("click", () => {
  if (!nextClicked) {
    question.innerHTML = "Kupal kaba boss? Suntukan nalang!";
    gif.src = "https://media.tenor.com/GcGHw3zr584AAAAM/malupiton-boss.gif";
    nextBtn.innerHTML = "eto pambato ko";
    nextClicked = true;
  } else {
    window.location.href = "https://www.britannica.com/biography/Manny-Pacquiao";
  }
});