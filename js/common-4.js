
// let phoneFields = document.querySelectorAll("input[type='tel']");
// let im = new Inputmask("+380(99) 999 99 99");
$popupId.find('input[name="phone"]').mask("+380(99)999-99-99");
popupId.mask(phoneFields);

$popupId.on('click', 'input[name="submit"]', function () {
    $popupId.find('.js-form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2,
                maxlength: 20
            },
            phone: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Поле обязательное для заполнения",
                minlength: "Имя не должно содержать меньше 2 символов",
                maxlength: "Имя не должно содержать больше 20 символов"
            },
            phone: {
                required: "Поле обязательное для заполнения",
            },
            email: {
                required: "Поле обязательное для заполнения",
                email: "Введите корректный E-mail"
            }
        },
        
    })
    })
    


// function validateForm ($popupId) {

// 		var $popupId = $popupId;

// 		$popupId.find('input[name="phone"]').mask("+380(99)999-99-99");

// 		$popupId.on('focus', 'input[name="phone"]', function(){

// 			 $popupId.find('input[name="phone"]').mask("+380(99)999-99-99");

// 		});

// 		$popupId.on('click', 'input[name="submit"]', function(){

// 			$popupId.find('.js-form').validate({
// 			    rules: {
// 			        name: {
// 			            required: true,
// 			            minlength: 2,
// 			            maxlength: 20
// 			        },
// 			        phone: {
// 			            required: true
// 			        },
// 			        email: {
// 			        	required: true,
// 			        	email: true
// 			        }
// 			    },
// 			    messages: {
// 			        name: {
// 			            required: "Поле обязательное для заполнения",
// 			            minlength: "Имя не должно содержать меньше 2 символов",
// 			            maxlength: "Имя не должно содержать больше 20 символов"
// 			        },
// 			        phone: {
// 			            required: "Поле обязательное для заполнения",
// 			        },
// 			        email: {
// 			        	required: "Поле обязательное для заполнения",
// 			        	email: "Введите корректный E-mail"
// 			        }
// 			     },
// 			    submitHandler: function() {
// 					$popupId.find('.js-form').ajaxSubmit(function(){
// 						// var $formContent = $popupId.find('.popup__inner').html(),
// 							fd = new FormData();
// 						if ($popupId.find('input[name="name"]').length > 0) {
// 							fd.append('name', $popupId.find('input[name="name"]').val());
// 						}
						
// 						if ($popupId.find('input[name="phone"]').length > 0) {
// 							fd.append('phone', $popupId.find('input[name="phone"]').val());
// 						}

// 						if ($popupId.find('input[name="email"]').length > 0) {
// 							fd.append('email', $popupId.find('input[name="email"]').val());
// 						}

// 						if ($popupId.find('.popup__title').length > 0) {
// 							fd.append( 'popup__title', $popupId.find('.popup__title').text() );
// 						}
						
// 						$.ajax({
// 							type: "POST",
// 							url: "mail.php",
// 							data: fd
// 							// success: function(data){
// 							// 	// $popupId.find('.popup__inner').html(data);
// 							// 	$popupId.find('.popup__close').on('click', function(){
// 							// 		$popupId.find('.popup__inner').html($formContent);
// 							// 	});
// 							// },
// 							beforeSend: function(){
								
//                             }
// 		       			})
// 					});
// 				}
// 			});
// 		});
// 	}
let phoneFields = document.querySelectorAll("input[type='tel']");
let im = new Inputmask("+380(99) 999 99 99");
im.mask(phoneFields);

new JustValidate('.js-form', {
    rules: {
        name: {
            required: true,
            minLength: 2
        },
        email: {
            email: true,
            required: true
        },
        password: {
            required: true,
            minLength: 4,
        },
        city: {
            required: true,
            minLength: 2
        },
        phone: {
            required: true
        }
    },
    messages: {
        phone: {
          required: "Введите ваш номер телефона"
        },
        email: {
            required:"Заполните поле",
            email: "Введите правильный email"
        },
        password: {
            required: "Введите пароль",
            minLength: "Поле должно содержать минимум 4 символа"
        },
        name: {
            required: "Введите ваше имя",
            minLength: "Поле должно содержать минимум 2 символа"
        },
    },

    submitHandler: function (form) {
        let xhr = new XMLHttpRequest();

        xhr.open("POST", "mail.php", true);

        let formData = new FormData(form);

        xhr.addEventListener("load", function () {
            if(xhr.readyState === 4) {
                switch (xhr.status) {
                    case 200:
                        console.log("форма отправлена");
                        form.reset();
                        break;
                    case 404:
                        console.log("Ничего не вышло");
                        break;
                    default:
                        console.log("Error");
                        break;
                }
            }
        });
        xhr.send(formData);
    },
  });