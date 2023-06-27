// passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema

const botaoAlterarTema = document.getElementById("mudarTema");


//- passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body

const body = document.querySelector("body");
console.log(body);

const imagemBotaoTrocaDeTema = document.querySelector(".imagemBotao")

//passo 3 - dar um jeito de indentificar o clique do usuário no botão de troca de tema

botaoAlterarTema.addEventListener("click", () => {

      const modoEscuroEstaAtivo = body.classList.contains("modoEscuro")

      
      if (modoEscuroEstaAtivo) {
            //passo 7 - remover a classe do modo-escuro do body
            body.classList.remove("modoEscuro");

            //passo 8 - trocar a imagem do botão de alterar tema para sol
            imagemBotaoTrocaDeTema.setAttribute("src", "./src/imgs/sunRockIcon.png")

      } else {
            //passo 4 - adicionar a classe modo-escuro no body
            body.classList.add("modoEscuro");

            //passo 5 - trocar a imagem do botão de alterar tema pra luas
            imagemBotaoTrocaDeTema.setAttribute("src", "./src/imgs/LunaToneIcon.png")
      }

});

