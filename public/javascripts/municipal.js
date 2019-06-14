"use strict";
let login = document.getElementById(`login-button`);
let report = document.getElementById(`report-button`);
let five = document.getElementById(`one`);
let little = document.getElementById(`two`);
let forum = document.getElementById(`three`);
let open = document.getElementById(`four`);
let mana = document.getElementById(`five`);
let festival = document.getElementById(`six`);
let soccer = document.getElementById(`seven`);
let name, password, user;


login.addEventListener("click", function () {
    login2();
});

report.addEventListener("click", function () {
    report2();
});

five.addEventListener("click", function () {
    five2();
});

little.addEventListener("click", function () {
    little2();
});

forum.addEventListener("click", function () {
    forum2();
});

open.addEventListener("click", function () {
    open2();
});

mana.addEventListener("click", function () {
    mana2();
});

festival.addEventListener("click", function () {
    festival2();
});

soccer.addEventListener("click", function () {
    soccer2();
});

function login2() {
    name = window.prompt(`Hello, what is your name?`);
    password = window.prompt(`Please enter your password`);
    if (password !== `ripjah` || password !== `password`){
        window.alert(`Welcome, ${name}!  Your user ID is 42069`);

    }
    else {
        window.alert(`That is incorrect, goodbye.`)
        window.close()
    }
}

function report2() {
    window.prompt('What issue would you like to report?')
    window.alert('Thank you for being an active member of this community!')
}

function five2() {
    window.prompt(`Please enter your user ID`);
    if (user > `42069` || user < `42069`){
        window.alert(`That is incorrect, goodbye.`);
        window.close()
    }
    else {
        window.alert(`You are now signed up for 5k`)
    }
}

function little2() {
    window.prompt(`Please enter your user ID`);
    if (user > `42069` || user < `42069`){
        window.alert(`That is incorrect, goodbye.`);
        window.close()
    }
    else {
        window.alert(`You are now signed up for Little League`)
    }
}

function forum2() {
    window.prompt(`Please enter your user ID`);
    if (user > `42069` || user < `42069`){
        window.alert(`That is incorrect, goodbye.`);
        window.close()
    }
    else {
        window.alert(`You are now signed up for the community forum`)
    }
}

function open2() {
    window.prompt(`Please enter your user ID`);
    if (user > `42069` || user < `42069`){
        window.alert(`That is incorrect, goodbye.`);
        window.close()
    }
    else {
        window.alert(`You are now signed up to volunteer at the Open House`)
    }
}

function mana2() {
    window.prompt(`Please enter your user ID`);
    if (user > `42069` || user < `42069`){
        window.alert(`That is incorrect, goodbye.`);
        window.close()
    }
    else {
        window.alert(`You are now signed up to volunteer at the Mana Food Project`)
    }
}

function festival2() {
    window.prompt(`Please enter your user ID`);
    if (user > `42069` || user < `42069`){
        window.alert(`That is incorrect, goodbye.`);
        window.close()
    }
    else {
        window.alert(`You are now signed up to volunteer at the Festival by the Bay`)
    }
}

function soccer2() {
    window.prompt(`Please enter your user ID`);
    if (user > `42069` || user < `42069`){
        window.alert(`That is incorrect, goodbye.`);
        window.close()
    }
    else {
        window.alert(`You are now signed up to volunteer for the Petoskey Soccer Invitational `)
    }
}




