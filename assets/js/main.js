const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');

  const peso = Number(inputPeso.value); 
  const altura = Number(inputAltura.value);

  if(!peso){
    setResultado('Peso inválido', false);
    return;
  }
  if (!altura) {
    setResultado('Altura inválida', false);
    return;
  }

  //aqui vemos se o valor está retornando corretamente
  //console.log(peso, altura);
function getImc(peso, altura) {
  const imc = peso / altura ** 2; 
  return imc.toFixed(2);
};


const imc = getImc(peso, altura);
const niveImc = getNivelImc(imc)

const msg = `Seu IMC é ${imc} (${niveImc})`;

setResultado(msg, true);

console.log(niveImc);

function getNivelImc (imc){
  const nivel = ['Abaixo do peso', 'Peso normal', 
  'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 
  'Obesidade Grau 3'];

  if(imc >= 39.9) return nivel[5]; 
  if(imc >= 34.9) return nivel[4];
  if(imc >= 29.9) return nivel[3];
  if(imc >= 24.9) return nivel[2];
  if(imc >= 18.5) return nivel[1];
  if(imc <= 18.5) return nivel[0];
  
}
});

function criaP () {
  const p = document.createElement('p');
  return p;
  //Essa função se encarrega de criar um parágrafo para podermos criar quando precisarmos em
  //qualquer lugar 
}

function setResultado (msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();  
  if(isValid) {
    p.classList.add('paragrafo-resultado')
  } else {
    p.classList.add('bad')
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
};


