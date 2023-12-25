const textarea = document.querySelector("textarea");
const totalChar = document.querySelector(".sumChar");
const numChar = document.querySelector(".numChar");

textarea.addEventListener("keyup", () => {
     
    //numChar.textContent = textarea.maxLength - textarea.value.length;
    numChar.textContent = 100 - textarea.value.length;
    totalChar.textContent = textarea.value.length;
})



