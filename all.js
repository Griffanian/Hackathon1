Array.from(document.getElementsByClassName("modalOpener")).forEach(e=>{
    e.addEventListener("click", openModal);
})

document.getElementById("close").addEventListener("click", closeModal);

function openModal() {
    document.getElementsByClassName('modal')[0].classList.remove("hidden");
}

function closeModal() {
    document.getElementsByClassName('modal')[0].classList.add("hidden");
}
