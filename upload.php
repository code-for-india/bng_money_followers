<?php
	if($_FILES['file']['error'] > 0){
		echo "ERROR : ". $_FILES["file"]["error"];
	}
	else{
		if(file_exists("images/", $_FILES["file"]["tmp_name"])){
			echo "File with same name exists";
		}
		else{
			move_uploaded_file($_FILES["file"]["tmp_name"], "images/".$_FILES["file"]["tmp_name"]);
			echo "Successfully stored!";
		}
	}
?>