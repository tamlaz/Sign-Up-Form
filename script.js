alert("The JS is linked");
let a;
let b;

function setValues() {
    let passwordOne = document.querySelector("#user-pw1");
    a = passwordOne.value;
    let passwordTwo = document.querySelector("#user-pw2");
    b = passwordTwo.value;
    console.log(a);
    console.log(b);
}

function validate() {
    if(a == b) {
        console.log("ok");
        alert("Welcome");
    } else {
        alert("The given passwords are have to be the same!");
    }
}

let submitBtn = document.querySelector(".submitbtn");
submitBtn.addEventListener("click", e => {
    setValues();
    validate();
});



