const express = require("express"); // importando o express
const app = express(); // recebendo a instância do express dentro dessa variável

// Criando uma rota, precisa dizer qual url essa rota aponta (1º parâmetro), as rotas são caminhos para páginas/respostas diferentes na aplicação
app.get("/", (req, res) => { // a função é chamada toda vez que a rota é chamada, dentro do parâmetro recebemos informações da requisição e informações da resposta 
  res.send("bem vindo! :)"); // enviando uma resposta, toda rota precisa devolver uma resposta de alguma forma, a resposta pode ser uma página html, um json, xml, download, arquivo etc. Ele só consegue enviar apenas 1 resposta por rota e uma única vez.
});


// req => dados enviados pelo usuário, res => resposta que será enviada para o usuário

app.get("/blog/:artigo?", (req, res) => {// para criar um parâmetro não obrigatório, colocamos um ? no final, isso possibilita que mesmo sem declarar esse parâmetro eu consiga ir para a rota blog
  let artigo = req.params.artigo;

  if(artigo){ // se existir o parâmetro artigo então exibo a mensagem com o artigo
    res.send(`Artigo ${artigo}`);
  }else{ // Se não, uso a mensagem inicial
    res.send("Bem vindo ao meu blog :B");
  }

})

// query params - não muito utilizado, por ser muito aberto, caiu em desuso
app.get("/canal/youtube", (req, res) => {
  let canal = req.query["canal"]; // Dessa o usuário consegue passar o parâmetro colocando ex: canal/youtube?canal=vevo 

  if(canal){
    res.send(canal) // aqui respondemos com esse novo parâmetro
  } else {
    res.send("Nenhum canal fornecido")
  }
  
})

app.get("/ola/:nome/:sobrenome",(req, res) => { // o : cria um parâmetro na rota
  let nome = req.params.nome; // aqui passo o nome do parâmetro depois req.params para acessar os dados enviados pela requisição nesse parâmetro
  let sobrenome = req.params.sobrenome; 
  res.send(`olá ${nome} ${sobrenome}!`); // concatenei em template strings, porém poderia ter passado o req.params dentro do send, sem a necessidade de atribuir ele a uma variável

})

// Abertura do servidor, normalmente nas últimas linhas 
app.listen(3000,(error) => { // Iniciando o servidor definindo a porta, a arrow function dentro é chamada sempre que o servidor é iniciado, caso ocorra algum erro recebemos nesse parâmetro
  if(error){
    console.log("Ocorreu um erro!"); // Caso ocorra o erro, apresentamos essa mensagem
  } else { // Caso não, exibimos a mensagem de sucesso
    console.log("Servidor iniciado com sucesso");
  }
}) 