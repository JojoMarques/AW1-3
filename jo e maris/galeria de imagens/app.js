const body = document.getElementById('body');
const header = document.getElementById('header');
const footer = document.getElementById('footer');

// botões
const botao_gato = document.getElementById('botao_muda_gato');
const botao_credito = document.getElementById('botao_credito');

const credito = document.getElementById('credito');

const foto_gato =  document.getElementById('foto_gato');
const foto_gato_pequeno =  document.getElementById('foto_gato_pequeno');

// lista de fotos
const fotos = ['imagens/gato1.jpeg', 'imagens/gato2.jpeg', 'imagens/gato3.jpg', 'imagens/gato4.jpg', 'imagens/gato5.webp', 'imagens/gato6.jpg'];
let index =0;

const modo = document.getElementById('modo');

const bem_vindo = document.getElementById('bem_vindo');

// alert
alert('Bem vindo a nossa galeria de fotos!');

// colocando nome personalizado no início da pagina
// exibe "Olá, [nome]!"
// prompt
var nome = prompt('Digite seu nome:');
bem_vindo.innerHTML = `Olá, ${nome}!`;

// console
console.log('adicionando saudação na tela. . .');

// capturando a data do sistema
let hoje = new Date();
let horario = hoje.getHours();

// console
console.log('obtendo data do sistema. . .');

// mudando cor da página de acordo com o horário
if (horario >= 18) { // noite

    // console
    console.log('mudando para modo noturno. . .');
    
    header.style.backgroundColor = 'rgb(38, 57, 146)';

    footer.style.backgroundColor = 'rgb(38, 57, 146)';

    body.style.backgroundColor = 'cornflowerblue';

    botao_gato.style.backgroundColor = 'rgb(19, 69, 163)';
    botao_credito.style.backgroundColor = 'rgb(19, 69, 163)';

} else { // dia

    // console
    console.log('mudando para modo claro. . .');

    header.style.backgroundColor = 'rgb(146, 81, 38)';

    footer.style.backgroundColor = 'rgb(146, 81, 38)';

    body.style.backgroundColor = 'rgb(237, 182, 100)';

    botao_gato.style.backgroundColor = 'rgb(175, 103, 21)';
    botao_credito.style.backgroundColor = 'rgb(175, botao_gato103, 21)';

}

// função para mudar a foto
function muda_foto() {
    // console
    console.log('mudando a foto . . .');

    index = (index == 5) ? 0 : index + 1;

    foto_gato.setAttribute('src', fotos[index]);
}

// função para mostrar as autoras do site
function mostra_credito() {
    // console
    console.log('mostrando os créditos . . .');

    credito.innerHTML = 'Desenvolvido por:<br>Marisa Mayumi Morita Ouchi (SP3089673) &copy;<br>e Jossana Kelly Tavares Marques (SP3088308) &copy;';

    botao_credito.style.display = 'none';

}

let index2 =0;

// função anônima do gato que muda sozinho
setInterval(function () {
    index2 = (index2 == 5) ? 0 : index2 + 1;

    foto_gato_pequeno.setAttribute('src', fotos[index2]);
}, 1000);