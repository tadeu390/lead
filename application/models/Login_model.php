<?php
	class Login_model extends CI_Model {

		public function __construct()
		{
			$this->load->database();
		}
		
		public function get_login($email = FALSE, $senha = FALSE)
		{
			$query = $this->db->query("SELECT email, id FROM 
									usuario WHERE email = '$email' AND senha = '$senha'");
			return $query->row_array();
		}
	}
?>