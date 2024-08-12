// let submit = document.getElementsByClassName('submit');

let form = document.querySelector("form")

function submitForm(event){
    event.preventDefault();
    let name = document.querySelector("#name");
    alert(`${name.value} your message is send`);
    document.getElementById("contact").reset();
}
form.addEventListener("submit",submitForm);





