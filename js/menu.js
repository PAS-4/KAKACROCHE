const bar = document.querySelector('#bar')

function ativarMenu(){
    const nav = document.querySelector('nav')
    nav.classList.toggle('ativado')
}

bar.addEventListener('click', ativarMenu)