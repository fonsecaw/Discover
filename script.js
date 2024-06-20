function toggleMode(){
  const html = document.documentElement //documentElemenet (representação da tag html)
  html.classList.toggle("light") //realizando a troca de modo substitui if else abaixo)
  // if(html.classList.contains('light')){
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }

  //pegar a tag img
  const img = document.querySelector("#porfile img") //query-> pesquisa (pelo seletor)

  //trocando a imagem de perfil
  //se tiver ligth mode, adicinar a imagem light
  if (html.classList.contains("light")) { //contains (verificando se contém o "light")
    img.setAttribute("src", "NOVO ARQUIVO")
  
    //se tiver sem ligth mode, manter a imagem normal
  } else {
    img.setAttribute("src", "./assets/icone-utilisateus.png")
  }
}