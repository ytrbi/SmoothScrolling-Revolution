const open = document.querySelector(".open");
const close = document.querySelector(".close");
const container = document.querySelector(".container");

open.addEventListener("click", () => container.classList.add("show-nav"))

close.addEventListener("click", () => container.classList.remove("show-nav"))

/* 
body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    background-color: #1a1a1a;
    color: #e0e0e0;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}

.container {
    width: 100vw;
    margin: 0 auto;
    padding: 50px;
    min-height: 100vh;
}

.container.show-nav {
    transform: rotate(-20deg);
    transform-origin: top left;
    transition: transform 0.5s linear;
}

.circle-container {
    position: fixed;
    top: -100px;
    left: -100px;
}

.circle {
    background-color: red;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    position: relative;
    transition: transform 0.5s linear;
}

.circle button {
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    height: 100px;
    background: transparent;
    border: 0;
    font-size: 20px;
    color: #fff;
}

.circle button:focus {
    outline: none;
}

.circle button#open {
    left: 60%;
    transform: rotate(90deg);
    transform-origin: top left;
}

.circle button#close {
    top: 60%;
}

.content {
    max-width: 1000px;
    margin: 50px auto;
    padding: 0 150px;
}

h1, h2 {
    color: #f2f2f2;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

h2 {
    font-size: 1.8rem;
    margin-top: 40px;
    margin-bottom: 20px;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
}

p {
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: #b0b0b0;
}

a {
    color: #ff5252;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 20px 0;
}

figcaption {
    font-size: 1rem;
    color: #a0a0a0;
    text-align: center;
    margin-top: 10px;
}

header {
    background: #121212;
    padding: 20px;
}
*/