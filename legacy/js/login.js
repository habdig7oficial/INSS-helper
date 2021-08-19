



function criar()
{
    var usr = document.getElementById("username");
    var senha = document.getElementById("senha");

    if (usr.value == "habdig7oficial" && senha.value == "1")
    {

        window.location.href = "./UserPages.html"

        alert("Login efetuado ");

        
        
    }
    else
    {
        alert("Erro no Login \n Por Favor verifique se as informações estão corretas");
        
    }


}




