<?php
	if(!isset($_SESSION['id_user']))
		header("location:$url"."index.php/login/login");
?>

<nav class="side-navbar">
	<div class="sidenav-header d-flex align-items-center justify-content-center">
		<div class="sidenav-header-inner text-center"><img src="../../imagens/admin.png" alt="person" class="img-fluid rounded-circle">
			<h2>Admin</h2>
		</div>
		<div class="sidenav-header-logo"><a href="index.html" class="brand-small text-center">
			<strong>A</strong><strong class="text-primary">D</strong></a>
		</div>
	</div>
	<div class="main-menu">
		<ul id="side-main-menu" class="side-menu list-unstyled">                  
			<li class="active">
				<a href="#" id="bt_leads" name="bt_leads"> <i class="icon-home"></i><span>Leads</span></a>
			</li>
			<li>
				<a href="#" id="bt_estatisca" name="bt_estatisca"><i class="icon-form"></i><span>Estatísticas</span></a>
			</li>
			<!--<li> <a href="charts.html"><i class="icon-presentation"></i><span>Charts</span></a></li>
			<li> <a href="tables.html"> <i class="icon-grid"> </i><span>Tables  </span></a></li>
			<li> <a href="login.html"> <i class="icon-interface-windows"></i><span>Login page                        </span></a></li>
			<li> <a href="#"> <i class="icon-mail"></i><span>Demo</span>
			<div class="badge badge-warning">6 New</div></a></li>-->
		</ul>
	</div>
	<!--
	<div class="admin-menu">
		<ul id="side-admin-menu" class="side-menu list-unstyled"> 
		<li> <a href="#pages-nav-list" data-toggle="collapse" aria-expanded="false"><i class="icon-interface-windows"></i><span>Dropdown</span>
			<div class="arrow pull-right"><i class="fa fa-angle-down"></i></div></a>
			<ul id="pages-nav-list" class="collapse list-unstyled">
				<li> <a href="#">Page 1</a></li>
				<li> <a href="#">Page 2</a></li>
				<li> <a href="#">Page 3</a></li>
				<li> <a href="#">Page 4</a></li>
			</ul>
		</li>
		<li> <a href="#"> <i class="icon-screen"> </i><span>Demo</span></a></li>
		<li> <a href="#"> <i class="icon-flask"> </i><span>Demo</span>
			<div class="badge badge-info">Special</div></a></li>
		<li> <a href=""> <i class="icon-flask"> </i><span>Demo</span></a></li>
		<li> <a href=""> <i class="icon-picture"> </i><span>Demo</span></a></li>
		</ul>
	</div>-->
</nav>
<div class='page home-page'>
	<header class="header">
		<nav class="navbar">
			<div class="container-fluid">
				<div class="navbar-holder d-flex align-items-center justify-content-between">
					<div class="navbar-header"><a id="toggle-btn" href="#" class="menu-btn">
					<span class="glyphicon glyphicon-align-justify" style='line-height: 40px; transform: scale(2.5);'> </span></a>
					
					</div>
					<ul class="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
						<li class="nav-item">
							<?php
								echo"<div data-toggle='popover' data-html='true' data-placement='left' title='<div class=\"text-center\">Opções da conta</div>' 
									data-content='
										
									<a class=\"btn btn-outline-danger btn-block\" href=\"p_cadastro.php?usuario=".$_SESSION['id_user']."\"><span class=\"glyphicon glyphicon-cog\"></span> Configurações</a>
										<button class=\"btn btn-outline-danger btn-block\" onclick=\"Main.logout()\">Sair</button>
									
									'  style='font-size: 40px; color: #dc3545; cursor: pointer; padding: 10px; border: 1px solid #dc3545; border-radius: 35px;'>
										 <span class='glyphicon glyphicon-user'></span></div>";
							  ?>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
	<div class='row' style='padding: 30px;' id='container' name='container'>
		dd
	</div>
</div>
