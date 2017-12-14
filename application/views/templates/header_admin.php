<html>
	<head> 
		
		<title><?php echo $title;?></title>
		<?= link_tag('css/bootstrap.min.css') ?>
		<?= link_tag('css/normalize.css') ?>
		<?= link_tag('css/font-awesome.css') ?>
		<?= link_tag('css/glyphicons.css') ?>
		<?= link_tag('css/site.css') ?>
		

	</head >
	<body id='c'>
		<div class='container-fluid'>
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<a class="navbar-brand" href="#">Empresa</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mr-auto">
					<!--  <li class="nav-item active">
						<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
					  </li>
					  <li class="nav-item">
						<a class="nav-link" href="#">Link</a>
					  </li>
					  <li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						  Dropdown
						</a>
						<div class="dropdown-menu" aria-labelledby="navbarDropdown">
						  <a class="dropdown-item" href="#">Action</a>
						  <a class="dropdown-item" href="#">Another action</a>
						  <div class="dropdown-divider"></div>
						  <a class="dropdown-item" href="#">Something else here</a>
						</div>
					  </li>
					  <li class="nav-item">
						<a class="nav-link disabled" href="#">Disabled</a>
					  </li>-->
					</ul>
					<span class="nav" style='margin-right: 3%;'>
					  <?php
						echo"<div data-toggle='popover' data-html='true' data-placement='left' title='<div class=\"text-center\">Opções da conta</div>' 
							data-content='
								
							<a class=\"btn btn-outline-danger btn-block\" href=\"p_cadastro.php?usuario=".$_SESSION['id']."\"><span class=\"glyphicon glyphicon-cog\"></span> Configurações</a>
								<button class=\"btn btn-outline-danger btn-block\" onclick=\"Main.logout()\">Sair</button>
							
							'  style='font-size: 40px; color: #dc3545; cursor: pointer; padding: 10px; border: 1px solid #dc3545; border-radius: 35px;'>
								 <span class='glyphicon glyphicon-user'></span>
							</div>";
					  ?>

					</span>
			  </div>
			</nav>
        
        
