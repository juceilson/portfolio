const tintasExternas = [
    ["img/coral-master-galao-1.png", "Master"],
    ["img/exmalte.png", "Esmalte sintetico "],
    ["img/Coral-Sol-e-Chuva.png", "Sol e chuva "],
    
]  

const tintasInternas = [
    ["img/tinta_interna_acrilica.png", "Mais desempenho"],
    ["img/tinta_interna_latex.png", "Tinta economica"], 
    ["img/Coral-Super-Lavavel.png", "Super lavavel"],
] 

const tintasEfeitos = [
    ["img/efeito_louza.png", "Efeito louza"],
    ["img/efeito_marmore.png", "Marmore"],
    ["img/efeito_velvet.png", "Velvet"],
    ["img/cimento_queimado.png","Cimento queimado "]
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