const express = require("express")
const app = express()
const cors = require("cors");
const controladores = require("./controller")
app.use(cors());

app.use(express.json());

app.listen(80, () => console.log('Rodando na porta 80'))
app.get("/api/especialidades", controladores.getEspecialities)
app.get("/api/especialidades/:id", controladores.getEspeciality)
app.get("/api/consultas", controladores.getAppointments)
app.get("/api/consultas/:id", controladores.getAppointment)
app.post("/api/marcar/", controladores.scheduleNewAppointment)
app.put("/api/consultas/:id/atualizar", controladores.updateApointment)
app.delete("/api/consultas/:id/desmarcar", controladores.unscheduleAppointment)