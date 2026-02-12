<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Novos exercicios</title>
</head>
<body>

    <center>
        <p>teste de ecercicio</p>
    <input type="text" id="nota1"  placeholder="Digite primeira nota"><br><br>
    <input type="text" id="nota2"  placeholder="Digite segunda nota"><br><br>
    <button type="button"  id= "btnCalcular" onclick="calculadora()"> Calcule</button>
</center>
      

 <center>
        <p>exercicio  1</p>
    <input type="text" id="idade"  placeholder="Digite sua idade"><br><br>
    <button type="button"  id= "btnHomem" onclick="aposentadoriaHomem()"> aposentadoria Homem</button>
    <button type="button"  id= "btnMulher" onclick="aposentadoriaMulher()"> aposentadoria Mulher</button>
</center>


    <center>
        <p>exercicio  2</p>
    <input type="text" id="valorPizza"  placeholder="Digite o  valor da  pizza"><br><br>
    <input type="text" id="quantAmigos"  placeholder="Digite  quantos amigos são" ><br><br>
    <button type="button"  id= "btnPizza" onclick="pizza()">  #I love pizza</button>
</center>


    <center>
        <p>exercicio  3</p>
    <input type="text" id="valorPassagem"  placeholder="Digite o valor da passagem"><br><br>
    <input type="text" id="viagensMensais"  placeholder="Digite a quantidade de viagens mensais" ><br><br>
    <button type="button"  id= "btnEconomia" onclick="bilheteUnico()"> Ver economia</button>
</center>

  
    <center>
        <p>exercicio  4</p>
    <input type="text" id="nomeGurreiro"  placeholder="Digite seu nome"><br><br>
    <input type="text" id="kibase"  placeholder="Digite seu ki base"><br><br>
    <button type="button"  id= "btnKi" onclick="Verki()"> Ver ki em cada forma</button>
</center>

  
    <center>
        <p>exercicio  5</p>
    <input type="text" id="nomeAluno"  placeholder="Digite seu nome"><br><br>
    <input type="text" id="notaContinuada"  placeholder="Digite sua nota Continuada"><br><br>
    <input type="text" id="notaPesquisaenovação"  placeholder="Digite sua nota Pesquisa e Inovação"><br><br>
    <button type="button"  id= "btmedia" onclick="CalcularMedia()"> Calcular Média</button>
</center>

<center>
      <p>exercicio  6</p>
    <input type="text" id="num1"  placeholder="Digite numero 1"><br><br>
    <input type="text" id="num2"  placeholder="Digite numero 2"><br><br>
    <button type="button"  id= "btnSomar" onclick="calcularSoma()"> Calcular Soma</button>
    <button type="button"  id= "btnSubtrair" onclick="calculaSubtrair()"> Calcular Subtração</button>
    <button type="button"  id= "btnMultiplicar" onclick="calcularMultiplicação()"> Calcular Multiplicação</button>
    <button type="button"  id= "btnDividir" onclick="calcularDivisão()"> Calcular Divisão</button>



</center>
  
  
  


<script>
    function calculadora(){
        var notaprimeira =Number(nota1.value);
        var notaSegunda= Number (nota2.value);
       

       var notaResultado=notaprimeira+notaSegunda;
        alert('seu resultado é:' +notaResultado)

    }

    // exercicio 1 
    function aposentadoriaHomem(){
        var idadeH=Number(idade.value);
        var quantofaltah= 75-idadeH;

        alert('Faltam,' + quantofaltah + 'para voce se aposentar' );
    }


    function aposentadoriaMulher(){
         var idadem=Number(idade.value);
         var quantoFaltam= 60-idadem;

         alert('Faltam ' + quantoFaltam + 'para voce se aposentar' );

    }

    // exercicio 2 
     
      function pizza(){
        var Valor= Number(valorPizza.value);
        var quantidadeAmigos=Number (quantAmigos.value);
        var pagar= (Valor/quantidadeAmigos);

        alert ('Cada um dos amigos ' +quantidadeAmigos+ ', vai pagar'+pagar )
      } 

      // exercicio 3 
      
       function bilheteUnico(){
        var passageem= Number (valorPassagem.value);
        var quantMes=Number(viagensMensais.value);
        var total=(passageem*quantMes)/2;
       
        alert('Você economizará,' +total+ 'por mês')
       }

       // exercicio 4

       function Verki(){
        var nome=(nomeGurreiro.value);
        var VerificarKi= Number (kibase.value);
        var ss1= VerificarKi*50;
        var ss2= VerificarKi*100;

        alert("o ki de nome"+nome+ 'na forma super sayajin é ' +ss1);

        alert(" ki de nome"+nome+ 'na forma Super Sayajin 2 é '+ss2);
       }

       // exercicio 5 

       function CalcularMedia(){
        var nomeAlunos= (nomeAluno.value);
        var notaCont= Number(notaContinuada.value);
        var notaPesquisa=Number (notaPesquisaenovação.value);
        var mediaTotal = (notaCont * 0.6) + (notaPesquisa * 0.4);

        
        alert('A media do nome'+nomeAlunos+'será de media'+mediaTotal);

       }

       // exercicio 6

       function calcularSoma(){
        var numero1soma=Number (num1.value);
        var numero2Soma=Number (num2.value);
        var soma= numero1soma+numero2Soma;

        alert('A soma do numero:'+numero1soma+ 'e' +numero2Soma+ 'é '+soma);
       }

       function calculaSubtrair(){
        var numero1subtrair=Number (num1.value);
        var numero2subtrair=Number (num2.value);
        var sub= numero1subtrair-numero2subtrair;

        alert('A subtração do numero:'+numero1subtrair+ 'e' +numero2subtrair+ 'é '+sub);

       }

       function calcularMultiplicação(){
        var numero1Multiplicar=Number (num1.value);
        var numero2Multiplicar=Number (num2.value);
        var multi= numero1Multiplicar*numero2Multiplicar;

        alert('A multiplicação do numero:'+numero1Multiplicar+ 'e' +numero2Multiplicar+ 'é '+multi);

       }

       function calcularDivisão(){
        var numero1Divisão=Number (num1.value);
        var numero2Divisão=Number (num2.value);
        var div= numero1Divisão*numero2Divisão;
         
        alert('A Divisão do numero:   '  +numero1Divisão+    'e' +numero2Divisão+ ', é '+div);

       }
</script>
</body> 


</html>
