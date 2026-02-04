document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const scene = document.querySelector(".scene");

  let yesScale = 1;

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function moveNoAwayFrom(mouseX, mouseY) {

    const sceneRect = scene.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;

    const fromMouseX = btnCenterX - mouseX;
    const fromMouseY = btnCenterY - mouseY;

    const length = Math.hypot(fromMouseX, fromMouseY) || 1;
    const moveDistance = 160;

    let targetCenterX =
      btnCenterX + (fromMouseX / length) * moveDistance - sceneRect.left;
    let targetCenterY =
      btnCenterY + (fromMouseY / length) * moveDistance - sceneRect.top;

    const padding = 24;

    targetCenterX = clamp(
      targetCenterX,
      padding + btnRect.width / 2,
      sceneRect.width - padding - btnRect.width / 2
    );
    targetCenterY = clamp(
      targetCenterY,
      padding + btnRect.height / 2,
      sceneRect.height - padding - btnRect.height / 2
    );

    noBtn.style.position = "absolute";
    noBtn.style.left = `${targetCenterX - btnRect.width / 2}px`;
    noBtn.style.top = `${targetCenterY - btnRect.height / 2}px`;
  }

  function randomTeleportNo() {
    if (!scene || !noBtn) return;

    const sceneRect = scene.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    const padding = 24;

    const maxLeft = sceneRect.width - btnRect.width - padding;
    const maxTop = sceneRect.height - btnRect.height - padding;

    const left =
      Math.random() * (maxLeft - padding) + padding - sceneRect.left;
    const top = Math.random() * (maxTop - padding) + padding - sceneRect.top;

    noBtn.style.position = "absolute";
    noBtn.style.left = `${left}px`;
    noBtn.style.top = `${top}px`;
    noBtn.style.opacity = "1";
    noBtn.style.transform = "scale(1)";
  }

  document.addEventListener("mousemove", (event) => {
    if (!noBtn || !yesBtn) return;

    const rect = noBtn.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distance = Math.hypot(
      event.clientX - centerX,
      event.clientY - centerY
    );

    const fleeRadius = 50;

    if (distance < fleeRadius) {
      moveNoAwayFrom(event.clientX, event.clientY);

      yesScale += 0.1;
      yesBtn.style.transform = `scale(${yesScale})`;
    }
  });

  if (noBtn) {
    noBtn.addEventListener("click", (event) => {
      event.preventDefault();
      noBtn.classList.add("no-pop");
    });
  }

  if (yesBtn) {
    yesBtn.addEventListener("click", () => {
        window.location.href = "yes.html";
    });
  }
});
