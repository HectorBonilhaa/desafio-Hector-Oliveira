// Importando a classe CaixaDaLanchonete do arquivo caixa-da-lanchonete.js
import { CaixaDaLanchonete } from "./caixa-da-lanchonete.js";

// Exemplo 1: Compra de chantily sem café
const compra1 = new CaixaDaLanchonete()
    .calcularValorDaCompra('debito', ['chantily,1']);

// Deve imprimir: "Item extra não pode ser pedido sem o principal"
console.log("Compra de 1 chantily sem café = ", compra1, "\n");

// Exemplo 2: Compra de 1 queijo sem sanduiche
const compra2 = new CaixaDaLanchonete()
    .calcularValorDaCompra('debito', ['queijo,1']);

// Deve imprimir: "Item extra não pode ser pedido sem o principal"
console.log("Compra de 1 queijo sem sanduiche = ", compra2, "\n");

// Exemplo 3: Compra de 1 café com 1 chantily
const compra3 = new CaixaDaLanchonete()
    .calcularValorDaCompra('debito', ['cafe,1', 'chantily,1']);

// Deve imprimir: "R$ 4,50"
console.log("Compra de 1 café com 1 chantily = ", compra3, "\n");

// Exemplo 4: Compra de 1 sanduiche com 1 queijo
const compra4 = new CaixaDaLanchonete()
    .calcularValorDaCompra('debito', ['sanduiche,1', 'queijo,1']);

// Deve imprimir: "R$ 8,50"
console.log("Compra de 1 sanduiche com queijo = ", compra4, "\n");

// Exemplo 5: Compra de 1 combo e 2 cafés
const compra5 = new CaixaDaLanchonete()
    .calcularValorDaCompra('credito', ['combo1,1', 'cafe,2']);

// Deve imprimir: "R$ 15,96"
console.log("Compra de 1 combo1 e 2 cafés = ", compra5, "\n");

// Exemplo 6: Compra de 3 sanduiches com 1 queijo extra e 2 cafés com 1 chantily
const compra6 = new CaixaDaLanchonete()
    .calcularValorDaCompra('dinheiro', ['sanduiche,3', 'queijo,1', 'cafe,2', 'chantily,1']);

// Deve imprimir "R$ 27,55" 
console.log("Compra de 3 sanduiches(1 extra), 2 cafés(1 extra) = ", compra6, "\n");

// Exemplo 7: Compra de 2 combo1 com pagamento inválido 
const compra7 = new CaixaDaLanchonete()
    .calcularValorDaCompra('pix', ['combo1,2']);

// Deve imprimir "Forma de pagamento inválida" 
console.log("Compra de 2 combos1, pagando no pix = ", compra7, "\n");

// Exemplo 8: Compra de 1 café através do debito
const compra8 = new CaixaDaLanchonete()
    .calcularValorDaCompra('debito', ['cafe,1']);

// Deve imprimir "R$ 3,00" 
console.log("Compra de 1 café no débito = ", compra8, "\n");

// Exemplo 9: Compra de 1 café através do credito
const compra9 = new CaixaDaLanchonete()
    .calcularValorDaCompra('credito', ['cafe,1']);

// Deve imprimir "R$ 3,09" 
console.log("Compra de 1 café no crédito = ", compra9, "\n");

// Exemplo 10: Compra de 1 café através do credito
const compra10 = new CaixaDaLanchonete()
    .calcularValorDaCompra('dinheiro', ['cafe,1']);

// Deve imprimir "R$ 2,85" 
console.log("Compra de 1 café no dinheiro = ", compra10, "\n");

// Exemplo 11: Compra de 1 café através do dinheiro
const compra11 = new CaixaDaLanchonete()
    .calcularValorDaCompra('dinheiro', ['brioche,1']);

// Deve imprimir "Item inválido" 
console.log("Compra de 1 brioche no dinheiro = ", compra11, "\n");