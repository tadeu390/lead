<?php
	class Lead_model extends CI_Model {

		public function __construct()
		{
			$this->load->database();
		}
		
		public function get_lead($id = FALSE)
		{
			if ($id === FALSE)
			{
					$query = $this->db->get('leads');
					return $query->result_array();
			}

			$query = $this->db->get_where('leads', array('id' => $id));
			return $query->row_array();
		}
		
		public function set_lead($data)
		{
			$this->load->helper('url');

			//$slug = url_title($this->input->post('title'), 'dash', TRUE);

			

			return $this->db->insert('leads', $data);
		}
	}
?>