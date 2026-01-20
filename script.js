document.addEventListener("DOMContentLoaded", () => {

  /* ===== LIBRO ===== */
  const pageFlip = new St.PageFlip(
    document.getElementById("book"),
    {
      width: 350,
      height: 500,
      size: "stretch",
      maxShadowOpacity: 0.5,
      showCover: true,
      mobileScrollSupport: false
    }
  );

  pageFlip.loadFromHTML(document.querySelectorAll(".page"));

  document.getElementById("next").onclick = () => pageFlip.flipNext();
  document.getElementById("prev").onclick = () => pageFlip.flipPrev();

  /* ===== AUDIO ===== */
  const audio = document.getElementById("audio");
  const playBtn = document.getElementById("playBtn");
  const muteBtn = document.getElementById("muteBtn");
  const disc = document.getElementById("disc");

  let playing = false;

  playBtn.addEventListener("click", () => {
    if (!playing) {
      audio.play().catch(() => {});
      disc.classList.add("spin");
      playBtn.textContent = "⏸️";
      playing = true;
    } else {
      audio.pause();
      disc.classList.remove("spin");
      playBtn.textContent = "▶️";
      playing = false;
    }
  });

  muteBtn.addEventListener("click", () => {
    audio.muted = !audio.muted;
    muteBtn.textContent = audio.muted ? "🔇" : "🔊";
  });

});
