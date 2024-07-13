const bairro = prompt("Digite o bairro: ");

let taxaDeEntrega;

switch (bairro) {
  case "Centro":
    taxaDeEntrega = 5.0;
    break;
  case "Fragata":
  case "Três Vendas":
    taxaDeEntrega = 7.0;
    break;
  case "Laranjal":
    taxaDeEntrega = 10.00
    break;
  default:
    taxaDeEntrega = 8.00;
}

alert(`Taxa R$ ${taxaDeEntrega.toFixed(2)}`)
