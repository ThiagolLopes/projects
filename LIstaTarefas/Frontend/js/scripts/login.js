import { Login } from '../class/Login.js';

const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

const login = new Login(usuario, senha, botao, mensagem);
login.autenticar();