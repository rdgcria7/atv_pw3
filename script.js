function submitForm(event) {
    event.preventDefault();

    // Obter valores do formulário
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Ver se o login é válido
    if (username === "user" && password === "password") {
        // Criar objeto XML
        var xmlContent = `
            <user>
                <username>${username}</username>
                <password>${password}</password>
            </user>
        `;

        // Cria um objeto Blob para download
        var blob = new Blob([xmlContent], { type: "application/xml" });

        // Cria um link de download
        var link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "user_data.xml";
        link.click();
    } else {
        alert("Credenciais inválidas. Tente novamente.");
    }
}
