# 🎮 Tic Tac Toe Special (Jogo da Velha 7x7)

Uma versão estendida e estratégica do clássico Jogo da Velha (Tic-Tac-Toe), desenvolvida com **JavaScript puro (Vanilla JS)**. O jogo se passa em uma grade ampliada de **7x7** células, com objetivo de conectar **4 símbolos em linha**, desafiando uma Inteligência Artificial equipada com algoritmos de busca em árvore de decisão (**Minimax** e **Alpha-Beta Pruning**).

---

## 📝 Descrição

O **Tic Tac Toe Special** eleva o desafio do jogo da velha tradicional (3x3 com 3 em linha) para uma disputa mais tática em um tabuleiro 7x7, onde o objetivo é alinhar 4 peças consecutivas (horizontal, vertical ou diagonal). A aplicação opera 100% no navegador (client-side) e implementa algoritmos de IA clássicos da Ciência da Computação, permitindo ao jogador alternar entre o algoritmo **Minimax** tradicional e a versão otimizada com **Poda Alfa-Beta (Alpha-Beta Pruning)**, além de configurar o nível de profundidade da busca.

---

## 🎯 Propósito

Demonstrar a aplicação prática de algoritmos clássicos de tomada de decisão e Inteligência Artificial em jogos de tabuleiro, evidenciando como a técnica de **Poda Alfa-Beta** otimiza o algoritmo **Minimax** ao podar ramificações desnecessárias da árvore de busca. Além disso, o projeto reforça o uso de manipulação direta da árvore DOM e estruturação modular com JavaScript moderno sem o uso de frameworks.

---

## 🏆 Objetivo

Proporcionar uma experiência interativa e educativa na qual o usuário possa:
- Jogar contra uma inteligência artificial em um tabuleiro expandido (7x7 com 4 em linha).
- Comparar o comportamento e tempo de resposta dos algoritmos **Minimax** e **Alpha-Beta**.
- Ajustar níveis de dificuldade/profundidade de análise da IA (níveis 1 a 3).
- Jogar escolhendo livremente o símbolo inicial (**X** ou **O**).

---

## 👥 Público-alvo

- **Estudantes e Entusiastas de IA e Ciência da Computação**: Interessados em visualizar o funcionamento prático dos algoritmos Minimax e Poda Alfa-Beta.
- **Desenvolvedores Web**: Que buscam exemplos de manipulação de matrizes bidimensionais, renderização de tabelas e lógica de jogos em Vanilla JavaScript.
- **Jogadores e Entusiastas de Jogos de Tabuleiro**: Interessados em variantes estratégicas como Conecta 4, Gomoku e Jogo da Velha ampliado.

---

## ⚙️ Requisitos Funcionais

- **Tabuleiro Dinâmico 7x7**: Renderização de uma matriz de 49 casas via tabela HTML gerada programaticamente.
- **Regra Especial de Vitória (4 em linha)**: Validação em tempo real para sequências contínuas de 4 símbolos iguais nas direções horizontal, vertical e ambas as diagonais.
- **Seleção de Símbolo**: Escolha do símbolo do jogador humano (**X** ou **O**), atribuindo automaticamente o símbolo oposto à IA.
- **Seleção de Algoritmo de IA**: Opção de alternar entre o algoritmo **Minimax** convencional e o algoritmo **Alpha-Beta Pruning**.
- **Controle de Profundidade (Dificuldade)**: Configuração do nível de profundidade máxima de busca da árvore da IA (1 a 3).
- **Destaque Visual de Fim de Partida**:
  - Destaque em **azul** nas casas vencedoras quando o jogador ganha.
  - Destaque em **vermelho** nas casas vencedoras quando a IA ganha.
  - Destaque em **verde** em todo o tabuleiro em caso de empate.
- **Mensagem de Status**: Exibição em destaque de avisos de desfecho da partida (*You Win!*, *AI Wins!*, *Draw!*).
- **Reinicialização da Partida**: Botão **Replay** para limpar o tabuleiro e redefinir o estado a qualquer momento.

---

## 🚀 Requisitos Não Funcionais

- **Arquitetura 100% Client-Side**: Não requer servidor back-end ou banco de dados; executa diretamente no navegador.
- **Zero Dependências Externas**: Construído puramente com HTML5, CSS3 e JavaScript ES6+.
- **Código Modularizado**: Separação clara das responsabilidades em módulos de renderização (`renderBoard.js`), inteligência artificial (`minimax.js`, `alphabeta.js`) e gerenciamento do jogo (`ticTacToe.js`).
- **Compatibilidade Multiplataforma**: Funciona em qualquer navegador moderno (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, Opera).

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica dos controles de partida, formulários (radio buttons, number inputs) e container da grade.
- **CSS3**: Estilização visual, layout com Flexbox, estilização do grid e overlay de encerramento do jogo.
- **JavaScript (ES6+)**:
  - Manipulação do DOM e escuta de eventos.
  - Representação de estado do jogo por matrizes bidimensionais (`Array(7).fill().map(...)`).
  - Algoritmo recursivo **Minimax**.
  - Algoritmo recursivo com poda **Alpha-Beta Pruning**.

---

## 📂 Estrutura do Projeto

```bash
📁 tic_tac_toe_special_js_vanilla
├── 📁 css
│   └── 📄 style.css         # Estilização da interface, tabuleiro e mensagens
├── 📁 js
│   ├── 📄 alphabeta.js      # Implementação do algoritmo Minimax com Poda Alfa-Beta
│   ├── 📄 minimax.js        # Implementação do algoritmo Minimax clássico
│   ├── 📄 renderBoard.js    # Função de renderização e amarração de eventos nas células
│   └── 📄 ticTacToe.js      # Lógica central do jogo, regras (7x7 / 4 em linha) e ciclo de turnos
├── 📄 index.html            # Ponto de entrada da aplicação e estrutura dos controles
└── 📄 README.md             # Documentação completa do projeto
```

---

## 🧠 Arquitetura e Módulos do Sistema

> [!NOTE]
> Esta aplicação é **100% client-side** e não utiliza requisições a APIs REST ou servidores externos. Abaixo está a documentação das principais funções e módulos internos que compõem o sistema.

### Principais Módulos JavaScript

| Módulo | Função Principal | Descrição |
|---|---|---|
| `js/renderBoard.js` | `renderBoard(board, handleClick)` | Renderiza a matriz do tabuleiro na tabela HTML `#board` e associa o evento de clique a cada célula. |
| `js/minimax.js` | `minimax(board, depth, isMaximizing, aiSymbol, humanPlayerSymbol)` | Executa a busca em árvore exaustiva com avaliação minimax até a profundidade limite estipulada. |
| `js/alphabeta.js` | `alphabeta(board, depth, alpha, beta, isMaximizing, aiSymbol, humanPlayerSymbol)` | Otimização do Minimax com cortes de poda quando `beta <= alpha`, reduzindo os nós explorados. |
| `js/ticTacToe.js` | `handleClick(row, col)` | Trata o movimento do jogador, renderiza a jogada, verifica vitória/empate e dispara o turno da IA. |
| `js/ticTacToe.js` | `aiMove()` | Avalia todas as casas livres usando o algoritmo selecionado e realiza a melhor jogada encontrada. |
| `js/ticTacToe.js` | `checkWin(board, symbol)` | Avalia se há 4 peças alinhadas na horizontal, vertical ou diagonais a partir de qualquer coordenada. |
| `js/ticTacToe.js` | `isDraw(board)` | Avalia se todas as 49 células foram preenchidas sem ocorrência de vitória. |
| `js/ticTacToe.js` | `resetBoard()` | Limpa a matriz, remove mensagens de status e re-renderiza o tabuleiro inicial. |

---

## 📦 Como Executar o Projeto

Como o projeto é construído exclusivamente com tecnologias web nativas, não há necessidade de instalação de dependências ou compilação prévia:

1. **Clone ou baixe este repositório:**
   ```bash
   git clone https://github.com/otaviozerotwo/tic_tac_toe_special_js_vanilla.git
   ```

2. **Navegue até o diretório do projeto:**
   ```bash
   cd tic_tac_toe_special_js_vanilla
   ```

3. **Abra o arquivo `index.html`:**
   - Dê um duplo clique no arquivo `index.html` para abrir diretamente no seu navegador padrão; ou
   - Utilize a extensão **Live Server** no VS Code / Antigravity IDE; ou
   - Execute um servidor local simples:
     ```bash
     # Usando Python 3
     python -m http.server 3000
     # ou usando npx serve
     npx serve .
     ```

---

## 📖 Como Jogar

1. **Escolha seu símbolo**: Selecione **X** ou **O** no menu lateral esquerdo.
2. **Escolha o algoritmo da IA**:
   - **Minimax**: Varre todas as possibilidades até a profundidade definida.
   - **Alpha-Beta**: Aplica poda aos ramos que comprovadamente não alteram a decisão final, otimizando o processamento.
3. **Defina o nível de profundidade**: Selecione um valor entre **1** e **3** (níveis mais altos analisam mais jogadas futuras).
4. **Faça sua jogada**: Clique em qualquer célula vazia da grade para marcar sua peça.
5. **Estratégia**: Seu objetivo é conectar **4 símbolos iguais em sequência** (linha reta horizontal, vertical ou diagonal) antes da IA.
6. **Reiniciar**: A qualquer momento, clique no botão azul **Replay** para recomeçar a partida.

---

## 💡 Principais Aprendizados

- **Estruturas de Busca em Árvore**: Compreensão na prática do custo computacional do algoritmo Minimax e da eficiência da **Poda Alfa-Beta** em jogos com fator de ramificação amplo (tabuleiro 7x7 com 49 posições).
- **Tratamento de Espaço de Estados**: Entendimento da necessidade de poda e limitação de profundidade para evitar explosão combinatória em tabuleiros maiores que o 3x3 clássico.
- **Geometria de Matrizes em Jogos**: Algoritmos de varredura direcional através de vetores de deslocamento `(x, y)` para validação contínua de condições de vitória.
- **Arquitetura Vanilla JavaScript**: Organização de código limpo, legível e desacoplado utilizando apenas os recursos nativos do ecossistema Web.

---

## 👤 Autor

Desenvolvido por **Otávio** ([@otaviozerotwo](https://github.com/otaviozerotwo)).