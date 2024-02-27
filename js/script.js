function replaceName() {
    let name = prompt("Halo! Siapa nama kamu?", "");
    document.getElementById("name").innerHTML = name
} 

replaceName()

function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const message = document.forms["message-form"]["message"].value;

    if (name == "" || birthDate == "" || gender == "" || message == "") {
        alert("Please fill the form");

        return false;
    }

    setSenderUI(name, birthDate, gender, message);

    return false;
}

function setSenderUI(name, birthDate, gender, message) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-message").innerHTML = message;
}

let btn_submit = document.querySelector("button");

btn_submit.addEventListener("click", () => {
    const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    var date = new Date();

    var currentDate = weekday[date.getDay()-1] + ", " + ('0' + date.getDate()).slice(-2) + "-" + ('0' + (date.getMonth()+1)).slice(-2) + "-" + date.getFullYear() + ", " + ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2) + ":" + ('0' + date.getSeconds()).slice(-2);
    document.getElementById("date-time").innerText = currentDate;
})