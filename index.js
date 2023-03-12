const buttons = document.querySelectorAll(".keys");

for (let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click",function(){
        const button = buttons[i];
        button.classList.add("blue");
        setTimeout(() => {
            button.classList.remove("blue");
            button.classList.add("green");
          }, "3000");
    })
}