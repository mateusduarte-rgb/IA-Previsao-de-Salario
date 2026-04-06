# 💼 Previsão de Salário com IA

Projeto desenvolvido como atividade prática de Machine Learning com **TensorFlow.js**, adaptado a partir de um código base fornecido em aula.

## 📌 Sobre o projeto

A aplicação utiliza uma rede neural simples para prever o **salário estimado** de uma pessoa com base nos seus **anos de experiência profissional**. O modelo é treinado diretamente no navegador, sem necessidade de servidor ou instalação.

## 🔄 O que foi alterado em relação ao código original

O código original previa **notas de alunos com base em horas de estudo**. As seguintes adaptações foram feitas para o novo tema:

### 🏷️ Título e textos
| Elemento | Original | Adaptado |
|---|---|---|
| Título da página (`<title>`) | Aula de ML Prática | Previsão de Salário com IA |
| Título visível (`<h2>`) | Previsão de Notas (IA de verdade) | Previsão de Salário (IA de verdade) |
| Texto explicativo (`<p>`) | Digite as horas de estudo para prever a nota | Digite os anos de experiência para prever o salário |
| Mensagem do resultado | Nota Prevista: X | Salário Previsto: R$ X |

### 🧩 HTML
| Elemento | Original | Adaptado |
|---|---|---|
| `id` do input | `horas` | `anos` |
| `placeholder` do input | Ex: 5 | Ex: 3 |

### 🧠 JavaScript — Variáveis
| Original | Adaptado | Descrição |
|---|---|---|
| `horasDigitadas` | `anosDigitados` | Valor inserido pelo usuário |
| `dadosEntrada` | `anosExperiencia` | Tensor com os dados de entrada (X) |
| `dadosSaida` | `salarios` | Tensor com os dados de saída (Y) |
| `valorPrevisto` | `salarioPrevisto` | Resultado da previsão do modelo |

### 📊 Dados de treino
Os dados foram substituídos para refletir uma relação entre anos de experiência e salário (em milhares de R$):

| Anos de experiência | Salário aproximado |
|---|---|
| 1 ano | R$ 2.000 |
| 2 anos | R$ 3.000 |
| 3 anos | R$ 4.000 |
| 4 anos | R$ 5.000 |
| 5 anos | R$ 6.000 |
| 6 anos | R$ 7.000 |

> O número de pares de treino também foi ampliado de **4 para 6**, para melhorar a aprendizagem do modelo.

### ✅ O que foi mantido
A estrutura principal do código foi preservada integralmente:
- Criação do modelo sequencial com `tf.sequential()`
- Camada densa com `tf.layers.dense()`
- Compilação com `loss: 'meanSquaredError'` e `optimizer: 'sgd'`
- Treinamento com `modelo.fit()` por 200 épocas
- Previsão com `modelo.predict()`

## 🚀 Como usar

1. Faça o download dos arquivos `index.html` e `script.js`
2. Coloque os dois arquivos na **mesma pasta**
3. Abra o `index.html` em qualquer navegador moderno
4. Digite um número de anos de experiência e clique em **Treinar e Prever**

> Não é necessário instalar nada. O TensorFlow.js é carregado automaticamente via CDN.

## 🤖 Uso de IA

Este projeto foi adaptado com apoio de IA (Claude), utilizada para:
- Sugerir nomes de variáveis mais adequados ao novo tema
- Ajudar a trocar os textos da interface
- Definir dados de treino coerentes com o contexto de salários
- Revisar e garantir que o código continuasse funcionando corretamente

## 🛠️ Tecnologias

- HTML5
- JavaScript (ES6+)
- [TensorFlow.js](https://www.tensorflow.org/js)
