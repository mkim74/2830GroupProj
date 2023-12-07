if(process.env.NODE_ENV !== 'production'){
    require('dotnev').config()
}

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

function createAccount() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    localStorage.setItem('account');

    alert('Account Created');
}

function logInAccount() {
    var savedUsername = document.getElementById('savedUsername').value;
    var savedPassword = document.getElementById('savedPassword').value;
}

function saveVerse() {

    var book = document.getElementById('book').value;
    var chapter = document.getElementById('chapter').value;
    var verse = document.getElementById('verse').value;

    var flashcard = book + ' ' + chapter + ':' + verse;

    localStorage.setItem('bibleVerse', flashcard);

    document.getElementById('displayVerse').innerText = flashcard;
    document.getElementById('flashcard').style.display = 'block';
}

function revealVerse() {

    var userAnswer = document.getElementById('userAnswer').value;
    var answer = localStorage.getItem('bibleVerse');

    if(userAnswer==answer){
    alert("Correct");
    }
    else{
    alert("Incorrect");
    }
}



