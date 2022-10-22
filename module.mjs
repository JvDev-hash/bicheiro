// Inicia Variáveis
const bichos = [
    'Avestruz',
    'Águia',
    'Burro',
    'Borboleta',
    'Cachorro',
    'Cabra',
    'Carneiro',
    'Camelo',
    'Cobra',
    'Coelho',
    'Cavalo',
    'Elefante',
    'Galo',
    'Gato',
    'Jacaré',
    'Leão',
    'Macaco',
    'Porco',
    'Pavão',
    'Peru',
    'Touro',
    'Tigre',
    'Urso',
    'Veado',
    'Vaca',
  ]
  const numerosAvulsos = range(13, 99)
  const numeros = populate(numerosAvulsos)

  const numerosTabela = range(1,25)

  const tabelaMontadaMap = syncTabela();

// Abaixo algumas functions auxiliares
  function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }

  function iterableToArray(iterable){
    let array = [];

    for(const val of iterable){
      array.push(val);
    }

    return array;
  }

  function getByValue(map, searchValue) {
    for (let [key, value] of map.entries()) {
      if (value === searchValue)
        return key;
    }
  }

// Associa os bichos aos valores da tabela de bichos
  function syncTabela(){
    let tabelaBichoMap = new Map();
    let tempBichos = bichos
    let tempNumeros = numerosTabela

    for(let i = 0; i < numerosTabela.length; i++){
      tabelaBichoMap.set(tempNumeros[i], tempBichos[i])
    }

    return tabelaBichoMap;
  }

  export function associaTabelaSorteios(sorteados){
    let tempMap = new Map();
    let tempValues = iterableToArray(tabelaMontadaMap.values());

    for(const val of sorteados.values()){
      if(tempValues.includes(val)){
        tempMap.set(getByValue(tabelaMontadaMap, val).toString(), val)
      }
    }
    return tempMap;
  }

  // Monta a tabelas de bichos e numeros para conferir os numeros da federal
  export function montarTabela(){
    let tabelaBichoMap = new Map()
    let tempBichos = bichos
    let tempNumeros = numeros

    for(let i = 0; i < tempBichos.length; i++){
      tabelaBichoMap.set(tempBichos[i], tempNumeros[i])
    }
    return tabelaBichoMap;
  }

  // Verifica qual bicho equivale ao numero
  export function verBichoSorteado(map, searchValue){
    for (let [key, value] of map.entries()) {
      if (value.includes(searchValue))
        return key;
    }
  }

  // Popula o array de Numeros em grupos
  function populate(avulsos){
    let numeros = [
      '01,02,03,04',
      '05,06,07,08',
      '09,10,11,12'
    ]
    let tempArr = []
    let tempAvulsos = avulsos

    for(let i = 0; tempAvulsos.length > 0; i++){
      for(let j = 0; j < 4; j++){
        tempArr.push(tempAvulsos.shift())
        if(tempArr.length == 4){
          tempArr.map((value) => {
            if(value === undefined){
            tempArr.pop()
            tempArr.push("00")
          }
          });
          numeros.push(tempArr.toString())
        }
      }
      tempArr = []
    }
    return numeros
  }