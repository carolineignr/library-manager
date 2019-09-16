# Library Manager
<p>Esta aplicação foi desenvolvida utilizando Node.js v10.16.3 e para renderizar a página foi utilizado a engine EJS v2.6.1 e o framework Express v4.17.1.<p>
  
 <p> Para rodar a aplicação é necessário ter o Node.js instalado na máquina.<p>
 
## Como executar
<p>Para executar a aplicação basta acessar o diretório raiz e instalar as depencências com npm install e em seguida rodar o código com npm start. A aplicação estará disponível em localhost:3000.<p>

## Como configurar o arquivo config.js
<p>Para configurar como deve deve ser a ordenação ou adicionar mais livros à coleção, basta editar o arquivo config.js. <p>
<p>Em "props", cada objeto deve ter a propriedade "name" onde o valor deve ser uma das opções de propriedades descritas em "books" e a ordenação que deverá ser feita com a propriedade "order" onde o valor deve ser "asc" ou "desc". Caso não possua a propriedade "order", esse valor será encarado como NULL, e caso o valor de order seja "", isso será encarado como vazio.<p>
  
  <p> Após realizar as alterações nesse arquivo, é necessário reiniciar a aplicação e atualizar a página web. <p>
  
<p>Um exemplo de configuração:<p>

    {
      "props": [{"name":"title", "order":"asc"}],
      "books": [
      {
        "number": 1,
        "title": "Java How To Program",
        "author": "Deitel & Deitel",
        "editionYear": 2007
      }
     ]
    }
