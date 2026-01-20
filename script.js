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

  /* ===== AUDIO ===== */
  const audio = document.getElementById("audio");

  // Primer clic en cualquier parte → activa el sonido
  document.addEventListener("click", () => {
    audio.muted = false;
  }, { once: true });

});
