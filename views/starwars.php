<!DOCTYPE html>

<head>
    <title>STARWARS</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="public/js/starwars.js"></script>
    <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
    <style>
      * {
        font-family: Roboto;
      }
    </style>
</head>

<body>  
    <h1>STARWARS!</h1>
    <p>Olá, os objetivos deste projeto são:</p>
    <ul style="text-align: justify; width: 50%;">
        <li>
            Demonstrar com Jquery e PHP 7 a utilização de uma API Rest do Star Wars. Toda a documentação pode ser encontrada no link <a target='_blank' href='https://swapi.co'>AQUI</a>.
        </li>
        <li>Aplicar MVC sem a utilização de <b><u>nenhum</u></b> framework</li>
    </ul>
    <h3> Requisitos: </h3>
    <div style="text-align: justify; width: 50%;">
        <ul>
            <li>Ao clicar em cada botão, realizar uma consulta levando em consideração a entrada do usuário (quando necessário)</li>
            <li>Resultado deve ser impresso na tabela "Resultado" abaixo</li>
            <li>Utilizar CURL na parte do servidor para obter os resultados</li>
            <li>Usar jQuery para se comunicar com a controller e manipular o resultado obtido, organizando a tabela de resultado</li>
            <li><b>EXTRA</b>: Calcular a média (em dias) do atributo 'consumables' de todas as starships.
              <ul>
                <li>O atributo 'consumables' é disponibilizado pela API em formato de data por extenso, exemplo: 6 years ou 3 months.</li>
                <li>Calcular a média e apresentá-la em dias.</li>
              </ul>
            </li>
        </ul>
    </div>   
    
    <hr>

    <div>
        <label>Dado de Entrada</label>
        <br>
        <input id="user_text" type='text' placeholder="entrada do usuario">
        <br>
        <br>
        <button id="people"> Buscar Todas as Pessoas </button>
        <button id="planet"> Buscar Planetas por Nome </button>
        <button id="starships"> Buscar Nave Por ID </button>
        <button id="average"> Calcular Média de CONSUMABLES</button>
    </div>

    <hr>
    <h3 id="notice" style="display: none; color: #FF0000;">Necessário informar o ID da nave</h3>
    <h2>Resultado</h2>
    <div id="content">
       
    </div>
</body>
