let display = document.querySelector("#input");
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.innerHTML == "=") {
      display.value = eval(display.value);
      // try{
      //     display.value = eval(display.value)
      // }                                            to catch error
      // catch(error){
      //     display.value = "ERROR"

      // }
    } else if (button.innerHTML == "AC") {
      display.value = "";
    } else if (button.innerHTML == "DEL") {
      display.value = display.value.slice(0, -1);
    } else {
      // console.log(button.innerHTML)
      display.value += button.innerHTML;
    }
  });
});
