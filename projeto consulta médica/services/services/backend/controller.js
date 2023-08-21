let consultas = [
  {
    id: 1,
    especialidade: "Ginecologista",
    datasDisponiveis: [
      {id: 1, data:"05/05/2023, 09:00"},
      {id: 2, data:"05/05/2023, 10:00"},
      {id: 3, data: "05/05/2023, 11:00"},
      {id: 4, data: "05/05/2023, 12:00"},
      {id: 5, data: "05/05/2023, 13:00"},
      {id: 6, data: "05/05/2023, 14:00"},
    ]
  },
  {
    id: 2,
    especialidade: "Clinico Geral",
    datasDisponiveis: [
      {id: 1, data:"05/05/2023, 09:00"},
      {id: 2, data:"05/05/2023, 10:00"},
      {id: 3, data: "06/05/2023, 09:00"},
      {id: 4, data: "06/05/2023, 10:00"},
      {id: 5, data: "07/05/2023, 16:00"},
      {id: 6, data: "15/05/2023, 14:00"},
    ]
  },
  {
    id: 3,
    especialidade: "Cardiologista",
    datasDisponiveis: [
      {id: 1, data:"05/05/2023, 13:00"},
      {id: 2, data:"05/05/2023, 14:00"},
      {id: 3, data: "06/05/2023, 14:00"},
      {id: 4, data: "06/05/2023, 17:00"},
      {id: 5, data: "07/05/2023, 13:00"},
      {id: 6, data: "07/05/2023, 14:00"},
    ]
  },
  {
    id: 4,
    especialidade: "Oftalmologista",
    datasDisponiveis: [
      {id: 1, data:"09/05/2023, 13:00"},
      {id: 2, data:"09/05/2023, 14:00"},
      {id: 3, data: "09/05/2023, 15:00"},
      {id: 4, data: "12/05/2023, 07:00"},
      {id: 5, data: "12/05/2023, 09:00"},
    ]
  },
  {
    id: 5,
    especialidade: "Otorrino",
    datasDisponiveis: [
      {id: 1, data:"09/05/2023, 07:00"},
      {id: 2, data:"09/05/2023, 08:00"},
      {id: 3, data: "09/05/2023, 09:00"},
      {id: 4, data: "09/05/2023, 10:00"},
      {id: 5, data: "09/05/2023, 11:00"},
      {id: 6, data: "10/05/2023, 10:00"},
      {id: 7, data: "10/05/2023, 11:00"},
    ]
  },
  {
    id: 6,
    especialidade: "Urologista",
    datasDisponiveis: [
      {id: 1, data:"09/05/2023, 07:00"},
      {id: 2, data:"09/05/2023, 08:00"},
      {id: 3, data: "09/05/2023, 09:00"},
      {id: 4, data: "09/05/2023, 10:00"},
      {id: 5, data: "09/05/2023, 11:00"},
      {id: 6, data: "10/05/2023, 10:00"},
      {id: 7, data: "10/05/2023, 11:00"},
    ]
  },
  {
    id: 7,
    especialidade: "Gastroenterologista",
    datasDisponiveis: [
      {id: 1, data:"10/05/2023, 07:00"},
      {id: 2, data:"11/05/2023, 08:00"},
      {id: 3, data: "11/05/2023, 09:00"},
      {id: 4, data: "25/05/2023, 07:00"},
      {id: 5, data: "25/05/2023, 11:00"},
      {id: 6, data: "02/06/2023, 09:00"},
      {id: 7, data: "02/06/2023, 10:00"},
    ]
  },
  {
    id: 8,
    especialidade: "Dermatologia",
    datasDisponiveis: [
      {id: 1, data:"11/05/2023, 07:00"},
      {id: 2, data:"11/05/2023, 08:00"},
      {id: 3, data: "11/05/2023, 09:00"},
    ]
  },
  {
    id: 9,
    especialidade: "Pediatria",
    datasDisponiveis: [
      {id: 1, data:"05/05/2023, 07:00"},
      {id: 2, data:"05/05/2023, 08:00"},
      {id: 3, data: "05/05/2023, 09:00"},
      {id: 4, data: "08/05/2023, 08:00"},
      {id: 5, data: "08/05/2023, 09:00"},
      {id: 6, data: "08/05/2023, 10:00"},
      {id: 7, data: "08/05/2023, 11:00"},
      {id: 8, data: "12/05/2023, 08:00"},
      {id: 9, data: "13/05/2023, 09:00"},
    ]
  },
  {
    id: 10,
    especialidade: "Psiquiatria",
    datasDisponiveis: [
      {id: 1, data:"05/08/2023, 07:00"},
      {id: 2, data:"05/08/2023, 08:00"},
      {id: 3, data: "25/08/2023, 07:00"},
      {id: 4, data: "25/05/2023, 08:00"},
      {id: 5, data: "10/10/2023, 09:00"},
      {id: 6, data: "11/10/2023, 09:00"},
    ]
  },
]

let consultasMarcadas = [{
  id: 1,
  nome: "Fernanda",
  telefone: "71987799291",
  convenio: false,
  data: "04/05/2023 10:00",
  especialidade: "Ginecologista"
}]

const getEspecialities = (req, res) => res.json(consultas)

const getEspeciality = (req, res) => {
  const { id } = req.params

  const especialityData = consultas.find(consulta => consulta.id == id)

  if(!especialityData) {
    return res.status(404).json("Especialidade não encontrada")
  }

  return res.json(especialityData)
}

const getAppointments = (req, res) => res.json(consultasMarcadas)

const getAppointment = (req, res) => {
  const {id} = req.params
  let consulta = consultasMarcadas.find(consulta => consulta.id === Number(id))

  if(!consulta) {
   return res.status(404).json("Consulta não encontrada")
  }
  
  return res.json(consulta)
}

const scheduleNewAppointment = (req, res) => {
  const { especialidade, nome, telefone, convenio, data } = req.body

  try {
    consultas.forEach(consulta => {

      if(consulta.id === Number(especialidade)) {
        const lastId = consultasMarcadas[consultasMarcadas.length - 1].id
  
        consultasMarcadas.push({
          id: lastId + 1,
          nome,
          telefone,
          convenio,
          data: consulta.datasDisponiveis.find(dataAberta => dataAberta.id === Number(data)).data,
          especialidade: consulta.especialidade
        })
  
        consulta.datasDisponiveis = consulta.datasDisponiveis.filter(dataAberta => dataAberta.id !== Number(data))
      }
    })

    return res.json("Consulta marcada com sucesso!")
  } catch (e) {
    return res.status(404).json("Ocorreu um erro e a consulta não pôde ser marcada")
  }
}

const unscheduleAppointment = (req, res) => {
  const { id } = req.params 
  
  const marcada = consultasMarcadas.find(consulta => consulta.id === Number(id))

  if(!marcada) {
    return res.json("Consulta não encontrada")
  }

  try {
    consultasMarcadas = consultasMarcadas.filter(consulta => consulta.id !== Number(id))

    consultas = consultas.map(consulta => {
      if(consulta.especialidade === marcada.especialidade) {
        const lastId = consulta.datasDisponiveis[consulta.datasDisponiveis.length - 1]

        consulta.datasDisponiveis.push({id: lastId, data: marcada.data})      
  
        return consulta
      }
  
      return consulta
    })
  
    return res.json("Desmarcado com sucesso!")
  } catch (e) {
    return res.status(404).json("Houve um erro e a consulta não pôde ser desmarcada, tente novamente")
  }
}

const updateApointment = (req, res) => {
  const {id} = req.params

  try {

    const marcada = consultasMarcadas.find(consulta => consulta.id === Number(id))
  
    if(!marcada) {
      return res.status(404).json("Consulta não encontrada")
    }
    
    let data = null
    
    consultas.forEach(consulta => {
      if(consulta.especialidade === marcada.especialidade) {
        data = consulta.datasDisponiveis.find(openDate => openDate.id === Number(req.body.data) )
    
        if(data) {
          const lastId = consulta.datasDisponiveis[consulta.datasDisponiveis.length - 1].id
          consulta.datasDisponiveis = consulta.datasDisponiveis.filter(openDate => openDate.id !== data.id)
    
          consulta.datasDisponiveis.push({id: lastId, data: marcada.data})
        }
      }})
      
  
      const updatedApointment = {
        ...marcada,
        convenio: req.body.convenio,
        data: data.data,
      }
  
      consultasMarcadas = consultasMarcadas.map(consulta => {
        if(consulta.id === marcada.id) {
          consulta = updatedApointment
  
          return consulta
        }
        
        return consulta
      })
  
    return res.json(`Consulta para a especialidade ${marcada.especialidade} atualizada com sucesso!`)
  } catch(e) {
    return res.status(404).json("Ocorreu um erro e a consula não pôde ser marcada, tente novamente!")
  }
}


module.exports = {
  getEspecialities,
  getEspeciality,
  scheduleNewAppointment,
  unscheduleAppointment,
  updateApointment,
  getAppointments,
  getAppointment
}