<?php
	header('Access-Control-Allow-Origin: *');
	class Lead extends CI_Controller {
		/*
			no construtor carregamos as bibliotecas necessárias e também nossa model
		*/
		public function __construct()
		{
			parent::__construct();
			
			$this->load->model('lead_model');
			$this->load->helper('url_helper');
			$this->load->helper('url');
			$this->load->helper('html');
			$this->load->helper('form');
		}
		
		/*
			metodo responsavel por pegar os dados subtmetidos
			através do formulario e grava-los no banco
		*/
		public function store()
		{
			$dataToSave = array(
				'id' => $this->input->post('lead'),
				'nome' => $this->input->post('nome'),
				'email' => $this->input->post('email'),
				'cpf' => $this->input->post('cpf'),
				'cep' => $this->input->post('cep'),
				'telefone' => $this->input->post('telefone'),
				'observacoes' => $this->input->post('observacoes'),
			);
			$this->lead_model->set_lead($dataToSave);
			
			$arr = array('response' => 'sucesso');
				header('Content-Type: application/json');
				echo json_encode($arr);
		}
		
		/*
			metodo responsavel carregar o formulario de cadastro
		*/
		public function create()
		{
			$data['title'] = 'Lead - Cadastro';
			$data['message'] = 'Informe seus dados no formulario abaixo';
			$this->load->view('templates/header',$data);
			$this->load->view('lead/create',$data);
			$this->load->view('templates/footer');
		}
		
		/*
			metodo responsavel por carregar os dados no formulario
			de acordo com a id que é passada como parametro
		*/
		public function edit($id = null)
		{
			$data['title'] = 'Lead - Cadastro';
			$data['message'] = 'Informe seus dados no formulario abaixo';
			$dataToForm = $this->lead_model->get_lead($id);
			if (isset($dataToForm))
			{
				$data['id'] = $dataToForm['id'];
				$data['nome'] = $dataToForm['nome'];
				$data['email'] = $dataToForm['email'];
				$data['cpf'] = $dataToForm['cpf'];
				$data['cep'] = $dataToForm['cep'];
				$data['telefone'] = $dataToForm['telefone'];
				$data['observacoes'] = $dataToForm['observacoes'];
				$this->load->view('templates/header',$data);
				$this->load->view('lead/create',$data);
				$this->load->view('templates/footer');
			}
			else
			{
				$data['mensagem'] = "Registro não encontrado." ;
				$this->load->view('errors/html/erro', $data);
			}
		}
	}
?>