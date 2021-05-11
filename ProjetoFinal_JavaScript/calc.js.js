        /*2.Pagina de Calculadora
        A.O usuário pode selecionar o modelo para utilizar, o outro modelo tem que ficar indisponível(Simples e Científica)
        B. ambas funcionais se habilitada (Escolher habilitar por botão)
        C. A científica deve ter as mesma funcionalidades da simples adicionando:
        Raiz quadrada , elevado a 2 , elevado a 3 e numero Pi. */

        //calculadora simples
        //1° fzr as funções de uma calculadora(soma,divisao,...)
        //2° fzr aparecer na tela o resultado chamando cada uma
        //3° arrumar o layout

        function habilita1(){  // pego uma variável, chamo o id da 1° calculadora  
            var a = document.getElementById("primeira").style.display = "block"; // pega a configuração do css do display block

            var b = document.getElementById("segunda").style.display = "none"; // quando uclico na parte de habilitar, aparece uma e desabilita a outra
        }

        function habilita2(){
            var a = document.getElementById("primeira").style.display = "none";           

            var b = document.getElementById("segunda").style.display = "block";
        }
        function habilita3(){
            var a = document.getElementById("primeira").style.display = "block";            

            var b = document.getElementById("segunda").style.display = "block";
        }

//primeira calc
        function escolha1(num1) { //aparece os números no visor
            var a =  document.calc1.visor1.value //pega a variável a que tá criada dentro da função e pega os botões e aparece no visor
            document.calc1.visor1.value = a + num1;  //soma os botoes digitados, a função vai concatenando os valores
        }  
        function reset() {  //limpa, usando o botão c = retorna um espaço vazio 
            return ""
        }
        
        function calcular1(a, num1) {  //cálculos da primeira calculadora
            var a =  document.calc1.visor1.value
            if(a){  //se a variável que vc escolheu for documentada na tela
                document.calc1.visor1.value = eval(a); //aparece os valores vc faz os cálculos do que tem no visor (eval) computa string
            }
        }
        function numPi1(num1) {  
            document.calc1.visor1.value = 3.14;
        }
        


        //calculadora cientifica
        //1° fzr as funções de uma calculadora(soma,divisao,...) e acrescentar os requisitos
        //2° fzr aparecer na tela o resultado chamando cada uma
        //3° arrumar o layout

//segunda calc 
        
        function escolha2(num2) {  //permite os números aparecerem na tela
            var b =  document.calc2.visor2.value  //todo o formulário, o que vai aparecer no visor, o valor clicado
            document.calc2.visor2.value = b + num2;  //concateno pra ir somando os valores
        }
        
        function calcular2(b, num2) {
        
            var b =  document.calc2.visor2.value

            if(b){
                document.calc2.visor2.value = eval(b);
            }
            
        }
        function numPi2(num2) { //documenta o pi e vai aparecendo no visor
            num2 = document.calc2.visor2.value
            document.calc2.visor2.value = num2+3.14; //concatena a variável e o pi
            
        }
        function raiz(num2){  //recebe o valor que o usuário digita e mostra na tela, depois faz a raiz e mostra o resultado
           var raiz = document.calc2.visor2.value; 
           raiz = (Math.sqrt(raiz));
           var resultado = raiz; 
           document.calc2.visor2.value = resultado // para mostrar na tela
        }

        function elevado2(num2) {
           var elevar2 = document.calc2.visor2.value; 
           elevar2 = (Math.pow(elevar2, 2)); 
           var result2 = elevar2;
           document.calc2.visor2.value = result2
        }

        function elevado3(num2) {
           var elevar3 = document.calc2.visor2.value; 
           elevar3 = (Math.pow(elevar3, 3));
           var result3 = elevar3;
           document.calc2.visor2.value = result3
        }    