// CMPM 121 Smelly Code Activity

let counter = 0;

function setup() {
  // Create the HTML for the counter
  document.body.innerHTML = `
    <h1>CMPM 121 Project</h1>
    <p>Counter: <span id="counter">0</span></p>
    <button id="increment">Click Me!</button>
    <button id="decrement">Decrement</button>
    <button id="reset">Reset</button>
  `;

  const incrementButton = document.getElementById("increment")!;
  const decrementButton = document.getElementById("decrement")!;
  const resetButton = document.getElementById("reset")!;
  const counterElement = document.getElementById("counter")!;

  // Check if any element is missing, then exit the function
  if (!incrementButton || !decrementButton || !resetButton || !counterElement) {
    return;
  }

  const buttonList = [incrementButton, decrementButton, resetButton];

  buttonList.forEach((element) => {
    element.addEventListener("click", () => {
      if (element.id == "decrement") {
        counter--;
      } else if (element.id == "increment") {
        counter++;
      } else {
        counter = 0;
      }
      counterElement.innerHTML = `${counter}`;
      document.title = "Clicked " + counter;
      // Change the background color based on even/odd count
      document.body.style.backgroundColor = counter % 2 ? "pink" : "lightblue";
    });
  });
}

setup();
