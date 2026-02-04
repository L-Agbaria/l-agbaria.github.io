document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  let yesScale = 1;

  if (noBtn) {
    noBtn.addEventListener("mouseover", () => {
        const x = (Math.random() + 1) * 15 * (Math.random() - 0.5);
        const y = (Math.random() + 1) * 15 * (Math.random() - 0.5);
        noBtn.style.transform = `translate(${x}rem, ${y}rem)`;
        yesScale += 0.1;
        yesBtn.style.transform = `scale(${yesScale})`;
    });
    noBtn.addEventListener("click", () => {
        const x = (Math.random() + 1) * 15 * (Math.random() - 0.5);
        const y = (Math.random() + 1) * 15 * (Math.random() - 0.5);
        noBtn.style.transform = `translate(${x}rem, ${y}rem)`;
        yesScale += 0.1;
        yesBtn.style.transform = `scale(${yesScale})`;
    });
  }

  if (yesBtn) {
    yesBtn.addEventListener("click", () => {
        window.location.href = "yes.html";
    });
  }
});
