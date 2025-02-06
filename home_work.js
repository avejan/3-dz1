// Gmail с неоновым эффектом
document.getElementById("gmail_button").addEventListener("click", function () {
    let emailInput = document.getElementById("gmail_input");
    let emailError = document.getElementById("gmail_result");

    let emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (emailPattern.test(emailInput.value)) {
        emailError.textContent = "✔ Email корректен";
        emailError.style.color = "#39ff14"; // Неоновый зелёный
        emailInput.style.boxShadow = "0 0 10px #39ff14";
    } else {
        emailError.textContent = "✖ Введите корректный Gmail";
        emailError.style.color = "#ff073a"; // Неоновый красный
        emailInput.style.boxShadow = "0 0 10px #ff073a";
    }
});

//блок с рекурсией
const smallBlock = document.querySelector(".child_block");
let position = 0;

function moveBlock() {
    if (position < 250) { // Ограничение движения
        position += 2;
        smallBlock.style.left = position + "px";
        requestAnimationFrame(moveBlock);
    }
}

document.querySelector(".parent_block").addEventListener("click", moveBlock);

