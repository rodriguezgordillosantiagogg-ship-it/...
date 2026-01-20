document.addEventListener("DOMContentLoaded", function () {

  const pageFlip = new St.PageFlip(
    document.getElementById("book"),
    {
      width: 400,
      height: 500,
      size: "fixed",
      showCover: true,
      mobileScrollSupport: false
    }
  );

  pageFlip.loadFromHTML(document.querySelectorAll(".page"));

  document.getElementById("next").onclick = () => pageFlip.flipNext();
  document.getElementById("prev").onclick = () => pageFlip.flipPrev();

});
