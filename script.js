const listaItem = document.querySelectorAll(".item");
const listaMiniaturas = document.querySelectorAll('.miniatura')
const itemPortoAlegre = document.querySelector("[data-seletor='item-PortoAlegre']");
const itemManaus = document.querySelector("[data-seletor='item-Manaus']");
const itemRioDeJaneiro = document.querySelector("[data-seletor='item-RioDeJaneiro']");
const itemSalvador = document.querySelector("[data-seletor='item-Salvador']");

const miniPortoAlegre = document.querySelector("[data-seletor='mini-PortoAlegre']");
const miniManaus = document.querySelector("[data-seletor='mini-Manaus']");
const miniRioDeJaneiro = document.querySelector("[data-seletor='mini-RioDeJaneiro']");
const miniSalvador = document.querySelector("[data-seletor='mini-Salvador']");

const handleClick = (event) => {

    const itemClicado = event.currentTarget;

    listaMiniaturas.forEach( mini => {
        mini.classList.remove('miniaturaAtiva')
    })

    listaItem.forEach( item => {
        item.classList.remove('itemAtivo')
        if(item.getAttribute('data-cidade') === event.currentTarget.getAttribute('data-cidade')) {
            item.classList.add('itemAtivo')     
        };
    
    itemClicado.classList.add('miniaturaAtiva')
          
    });
}

miniPortoAlegre.addEventListener('click', handleClick);
miniManaus.addEventListener('click', handleClick);
miniRioDeJaneiro.addEventListener('click', handleClick);
miniSalvador.addEventListener('click', handleClick);