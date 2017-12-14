<?php
	class Lead_model extends CI_Model {

		public function __construct()
		{
			$this->load->database();
		}
		
		public function get_lead($id = FALSE)
		{
			if ($id === FALSE)//retorna todos se nao passar o parametro
			{
				$query = $this->db->get('leads');
				return $query->result_array();
			}

			$query = $this->db->get_where('leads', array('id' => $id));
			return $query->row_array();
		}
		
		public function set_lead($data)
		{
			//$this->load->helper('url');
			if(empty($data['id']))
				return $this->db->insert('leads', $data);
			else
			{
				$this->db->where('id', $data['id']);
				return $this->db->update('leads', $data);
			}
		}
		
		public function delete_lead($id){
			$this->db->where('id',$id);
			return $this->db->delete("leads");
		}
	}
?>