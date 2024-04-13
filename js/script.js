const copyButton = document.querySelector(".page__copy");
const ip = document.querySelector("#ip").innerHTML;

copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(ip);
  alert("Скопійовано!");
});
