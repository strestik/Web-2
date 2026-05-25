<?php
$jmeno = "";
$email = "";
$typy = "";
$poznamka = "";
$podminky = "Ne";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $jmeno = $_POST["jmeno"] ?? '';
    $email = $_POST["email"] ?? '';
    $typy = $_POST["typy"] ?? '';
    $poznamka = $_POST["poznamka"] ?? '';

    $podminky = isset($_POST["podminky"]) ? "Ano" : "Ne";
}

?>

<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <title>Kontakty</title>
</head>
<body>

    <h1>Odeslaná data z formuláře</h1>

    <p><strong>Uživatelské jméno:</strong> <?= htmlspecialchars($jmeno) ?></p>
    <p><strong>Email:</strong> <?= htmlspecialchars($email) ?></p>
    <p><strong>Typy sdělení:</strong> <?= htmlspecialchars($typy) ?></p>
    <p><strong>Sdělení:</strong> <?= htmlspecialchars($poznamka) ?></p>
    <p><strong>Souhlasím:</strong> <?= $podminky ?></p>
    <br>

    <a href="contact.html">← Zpět na formulář</a>

</body>
</html>