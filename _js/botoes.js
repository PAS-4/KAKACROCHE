// BUSCA DOS MATERIAIS
let matCroche = document.querySelector("#matCroche")
let matFeltro = document.querySelector("#matFeltro")

// BUSCA DA GALERIA AMOSTRA
let galAmostra = document.querySelector('#galAmostra')

// BUSCA DAS GALERIAS (MATERIAIS - CROCHÊ OU FELTRO)
let galCroche = document.querySelector("#galCroche")
let galFeltro = document.querySelector("#galFeltro")

// BUSCA DAS GALERIAS (INDIVIDUAIS)
let galBanheiro = document.querySelector("#galBanheiro")
let galTapete = document.querySelector("#galTapete")
let galPersonagem = document.querySelector("#galPersonagem")
let galLogoGame = document.querySelector("#galLogoGame")
let galBichinho = document.querySelector("#galBichinho")

//CROCHÊ
function croche(){
    galAmostra.style.display = 'none'
    galCroche.style.display = 'block'
    galFeltro.style.display = 'none'
    matCroche.style.display = 'block'
    matFeltro.style.display = 'none'
    galBanheiro.style.display = 'block'
    galTapete.style.display = 'none'
    galPersonagem.style.display = 'none'
}

function banheiro(){
    galBanheiro.style.display = 'block'
    galTapete.style.display = 'none'
}

function tapete(){
    galBanheiro.style.display = 'none'
    galTapete.style.display = 'block'
}
//CROCHÊ

//FELTRO
function feltro(){
    galAmostra.style.display = 'none'
    galCroche.style.display = 'none'
    galFeltro.style.display = 'block'
    matCroche.style.display = 'none'
    matFeltro.style.display = 'block'
    galBanheiro.style.display = 'none'
    galPersonagem.style.display = 'block'
    galLogoGame.style.display = 'none'
    galBichinho.style.display = 'none'
}

function personagem(){
    galPersonagem.style.display = 'block'
    galLogoGame.style.display = 'none'
    galBichinho.style.display = 'none'
}

function game(){
    galPersonagem.style.display = 'none'
    galLogoGame.style.display = 'block'
    galBichinho.style.display = 'none'
}

function bichinho(){
    galPersonagem.style.display = 'none'
    galLogoGame.style.display = 'none'
    galBichinho.style.display = 'block'
}
//FELTRO



/*
// BUSCA DOS LINKS "OPÇÕES"
let opcaoCroche = document.querySelector("#opcaoCroche")
let opcaoEva = document.querySelector("#opcaoEva")
let opcaoBanheiro = document.querySelector("#opcaoBanheiro")
let opcaoTapetes = document.querySelector("#opcaoTapetes")
let opcaoPersonagens = document.querySelector("#opcaoPersonagens")
let opcaoGames = document.querySelector("#opcaoGames")
let opcaoBichinhos = document.querySelector("#opcaoBichinhos")

function opcaoMarcada(color, backgroundColor, border, boxShadow){
    color = 'pink'
    backgroundColor = 'rgba(0, 0, 0, .7)'
    border = 'solid 3px pink'
    boxShadow = '0px 0px 10px #000'
}

function opcaoDesmarcada(){
    
}*/