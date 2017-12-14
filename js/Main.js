var Main = {
	// possui as funções js invocadas pelos eventos js colocados nas tags HTML
	//especificar a base_url de acordo com o host
	base_url : 'http://localhost/git/lead/index.php/',
	load_mask : function(){
		$(document).ready(function(){
			$('[data-toggle="popover"]').popover(),
			$('#telefone').mask('(00) 0000-00009'),
			$('#cep').mask('00000-000'),
			$('#cpf').mask('000.000.000-00')
		});
	},
	event_cadastro : function (type){		
		
		 /* onde type determina se está sendo cadastrado ou sendo atualizado um lead, 
		isso é necessário pra saber se deve apenas recarregar a
		página ou se deve redirecionar para a lista de leads( para ter acesso a mesma deve estar logado)*/
		
		$('#bt_cadastro').click(function() { 
			Main.cadastro(type);
		});
		
		$('#nome').blur(function() { 
			if(this.value != '') Main.show_error("nome","error-nome","","form-control is-valid");
		});
		
		$('#email').blur(function() { 
			if(this.value != '') Main.valida_email(this.value);
		});
		
		$('#cpf').blur(function() { 
			if(this.value != '') Main.show_error("cpf","error-cpf","","form-control is-valid");
		});
		
		$('#cep').blur(function() { 
			if(this.value != '') Main.show_error("cep","error-cep","","form-control is-valid");
		});
		
		$('#telefone').blur(function() { 
			if(this.value != '') Main.show_error("telefone","error-telefone","","form-control is-valid");
		});
	},
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
					alert(msg.response);
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
	cadastro : function (type){
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
					if(type == "edit")
						Main.lista_leads();
					else
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
	},
	lista_leads : function(){
		$.ajax({
			url: Main.base_url+'lead/index',
			// data: $("#form_login").serialize(),
			dataType:'json',
			cache: false,
			type: 'POST',
			success: function (data) {
				
				if(data[0].nome == "")
					$("#container").html("Nada encontradado");
				else
				{
					var html = "";
					
					html = 
					"<div class='col-lg-10 offset-lg-1'>"+
						"<div class='table-responsive'>"+
							"<table class='table table-striped table-hover'>"+
								"<thead>"+
									"<tr>"+
										"<td>Nome</td>"+
										"<td>Ativo</td>"+
										"<td>E-mail</td>"+
										"<td>CPF</td>"+
										"<td>CEP</td>"+
										"<td>Telefone</td>"+
										"<td>Observações</td>"+
										"<td>Ações</td>"+
									"<tr>"+
								"</thead>"+
								"<tbody>";
									for(var i = 0; i < data.length; i++)
									{
										var ativo = "";
										if(data[i].ativo == 1)
											ativo = "Sim";
										else
											ativo = "Não";
										html += 
										"<tr>"+
											"<td>"+data[i].nome+"</td>"+
											"<td>"+ativo+"</td>"+
											"<td>"+data[i].email+"</td>"+
											"<td>"+data[i].cpf+"</td>"+
											"<td>"+data[i].cep+"</td>"+
											"<td>"+data[i].telefone+"</td>"+
											"<td>"+data[i].observacoes+"</td>"+
											"<td>"+
												"<span onclick='Main.edit_lead("+data[i].id+");' id='sp_lead_edit' name='sp_lead_edit' title='Editar' style='color: #dc3545; cursor: pointer;' class='glyphicon glyphicon-edit'></span>  |  "+
												"<span onclick='Main.trash_lead("+data[i].id+");' id='sp_lead_trash' name='sp_lead_trash' title='Apagar' style='color: #dc3545; cursor: pointer;' class='glyphicon glyphicon-trash'></span>"+
											"</td>"+
										"</tr>";
									}
								html += 
								"</tbody>"+
							"</table>"+
						"</div>"+
					"</div>";
					
					$("#container").html(html);
				}
			}
		});
	},
	edit_lead : function(id){
		$.ajax({
			url: Main.base_url+'lead/edit/'+id,
			// data: $("#form_login").serialize(),
			dataType:'json',
			cache: false,
			type: 'POST',
			success: function (data) {
				if(data.nome == "")
					$("container#").html("Registro não encontrado");
				else
				{
					var html = "";
					
					html = 
					"<div class='col-lg-8 offset-lg-2'>"+
						"<form name='form_cadastro' id='form_cadastro' method='POST'>"+
							"<input type='hidden' value='"+data.id+"' id='lead' name='lead'>"+
							"<div class='form-group'>"+
								"Nome"+
								"<div class='input-group mb-2 mb-sm-0'>"+
									"<input type='text' value='"+data.nome+"' class='form-control' placeholder='Nome' autofocus name='nome' id='nome' />"+
								"</div>"+
								"<div class='input-group mb-2 mb-sm-0 text-danger' id='error-nome'></div>"+
							"</div>"+
							"<div class='form-group'>"+
								"E-mail"+
								"<div class='input-group mb-2 mb-sm-0'>"+
									"<input type='text' value='"+data.email+"' spellcheck='false' class='form-control' name='email' id='email' placeholder='E-mail' />"+
								"</div>"+
								"<div class='input-group mb-2 mb-sm-0 text-danger' id='error-email'></div>"+
							"</div>"+
							"<div class='form-group'>"+
								"CPF"+
								"<div class='input-group mb-2 mb-sm-0'>"+
									"<input type='text' value='"+data.cpf+"' spellcheck='false' class='form-control' name='cpf' id='cpf' placeholder='CPF'/>"+
								"</div>"+
								"<div class='input-group mb-2 mb-sm-0 text-danger' id='error-cpf'></div>"+
							"</div>"+
							"<div class='form-group'>"+
								"<div class='input-group mb-2 mb-sm-0'>"+
									"<input type='text' value='"+data.cep+"' spellcheck='false' class='form-control' name='cep' id='cep' placeholder='CEP' />"+
								"</div>"+
								"<div class='input-group mb-2 mb-sm-0 text-danger' id='error-cep'></div>"+
							"</div>"+
							"<div class='form-group'>"+
								"Telefone"+
								"<div class='input-group mb-2 mb-sm-0'>"+
									"<input type='text' value='"+data.telefone+"' spellcheck='false' class='form-control' name='telefone' id='telefone' placeholder='Telefone'/>"+
								"</div>"+
								"<div class='input-group mb-2 mb-sm-0 text-danger' id='error-telefone'></div>"+
							"</div>"+
							"<div class='form-group'>"+
								"Observações"+
								"<div class='input-group mb-2 mb-sm-0'>"+
									"<textarea spellcheck='false' class='form-control' name='observacoes' id='observacoes' placeholder='Observações'>"+data.observacoes+"</textarea>"+
								"</div>"+
								"<div class='input-group mb-2 mb-sm-0 text-danger' id='error-observacoes'></div>"+
							"</div>"+
							"<input type='button' id='bt_cadastro' name='bt_cadastro' class='btn btn-danger btn-block' value='Atualizar'>"+
						"</form>"+
					"</div>";
					$("#container").html(html);
					Main.load_mask();
					Main.event_cadastro('edit');
				}
			}
		});
	},
	trash_lead : function(id){
		
		if(confirm("Deseja realmente exluir este lead?") == true)
		{
			$.ajax({
				url: Main.base_url+'lead/delete/'+id,
				// data: $("#form_login").serialize(),
				dataType:'json',
				cache: false,
				type: 'POST',
				complete: function (data) {
					Main.lista_leads();
				}
			});
		}
	}
};