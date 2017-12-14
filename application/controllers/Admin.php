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
			$data['title'] = 'Administração';
			$data['message'] = 'Administração';
			$this->load->view('templates/header_admin',$data);
			$this->load->view('admin/dashboard',$data);
			$this->load->view('templates/footer');
		}
		
		/*
			metodo responsavel carregar o formulario de login
		*/
		public function login()
		{
			$data['title'] = 'Login';
			$data['message'] = 'Administração';
			$this->load->view('templates/header',$data);
			$this->load->view('login/login',$data);
			$this->load->view('templates/footer');
		}
		
		public function validar()
		{
			$email = $this->input->post('email');
			$senha = $this->input->post('senha');
			$response = $this->login_model->get_login($email,$senha);
			$data['message'] = 'Administração';
			$data['title'] = 'Login';
			if(!empty($response['email']))
			{
				$login = array(
				   'id'  => $response['id']
				);
				$this->session->set_userdata($login);
				$response = 'valido';
			}
			else
				$response = 'invalido';

			$arr = array('response' => $response);
			header('Content-Type: application/json');
			echo json_encode($arr);
		}
	}
?>