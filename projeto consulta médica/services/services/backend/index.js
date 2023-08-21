const express = require("express")
const app = express()
const cors = require("cors");
const controladores = require("./controller")
app.use(cors());

app.use(express.json());

app.listen(80, () => console.log('Rodando na porta 80'))
app.get("/api/consultas", controladores.getEspecialities)
app.get("/api/consultas/:id", controladores.getEspeciality)
app.get("/api/marcadas", controladores.getAppointments)
app.get("/api/consultas/marcadas/:id", controladores.getAppointment)
app.post("/api/consultas/", controladores.scheduleNewAppointment)
app.put("/api/consultas/marcadas/:id", controladores.updateApointment)
app.delete("/api/consultas/:id", controladores.unscheduleAppointment)