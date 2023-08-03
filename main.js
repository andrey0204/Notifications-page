const markAll = document.querySelector("#mark-all");
const numeberElement = document.querySelector("#number")
const post = document.querySelectorAll(".post");

post.forEach(post => {
  post.addEventListener("click",() => {
    post.querySelector(".status").classList.remove("not-read")
    updateNMotifications()
  })
})

markAll.addEventListener('click', () => {
  const notReadElement = document.querySelectorAll(".not-read");
  notReadElement.forEach((notReadElement) => {
    notReadElement.classList.remove("not-read");
  })
    updateNMotifications()
});

const updateNMotifications =  () => {
  const notReadElementActual = document.querySelectorAll(".not-read");
  numeberElement.innerText = notReadElementActual.length
}