const button = document.querySelector("#generate-button");
const input = document.querySelector("#input-box");
let qrImage = document.querySelector("#qr-image");

input.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        button.click();
    }
});

button.addEventListener("click", () => {
    if (input.value.length > 1) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
        setTimeout(() => {
            qrImage.classList.add("isactive");
            input.style.borderColor = "green";
        }, 300);
    } else {
        input.style.borderColor = "rgb(94, 17, 17)";
        qrImage.classList.remove("isactive");

        input.classList.add("error");
        setTimeout(() => {
            input.classList.remove("error");
        }, 500);
    }
});
