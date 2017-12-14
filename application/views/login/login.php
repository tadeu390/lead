<?php
	if(isset($_SESSION['id']))
		header("location:http://localhost/git/lead/index.php/admin/dashboard");
	
	$atr = array('id' => 'form_login','name' => 'form_login');
	echo form_open('login/validar',$atr);
?>
<div class='col-md-8  offset-md-2 col-lg-4 offset-lg-4 padding shadow-basic' style='background-color: rgba(255,255,255,1);'>
	<div class='text-center' style='color: silver;'>
		<h3>Login<br /><br /> Informe seus dados</h3>
	</div>
	<br /><br />
	<div class='form-group'>
		<div class='input-group mb-2 mb-sm-0'>
			<div class='input-group-addon'><span class='glyphicon glyphicon-envelope'></span></div>
			<input type='text' spellcheck='false' placeholder='E-mail' class='form-control' id='email' name='email' autofocus />
		</div>
		<div class='input-group mb-2 mb-sm-0 text-danger' id='error-email'></div>
	</div>
	<div class='form-group'>
		<div class='input-group mb-2 mb-sm-0'>
			<div class='input-group-addon'><span class='glyphicon glyphicon-lock'></span></div>
			<input type='password' placeholder='Senha' class='form-control' id='senha' name='senha'>
		</div>
		<div class='input-group mb-2 mb-sm-0 text-danger' id='error-senha'></div>
	</div>
	<input type='button' id='bt_login' name='bt_login' value='Entrar' class='btn btn-danger btn-block' />
</div>

</form>