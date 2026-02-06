function init() {
  document.body.classList.remove("not-loaded");
}

window.addEventListener("load", () => {
  init();

  const music = document.getElementById("bg-music");

  document.addEventListener(
    "click",
    () => {
      if (music.paused) {
        music.volume = 0.35; // soft romantic volume
        music.play();
      }
    },
    { once: true }
  );
});
