function hide() {
  if ($(".hide").text() === "Sembunyikan Profile") {
    $(".picture").hide();
    $(".hide").text("Tampilkan Profile");
  } else {
    $(".picture").show();
    $(".hide").text("Sembunyikan Profile");
  }
}
