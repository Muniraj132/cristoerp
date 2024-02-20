function includeHeader() {
  fetch("header.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("header").innerHTML = html;
    });
}
function includeFooter() {
  fetch("footer.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("footer").innerHTML = html;
    });
}
includeHeader();
includeFooter();
