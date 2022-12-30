//elementos
const formulario = document.querySelector('#formulario');
const resultContainer = document.querySelector('#resultado')
//iniciamos la app 
window.addEventListener('load',()=>{
    formulario.addEventListener('submit',searchData);
})

//funciones 

function searchData(e){
    e.preventDefault();
    const inputPokemon = document.querySelector('#inputPokemon').value;
    const button  = document.querySelector('#btn');

    //validamos la informacion 
    if(inputPokemon == ''){
        formChecker();
    }

    /* console.log(inputPokemon) */
    fetchdata(inputPokemon)

    formulario.reset()

}

function fetchdata(pokemon){
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    fetch(URL)
        .then(data => data.json())
            .then(result => showData(result))
                .catch(e => console.error(e))
}


function showData(data = []){
    console.log(data)
    const {other,name,weight,abilities} = data;
    
  
}