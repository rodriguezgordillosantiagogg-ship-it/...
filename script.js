function configLibro() {
  let w = window.innerWidth;
  let h = window.innerHeight;

  if (w < 768) {
    return {
      width: w,
      height: h,
      display: "single"
    };
  } else {
    return {
      width: 900,
      height: 550,
      display: "double"
    };
  }
}

$(document).ready(function () {
  let cfg = configLibro();

  // Inicializar el flipbook
  $("#book").turn({
    width: cfg.width,
    height: cfg.height,
    display: cfg.display,
    autoCenter: true
  });

  // Activar música al tocar la pantalla
  $("#activar").on("click", function () {
    $("#musica")[0].play();
    $("#activar").hide();
  });

  // Recalcular si se cambia el tamaño de la ventana
  $(window).on("resize", function () {
    let newCfg = configLibro();
    $("#book").turn("size", newCfg.width, newCfg.height);
    $("#book").turn("display", newCfg.display);
  });
});
