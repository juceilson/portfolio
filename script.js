const tintasExternas = [
    ["img/coral-master-galao-1.png", "tinta master"],
    ["img/exmalte.png", "tinta master"]
]  

const tintasInternas = [
    ["img/tinta_interna_acrilica.png", "tinta mais desempenho"],
    ["img/tinta_interna_latex.png", "tinta economica"]
] 

const tintasEfeitos = [
    ["img/efeito_louza.png", "tinta louza"],
    ["img/efeito_marmore.png", "tinta marmore"],
    ["img/efeito_velvet.png", "tinta velvet"],
] 

window.addEventListener("load",function(){
    inserirTintas(tintasExternas, "tinta_externa");
    inserirTintas(tintasInternas, "tinta_interna");
    inserirTintas(tintasEfeitos, "efeitos");
});

function inserirTintas(tintas, id){
        const caixaTinta = document.getElementById(id)
        for(let i = 0; i < tintas.length; i++){
            caixaTinta.innerHTML += `<div class="card">
                <img width="200px" src="${tintas[i][0]}" alt="">
                <p>${tintas[i][1]}</p>
            </div>`
        
    }
};