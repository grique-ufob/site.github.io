document.addEventListener('DOMContentLoaded', () => {

    const ptElements = document.querySelectorAll('.lang-pt');
    const enElements = document.querySelectorAll('.lang-en');
    const btnPt = document.getElementById('btn-pt');
    const btnEn = document.getElementById('btn-en');

    btnEn.addEventListener('click', () => changeLang('en'));
    btnPt.addEventListener('click', () => changeLang('pt'));

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


});








