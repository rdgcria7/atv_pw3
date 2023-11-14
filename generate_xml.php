<?php
// Obter dados do formulário
$username = $_POST['username'];
$password = $_POST['password'];

// Criar objeto XML
$xmlContent = "<?xml version='1.0' encoding='UTF-8'?>
<user>
    <username>$username</username>
    <password>$password</password>
</user>";

// Definir o cabeçalho para indicar que a resposta é XML
header('Content-type: application/xml');

// Enviar o XML como resposta
echo $xmlContent;
?>
