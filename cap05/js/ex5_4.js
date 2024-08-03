alert ("Digite 0 para sair")

do {
    const num = Number(prompt("Número"))
    if (num == 0 || isNaN(num)){
        const sair = confirm("Confirma saída?")
        if (sair) {
            break
        } else {
            continue
        }
    }
    if (num % 2 == 0) {
        alert(`${num} é par e o dobro de ${num} é: ${num * 2}`)
    } else {
        alert(`${num} é ímpar e o triplo de ${num} é: ${num * 3}`)
    }
} while (true)
    alert ("Bye Bye...")