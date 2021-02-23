
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