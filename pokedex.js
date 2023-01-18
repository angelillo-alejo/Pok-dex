//Recupera la lista con el id "podekex" y la almacena  una variable.
const ol$$ = document.querySelector('#pokedex');
//console.log(ol$$);

// fecth y for 
const fetchPokemon = async () => {
  let arrayPokemon = [];
  for (let i =1; i<= 151; i++) { 
  const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${i}`);
  const res = await response.json();
  //console.log (res);
  //push al array aarayPokemon y Mapeo para sacar el type
  arrayPokemon.push ({
    name: res.name,
    image: res.sprites['front_default'],
    type: res.types.map((type) => type.type.name).join(','),
    id: res.id});
    tryPokemon (arrayPokemon);
    //console.log (res.name);
  } 
  return arrayPokemon;
};
//Con esta funcion mostramos los pokemony sus elementos
const tryPokemon = (arrayPokemon) => {
  //console.log(arrayPokemon);
  ol$$.innerHTML = '';
  arrayPokemon.forEach(function(element) {
    let li$$ = document.createElement('li');
    li$$.className = 'card';
    li$$.innerHTML =
   `<img class ='card-image'src ='${element.image}'/>
    <h2 class ='card-title'></h2>${element.name}</h2>
    <p class ='card-subtitle'></p>${element.type}</p>
    <p class ='card-subtitle'>${element.id}</p>`
    ol$$.appendChild(li$$);
  });
 
}
fetchPokemon();


