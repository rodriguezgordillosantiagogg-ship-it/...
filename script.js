function configLibro() {
  let w = window.innerWidth;
  let h = window.innerHeight;

  if (w < 768) {
    return {
      width: w * 0.9,
      height: h * 0.7,
      display: "single" // en móviles se ve una sola página
    };
  } else {
    return {
      width: 900,
      height: 550,
      display: "double" // en PC se ven dos páginas
    };
  }
}

$(document).ready(function () {

  let cfg = configLibro();

  $("#book").turn({
    width: cfg.width,
    height: cfg.height,
    display: cfg.display,
    autoCenter: true
  });

  $(window).on("resize", function () {
    let cfg = configLibro();
    $("#book").turn("display", cfg.display);
    $("#book").turn("size", cfg.width, cfg.height);
  });

  // CLIC IZQ / DER
  $("#book").on("click touchstart", function (e) {
    let x = e.pageX || e.originalEvent.touches[0].pageX;
    let mitad = window.innerWidth / 2;

    if (x > mitad) {
      $("#book").turn("next");
    } else {
      $("#book").turn("previous");
    }
  });

  // ACTIVAR MÚSICA
  $("#activar").on("click touchstart", function () {
    let musica = document.getElementById("musica");
    musica.volume = 0.7;
    musica.play();
    $(this).fadeOut();
  });

});
