let count = 0;

function activeIncreaseBtn() {
  const increaseBtn = document.querySelector(".increase");

  increaseBtn.addEventListener("click", () => {
    count += 1;
    updateCounter();
  });
}

function activeDecreaseBtn() {
  const decreaseBtn = document.querySelector(".decrease");

  decreaseBtn.addEventListener("click", () => {
    if (count > 0) {
      count -= 1;
    } else {
      count = 0;
    }
    updateCounter();
  });
}

function activeResetBtn() {
  const resetBtn = document.querySelector(".reset");

  resetBtn.addEventListener("click", () => {
    count = 0;
    updateCounter();
  });
}

function updateCounter() {
  const value = document.querySelector("#value");
  value.innerHTML = count;
}

function init() {
  activeResetBtn();
  activeDecreaseBtn();
  activeIncreaseBtn();
  updateCounter();
}

init();
