const userName = prompt("ismingizni kiriting");
const userAge = prompt ("familiyangizni kiriting")

const text = document.querySelector(".bot")
console.log(text);

const bg = document.querySelector(".doni")
console.log(bg);

text.textContent = userName
bg.textContent = userAge

const card = document.querySelector(".box")
const text =prompt("ism")
card.innerHTML