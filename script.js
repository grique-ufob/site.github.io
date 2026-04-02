// 1. Variável global para o controle do slide
let currentSlide = 0;

// 2. Função global (para os botões onclick funcionarem)
function moveSlide(step) {
    const slides = document.querySelectorAll('.news-slide');
    if (slides.length === 0) return;

    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// 3. Bloco de inicialização
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Lógica de Idiomas (que você já tem) ---
    const ptElements = document.querySelectorAll('.lang-pt');
    const enElements = document.querySelectorAll('.lang-en');
    const btnPt = document.getElementById('btn-pt');
    const btnEn = document.getElementById('btn-en');

    function changeLang(lang) {
        if (lang === 'en') {
            ptElements.forEach(el => el.style.display = 'none');
            enElements.forEach(el => el.style.display = 'block');
            btnEn.classList.add('active');
            btnPt.classList.remove('active');
        } else {
            ptElements.forEach(el => el.style.display = 'block');
            enElements.forEach(el => el.style.display = 'none');
            btnPt.classList.add('active');
            btnEn.classList.remove('active');
        }
    }

    if(btnEn) btnEn.addEventListener('click', () => changeLang('en'));
    if(btnPt) btnPt.addEventListener('click', () => changeLang('pt'));


    // --- Inicialização do Carrossel (NOVO) ---
    const slides = document.querySelectorAll('.news-slide');
    if (slides.length > 0) {
        // Garante que o primeiro slide esteja visível ao carregar
        slides[0].classList.add('active');

        // Configura o auto-play (muda a cada 7 segundos)
        setInterval(() => {
            moveSlide(1);
        }, 7000);
    }
});








