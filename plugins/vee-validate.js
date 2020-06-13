import {extend,localize,configure } from "vee-validate";
import {required, email} from "vee-validate/dist/rules";
import ru from 'vee-validate/dist/locale/ru.json';

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  }
})
localize('ru', ru);

extend('email', email);

extend('required', {
  validate (value) {
    return {
      required: true,
      valid: ['', null, undefined].indexOf(value) === -1
    };
  },
  computesRequired: true
});

extend('minmax', {
  validate(value, { min, max }) {
    return value.length >= min && value.length <= max;
  },
  params: ['min', 'max'],
  message: 'Длина поля {_field_} должна быть от {min} до {max}'
});


extend('password', {
  params: ['target'],
  validate(value, { target }) {
    return value === target;
  },
  message: 'Пароли не совпадают'
});

extend('checkRegister', {
  validate(value) {
    let reg = /(?=.*[a-z])(?=.*[A-Z])/;
    return reg.test(value)
  },
  message: 'Пароль должен содержать 1 символ верхнего регистра и 1 символ нижнего регистра'
});