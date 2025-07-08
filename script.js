let maxValue = document.documentElement.scrollHeight - window.innerHeight;
let currentPer = Math.floor((window.scrollY * 100) / maxValue);

window.addEventListener("scroll", () => {
  currentPer = Math.floor((window.scrollY * 100) / maxValue);

  document.getElementById("kids").style.transform = `scale(${
    1 + currentPer / 1
  })`;
  document.getElementById("text").style.transform = `scale(${
    1 + currentPer / 1
  })`;

  document.getElementById("tierra").style.backgroundPosition = `center -${
    currentPer * 3
  }px`;
});

window.addEventListener("resize", () => {
  maxValue = document.documentElement.scrollHeight - window.innerHeight;
});
