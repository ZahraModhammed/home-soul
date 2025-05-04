// navbar

const Btn = document.querySelector(".btn");
const List = document.querySelector(".list")
Btn.addEventListener("click", function(){

  List.classList.toggle('show')
});


let date = document.getElementById("date")

date.innerHTML = new Date().getFullYear();