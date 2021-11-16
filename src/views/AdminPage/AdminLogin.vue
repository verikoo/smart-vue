<template>
  <div class="login">
    <form action="" @submit.prevent="login">
      <div class="title">
        <h2>შესვლა ადმინისტრატორით</h2>
      </div>
      <div class="input">
        <input type="text" placeholder="ელეტრონული ფოსტა" v-model="email" />
      </div>
      <div class="input">
        <input :type="passtype" placeholder="პაროლი" v-model="password" />
        <i :class="show_pass" @click="showPassword"></i>
      </div>
      <div class="button">
        <button type="submit">
          {{ $t("login") }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "adminlogin",
  data() {
    return {
      email: "",
      password: "",
      error: "",
      passtype: "password",
      show_pass: "far fa-eye-slash",
    };
  },
  methods: {
    login() {
      const user = {
        email: this.email,
        password: this.password,
      };
      axios.post("http://localhost:5000/api/login", user).then(
        (res) => {
          // iff successful
          if (res.status === 200) {
            console.log(res);
            localStorage.setItem("token", res.data.token);
            this.$router.push("/adminpage");
          }
        },
        (err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email or password is incorrect!",
          });
          this.error = err.response.data.error;
        }
      );
    },
    showPassword() {
      if (this.passtype === "password") {
        this.passtype = "text";
        this.show_pass = "far fa-eye";
      } else {
        this.passtype = "password";
        this.show_pass = "far fa-eye-slash";
      }
    },
  },
};
</script>

<style scoped>
.login {
  margin-top: 0 !important;
  align-items: center;
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
}
.login form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.login .input {
  position: relative;
}
.login input {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #dadada;
  outline: none;
  padding-left: 20px;
}
.login input:focus {
  border: 1px solid royalblue;
  transition: 0.3s;
}
.login .input i {
  position: absolute;
  right: 15px;
  top: 17px;
  cursor: pointer;
}
.login button {
  width: 100%;
  height: 45px;
  border: none;
  background: royalblue;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  color: white;
}
</style>
