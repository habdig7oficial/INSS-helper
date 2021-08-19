






  function cre(){

    let parafuso = document.getElementById("com")

    let show = parafuso.value

if (parafuso.value == ""){


    alert("insira um nome comunidade válida")

    return;

}

alert("Infeilizmente ocorreu um erro a criar a comumidade \n"+show)


  }


function pre(){

  let cdf = document.getElementById("com2")


if (cdf.value == ''){
  alert("insira um nome valido para procurar")
}

alert("Hove um problema ao procurar por"+cdf.value )

}