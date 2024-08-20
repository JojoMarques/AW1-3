var hoje = new Date();
var hora = hoje.getHours();
var mensagem = "";

const body = document.querySelector('body');

hora = prompt('digita a hora ai');

if (hora >= 6 && hora < 12) {
    mensagem = "Bom dia";
    body.style.backgroundColor = "beige";
    
}
else if (hora >= 12 && hora < 18) {
    mensagem = "Boa tarde";
    body.style.backgroundColor = "rgb(237, 176, 130)";

}
else if (hora >= 18) {
    mensagem = "Boa noite";
    body.style.backgroundColor = "rgb(42, 62, 116)";
    body.style['color'] = "white";
    
}

document.write(mensagem);

var dia  = parseInt(prompt('dia da semana'));
var m = '';

switch(dia){
    case 1:
        m = '2a-feira';
        break;
    case 2:
        m = '3a-feira';
        break;
    case 3:
        m = '4a-feira';
        break;
    case 4:
        m = '5a-feira';
        break;
    case 5:
        m = '6a-feira';
        break;
    default:
        m = 'fim de semana';
}

document.write(`<br>hoje é ${m}`);

var idade = prompt('idade');

(idade>=18)? document.write('<br>veio'): document.write('<br>novo');