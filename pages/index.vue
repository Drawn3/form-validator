<template>
  <div class="container">
    <div class="flex__wrap">
      <div class="flex__wrap_step">
        <div class="flex__step_item">
          <p class="flex__step_title">Укажите e-mail</p>
          <span class="flex__step_number">1</span>
        </div>
        <div class="flex__step_item">
          <p class="flex__step_title">Придумайте пароль</p>
          <span class="flex__step_number">2</span>
        </div>
        <div class="flex__step_item">
          <p class="flex__step_title">Потвердите пароль</p>
          <span class="flex__step_number">3</span>
        </div>
        <div class="flex__step_item">
          <p class="flex__step_title">Нажмите для продолжения регистрации</p>
          <span class="flex__step_number">4</span>
        </div>
      </div>
      <div class="flex__form">
        <ValidationObserver v-slot="{ handleSubmit }" 
          tag="div"
          class="observer__form_wrap"
          >
          <img alt="" height="63" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/76px-Check_green_icon.svg.png" class="img_check">
          <form @submit.prevent="handleSubmit(onSubmit)">
            <div class="form__wrapper">
              <p>Пожалуйста, зарегистрируйтесь</p>
              
              <ValidationProvider 
                  rules="required|email" 
                  v-slot="{ 
                  errors,
                  classes }"
                  tag="div"
                  class="inp__wrap"
                >
                <input type="text" 
                  name="E-mail" 
                  placeholder="Email"
                  class="form__input" 
                  v-model="email" 
                  :class="classes" 
                  v-mask="'email'"
                >
                <div class="error__inp">{{ errors[0] }}</div>
              </ValidationProvider>

              <ValidationProvider 
                name="Пароль" 
                rules="required|minmax:8,16|checkRegister" 
                v-slot="{ 
                errors,
                classes }"
                tag="div"
                class="inp__wrap"
                >
                <input type="password" 
                  v-model="pass" 
                  placeholder="Пароль" 
                  class="form__input" 
                  v-model.trim="pass" 
                  :class="classes"
                />
                <div class="error__inp">{{ errors[0] }}</div>
              </ValidationProvider>

              <ValidationProvider 
                name="Повторите пароль" 
                rules="required|password:@Пароль" 
                v-slot="{ 
                errors,
                classes }"
                tag="div"
                class="inp__wrap"
                >
                <input type="password" 
                  v-model="confirmPass" 
                  placeholder="Повторите пароль" 
                  class="form__input" 
                  v-model.trim="confirmPass" 
                  :class="classes"
                />
                <div class="error__inp">{{ errors[0] }}</div>
              </ValidationProvider>
              <button class="form__btn">Зарегистроваться</button>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider,ValidationObserver} from "vee-validate";

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    email: "",
    pass: "",
    confirmPass: "",
  }),
  methods: {
    onSubmit() {
      alert("Form Submitted!");
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  text-align: center;
}
.flex__wrap{
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-basis: 65%;
}
.flex__wrap_step{
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;
  padding: 9px 20px;
}
.flex__step_item{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding: 18px 0px;
}
.flex__step_title{
  margin-right:5px;
}
.flex__step_number{
  padding: 0px 11px;
  background-color: #fb4a2c;
  border: 1px solid #000;
  color: #ffffff;
  position: relative;
  border-radius: 30%;
}
.flex__step_number:after{
  content: '';
  height: 2px;
  width: 128px;
  position: absolute;
  top: calc(50% - 2px);
  background-color: #fb4a2c;
  z-index: 2;
  left: 31px;
  z-index: 2;
}
/***********форма **********/
form{
  border: none;
  border-radius: 0;
  border-top: 2px solid #fb4a2c;
  position: relative;
  background: #f4f5f5;
  padding: 20px;
}
.form__wrapper{
  display: flex;
  align-items: center;
  flex-direction: column;
}
.form__wrapper p{
  margin-bottom:20px;
  text-transform: uppercase;
  color: #fb4a2c;
}
.form__input{
  border: 1px solid #ccc;
  margin-bottom:20px;
  width:100%;
  padding: 10px;
  color:gray
}
.form__input:focus{
  outline: none !important;
}
.form__btn{
  background: #fb4a2c;
  color: #ffffff;
  width:100%;
  padding:10px;
  text-align: center;
  border: none;
  border-radius: 0;
  border-bottom: 3px solid #c13402;
  cursor: pointer;
  outline: none !important;
  
}
.form__btn:active {
  background: #f5431d;
  color: #fff;
  border-bottom: 1px solid #c13402;
  padding-top: 9px;
}
.is-valid{
  border: 1px solid green !important;
}
.is-invalid{
  border: 1px solid #c13402 !important;
}
.inp__wrap{
  width:100%;
  position: relative;
}
.error__inp{
  position: absolute;
  bottom: 0px;
  width: 100%;
  background: transparent;
  color: red;
  left: 300px;
  top: 10px;
  font-size: 12px;
}
.observer__form_wrap{
  position: relative;
}
.img_check{
  position: absolute;
  z-index: 9;
  top: -3%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>
