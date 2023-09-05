const loginn = document.querySelector("header button")
const book_login = document.querySelector(".book_login")
const wrapper = document.querySelector(".wrapper")
const btn_qaytish = document.querySelector("#btn_qaytish")

loginn.addEventListener("click", () => {
    book_login.style.display = "block"
    wrapper.style.display = "none"


})

btn_qaytish.addEventListener("click", () => {
    book_login.style.display = "none"
    wrapper.style.display = "block"
})