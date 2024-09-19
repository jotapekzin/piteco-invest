let cpcoins = 1000; // Saldo inicial de Cpcoins

// Função para gerar preço aleatório de ações
function getStockPrice() {
    return Math.floor(Math.random() * (100 - 10 + 1)) + 10; // Preço entre 10 e 100
}

// Função de investimento
function invest() {
    const stock = document.getElementById('stock').value;
    const amount = parseInt(document.getElementById('amount').value);

    if (isNaN(amount) || amount <= 0) {
        document.getElementById('result').innerHTML = "Por favor, insira um valor válido.";
        return;
    }

    if (amount > cpcoins) {
        document.getElementById('result').innerHTML = "Saldo insuficiente!";
        return;
    }

    const stockPrice = getStockPrice(); // Obter preço aleatório da ação
    const change = Math.random() < 0.5 ? -1 : 1; // Ação sobe ou desce
    const finalStockPrice = stockPrice + (change * Math.floor(Math.random() * 20)); // Variação do preço

    // Atualiza saldo de acordo com o resultado
    if (finalStockPrice > stockPrice) {
        const profit = amount * (finalStockPrice - stockPrice) / stockPrice;
        cpcoins += profit;
        document.getElementById('result').innerHTML = `A ação subiu! Você ganhou ${profit.toFixed(2)} Cpcoins!`;
    } else {
        const loss = amount * (stockPrice - finalStockPrice) / stockPrice;
        cpcoins -= loss;
        document.getElementById('result').innerHTML = `A ação caiu! Você perdeu ${loss.toFixed(2)} Cpcoins.`;
    }

    // Atualiza o saldo na tela
    document.getElementById('cpcoins').textContent = cpcoins.toFixed(2);
}