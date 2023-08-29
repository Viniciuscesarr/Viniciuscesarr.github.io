<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro</title>
</head>
<body>
    <?php 
    $nome = $_GET["name"];
    $sobrenome = $_GET["last_name"];
    echo "<h1>Olá $nome $sobrenome. Seu formulário foi enviado com sucessor! Apenas aguarde.</h1>";
    ?>
</body>
</html>