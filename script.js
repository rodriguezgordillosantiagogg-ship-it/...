function configLibro() {
  let w = window.innerWidth;
  let h = window.innerHeight;

  if (w < 768) {
    // MÓVIL: una página
    return {
      width: w * 0.9,
      height: h * 0.7,
      display: "single"
    };
  } else {
    // PC: doble página
    return {
      width: 900,
      height: 550,
      display: "double"
    };
  }
}

$(document).ready(function () {

  let cfg = configLibro();

  $("#book").turn({
    width: cfg.width,
    height: cfg.height,
    autoCenter: true,
    display: cfg.display
  });

  // Reajustar al cambiar tamaño o rotar móvil
  $(window).on("resize", function () {
    let cfg = configLibro();
    $("#book").turn("display", cfg.display);
    $("#book").turn("size", cfg.width, cfg.height);
  });

  // CLIC IZQUIERDA / DERECHA
  $("#book").on("click touchstart", function (e) {
    let x = e.pageX || e.originalEvent.touches[0].pageX;
    let mitad = window.innerWidth / 2;

    if (x > mitad) {
      $("#book").turn("next");
    } else {
      $("#book").turn("previous");
    }
  });

  // MÚSICA (se activa con el primer gesto)
  let musica = document.getElementById("musica");
  musica.volume = 0.7;

  function iniciarMusica() {
    musica.play().catch(() => {});
    document.removeEventListener("click", iniciarMusica);
    document.removeEventListener("touchstart", iniciarMusica);
  }

  document.addEventListener("click", iniciarMusica);
  document.addEventListener("touchstart", iniciarMusica);

});
