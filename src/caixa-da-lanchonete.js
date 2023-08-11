/**
 * Classe CaixaDaLanchonete representa uma caixa registradora de uma lanchonete.
 */
class CaixaDaLanchonete {
    /**
     * Calcula o valor total da compra com base nos itens escolhidos e na forma de pagamento.
     * @param {string} formaDePagamento - A forma de pagamento escolhida (debito, credito, dinheiro).
     * @param {Array} itens - Array contendo os itens da compra no formato ["item,quantidade", ...].
     * @returns {string} Uma string contendo o valor total formatado da compra.
     */
    calcularValorDaCompra(formaDePagamento, itens) {
        const precos = {
            cafe: 3.00,
            chantily: 1.50,
            suco: 6.20,
            sanduiche: 6.50,
            queijo: 2.00,
            salgado: 7.25,
            combo1: 9.50,
            combo2: 7.50,
        };

        // Verifica se a forma de pagamento é válida
        const formasDePagamentoValidas = ['debito', 'credito', 'dinheiro'];
        if (!formasDePagamentoValidas.includes(formaDePagamento)) {
            return "Forma de pagamento inválida!";
        }

        // Verifica se há itens no carrinho de compra
        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }

        let valorTotal = 0;
        let temPrincipal = false;
        let temSanduiche = false;
        let temChantily = false;
        let temQueijo = false;

        // Itera pelos itens do carrinho de compra
        for (const itemQuantidade of itens) {
            const [item, quantidade] = itemQuantidade.split(',');
            const precoItem = precos[item];

            // Verifica se o item é válido
            if (!precoItem) {
                return "Item inválido!";
            }

            // Verifica se a quantidade é válida
            if (quantidade <= 0) {
                return "Quantidade inválida!";
            }

            // Calcula o valor total da compra
            valorTotal += precoItem * quantidade;

            // Verifica se o item é um produto principal (café ou sanduíche)
            if (item === 'cafe' || item === 'sanduiche') {
                temPrincipal = true;
                if (item === 'sanduiche') {
                    temSanduiche = true;
                }
            }

            // Verifica se o item é chantily ou queijo e se tem o principal
            if ((item === 'chantily' || item === 'queijo') && !temPrincipal) {
                return "Item extra não pode ser pedido sem o principal";
            }

            // Verifica a existencia de chantily
            if (item === 'chantily') {
                temChantily = true;
            }
            // Verifica a existencia de queijo
            if (item === 'queijo') {
                temQueijo = true;
                // Verifica se o queijo está acompanhado de sanduíche
                if (!temSanduiche) {
                    return "Item extra não pode ser pedido sem o principal";
                }
            }
        }

        // Verifica se há chantily ou queijo e se a forma de pagamento é débito, sem principal(sanduiche)
        if ((temChantily || temQueijo) && formaDePagamento === 'debito' && !temPrincipal) {
            return "Item extra não pode ser pedido sem o principal";
        }

        // Calcula o valor total com taxas/descontos de acordo com a forma de pagamento
        if (formaDePagamento === 'credito') {
            // Adiciona 3% de taxa para pagamento com crédito
            valorTotal *= 1.03;
        } else if (formaDePagamento === 'dinheiro') {
            // Aplicar desconto de 5% para pagamento em dinheiro
            valorTotal *= 0.95;
        }

        // Formata e retorna o valor total da compra
        return `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
    }
}

// Exporta a Classe CaixaDaLanchonete para que seja possível utilizar o método em outros locais da aplicação
export { CaixaDaLanchonete };