let selectMaterial = document.querySelector("#material")

function mostraSelectMaterial(){
    selectMaterial.style.display = 'block'
}

function opcoesMaterial(){
    if(selectMaterial.value == "default"){
        matCroche.style.display = 'none'
        matFeltro.style.display = 'none'
        selectMaterial.style.display = 'none'
        galAmostra.style.display = 'block'
        galBanheiro.style.display = 'none'
        galTapete.style.display = 'none'
        galPersonagem.style.display = 'none'
        galLogoGame.style.display = 'none'
        galBichinho.style.display = 'none'
    }else if(selectMaterial.value == "croche"){
        matCroche.style.display = 'block'
        matFeltro.style.display = 'none'
        galAmostra.style.display = 'none'
        galBanheiro.style.display = 'block'
        galTapete.style.display = 'none'
        galPersonagem.style.display = 'none'
        galLogoGame.style.display = 'none'
        galBichinho.style.display = 'none'
    }else if(selectMaterial.value == "feltro"){
        matCroche.style.display = 'none'
        matFeltro.style.display = 'block'
        galAmostra.style.display = 'none'
        galBanheiro.style.display = 'none'
        galTapete.style.display = 'none'
        galPersonagem.style.display = 'block'
        galLogoGame.style.display = 'none'
        galBichinho.style.display = 'none'
    }
}

function opcoesCroche(){
    if(matCroche.value == "banheiro"){
        galBanheiro.style.display = 'block'
        galTapete.style.display = 'none'
        galPersonagem.style.display = 'none'
        galLogoGame.style.display = 'none'
        galBichinho.style.display = 'none'
    }else if(matCroche.value == "tapete"){
        galBanheiro.style.display = 'none'
        galTapete.style.display = 'block'
        galPersonagem.style.display = 'none'
        galLogoGame.style.display = 'none'
        galBichinho.style.display = 'none'
    }
}

function opcoesFeltro(){
    if(matFeltro.value == "personagem"){
        galBanheiro.style.display = 'none'
        galTapete.style.display = 'none'
        galPersonagem.style.display = 'block'
        galLogoGame.style.display = 'none'
        galBichinho.style.display = 'none'
    }else if(matFeltro.value == "game"){
        galBanheiro.style.display = 'none'
        galTapete.style.display = 'none'
        galPersonagem.style.display = 'none'
        galLogoGame.style.display = 'block'
        galBichinho.style.display = 'none'
    }else if(matFeltro.value == "bicho"){
        galBanheiro.style.display = 'none'
        galTapete.style.display = 'none'
        galPersonagem.style.display = 'none'
        galLogoGame.style.display = 'none'
        galBichinho.style.display = 'block'
    }
}


let croche = document.querySelectorAll("[croche]")
let feltro = document.querySelectorAll("[feltro]")

let checkCroche = document.querySelector("input[#checkCroche]")

checkCroche.addEventListener( 'change', function() {
    if(this.checked) {
        // Checkbox está selecionado.
        croche.style.backgroundColor = "black"
    } else {
        // Checkbox não está selecionado.
        croche.style.display = "none"
    }
});

let h3 = document.querySelector('h3')
h3.innerHTML = "none"
/*
h3.innerHTML = "Jogos p/ Banheiro em Crochê (tiras de malha)"
h3.innerHTML = "Tapetes em Crochê (tiras de malha)"
h3.innerHTML = "Personagens diversos em Feltro"
h3.innerHTML = "Chaveiros de Games em Feltro (Logos dos jogos)"
h3.innerHTML = "Bichinhos em Feltro"
*/
