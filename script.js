document.addEventListener("DOMContentLoaded", function() {
    let number = 0;
    const numberDisplay = document.getElementById("number");
    const incrementButton = document.getElementById("increment");
    const decrementButton = document.getElementById("decrement");

    function updateDisplay() {
        numberDisplay.textContent = number;
    }

    incrementButton.addEventListener("click", function() {
        number++;
        updateDisplay();
    });

    decrementButton.addEventListener("click", function() {
        if (number > 0) {
            number--;
            updateDisplay();
        }
    });

    // incrementButton.addEventListener("mouseenter", function() {
    //     incrementButton.textContent = "+";
    // });

    // incrementButton.addEventListener("mouseleave", function() {
    //     incrementButton.textContent = "Increase";
    // });

    // decrementButton.addEventListener("mouseenter", function() {
    //     decrementButton.textContent = "-";
    // });

    // decrementButton.addEventListener("mouseleave", function() {
    //     decrementButton.textContent = "Decrease";
    // });
});