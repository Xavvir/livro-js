const form = document.querySelector("form")
const resp = document.querySelector("#outResp1")

form.addEventListener("submit", (e) =>{
    e.preventDefault()

    const num = +form.inNumero.value
    // let numDivisores = 0

    // for (let i = 1; i <= num; i++) {
    //     if (num % i == 0) {
    //         numDivisores++
    //         console.log(numDivisores)
    //     }        
    // }
    // if (numDivisores == 2) {
    //     resp.innerText = `${num} É primo \n\n Obs:(Um número primo é aquele que é dividido apenas por um e por ele mesmo.)`
    // } else {
    //     resp.innerText = `${num} Não é primo \n\n Obs:(Um número primo é aquele que é dividido apenas por um e por ele mesmo.)`
    // }

    let temDivisor = 0

    for (let i = 2; i <= num / 2 ; i++) {
        if (num % i == 0){
            temDivisor = 1
            console.log(temDivisor)
            break
        }
    }
    if(num > 1 && !temDivisor){
        resp.innerText = `${num} É primo`
    } else {
        resp.innerText = `${num} Não é primo`        
    }
})