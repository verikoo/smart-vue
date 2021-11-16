<template>
  <div class="team">
    <div v-if="error">
      {{ error }}
    </div>
    <ValidationObserver>
      <form @submit.prevent="addTeam">
        <h1 class="pb-10">Add Team</h1>
        <ValidationProvider
          rules="required|max:50|min:2"
          v-slot="{ errors }"
          name="name"
        >
          <label for="floatingInput">Fullname : </label>
          <div class="input">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="username"
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
          <label for="floatingInput">descriptions : </label>
          <div class="input">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="username"
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
          <label for="floatingInput">email : </label>
          <div class="input">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="username"
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
          <label for="floatingInput">position : </label>
          <div class="input">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="username"
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

import env from "../../env.json";

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
.team {
  display: flex;
  justify-content: center;
}
.input span {
  color: #ef2849;
}
</style>
