var button = document.getElementById("button");
var textarea = document.getElementById("textarea");
var output = document.getElementById("output");

button.addEventListener("click", () => {
  output.textContent = textarea.value;
  alert("button daragdlaa");
});
