document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("Input");
    const buttons = document.querySelectorAll("button");
    
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const value = button.textContent;
        
        if (value === "=") {
          try {
            input.value = eval(input.value);
          } catch {
            input.value = "Error";
          }
        } else if (value === "AC") {
          input.value = "";
        } else if (value === "Del") {
          input.value = input.value.slice(0, -1);
        } else {
          input.value += value;
        }
      });
    });
  });
  