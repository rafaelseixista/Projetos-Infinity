fetch("http://localhost:80/api/consultas")
.then(res => res.json())
.then(data => console.log(data))