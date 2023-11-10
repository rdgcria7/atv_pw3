<?php
// Obter dados do formulário
$usuario = $_POST['usuario'];
$senha = $_POST['senha'];

// Criar objeto XML
$xmlContent = "<?xml version='1.0' encoding='UTF-8'?>
<user>
    <usuario>$usuario</usuario>
    <senha>$senha</senha>
</user>";

// Definir o cabeçalho para indicar que a resposta é XML
header('Content-type: application/xml');

// Enviar o XML como resposta
echo $xmlContent;
?>
