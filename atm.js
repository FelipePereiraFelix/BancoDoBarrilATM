var saldo = 100.0;
		var nome = "";
	
		nome = prompt("Qual seu nome?")
			
		alert("Olá "+ nome +" é um prazer ter você por aqui!")

		function inicio() {
			var escolha = parseInt(prompt('Selecione uma opção: \n\n 1.) Saldo \n\n 2.) Extrato \n\n 3.) Saque \n\n 4.) Deposito \n\n 5.)transferencia \n\n 6.) Sair'));
		
			switch(escolha){

			case 1:
				ver_saldo();
				break
			case 2:
				ver_extrato();
				break
		    case 3:
				fazer_saque();
				break
			case 4:
				fazer_deposito();
				break
			case 5:
				transferencia();
				break
			case 6:
				sair();
				break
			default:
				erro();
			}
		}

		function ver_saldo() {
		if(senha() == true){
			alert('Seu saldo atual é: ' + saldo);
			inicio();
		}else{
		alert("Senha invalida");
		inicio();
		}
	}
	inicio();


		function fazer_deposito() {
			var deposito = parseFloat(prompt('Qual o valor para depósito?'));
			if (isNaN(deposito) || deposito === '') {
				alert('Por favor, informe um número:');
				fazer_deposito();
			} else {
				saldo += deposito;
				ver_saldo();
			}
		}

		function fazer_saque() {
			if(senha()== true){
			var saque = parseFloat(prompt('Qual o valor para saque?'));
			}else{
			alert("Senha invalida");
			}
		
			if (isNaN(saque) || saque === '') {
				alert('Por favor, informe um número:');
				fazer_saque();
			} else {
				saldo -= saque;
				ver_saldo();
			}
		}
       function ver_extrato(){
	   if(senha() == true){
		  alert("MercadoAssaidaqui: -R$50 \n\n EpicoJogos: -R$60 \n\n Oggi Sorvetes: -R$30 \n\n Seu Jailson: +R$130");
		  inicio();
	   }else{
             alert("Senha invalida");
		  inicio();
	   }
	   }
       function transferencia(){
	   if(senha() == true){
	   }else{
		alert("Senha invalida");
	   }
	    inicio();

	   var numeroConta = parseInt(prompt("Digite o número da conta para transferencia"));

	   if(isNaN(numeroConta) || numeroConta === ''){
		  erro()
		  transferencia();
	   } else {
	   var transf = parseInt(prompt("Digite o valor da transferencia"));
	   if(transf > saldo || transf <= 0){
		  alert("Operação não autorizada, o saldo que você digitou é menor ou maior que o saldo disponivel" + saldo);
		  transferencia();
	   }else{
		   saldo -= transf;
		   ver_saldo();
	   }
	   }
	}

    
        
		function erro() {
			alert('Por favor, informe um número entre 1 e 6');
			inicio();
		}

		function senha(){
		var senha = 3589;
		var sen = parseInt(prompt('Por favor,informe a senha'));
		if(sen == senha){
		   return true;
		}else{
		   return false;
		}
		}

		function sair() {
		    alert("Foi um prazer ter você utilizando e confiando em nossos serviços, muito obrigado " + nome + ":)");
			var confirma = confirm('Você deseja sair?');
			if (confirma) {
				window.close();
			} else {
				inicio();
			
			}
		}

	