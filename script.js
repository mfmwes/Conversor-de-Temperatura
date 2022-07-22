function Temperature(grau){
    const celsius = grau.toUpperCase().includes('C')
    const fahrenheit = grau.toUpperCase().includes('F')

    if (!celsius && !fahrenheit){
        throw new Error('Grau não encontrado')
    }

    let grau_att = Number(grau.toUpperCase().replace('F','')) 
    let formula = (fahrenheit) => (fahrenheit-32)*5/9
    let sinal_grau = 'C'


    if(celsius){     
    grau_att = Number(grau.toUpperCase().replace('C','')) 
    formula = (celsius) => celsius * 9/5 + 32
    sinal_grau = 'F'        
    }

    return formula(grau_att) + sinal_grau
}

console.log(Temperature('50f'))
console.log(Temperature('50c'))
console.log(Temperature('50z'))