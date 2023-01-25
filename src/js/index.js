


const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkdovideo = video.src;



botaoTrailer.addEventListener("click", () => {
modal.classList.add("aberto")
video.setAttribute("src", linkdovideo);
});

const botafecharmodal = document.querySelector(".fechar-modal");
botafecharmodal.addEventListener("click", () =>{
modal.classList.remove("aberto");
video.setAttribute("src", "");
});








