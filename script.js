const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector("form");
form.addEventListener("submit",function(dets){
    dets.preventDefault();
    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|net|org|edu|gov|co)$/i;
    const passwordRegex = /^.{8,}$/;

    let emailans = emailRegex.test(email.value);
    let passans = passwordRegex.test(password.value);

    let isValid = true;

    if(!emailans){
        document.querySelector("#emailError").textContent = "Email is not valid";
        document.querySelector("#emailError").style.display = "initial";
        isValid = false;
    }
    if(!passans){
        document.querySelector("#passwordError").textContent = "Password is invalid";
        document.querySelector("#passwordError").style.display = "initial";
        isValid = false;
    }
    if(isValid){
        document.querySelector("#resultMessage").textContent = "Everything is good!";
    }
    if(!isValid){
        document.querySelector("#resultMessage").textContent = "Something is wrong!";
    }
})
