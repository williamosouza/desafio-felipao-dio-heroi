let xp = 0
let nivel = ""

while (xp <= 0) {
  xp = Math.floor(Math.random() * 10001);
  }

if (xp <= 1000){
    nivel = "FERRO"
}else if (xp > 1000 && xp <= 2000){
    nivel = "BRONZE"
}

console.log("Sua XP é: " xp)
console.log("O Herói Fulano está no nível de " nivel)