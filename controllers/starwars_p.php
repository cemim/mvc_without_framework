<?php


// documentação da api star wars: https://swapi.py4e.com/
include '../models/Starwars.php';

  switch ($_GET['function']) {
    case 'getPeople':
      $page = isset($_GET['page'])?"?page=" . $_GET['page']:"?";  
      $sw = new Starwars("people", "", $page);
      $data = $sw->startApi();
      echo $data;
      break; 

    case 'getPlanet':
      $planet = isset($_GET['planet'])?"search=" . $_GET['planet']:"";
      $page = isset($_GET['page'])?"?page=" . $_GET['page']:"?";
      $sw = new Starwars("planets", $planet, $page);
      $data = $sw->startApi();
      echo $data;
      break;

    case 'getStarships':
      $id = isset($_GET['id'])?$_GET['id'] . "/":"";      
      $sw = new Starwars("starships", $id, "");
      $data = $sw->startApi();
      echo $data;
      break;

    case 'getAverage':    
      $sw = new Starwars("starships", "", "");
      $data = $sw->average();
      echo $data;
      break;           

    default:
      // function nao encontrada...
      break;
  }

?>
