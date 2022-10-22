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

  function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }

  // Monta a tabelas de bichos e numeros para conferir os numeros
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