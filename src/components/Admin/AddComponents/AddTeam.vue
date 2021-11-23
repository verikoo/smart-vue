<template>
  <div class="team">
    <button @click="add_team = true" class="button">+</button>
    <div class="add_team" v-if="add_team">
      <div class="pop_up">
        <div class="add_form">
          <div v-if="error">
            {{ error }}
          </div>
          <ValidationObserver>
            <form @submit.prevent="addTeam">
              <button class="close_button" @click="add_team = false">
                <div class="close">
                  <div class="close_btn"></div>
                </div>
              </button>
              <h1 class="pb-10">ჯგუფის დამატება</h1>
              <ValidationProvider
                rules="required|max:50|min:2"
                v-slot="{ errors }"
                name="name"
              >
                <div class="input">
                  <input
                    type="text"
                    placeholder="fullName"
                    v-model="form.fullName"
                    required
                  />
                  <span>{{ errors[0] }}</span>
                </div>
              </ValidationProvider>
              <ValidationProvider
                rules="required|max:50|min:2"
                v-slot="{ errors }"
                name="name"
              >
                <div class="input">
                  <input
                    type="text"
                    placeholder="description"
                    v-model="form.description"
                    required
                  />
                  <span>{{ errors[0] }}</span>
                </div>
              </ValidationProvider>
              <ValidationProvider
                rules="required|max:50|min:2"
                v-slot="{ errors }"
                name="name"
              >
                <div class="input">
                  <input
                    type="email"
                    placeholder="email"
                    v-model="form.email"
                    required
                  />
                  <span>{{ errors[0] }}</span>
                </div>
              </ValidationProvider>
              <ValidationProvider
                rules="required|max:50|min:2"
                v-slot="{ errors }"
                name="name"
              >
                <div class="input">
                  <input
                    type="text"
                    placeholder="position"
                    v-model="form.position"
                    required
                  />
                  <span>{{ errors[0] }}</span>
                </div>
              </ValidationProvider>
              <input
                type="file"
                style="margin: 10px 0"
                accept="image/*"
                @change="previewFiles"
              />
              <div class="mb-5 mt-5">
                <button type="submit" class="submit btn btn-primary">
                  <span>submit</span>
                </button>
              </div>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import env from "../../../env.json";

export default {
  name: "login",
  data: () => ({
    form: {
      fullName: "",
      description: "",
      email: "",
      position: "",
      slug: "",
      image: "",
    },
    error: "",
    add_team: false,
  }),
  methods: {
    previewFiles(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.form.image = e.target.result;
      };
    },
    addTeam() {
      const randomSlug = Math.random().toString(36).substring(2);

      this.form.slug = randomSlug;
      axios
        .post(`${env.host}/add/teammate`, this.form)
        .then((res) => {
          alert("succs");
          console.log(res);
        })
        .catch((err) => {
          this.error = err;
          console.log(this.error);
        });
    },
  },
};
</script>

<style scoped>
.add_team {
  top: 0;
  position: fixed !important;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 1050;
  overflow: auto;
  left: 0;
}
.pop_up {
  width: 100%;
  height: 100%;
  margin: auto;
  justify-content: center;
  display: flex;
  align-items: center;
}
.close_button {
  width: 40px;
  height: 40px;
  font-size: 2vw;
  background: none;
  border: none;
  transition: 0.3s;
  margin-left: auto !important;
  margin-right: 0 !important;
  cursor: pointer;
}
.close {
  height: 25px;
  width: 2px;
  margin-left: 12px;
  background-color: black;
  transform: rotate(45deg);
  z-index: 1;
}
.close_btn {
  height: 25px;
  width: 2px;
  background-color: black;
  transform: rotate(90deg);
  z-index: 2;
}
.add_form {
  background: white;
  width: 50%;
  padding: 20px;
  border-radius: 5px;
}
.team {
  /* margin-top: 0 !important; */
  /* align-items: center; */
  /* display: flex; */
  /* width: 100%; */
  /* height: 100%; */
  /* justify-content: center; */
  /* text-align: center; */
}
.team form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.team .input {
  position: relative;
}
.team .input input {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #dadada;
  outline: none;
  padding-left: 20px;
}
.team .input input:focus {
  border: 1px solid royalblue;
  transition: 0.3s;
}
.add_team .submit {
  width: 100%;
  height: 45px;
  border: none;
  background: royalblue;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  color: white;
}
.input span {
  color: #ef2849;
}
.button {
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
</style>
