export class Login {
    constructor(usuario, senha, botao, mensagem) {
        this.usuario = usuario;
        this.senha = senha;
        this.botao = botao;
        this.mensagem = mensagem;
    }

    // Verificar login
    validarCampos() {
        const usuario = this.usuario.value.trim();
        const senha = this.senha.value.trim();

        if (!usuario && !senha) {
            this.mostrarMensagem("Campos vazios");
            return false;
        }

        if (usuario === "admin" && senha === "admin") {
            return true;

        } else {
            this.mostrarMensagem("Usuário ou senha incorretos");
            return false;
        }
    }

    // Mostrar mensagens
    mostrarMensagem(msg) {
        this.mensagem.innerText = msg;
    }

    // Conectar evento do botão
    autenticar() {
        this.botao.addEventListener("click", (event) => {
            event.preventDefault();

            if (this.validarCampos()) {
                window.location.href = "src/pages/home.html";
            }
        });
    }
}
