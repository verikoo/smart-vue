<template>
  <div class="blogs">
    <div v-if="error">
      {{ error }}
    </div>
    <ValidationObserver>
      <form @submit.prevent="addTeam">
        <h1 class="pb-10">ბლოგის დამატება</h1>
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
          <button type="submit" class="btn btn-primary">
            <span>submit</span>
          </button>
        </div>
      </form>
    </ValidationObserver>
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
      const randomSlug = Math.random()
        .toString(36)
        .substring(2);

      this.form.slug = randomSlug;
      axios
        .post(`${env.host}/api/add/teammate`, this.form)
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
.blogs {
  margin-top: 0 !important;
  align-items: center;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  text-align: center;
}
.blogs form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.blogs .input {
  position: relative;
}
.blogs .input input {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #dadada;
  outline: none;
  padding-left: 20px;
}
.blogs .input input:focus {
  border: 1px solid royalblue;
  transition: 0.3s;
}
.blogs button {
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
</style>
