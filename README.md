# Jogo da Velha (Tic Tac Toe)

Este é um jogo simples de **Jogo da Velha** (Tic Tac Toe) feito com HTML, CSS e JavaScript. O jogo permite que dois jogadores se alternem jogando "X" e "O" em um tabuleiro 3x3. O jogo verifica automaticamente se um dos jogadores venceu ou se houve empate. Também é possível reiniciar o jogo.

## Funcionalidades

- **Jogo entre 2 jogadores:** O jogo alterna entre dois jogadores, permitindo que um jogue com "X" e o outro com "O".
- **Verificação de Vencedor:** A função `checkWinner()` verifica se algum jogador completou uma linha, coluna ou diagonal com o mesmo símbolo.
- **Verificação de Empate:** O jogo verifica se todos os espaços do tabuleiro foram preenchidos e, se não houver vencedor, declara empate.
- **Reinício do Jogo:** Há um botão de reinício que limpa o tabuleiro e reativa os botões.

## Estrutura do Código

### HTML

- O código HTML cria um tabuleiro de 3x3 utilizando botões com a classe `BtnTic`.
- Há também um header que exibe o nome do jogador atual e um `ul` que lista os jogadores.

### CSS

- O estilo CSS é usado para estilizar o tabuleiro de jogo e os elementos visuais.

### JavaScript

1. **Função `playerName()`:** Essa função é responsável por alterar o nome do jogador atual na interface com base no valor fornecido nos campos de nome.
2. **Função `checkWinner()`:** Essa função verifica se algum jogador ganhou, ou se o jogo terminou em empate, percorrendo todas as combinações possíveis de vitória.
3. **Eventos de Click nos Botões (`.BtnTic`):** Cada botão do tabuleiro escuta um evento de clique, alternando entre os jogadores e marcando a posição no tabuleiro com "X" ou "O".
4. **Botão de Reinício:** O jogo pode ser reiniciado ao clicar em um botão, que limpa o tabuleiro e reseta as configurações.

## Instruções de Uso

1. **Iniciar o Jogo:**
   - Digite os nomes dos jogadores nas caixas de texto correspondentes a "player1" e "player2".
   - O jogador 1 começa com o símbolo "X" e o jogador 2 usa o símbolo "O".

2. **Jogando:**
   - Clique em qualquer um dos botões vazios do tabuleiro para marcar a posição com o seu símbolo ("X" ou "O").
   - O jogo alterna automaticamente entre os jogadores a cada clique.

3. **Vencedor ou Empate:**
   - O jogo verifica automaticamente se algum jogador completou uma linha, coluna ou diagonal com o mesmo símbolo.
   - Caso todos os espaços do tabuleiro sejam preenchidos sem um vencedor, o jogo declarará um empate.

4. **Reiniciar o Jogo:**
   - Após o fim do jogo, clique no botão "Reset" para reiniciar o tabuleiro e começar uma nova partida.

## Exemplo de Jogo

1. **Jogador 1** (X) joga e marca sua posição.
2. **Jogador 2** (O) joga em seguida.
3. O processo se repete até que um jogador vença ou o jogo termine em empate.

## Tecnologias Usadas

- **HTML:** Estrutura básica da página e dos elementos interativos.
- **CSS:** Estilo para o tabuleiro e elementos visuais 
- **JavaScript:** Lógica do jogo, interatividade e verificação de vencedor.

## Como Rodar

1. Clone o repositório:
   ```bash
   git clone https://github.com/Pedroriann/jogo_da_velha.git
