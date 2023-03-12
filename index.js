const buttons = document.querySelectorAll(".keys");

for (let i = 0 ; i < buttons.length; i++) {
  buttons[i].addEventListener("mousedown", function() {
    const button = buttons[i];
    button.classList.add("blue");
  });
  
  buttons[i].addEventListener("mouseup", function() {
    const button = buttons[i];
    button.classList.remove("blue");
    button.classList.add("green");
  });
  
  buttons[i].addEventListener("mouseleave", function() {
    const button = buttons[i];
    button.classList.remove("blue");
  });
}
