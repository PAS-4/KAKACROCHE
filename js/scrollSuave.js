
/*
* Seleção por "class", busca comum com seletor "css" (".nomeDaClasse");
* Caso haja a necessidade de selecionar links apenas pela tag "a"
* é importante restringir o Scroll Suave apenas para links internos;
* ou seja, os que apontam para id's;
* Ficaria 'a[href^="#"]' (âncora cujo "href" possui "#");
*/

let linksScrollSuave = document.querySelectorAll('.scrollSuave') //Busca todo elemento com a class "scrollSuave"

linksScrollSuave.forEach(items =>{                               //criação de lista de elementos, agindo em cada um deles
    items.addEventListener('click', moveScrollOnClick)           //adiciona o evento "click" (saber se foi clicado) e chama a função desejada
})

function moveScrollOnClick(Event){ //Função de efeito Scroll Suave usada no evento "click"

    Event.preventDefault()         //Desabilita a funcionalidade padrão do browser em relação ao click

    const element = Event.target   //Mostra qual elemento("tag") foi clicado

    //const id = element.getAttribute('href') --> Salva em "id" o id "destino" do ELEMENTO CLICADO (valor do "href")

    const sectionSelected = document.querySelector(element.getAttribute('href')).offsetTop
    //Salva em "sectionSelected" o endereço da div "destino", que foi referenciado pelo "href" do ELEMENTO CLICADO (valor do "href")
    //função ".offsetTop" --> Indica a posição em pixels da "sectionSelected" em relação ao topo do browser

    window.scroll({
        top: sectionSelected,
        behavior: "smooth"      //Não funciona em todos os browsers
    })
}