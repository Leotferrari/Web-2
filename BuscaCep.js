function buscaCep()
{
    cep = document.getElementById("CEP").value;
    if(cep != "") 
    {
        url = "https://brasilapi.com.br/api/cep/v1/"+ cep;
        req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();
        //Tratamnento das opções de resposta
        req.onload = function() 
        {
            if(req.status==200)
            {
                endereco = JSON.parse(req.response);
                document.getElementById("rua").value = endereco.street;
                document.getElementById("bairro").value = endereco.neighborhood;
                document.getElementById("cidade").value = endereco.city;
                document.getElementById("estado").value = endereco.state;
            }
            else if(req.status==404) 
            {
                alert("CEP Inválido!");
            }
            else 
            {
                alert("Erro ao fazer a requisição");
            }
        }
    }
    }
    
    window.onload = function() 
    {
        let Txcep = document.getElementById("CEP");
        Txcep.addEventListener("blur", buscaCep);
    }
