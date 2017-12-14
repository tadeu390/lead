var Main = {
	// possui as funções js invocadas pelos eventos js colocados nas tags HTML
	//especificar a base_url de acordo com o host
	base_url : 'http://localhost/git/lead/index.php/',
	login : function () {
		if(Main.login_isvalid() == true)
		{
			$.ajax({
				url: Main.base_url+'login/validar',
				data: $("#form_login").serialize(),
				dataType:'json',
				cache: false,
				type: 'POST',
				success: function (msg) {
					
					if(msg.response == "valido")
						location.reload();
					else
					{
						Main.limpa_login();
						alert('A informações fornecidas são inválidas');
					}
				}
			});
		}
	},
	logout : function (){
		$.ajax({
			type: "POST",
			dataType: "json",
			url: Main.base_url+"login/logout",
		//	data: "action=loadall&id=" + 2,
			complete: function(data) {
				 location.reload();
			}
		});
	},
	login_isvalid : function (){
		if($("#email").val() == "")
			Main.show_error("email","error-email","Informe seu e-mail","form-control is-invalid");
		else if(Main.valida_email($("#email").val()) == false)
			Main.show_error("email","error-email","Formato de e-mail inválido","form-control is-invalid");
		else if($("#senha").val() == "")
			Main.show_error("senha","error-senha","Insira sua senha","form-control is-invalid");
		else
			return true;
	},
	
	valida_email : function(email)
	{
		var nome = email.substring(0, email.indexOf("@"));
		var dominio = email.substring(email.indexOf("@")+ 1, email.length);

		if ((nome.length >= 1) &&
			(dominio.length >= 3) && 
			(nome.search("@")  == -1) && 
			(dominio.search("@") == -1) &&
			(nome.search(" ") == -1) && 
			(dominio.search(" ") == -1) &&
			(dominio.search(".") != -1) &&      
			(dominio.indexOf(".") >= 1)&& 
			(dominio.lastIndexOf(".") < dominio.length - 1)) 
		{
			document.getElementById('email').className = "form-control is-valid";
			document.getElementById('error-email').innerHTML = "";
			return true;
		}
		else
		{
			document.getElementById('email').className = "form-control is-invalid";
			document.getElementById('error-email').innerHTML = "Formato de e-mail inválido.";
			return false;
		}
	},
	show_error : function(form, id_div_error, error, class_error)
	{
		document.getElementById(form).className = class_error;
		document.getElementById(id_div_error).innerHTML = error;
	},
	limpa_login : function ()
	{
		$("#senha").val("");
		$("#senha").focus();
	},
	cadastro : function (){
		if(Main.cadastro_isvalid() == true)
		{
			$.ajax({
				url: Main.base_url+'lead/store',
				data: $("#form_cadastro").serialize(),
				dataType:'json',
				cache: false,
				type: 'POST',
				success: function (msg) {
					alert("Seus dados foram enviados com sucesso");
					location.reload();
				}
			});
		}
	},
	cadastro_isvalid : function (){
		if($("#nome").val() == "")
			Main.show_error("nome","error-nome","Informe seu nome","form-control is-invalid");
		else if($("#email").val() == "")
			Main.show_error("email","error-email","Informe seu e-mail","form-control is-invalid");
		else if(Main.valida_email($("#email").val()) == false)
			Main.show_error("email","error-email","Formato de e-mail inválido","form-control is-invalid");
		else if($("#cpf").val() == "")
			Main.show_error("cpf","error-cpf","Insira seu cpf","form-control is-invalid");
		else if($("#cep").val() == "")
			Main.show_error("cep","error-cep","Insira o cep da sua cidade","form-control is-invalid");
		else if($("#telefone").val() == "")
			Main.show_error("telefone","error-telefone","Insira o seu telefone","form-control is-invalid");
		else
			return true;
	}
};