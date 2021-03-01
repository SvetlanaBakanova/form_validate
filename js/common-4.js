
$(document).ready(function () {
    $(".button-primary").click(function () {
        sendAjaxForm('.js-form', '.form-result', 'mail.php',)
        return false;
    });
    new JustValidate('.js-form', {
        rules: {
            name: {
                required: true,
                minLength: 2,
                maxLength: 20
            },
            phone: {
                required: true,
                minLength: 9
            },
            email: {
                required: true,
                email: true,
            }
        },
        messages: {
            name: {
                required: "Поле обязательное для заполнения",
                minLength: "Имя должно содержать более 2-х символов",
                maxLength: "Имя не должно содержать больше 20 символов"
            },
            phone: {
                required: "Поле обязательное для заполнения",
                minLength: "нужно написать не мененее 9 символов"
            },
            email: {
                required: "Поле обязательное для заполнения",
                email: "Введите корректный E-mail"
            }
        },

        submitHandler() {
            const formData = $(".js-form").serialize();
            $.ajax({
                url: "mail.php",
                type: "POST",
                data: formData,
                success: function(response) {
                    console.log(response);
                }
            });
        }

    });

});