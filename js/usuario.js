//VARIAVEIS DE REDIRECIONAMENTO
this.after_login_with_success = "p_lista_usuario.php";
this.after_register_with_success = "p_lista_usuario.php";

var usuario = {
	id : "",
	ativo : "",
	data_registro : "",
	grupo_id : "",
	nome : "",
	email : "",
	senha : "",
	conectado : "",
	nova_senha : ""
}

function create_usuario(id){

	usuario.id = id;
	usuario.ativo = 1;
	
	usuario.grupo_id = 0;	
	var confSenha = 0;
	if(document.getElementById("grupo_id") != undefined)
	{
		usuario.grupo_id = document.getElementById("grupo_id").value;
		if (document.cadastro.ativo.checked == true)
			usuario.ativo = 1;
	}
	if(document.getElementById("conf_senha") == undefined)
		confSenha = document.getElementById("senha").value;
	else
		confSenha = document.getElementById("conf_senha").value;
	
	usuario.nome = document.getElementById("nome").value;
	usuario.email = document.getElementById("email").value;
	usuario.senha = document.getElementById("senha").value;
	usuario.conectado = 0;

	if(usuario.nome == "")
		show_error("nome","error-nome","Informe seu nome","form-control is-invalid");
	else if(usuario.email == "")
		show_error("email","error-email","Informe seu e-mail","form-control is-invalid");
	else if(email_valido(usuario.email) == false)
		show_error("email","error-email","Formato de e-mail inválido","form-control is-invalid");
	else if(usuario.senha == "")
		show_error("senha","error-senha","Informe sua senha","form-control is-invalid");
	else if(usuario.senha != confSenha)
		show_error("conf_senha","error-conf_senha","As senhas não coincidem","form-control is-invalid");
	else if(document.getElementById("grupo_id") != undefined && usuario.grupo_id == 0)
		show_error("grupo_id","error-grupo","Selecione um grupo de usuário","form-control is-invalid");
	else
	{
		//ALTERAR SENHA
		usuario.nova_senha = "";
		if(document.getElementById("nova_senha") != undefined)
			usuario.nova_senha = document.getElementById("nova_senha").value;

		if(usuario.nova_senha != "" && usuario.nova_senha != " " &&
			usuario.nova_senha != document.getElementById("conf_nova_senha").value)
			show_error("conf_nova_senha","error-conf_nova_senha","As senhas não coincidem","form-control is-invalid");
		else
		{
			if(usuario.nova_senha == "" || usuario.nova_senha == " ")
				usuario.nova_senha = "0";
				
			//encripty_data();
			var obj_usuario = JSON.stringify(usuario);
			var obj = new XMLHttpRequest();
			obj.onreadystatechange = function()
			{
				if(obj.readyState == 4){
					if(obj.responseText == "email")
						alert("O e-mail informado já se encontra cadastrado.");
					else
					{
						if(obj.responseText == "ok")
						{
							if(after_register_with_success != "")
								window.location.assign(after_register_with_success);
						}
						else
							alert(obj.responseText);
						console.log(obj.responseText);
					}
				}
			}
			obj.open("POST", "cadastro.php", true);
			obj.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			obj.send("obj_usuario="+obj_usuario);
		}
	 }
}

//QUANDO TIVER MAIS CORAGEM CONTINUAR ABAIXO, TALVEZ COM OUTROS ALGORITMOS
// function encripty_data()
// {
		// var before = new Date();
		// var rsa = new RSAKey();
		// rsa.setPublic(document.getElementById("token").value, 3);
		  // var res = rsa.encrypt(usuario.nome);
		  // var after = new Date();
		  // if(res) {
			// alert(linebrk(res, 64));
			// document.rsatest.ciphertext.value = linebrk(res, 64);
			// document.rsatest.cipherb64.value = linebrk(hex2b64(res), 64);

		  // }
	// RSAKey = new RSAKeyPair ("ABC12345", 10001, "987654FE", 64);
	// encrypt.setPublicKey(document.getElementById("token").value);
    // usuario.id = encrypt.encrypt(usuario.id);
    // usuario.nome = encrypt.encrypt(usuario.nome);
    // usuario.email = encrypt.encrypt(usuario.email);
    // usuario.grupo = encrypt.encrypt(usuario.grupo);
    // usuario.senha = encrypt.encrypt(usuario.senha);
// }

function entrar()
{
	usuario.email = document.getElementById("email").value;
	usuario.senha = document.getElementById("senha").value;
	usuario.conectado = 0;
	
	if (document.login.manter_conectado.checked == true)
		usuario.conectado = 1;

	if(usuario.email == "")
		show_error("email","error-email","Informe seu e-mail","form-control is-invalid");
	else if(email_valido(usuario.email) == false)
		show_error("email","error-email","Formato de e-mail inválido","form-control is-invalid");
	else if(usuario.senha == "")
		show_error("senha","error-senha","Insira sua senha","form-control is-invalid");
	else
	{
		var obj_usuario = JSON.stringify(usuario);
		var obj = new XMLHttpRequest();
		obj.onreadystatechange = function()
		{
			if(obj.readyState == 4)
			{
				if(obj.responseText == "ok")
				{
					if(after_login_with_success != "")
						window.location.assign(after_login_with_success);
				}
				else
				{
					alert("Dados inválidos ou sua conta foi desativada");
					limpa_login();
				}
				console.log(obj.responseText);
			}
		}
		obj.open("POST", "login.php", true);
		obj.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		obj.send("obj_usuario="+obj_usuario);
	}
}

function show_error(form, id_div_error, error, class_error)
{
	document.getElementById(form).className = class_error;
	document.getElementById(id_div_error).innerHTML = error;
}

function limpa_login()
{
	document.getElementById("senha").value = "";
	document.getElementById("senha").focus();
}

function logout()
{
	var obj = new XMLHttpRequest();
	obj.onreadystatechange = function()
	{
		if(obj.readyState == 4)
		{
			location.reload();
		}
	}
	obj.open("GET","logout.php",true);
	obj.send();
}

function apagar_usuario(usuario)
{
	var obj = new XMLHttpRequest();
	obj.onreadystatechange = function()
	{
		if(obj.readyState == 4)
		{
			location.reload();
			//console.log(obj.responseText);
		}
	}
	obj.open("GET","apagar.php?usuario="+usuario,true);
	obj.send();
}

function email_valido(email) 
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
}

function index(order,param)
{
	var obj = new XMLHttpRequest();
	obj.onreadystatechange = function()
	{
		if(obj.readyState == 4)
		{
			document.getElementById('index').innerHTML = obj.responseText;
		}
	}
	obj.open("GET","View_usuario.class.php?index=index?& order="+order+"& param="+param,true);
	obj.send();
}