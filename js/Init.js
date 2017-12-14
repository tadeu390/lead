$(document).ready(
	//inicializa o html adicionando os envetos js especificados abaixo
	function () {

		Main.load_mask();
		
		//event for form login
	    $('#bt_login').click(function() { 
			Main.login();
		});
		
		$('#email').blur(function() { 
			if(this.value != '') Main.valida_email(this.value);
		});
		
		$('#email').keypress(function() { 
			if ((window.event ? event.keyCode : event.which) == 13){Main.login();}; 
		});
		
		$('#senha').keypress(function() { 
			if ((window.event ? event.keyCode : event.which) == 13){Main.login();}; 
		});
		//event for form login
		
		//event for form register
		
		Main.event_cadastro('new');
		
		//event for form register
		
		//event for admin
		
		$('#bt_leads').click(function() {
			Main.lista_leads();
		});
		
		$('#bt_estatistica').click(function() { 
			//Main.lista_leads();
		});
		
		//event for 
	}
 );