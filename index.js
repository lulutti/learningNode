const express = require("express"); // importando o express
const app = express(); // recebendo a instância do express dentro dessa variável

// Criando uma rota, precisa dizer qual url essa rota aponta (1º parâmetro), as rotas são caminhos para páginas/respostas diferentes na aplicação
app.get("/", (req, res) => { // a função é chamada toda vez que a rota é chamada, dentro do parâmetro recebemos informações da requisição e informações da resposta 
  res.send("bem vindo! :)"); // enviando uma resposta, toda rota precisa devolver uma resposta de alguma forma, a resposta pode ser uma página html, um json, xml, download, arquivo etc. Ele só consegue enviar apenas 1 resposta por rota e uma única vez.
});

app.get("/blog", (req, res) => {
  res.send("Bem vindo ao meu blog :B")
})

app.get("/canal/youtube", (req, res) => {
  res.send("Bem vindo ao meu canal :D")
})

// Abertura do servidor, normalmente nas últimas linhas 
app.listen(3000,(error) => { // Iniciando o servidor definindo a porta, a arrow function dentro é chamada sempre que o servidor é iniciado, caso ocorra algum erro recebemos nesse parâmetro
  if(error){
    console.log("Ocorreu um erro!"); // Caso ocorra o erro, apresentamos essa mensagem
  } else { // Caso não, exibimos a mensagem de sucesso
    console.log("Servidor iniciado com sucesso");
  }
}) 