* Documentação API Marcação de consulta *

Se alguma rota der erro, o retorno virá com um status 404. Você consegue captar o o status, e se for 404 você pode dar um alerta na mensagem.

** Rotas:

* BASE: http://localhost:80/api
* GET:
  '/consultas' - Retorna uma lista todas as especialidades de marcação de consultas no formato abaixo:
     [{
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
      }]

  '/consultas/:id' - Retorna a especialidade de acordo com o id no formato abaixo:
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
  }

  '/marcadas' - Retorna uma lista de todas as consultas marcadas no formato abaixo: 
    array = [{
      id: 1,
      nome: "Fernanda",
      telefone: "71987799291",
      convenio: false,
      data: "04/05/2023 10:00",
      especialidade: "Ginecologista"
    }]

  '/consultas/marcadas/:id' - Retorna uma consulta de acordo com o id no formato abaixo:
     {
      id: 1,
      nome: "Fernanda",
      telefone: "71987799291",
      convenio: false,
      data: "04/05/2023 10:00",
      especialidade: "Ginecologista"
    }

* POST:
  '/consultas' - Cria uma nova consulta. Os dados enviados precisam estar no formato abaixo:
    {
      nome: string,
      telefone: string,
      convenio: boolean,
      data: id da data,
      especialidade: especialidade existente em string
    }

* PUT:
  '/consultas/marcadas/:id' - Atualiza uma consulta de acordo com o id. Os dados precisam estar neste formato:
      {
        convenio: boolean,
        data: id da data
      }

* DELETE:
  '/consultas/:id' - Deleta a consulta marcada de acordo com o id