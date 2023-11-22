let xp = 0
let nivel = ""
let nomeDoHeroi = "Wizard"
//supondo uma condição de Heróis salvos em um perfil. Você teria a opção de marcar algum dos seus heróis salvos, me retornando um XP acumulado.
//São eles: "Felipão da DIO" - "Hunter" - "Wizard" - "Knight" - "Elf"

switch (nomeDoHeroi){
    case "Felipão de DIO":
        xp = 10001;
    break;
    case "Elf":
        xp = 500;
    break;
    case "Hunter":
        xp = 2066
    break;
    case "Wizard":
        xp = 8128
    break;
    case "Knight":
        xp = 9500
    break
}

if (xp <= 1000){
    nivel = "FERRO"
}else if (xp > 1000 && xp <= 2000){
    nivel = "BRONZE"
}else if (xp > 2001 && xp <= 5000){
    nivel = "PRATA"
}else if (xp > 5001 && xp <= 6000){
    nivel = "OURO"
}else if (xp > 6001 && xp <= 7000){
    nivel = "PLATINA"
}else if (xp > 7001 && xp <= 9000){
    nivel = "ASCENDENTE"
}else if (xp > 9001 && xp <= 10000){
    nivel = "IMORTAL"
}else if (xp <= 10001){
    nivel = "RADIANTE"
}

console.log("XP atual: " + xp) 
console.log("O Herói " + nomeDoHeroi + " está no nível de " + nivel)