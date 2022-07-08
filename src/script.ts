const form = document.querySelector(".user-form") as HTMLFormElement
console.log(form)

const firstNameInput= document.querySelector("#firstname") as HTMLInputElement;
const lastNameInput = document.querySelector("#lastname") as HTMLInputElement;
const userNameInput= document.querySelector("#username") as HTMLInputElement;
console.log(userNameInput)
const selectInput = document.querySelector("#country") as HTMLSelectElement;
const feedbackInput = document.querySelector("#feedback") as HTMLTextAreaElement;

form.addEventListener("submit",(e:Event)=>{
    e.preventDefault();
    let userData={
        firstname: firstNameInput.value,
        lastname: lastNameInput.value,
        userName: userNameInput.value,
        country: selectInput.value,
        feedback: feedbackInput.value
    }
    console.log(userData)
})