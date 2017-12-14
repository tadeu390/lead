<?php
	header('Access-Control-Allow-Origin: *');
	class Admin extends CI_Controller {
		/*
			no construtor carregamos as bibliotecas necessarias e tambem nossa model
		*/
		public function __construct()
		{
			parent::__construct();
			
			//$this->load->model('login_model');
			$this->load->helper('url_helper');
			$this->load->helper('url');
			$this->load->helper('html');
			$this->load->helper('form');
			$this->load->library('session');
		}

		public function dashboard()
		{
			$data['url'] = base_url();
			$data['title'] = 'Administração';
			$data['message'] = 'Administração';
			$this->load->view('templates/header_admin',$data);
			$this->load->view('admin/dashboard',$data);
			$this->load->view('templates/footer',$data);
		}
		
	}
?>