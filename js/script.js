// ==== Café Byte ====

// ==== Saudação e "aberto agora" -----
console.log("O script do Café Byte foi carregado!");
const agora = new Date();
const hora = getHours();
const diaDaSemana = agora.getDay();

console.log('Agora são ' + hora + ' horas. Dia da semana: ' + diaDaSemana);

function saudacao(h) {
    if (h < 12) {
        return "Bom dia!";
    } else if (h < 18) {
        return "Boa tarde!";
    } else {
        return "Boa noite!";
    }
}

document.querySelector("#saudacao").textContent = saudacao(hora);

function estaAbertoAgora(dia, h){
    if (dia === 0) {
        return false;  // Domingo fechado
    }else if (dia === 6) {
        return h >= 8 && h < 18;  // Sábado aberto das 8h às 18h
    }else {
        return h >= 7 && h < 20;  // Segunda a sexta aberto das 7h às 20h
    }
}

const avisoStatus = document.querySelector("#status");

if (estaAbertoAgora(diaDaSemana, hora)) {
    avisoStatus.textContent = "Estamos abertos agora!";
    avisoStatus.classList.add("aberto-agora");
}else{
    avisoStatus.textContent = "Estamos fechados agora. Volte mais tarde!";
    avisoStatus.classList.add("fechado-agora");
}

