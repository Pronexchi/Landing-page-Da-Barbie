$(document).ready(function(){
    // Configuração do Carrossel (Elenco)
    $(".owl-carousel").owlCarousel({
        loop: false,
        margin: 20,
        nav: false,
        dots: false,
        mouseDrag: true,
        touchDrag: true,
        responsive:{
            0:   { items: 2.2 },
            600: { items: 4.2 },
            1000:{ items: 6.2 }
        }
    });

    // Lógica do botão Ver Mais (Resenhas)
    $("#toggle-reviews").click(function() {
        // Faz as resenhas extras aparecerem ou sumirem
        $(".extra-review").slideToggle(400); 

        // Troca o texto do botão
        // O .trim() é excelente para evitar erros com espaços em branco no HTML
        if ($(this).text().trim() === "Ver mais") {
            $(this).text("Ver menos");
        } else {
            $(this).text("Ver mais");
        }
    });
});