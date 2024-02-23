<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crutt Bank</title>
    <style>
        /* Coloque seu CSS aqui */
    </style>
</head>
<body>
    <div id="login" style="display:block;">
        <label for="conta">Número da conta:</label>
        <input type="text" id="conta"><br>
        <label for="senha">Senha:</label>
        <input type="password" id="senha"><br>
        <button onclick="login()">Login</button>
    </div>

    <div id="operacoes" style="display:none;">
        <button onclick="verificarSaldo()">Verificar Saldo</button><br>
        <label for="valor_deposito">Valor a depositar:</label>
        <input type="text" id="valor_deposito"><button onclick="realizarDeposito()">Depósito</button><br>
        <label for="valor_saque">Valor a sacar:</label>
        <input type="text" id="valor_saque"><button onclick="realizarSaque()">Saque</button><br>
        <button onclick="mostrarExtrato()">Extrato</button><br>
        <button onclick="logout()">Logout</button>
    </div>

    <script>
        // Coloque seu JavaScript aqui
    </script>
</body>
</html>
