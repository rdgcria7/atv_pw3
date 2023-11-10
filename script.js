function submitForm(event) {
    event.preventDefault();

    // Obter valores do formulário
    var username = document.getElementById("username").value;
    var senha = document.getElementById("senha").value;

    // Verificar se o login é válido (pode ser mais complexo em uma aplicação real)
    if (username === "user" && senha === "senha") {
        // Criar objeto XML
        var xmlContent = `
            <user>
                <username>${username}</username>
                <senha>${senha}</senha>
            </user>
        `;

        // Criar um objeto Blob para download
        var blob = new Blob([xmlContent], { type: "application/xml" });

        // Criar um link de download e disparar o clique
        var link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "user_data.xml";
        link.click();
    } else {
        alert("Credenciais inválidas. Tente novamente.");
    }
}
