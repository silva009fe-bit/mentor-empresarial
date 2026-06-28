// Animação ao clicar no botão principal
const botao = document.querySelector(".botao");

if (botao) {
    botao.addEventListener("click", function(e) {
        e.preventDefault();

        alert(
`🤖 Mentor IA

Olá!

Seja bem-vindo à Mentor Empresarial.

Nossa plataforma irá ajudá-lo a descobrir:

✅ Seu perfil empreendedor
✅ Sua empresa ideal
✅ Estratégias de marketing
✅ Planejamento financeiro
✅ Plano de negócios

Em breve esta função estará totalmente disponível!`
        );
    });
}

// Animação dos cards
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-12px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0px)";
    });

});
