<html>
	<head> 
		
		<title><?php echo $title;?></title>
		<?= link_tag('css/bootstrap.min.css') ?>
		<?= link_tag('css/normalize.css') ?>
		<?= link_tag('css/font-awesome.css') ?>
		<?= link_tag('css/glyphicons.css') ?>
		<?= link_tag('css/site.css') ?>
		<?= link_tag('css/default.css') ?>
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	</head >
	<body id='c'>
		<div class='container-fluid'>
		
		<nav class="side-navbar">
	<div class="sidenav-header d-flex align-items-center justify-content-center">
		<div class="sidenav-header-inner text-center"><img src="<?php echo $url;?>imagens/admin.png" alt="person" class="img-fluid rounded-circle">
			<h2>Admin</h2>
		</div>
		<div class="sidenav-header-logo"><a href="index.html" class="brand-small text-center">
			<strong>A</strong><strong class="text-primary">D</strong></a>
		</div>
	</div>
	<div class="main-menu">
		<ul id="side-main-menu" class="side-menu list-unstyled">                  
			<li>
				<a href="<?php echo $url; ?>index.php/admin/dashboard" > <i class="icon-home"></i><span>Leads</span></a>
			</li>
			<li>
				<a href="<?php echo $url; ?>index.php/admin/estatistica" ><i class="icon-form"></i><span>Estatísticas</span></a>
			</li>
		</ul>
	</div>
</nav>