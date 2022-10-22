import { montarTabela, verBichoSorteado, associaTabelaSorteios } from './module.mjs'
import fetch from 'node-fetch';

const URL_TO_FETCH = 'https://loteriascaixa-api.herokuapp.com/api/loteria-federal/latest';
let tabelaBichos = montarTabela()
let sorteados = new Map()
let newSorteados = new Map()
let dezenaBicho = [];
let dezenasSorteadas;

export async function ultimoSorteio() {
    // Consumir a API da Loteria
    const response = await fetch(URL_TO_FETCH);
    const result = await response.json();

    // Separar as Dezenas do resultado da API
    dezenasSorteadas = result.dezenas

    // Pegar as dezenas e tirar o primeiro número
    dezenasSorteadas.map((dezena) => {

      dezenaBicho.push(dezena.substring(dezena.length - 4));
    })

    // Confere Resultado do Bicho
    dezenaBicho.map((bicho) => {
      let numeroBicho = bicho.substring(bicho.length - 2);
      sorteados.set(numeroBicho, verBichoSorteado(tabelaBichos, numeroBicho))
    })

    newSorteados = associaTabelaSorteios(sorteados);
    console.log(newSorteados)
    return newSorteados
}