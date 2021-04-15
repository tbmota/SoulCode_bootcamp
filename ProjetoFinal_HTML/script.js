document.getElementById("botaoEnviar").addEventListener("click",validaFormulario)

function validaFormulario(){

  if(document.getElementById("date").value != "" && document.getElementById("Nome").value != "" &&  document.getElementById("Email").value != "" && document.getElementById("RG").value != "" && document.getElementById("CPF").value != "" && document.getElementById("Telefone").value != "" && document.getElementById("Endereço").value != "" && document.getElementById("cursos").value ){ 

    alert("Prontinho! Você receberá a confirmação no seu email")
  }else{
    alert("Ihhh acho que você esqueceu algo! Preencha todas as lacunas.")
 }
}
