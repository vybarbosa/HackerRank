function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const distanciaApples = apples.map((apple) => {
        return a + apple
    });
    const distanciaOranges = oranges.map((orange) => {
        return b + orange
    })
    
    const quantidadeApples = distanciaApples.filter((distancia) => {
        if(distancia >= s && distancia <= t ){
            return true
        } else {
            return false
        }
    })
    const quantidadeOranges = distanciaOranges.filter((distancia) => {
        if(distancia >= s && distancia <= t ){
            return true
        } else {
            return false
        }
    })
    
    console.log(quantidadeApples.length)
    console.log(quantidadeOranges.length)

}