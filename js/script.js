document.addEventListener("DOMContentLoaded", function () {
  const perguntas = document.querySelectorAll(".perguntas dl div");

  perguntas.forEach((pergunta) => {
    const dt = pergunta.querySelector("dt");
    const dd = pergunta.querySelector("dd");

    dt.addEventListener("click", function () {
      pergunta.classList.toggle("expandido");
    });
  });
});
