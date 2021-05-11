//função de data e hora e botao menu

    //botao de acessibilidade
    function aumentar(){
      $(document).ready(
          function(){
             var corpo = $("body").css("font-size", "30px");
          }
      )
   }
   function diminuir(){
       $(document).ready(
           function(){
               var corpo = $("body").css("font-size","20px"); 
           }
       )
   }

   
   //funcao data e hora:
   
   var arrayDia = new Array(7);
   
   arrayDia[0] = "Domingo";
   
   arrayDia[1] = "Segunda";
   
   arrayDia[2] = "Terça";
   
   arrayDia[3] = "Quarta";
   
   arrayDia[4] = "Quinta";
   
   arrayDia[5] = "Sexta";
   
   arrayDia[6] = "Sábado";
   
   
   var arrayMes = new Array(12);
   
   arrayMes[0] = "Janeiro";
   
   arrayMes[1] = "Fevereiro";
   
   arrayMes[2] = "Março";
   
   arrayMes[3] = "Abril";
   
   arrayMes[4] = "Maio";
   
   arrayMes[5] = "Junho";
   
   arrayMes[6] = "Julho";
   
   arrayMes[7] = "Agosto";
   
   arrayMes[8] = "Setembro";
   
   arrayMes[9] = "Outubro";
   
   arrayMes[10] = "Novembro";
   
   arrayMes[11] = "Dezembro";
   
   function mostrarDataHora(hora, diaSemana, dia, mes, ano){
       
       retorno = "" + hora + ""
       
       retorno += "" + diaSemana + ", " + dia + " de " + mes + " de " + ano;
       
       document.getElementById("datahora").innerHTML = retorno;

   }
   function atualizarDataHora(){
       
       var dataAtual = new Date();
       
       var dia = dataAtual.getDate();
       
       var diaSemana = getDiaExtenso(dataAtual.getDay());
       
       var mes = getMesExtenso(dataAtual.getMonth());
       
       var ano = dataAtual.getFullYear();
       
       var hora = dataAtual.getHours();
       
       var minuto = dataAtual.getMinutes();
       
       var segundo = dataAtual.getSeconds();
       
       var horaImprimivel = hora + ":" + minuto + ":" + segundo;
       
       mostrarDataHora(horaImprimivel+ " ", diaSemana, dia, mes, ano);
       
       setTimeout("atualizarDataHora()", 1000);
       
   }
   function getMesExtenso(mes){
       
       return this.arrayMes[mes];
       
   }
   function getDiaExtenso(dia){
       
       return this.arrayDia[dia];
       
   } 


   //botao de menu

   $(document).ready(
       function(){
           $("#menu").hide()
       }
   )
   $(document).ready(
       function(){
           $("#botaoMenu").click(
               function(){
                   $("#menu").slideToggle(1000)
               }
           )
       }
   )
   

//Começar escondido e ao clicar aparecer, vice-versa. Scroll para rolar o conteúdo que aparece
//EVENTO CLICK USADO AQUI
$(document).ready(function () {
  $("#div1_2").hide();
  $("#div1_1").click(function () {
    //EVENTO SCROLL USADO AQUI
    $("#div1_2").show().scrollTop();
    $("#div1_1").hide();
    $("#div1_2").click(function () {
      $("#div1_1").show();
      $("#div1_2").hide();
    });
  });
  $("#div2_2").hide();
  $("#div2_1").click(function () {
    $("#div2_2").show().scrollTop();
    $("#div2_1").hide();
    $("#div2_2").click(function () {
      $("#div2_1").show();
      $("#div2_2").hide();
    });
  });
  $("#div3_2").hide();
  $("#div3_1").click(function () {
    $("#div3_2").show().scrollTop();
    $("#div3_1").hide();
    $("#div3_2").click(function () {
      $("#div3_1").show();
      $("#div3_2").hide();
    });
  });

  $("#div4_2").hide();
  $("#div4_1").click(function () {
    $("#div4_2").show().scrollTop();;
    $("#div4_1").hide();
    $("#div4_2").click(function () {
      $("#div4_1").show();
      $("#div4_2").hide();
    });
});
});


