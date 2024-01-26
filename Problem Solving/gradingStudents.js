function gradingStudents(grades) {
    const resutlNotas = grades.map((nota) => {
      let restoDivisao = nota % 5
      let validacao = 5 - restoDivisao
        
      if(validacao < 3 && nota >= 38){
      return nota + validacao
      } else {
      return nota
      }
    })
    return resutlNotas
  }