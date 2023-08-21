
async function buscaConsultas(){
    fetch("http://localhost:80/api/consultas")
    .then(res => res.json())
    .then(dados =>{
        let consultas = ""
        console.log(dados)
        for ( const y of dados){
            console.log(y)
            consultas += `<div class="appointments">
                <p>${y.especialidade}</p>
                <p>${y.data}</p>
                <button>Editar</button>
                <button>Desmarcar</button>
            </div>`
        }

        console.log(document.getElementById("teste"))
        
        document.getElementById("teste").innerHTML = consultas

    })
}

async function buscaEspecialidades(){
    fetch("http://localhost:80/api/especialidades")
    .then(res => res.json())
    .then(data => {
        let especialidades =""
        console.log(document.getElementById("teste"))
        for ( const x of data){
        especialidades += `<option value='${x.id}'>${x.especialidade} </option>`
        }
        
        document.getElementById("especialities").innerHTML = especialidades
    })
}

async function buscaHorarios(){
    fetch(`http://localhost:80/api/especialidades/${Number(document.getElementById("especialities").value)}`)
    .then(res => res.json())
    .then(data=>{
        await buscaEspecialidades()
        
        let horarios =""
        console.log(data)
        for ( const x of data.datasDisponiveis){
            horarios+=`<option value="${x.id}">${x.data}</option>`
        }
        console.log(horarios)
        document.getElementById("schedule_dates").innerHTML = horarios
    })
}

