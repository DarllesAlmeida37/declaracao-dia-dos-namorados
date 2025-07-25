function verificar(){
  let data = document.querySelector('input[type=date]')
  let dataEsc = data.value
  let foto1 = document.getElementById('foto1')
  let text1 = document.getElementById('text1')
  let pdata = document.getElementById('pdata')

  if(dataEsc === '2025-07-25'){
    alert(`PARABEÉNS VOCÊ ACERTOOU!  Aperte "OK" Para Continuar!`)
    foto1.src = 'imagens/foto1.png' // falta alterar todas as fotos para EX: "imagens/foto2.png" E "imagens/foto3.png" E "imagens/foto4.png"
    text1.innerHTML = `<p>28/10/2014 - Foi onde tudo começou pra gente! 
    Foi quando decidimos que apartir dalí, andaríamos juntos, Lado a Lado!</p>`


    let btnVeri = document.querySelector('input#btnverificar')
    btnVeri.remove()

    let bloco2 = document.getElementById('bloco2')
    let btnCont = document.createElement('button')
    btnCont.textContent = 'Continuar'
    btnCont.addEventListener('click', continuar)
    if(bloco2){
        bloco2.appendChild(btnCont)
    }
    

    function continuar(){
        if(foto1 && text1){
            foto1.src = 'foto2.png'
            text1.innerHTML = `<p>Foram muitos momentos que passamos juntos, momentos surreais; momentos ótimos; momentos bons e alguns ruins também! 
        Momentos esses que nos fizeram ser quem somos hoje! Eu, particularmente não me arrependo de nada 
        (Você deve está se perguntando: como assim não se arrepende? Errei muitas vezes, Te fiz chorar várias vezes!). Errei muito, isso é verdade, mas os mesmos erros que TE fizeram CHORAR, ME fizeram MUDAR! 
        Hoje sou um Homem e um ser humano melhor, tudo isso graças a DEUS e a VOCÊ meu AMOR!</p>`
        }

        if(bloco2){
            bloco2.remove()
        }
        let bloco3 = document.getElementById('bloco3')
        if(bloco3){
        let btnPro = document.createElement('button')
        btnPro.textContent = 'Próximo'
        btnPro.addEventListener('click', proximo)
        bloco3.appendChild(btnPro)
        
        }
    }


    
    function proximo(){
        let bloco3 = document.getElementById('bloco3')
        if(foto1 && text1){
            foto1.src = 'foto3.png'
            text1.innerHTML = `<p> Que a cada dia nosso amor se renove, que a cada briga possamos amadurecer, 
            que a cada obstáculo da vida possamos ficar mais fortes! Deus fez VOCÊ pra MIM, e ME fez para VOCÊ, 
            fomos unidos por ELE em uma só carne. E se eu pudesse escolher de novo, SEMPRE escolheria VOCÊ!</p>`
            
        }
        if(bloco3){
            bloco3.remove()
        }

        let bloco4 = document.getElementById('bloco4')
        let btnFin = document.createElement('button')
        btnFin.textContent = 'Finalizar'
        btnFin.addEventListener('click', finalizar)
        bloco4.appendChild(btnFin)
        
    }



    function finalizar(){
        let bloco4 = document.getElementById('bloco4')
        if(foto1 && text1){
            text1.innerHTML = `<p>I LOVE YOU!</P>`
            foto1.src = 'foto4.png'
            text1.style.fontSize = '100px'
            text1.style.color = 'red'
            text1.style.fontFamily = 'san-serif'
            text1.style.fontWeight = '600'
            text1.style.boxShadow = '-2px -2px 10px #ffffffc2'

        }
        if(bloco4){
            bloco4.remove()
            data.remove()
            pdata.remove()

        }
    }
  } else {
    alert('Data Inválida! Adicione outra data e tente novamente!')
  }
}
