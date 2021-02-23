<?php
	// Переменная в PHP это $имя_переменной
	// filter_var($_POST["атрибут name тэга input"], FILTER_SANITIZE_STRING)
	$name     	 = filter_var($_POST["user-name"], FILTER_SANITIZE_STRING);
	$email      = filter_var($_POST["user-email"], FILTER_SANITIZE_STRING);
	$password	= filter_var($_POST["user-password"], FILTER_SANITIZE_STRING);
	$tel     	 = filter_var($_POST["user-tel"], FILTER_SANITIZE_STRING);
	$city    	  = filter_var($_POST["user-city"], FILTER_SANITIZE_STRING);
	$errors;
	// В PHP добавить лишь проверку на пустоту
	if (empty($name)) {
			$errors .= "Ошибка";
	}else {
		$user_name = $name;
	};
	if (empty($email)) {
			$errors .= "Ошибка";
	}else {
		$user_email = $email;
	};
	if (empty($password)) {
			$errors .= "Ошибка";
	}else {
		$user_password = $password;
	};
	if (empty($tel)) {
			$errors .= "Ошибка";
	}else {
		$user_tel = $tel;
	};
	if (empty($city)) {
			$errors .= "Ошибка";
	}else {
		$user_city = $city;
	}
	// Чтобы добавить несколько полей в PHP нужно использовать .=
	// Пример ниже
	$to = "ввести почту, на которую надо отправить письмо";
	$mailBody = "JS. ДЗ номер 4\n";
	$mailBody .= "Поле имя: " . $name . "\n";
	$mailBody .= "Поле почта: " . $email . "\n";
	$mailBody .= "Поле пароль: " . $password . "\n";
	$mailBody .= "Поле телефон: " . $tel . "\n";
	$mailBody .= "Поле город: " . $city . "\n";

	// Это отправка. Это не трогаем
	if (mail($to, 'JS. ДЗ номер 4', $mailBody)) {
			$output = "ok";
			die($output);
	} else {
			$output = $errors;
			die($output);
	}
?>