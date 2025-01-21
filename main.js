
// Recupero gli elementi di interesse dal FORM
const prezzoBigliettoAlChilometro= 0.21;
const nomeCognome = document.getElementById('nomeCognome');
const chilometri = document.getElementById('chilometri');
const eta = document.getElementById('eta');
const btnGenera = document.getElementById('btnGenera');
const cartaPasseggero = document.getElementById("cartaPasseggero");

// Recupero gli elementi di interesse dal biglietto da stampare
const nomePasseggero = document.getElementById('nomePasseggero');
const offerta = document.getElementById('offerta');
const costoBiglietto = document.getElementById('costoBiglietto');

btnGenera.addEventListener("click", function(event){

  cartaPasseggero.classList.remove('nascosto');
  cartaPasseggero.classList.add('mostra');
  

  event.preventDefault()
  console.log( chilometri.value )
  nomePasseggero.innerHTML = nomeCognome.value
  if(eta.value == "Over-60"){
    offerta.innerHTML = "Biglietto Ridotto Over 60"
    costoBiglietto.innerHTML =  (chilometri.value * prezzoBigliettoAlChilometro * (1-0.4)).toFixed(2);
  } else if (eta.value == "Minorenne"){
    offerta.innerHTML = "Biglietto Ridotto Minorenni"
    costoBiglietto.innerHTML = (chilometri.value * prezzoBigliettoAlChilometro * (1-0.2)).toFixed(2);
  } else {
    offerta.innerHTML = "Biglietto Standard"
    costoBiglietto.innerHTML = (chilometri.value * prezzoBigliettoAlChilometro).toFixed(2);
  }

  
  
})
