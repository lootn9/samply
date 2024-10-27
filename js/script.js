const slidesHRSpecialistTemplate = `
    <li class="feature_slide">
      <div class="slide__left">
        <p class="title">Экономьте время и ресурсы на поиск кадров</p>
        <p class="text">
          Платформа организует кейс-чемпионаты, которые привлекают студентов, и дает
          возможность выбирать лучших кандидатов на дефицитные должности
        </p>
      </div>
      <img
        src="./img/feature_img_1.png"
        alt="Преимущество 1" />
    </li>
    <li class="feature_slide">
      <div class="slide__left">
        <p class="title">Точечный доступ к талантам</p>
        <p class="text">
          Вы получаете доступ к кандидатам с навыками и потенциалом, которые
          соответствуют именно вашим задачам.<br /><br />Это особенно ценно для
          отраслей с узкопрофильными дефицитными специальностями
        </p>
      </div>
      <img
        src="./img/feature_img_2.png"
        alt="Преимущество 1" />
    </li>
    <li class="feature_slide">
      <div class="slide__left">
        <p class="title">Адаптивность кейсов</p>
        <p class="text">
          Сэмпли позволяет настраивать кейсы под свои задачи и нужды, обеспечивая
          максимально релевантный отбор кандидатов
        </p>
      </div>
      <img
        src="./img/feature_img_3.png"
        alt="Преимущество 1" />
    </li>
`;

const slidesHRDTemplate = `
    <li class="feature_slide">
      <div class="slide__left">
        <p class="title">Оценка hard и soft skills</p>
        <p class="text">
          Сервис позволяет оценить как hard skills с помощью Р2Р оценки, так soft
          skills
        </p>
      </div>
      <img
        src="./img/feature_img_4.png"
        alt="Преимущество 1" />
    </li>
    <li class="feature_slide">
      <div class="slide__left">
        <p class="title">Доступная альтернатива другим решениям</p>
        <p class="text">
          Сэмпли прост в использовании и дешевле аналогов, при этом эффективен для
          подбора необходимых кандидатов
        </p>
      </div>
      <img
        src="./img/feature_img_5.png"
        alt="Преимущество 1" />
    </li>
`;

const formSentHTML =
  '<p class="success_message">Спасибо, мы свяжемся с Вами в ближайшее время!</p>';

const imgB2BPath = './img/b2b_scheme.png';
const imgB2CPath = './img/b2c_scheme.png';

const formEndpoint = 'https://formspree.io/f/xldegblb';

const rolesObj = {
  1: 'Рекрутер',
  2: 'HR-директор',
  3: 'Другое',
};

/* Callback-функции */

const nextButtonCallback = () => {
  // конкретный слайд
  const slide = document.querySelector('.feature_slide');
  // контейнер со слайдами
  const samplySlidesContainer = document.getElementById(
    'samply_slides_container'
  );

  const slideWidth = slide.clientWidth;
  samplySlidesContainer.scrollLeft += slideWidth;
};

const prevButtonCallback = () => {
  // конкретный слайд
  const slide = document.querySelector('.feature_slide');
  // контейнер со слайдами
  const samplySlidesContainer = document.getElementById(
    'samply_slides_container'
  );

  const slideWidth = slide.clientWidth;
  samplySlidesContainer.scrollLeft -= slideWidth;
};

// Обработчики

const slidesHandler = () => {
  const prevButton = document.querySelector('.left_arrow');
  const nextButton = document.querySelector('.right_arrow');
  // пролистывание вперед, установка слушателя
  nextButton.addEventListener('click', nextButtonCallback);

  // пролистывание назад, установка слушателя
  prevButton.addEventListener('click', prevButtonCallback);
};

const roleButtonsHandler = () => {
  const hrSpecialistButton = document.getElementById('hr_spec');
  const hrDirectorButton = document.getElementById('hrd');

  // при нажатии на кнопку HR-специалисту
  hrSpecialistButton.addEventListener('click', () => {
    // добавить этой кнопке активный стиль
    if (!hrSpecialistButton.classList.contains('active')) {
      hrSpecialistButton.classList.add('active');
    }

    // установить неактивный стиль для HR-директора
    if (hrDirectorButton.classList.contains('active')) {
      hrDirectorButton.classList.remove('active');
    }

    // контейнер, содержимое которого меняем
    const samplySlidesContainer = document.getElementById(
      'samply_slides_container'
    );

    samplySlidesContainer.innerHTML = slidesHRSpecialistTemplate;
  });

  // при нажатии на кнопку HR-директору
  hrDirectorButton.addEventListener('click', () => {
    // добавить этой кнопке активный стиль
    if (!hrDirectorButton.classList.contains('active')) {
      hrDirectorButton.classList.add('active');
    }

    // установить неактивный стиль для HR-специалиста
    if (hrSpecialistButton.classList.contains('active')) {
      hrSpecialistButton.classList.remove('active');
    }

    // контейнер, содержимое которого меняем
    const samplySlidesContainer = document.getElementById(
      'samply_slides_container'
    );

    samplySlidesContainer.innerHTML = slidesHRDTemplate;
  });
};

const schemesImgHandler = () => {
  //кнопки
  const buttonB2B = document.querySelector('.button_b2b');
  const buttonB2C = document.querySelector('.button_b2c');

  // изображение
  const imageEl = document.querySelector('.samply_scheme_image');

  // при нажатии на кнопку B2B
  buttonB2B.addEventListener('click', () => {
    // добавить этой кнопке активный стиль
    if (!buttonB2B.classList.contains('active')) {
      buttonB2B.classList.add('active');
    }

    // установить неактивный стиль для B2C
    if (buttonB2C.classList.contains('active')) {
      buttonB2C.classList.remove('active');
    }

    //замена ссылки
    imageEl.src = imgB2BPath;
  });

  // при нажатии на кнопку B2C
  buttonB2C.addEventListener('click', () => {
    // добавить этой кнопке активный стиль
    if (!buttonB2C.classList.contains('active')) {
      buttonB2C.classList.add('active');
    }

    // установить неактивный стиль для B2B
    if (buttonB2B.classList.contains('active')) {
      buttonB2B.classList.remove('active');
    }

    //замена ссылки
    imageEl.src = imgB2CPath;
  });
};

const switchHandler = () => {
  const switchEl = document.getElementById('samply_switch');

  switchEl.addEventListener('change', () => {
    // получение карточки
    const cardEl = document.querySelector('.turning_on_card');

    // On/Off в заголовке карточки
    const onOffText = document.querySelector('.toggler_and_logo .logo em');

    if (cardEl.classList.contains('on')) {
      //был включен
      console.log('ON -> OFF');

      //выключаем
      cardEl.classList.add('off');
      cardEl.classList.remove('on');

      // Замена текста заголовка
      onOffText.textContent = 'Off';
    } else {
      //был выключен
      console.log('OFF -> ON');

      //включаем
      cardEl.classList.add('on');
      cardEl.classList.remove('off');

      // Замена текста заголовка
      onOffText.textContent = 'On';
    }
  });
};

const checkNameField = () => {
  const fieldName = document.getElementById('name');
  const namePattern =
    /^[А-Яа-яёЁ]+(-[А-Яа-яёЁ]+)?(\s[А-Яа-яёЁ]+(-[А-Яа-яёЁ]+)?){0,2}$/;

  return namePattern.test(fieldName.value);
};

const checkRoleField = () => {
  const fieldRole = document.getElementById('role');

  return ['1', '2', '3'].includes(fieldRole.value);
};

const checkPhoneField = () => {
  const fieldPhone = document.getElementById('phone');
  const phonePattern = /^(\+?7|8)\s?\(?\d{3}\)?\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/;

  return phonePattern.test(fieldPhone.value);
};

const checkEmailField = () => {
  const fieldEmail = document.getElementById('email');

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(fieldEmail.value);
};

const sendRemoteForm = async (userName, userRole, userPhone, userEmail) => {
  const formData = new FormData(); // Пустая форма

  // Заполнение реквизитов
  formData.append('userName', userName);
  //заменяем id роли на название
  //здесь не нужна проверка, т.к. значения полей проверены
  formData.append('userRole', rolesObj[userRole]);
  formData.append('userPhone', userPhone);
  formData.append('userEmail', userEmail);

  // Отправлен запрос
  console.log('Отправляем запрос');

  fetch(formEndpoint, {
    method: 'POST',
    body: formData,
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log('Форма ОК');
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, 'errors')) {
            console.log(
              data['errors'].map((error) => error['message']).join(', ')
            );
          } else {
            console.log('Хмм! Ошибка при отправке');
          }
        });
      }
    })
    .catch((error) => {
      console.log('Хмм! Ошибка при отправке');
    });

  console.log('Код отработал');
};

const checkFormByButton = async () => {
  isNameCorrect = checkNameField();
  isRoleCorrect = checkRoleField();
  isPhoneCorrect = checkPhoneField();
  isEmailCorrect = checkEmailField();

  const formEl = document.querySelector('.demo__form');

  if (isNameCorrect && isRoleCorrect && isPhoneCorrect && isEmailCorrect) {
    //если все норм, отправляем форму

    // получаем поля
    const fieldName = document.getElementById('name');
    const fieldRole = document.getElementById('role');
    const fieldPhone = document.getElementById('phone');
    const fieldEmail = document.getElementById('email');

    // Отправка удаленной формы
    sendRemoteForm(
      fieldName.value,
      fieldRole.value,
      fieldPhone.value,
      fieldEmail.value
    );

    // обнуляем значения в полях
    fieldName.value = '';
    fieldRole.value = '';
    fieldPhone.value = '';
    fieldEmail.value = '';

    // сохраняем код формы
    const formHTMLSave = formEl.innerHTML;

    // выводим сообщение с благодарностью
    formEl.innerHTML += formSentHTML;

    // таймер
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    await delay(5000);

    // убираем сообщение
    formEl.innerHTML = formHTMLSave;
  } else {
    //если есть ошибки, выводим визуально
    const nameWrapper = document.getElementById('field_name');
    const roleWrapper = document.getElementById('field_role');
    const phoneWrapper = document.getElementById('field_phone');
    const emailWrapper = document.getElementById('field_email');

    // есть ли ошибки в имени?
    if (!isNameCorrect) {
      //индикация ошибки
      if (!nameWrapper.classList.contains('form_field_error')) {
        nameWrapper.classList.add('form_field_error');
      }
    } else {
      //убираем сообщение об ошибке
      if (nameWrapper.classList.contains('form_field_error')) {
        nameWrapper.classList.remove('form_field_error');
      }
    }

    // есть ли ошибки в роли
    if (!isRoleCorrect) {
      //индикация ошибки
      if (!roleWrapper.classList.contains('form_field_error')) {
        roleWrapper.classList.add('form_field_error');
      }
    } else {
      //убираем сообщение об ошибке
      if (roleWrapper.classList.contains('form_field_error')) {
        roleWrapper.classList.remove('form_field_error');
      }
    }

    // есть ли ошибки в телефоне
    if (!isPhoneCorrect) {
      //индикация ошибки
      if (!phoneWrapper.classList.contains('form_field_error')) {
        phoneWrapper.classList.add('form_field_error');
      }
    } else {
      //убираем сообщение об ошибке
      if (phoneWrapper.classList.contains('form_field_error')) {
        phoneWrapper.classList.remove('form_field_error');
      }
    }

    // есть ли ошибки в email
    if (!isEmailCorrect) {
      //индикация ошибки
      if (!emailWrapper.classList.contains('form_field_error')) {
        emailWrapper.classList.add('form_field_error');
      }
    } else {
      //убираем сообщение об ошибке
      if (emailWrapper.classList.contains('form_field_error')) {
        emailWrapper.classList.remove('form_field_error');
      }
    }
  }
};

const formHandler = () => {
  const fieldName = document.getElementById('name');
  const fieldRole = document.getElementById('role');
  const fieldPhone = document.getElementById('phone');
  const fieldEmail = document.getElementById('email');

  const sendButton = document.querySelector('.send_demo_request');

  fieldName.addEventListener('change', () => {
    const isCorrect = checkNameField();

    const nameWrapper = document.getElementById('field_name');

    if (!isCorrect) {
      //индикация ошибки
      if (!nameWrapper.classList.contains('form_field_error')) {
        nameWrapper.classList.add('form_field_error');
      }
    } else {
      //убираем сообщение об ошибке
      if (nameWrapper.classList.contains('form_field_error')) {
        nameWrapper.classList.remove('form_field_error');
      }
    }
  });

  fieldRole.addEventListener('change', () => {
    const isCorrect = checkRoleField();

    const roleWrapper = document.getElementById('field_role');

    if (!isCorrect) {
      //индикация ошибки
      if (!roleWrapper.classList.contains('form_field_error')) {
        roleWrapper.classList.add('form_field_error');
      }
    } else {
      //убираем сообщение об ошибке
      if (roleWrapper.classList.contains('form_field_error')) {
        roleWrapper.classList.remove('form_field_error');
      }
    }
  });

  fieldPhone.addEventListener('change', () => {
    const isCorrect = checkPhoneField();

    const phoneWrapper = document.getElementById('field_phone');

    if (!isCorrect) {
      //индикация ошибки
      if (!phoneWrapper.classList.contains('form_field_error')) {
        phoneWrapper.classList.add('form_field_error');
      }
    } else {
      //убираем сообщение об ошибке
      if (phoneWrapper.classList.contains('form_field_error')) {
        phoneWrapper.classList.remove('form_field_error');
      }
    }
  });

  fieldEmail.addEventListener('change', () => {
    const isCorrect = checkEmailField();

    const emailWrapper = document.getElementById('field_email');

    if (!isCorrect) {
      //индикация ошибки
      if (!emailWrapper.classList.contains('form_field_error')) {
        emailWrapper.classList.add('form_field_error');
      }
    } else {
      //убираем сообщение об ошибке
      if (emailWrapper.classList.contains('form_field_error')) {
        emailWrapper.classList.remove('form_field_error');
      }
    }
  });

  sendButton.addEventListener('click', checkFormByButton);
};

document.addEventListener('DOMContentLoaded', () => {
  schemesImgHandler();
  slidesHandler();
  roleButtonsHandler();
  switchHandler();
  formHandler();
});
