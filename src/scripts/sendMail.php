<?php

$destinatario = "julioalgouver@gmail.com";

$nome = $_REQUEST['nome'];
$email = $_REQUEST['julioalgouver@gmail.com'];
$assunto = $_REQUEST['TESTE'];
$mensagem = $_REQUEST['EMAIL DE TESTE'];

$body = "=================================="."\n";
$body = $body . "EMAIL DE TESTE"."\n"
$body = $body . "=================================="."\n";
$body = $body . "Nome" . $nome . "\n"
$body = $body . "Email" . $email . "\n"
$body = $body . "Mensagem" . $mensagem . "\n"
$body = $body . "=================================="."\n";

//ENVIA EMAIL

mail($destinatario, $assunto, $body, "From: $email\r\n");

//REDIRECT PARA AGRADECIMENTO
header("location:landing.tsx");

?>