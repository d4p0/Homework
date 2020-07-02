<?php

class Human {
	public $name = 'George';
	public $lastName = 'Jones';
	public $age = 18;
	

	
	
	public function helloHuman($humanName)
	{
		$humanName = $this->name .' ' . $this->lastName;
		echo "Hello, $humanName";

	}
}

$Person_1 = new Human ();

$Person_1->helloHuman('Man');

?>