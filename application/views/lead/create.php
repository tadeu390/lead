<?php
	echo form_open('lead/store');

 ?>
	<br />
	<div class='col-md-8  offset-md-2 col-lg-4 offset-lg-4 padding' style='background-color: rgba(255,255,255,0.5);'>
		<div class='form-group'>
			<div class='input-group mb-2 mb-sm-0'>
				<input type='text' class='form-control' placeholder='Nome' autofocus name='nome' id='nome' value='<?= set_value('nome') ? : (isset($nome) ? $nome : '') ?>'>
			</div>
			<div class='input-group mb-2 mb-sm-0 text-danger' id='error-nome'><?php echo form_error('nome') ?  : ''; ?></div>
		</div>
		<div class='form-group'>
			<div class='input-group mb-2 mb-sm-0'>
				<input type='text' spellcheck='false' class='form-control' name='email' id='email' placeholder='E-mail' value='<?= set_value('email') ? : (isset($email) ? $email : '') ?>'>
			</div>
			<div class='input-group mb-2 mb-sm-0 text-danger' id='error-email'><?php echo form_error('email') ?  : ''; ?></div>
		</div>
		
		<div class='form-group'>
			<div class='input-group mb-2 mb-sm-0'>
				<input type='text' spellcheck='false' class='form-control' name='cpf' id='cpf' placeholder='CPF' value='<?= set_value('cpf') ? : (isset($cpf) ? $cpf : '') ?>'>
			</div>
			<div class='input-group mb-2 mb-sm-0 text-danger' id='error-cpf'><?php echo form_error('cpf') ?  : ''; ?></div>
		</div>
		<div class='form-group'>
			<div class='input-group mb-2 mb-sm-0'>
				<input type='text' spellcheck='false' class='form-control' name='cep' id='cep' placeholder='CEP' value='<?= set_value('cep') ? : (isset($cep) ? $cep : '') ?>'>
			</div>
			<div class='input-group mb-2 mb-sm-0 text-danger' id='error-cep'><?php echo form_error('cep') ?  : ''; ?></div>
		</div>
		<div class='form-group'>
			<div class='input-group mb-2 mb-sm-0'>
				<input type='text' spellcheck='false' class='form-control' name='telefone' id='telefone' placeholder='Telefone' value='<?= set_value('telefone') ? : (isset($telefone) ? $telefone : '') ?>'>
			</div>
			<div class='input-group mb-2 mb-sm-0 text-danger' id='error-telefone'><?php echo form_error('telefone') ?  : ''; ?></div>
		</div>
		<div class='form-group'>
			<div class='input-group mb-2 mb-sm-0'>
				<textarea spellcheck='false' class='form-control' name='observacoes' id='observacoes' placeholder='Observações'><?= set_value('observacoes') ? : (isset($observacoes) ? $observacoes : '') ?></textarea>
			</div>
			<div class='input-group mb-2 mb-sm-0 text-danger' id='error-observacoes'><?php echo form_error('observacoes') ?  : ''; ?></div>
		</div>		
		<?php
			if(empty($nome))
				echo"<input type='submit' name='submit' class='btn btn-danger btn-block' value='Cadastrar'>";
			else
				echo"<input type='submit' name='submit' class='btn btn-danger btn-block' value='Atualizar'>";
		
		?>
	</div>
	

</form>