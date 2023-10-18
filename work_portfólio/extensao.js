document.addEventListener("DOMContentLoaded", function () {
    const pipBoyButton = document.getElementById("pip-boy-button");
    const socialButtons = document.getElementById("social-buttons");
  
    // Adicione um evento de clique ao botão Pip-Boy
    pipBoyButton.addEventListener("click", function () {
      // Alternar a classe "hidden" para mostrar ou ocultar os botões de redes sociais
      socialButtons.classList.toggle("hidden");
    });
  });
  