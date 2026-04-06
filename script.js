async function treinarEPrever() {

    // Pegando elementos da tela
    const textoStatus = document.getElementById("status");
    const textoResultado = document.getElementById("resultado");

    // Pegando valor digitado pelo usuário
    const anosDigitados = Number(document.getElementById("anos").value);

    textoStatus.innerText = "Status: Treinando a IA...";

    // =========================
    // 1. CRIAR O MODELO (neurônio)
    // =========================
    const modelo = tf.sequential();
    modelo.add(tf.layers.dense({
        units: 1,
        inputShape: [1]
    }));

    // =========================
    // 2. COMPILAR O MODELO
    // =========================
    modelo.compile({
        loss: 'meanSquaredError',
        optimizer: 'sgd'
    });

    // =========================
    // 3. DADOS DE TREINO
    // X = anos de experiência
    // Y = salário (em milhares de R$)
    // =========================
    const anosExperiencia = tf.tensor2d([1, 2, 3, 4, 5, 6], [6, 1]);
    const salarios        = tf.tensor2d([2, 3, 4, 5, 6, 7], [6, 1]);

    // =========================
    // 4. TREINAMENTO
    // A IA aprende com os dados
    // =========================
    await modelo.fit(anosExperiencia, salarios, {
        epochs: 200
    });

    textoStatus.innerText = "Status: IA treinada!";

    // =========================
    // 5. PREVISÃO
    // =========================
    const previsao = modelo.predict(
        tf.tensor2d([anosDigitados], [1, 1])
    );

    // Convertendo resultado para número
    const salarioPrevisto = previsao.dataSync()[0];

    // Mostrando resultado na tela
    textoResultado.innerText =
        "Salário Previsto: R$ " + (salarioPrevisto * 1000).toFixed(2);
}
