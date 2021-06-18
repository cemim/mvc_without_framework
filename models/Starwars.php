<?php

class Starwars {
	private $urlStarWarsApi = "https://swapi.py4e.com/api/";
	private $type;
	private $id;
	private $page;

	public function __construct($type = "people", $id = "", $page = "?page=1"){
		$this->setType($type);
		$this->setId($id);
		$this->setPage($page);
	}

	public function getType(){
		return $this->type;
	}

	public function getId(){
		return $this->id;		
	}

	public function getPage(){
		return $this->page;		
	}	

	public function setType($type){
		$this->type = $type;
	}

	public function setId($id){
		$this->id = $id;	
	}

	public function setPage($page){
		$this->page = $page;	
	}	

	public function startApi(){

		$link = $this->urlStarWarsApi;
		$link .= $this->type . "/";

		if($this->page){
			$link .= $this->page  . "&";
		}

		if($this->id){
			$link .= $this->id;
		}

		$ch = curl_init($link);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
		$response = curl_exec($ch);
		curl_close($ch);

		return $response;
	}

	public function average(){

		$cont = 0;

		for ($i=1; $i <= 4; $i++) { 
			$link = "https://swapi.py4e.com/api/starships/?page=$i";
			$ch = curl_init($link);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
			$response = curl_exec($ch);
			curl_close($ch);
			$data = json_decode($response);
			$itens = $data->results;

			foreach ($itens as $key) {				
				$json[$cont]["name"] = $key->name;
				$json[$cont]["consumables"] = $key->consumables;
				$cont++;
			}
		}

		$json = json_encode($json);

		return $json;
	}
}

?>