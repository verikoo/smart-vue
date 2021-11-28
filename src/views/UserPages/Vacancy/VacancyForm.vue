<template>
  <div class="vacancy_form">
    <div class="formCont">
      <ValidationObserver>
        <form @submit.prevent="submit">
          <h1>შეავსეთ ფორმა</h1>
          <ValidationProvider
            rules="required|max:50|min:2"
            v-slot="{ errors }"
            name="name"
          >
            <div class="input">
              <input
                type="text"
                placeholder="fullname"
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
                placeholder="phone"
                v-model="form.phone"
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
            <div class="file">
              <input type="file" placeholder="file" required />
              <span>{{ errors[0] }}</span>
            </div>
          </ValidationProvider>

          <button type="submit">submit</button>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
export default {
  name: "vacancyform",
  data() {
    return {
      form: {
        fullName: "",
        email: "",
        phone: "",
        file: [],
      },
    };
  },
};
</script>

<style scoped>
.vacancy_form {
  /* display: flex; */
  margin: auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* border: 2px solid red; */
}
.input {
  margin-left: auto;
  margin-right: auto;
}

.file {
  width: 50%;
  margin: auto;
  text-align: start;
  /* border: 2px solid red; */
  /* float: left;
  border: 2px solid red;
  justify-content: center;
  text-align: center;
  margin: auto; */
}

/* .formCont {
  width: 50%;
  margin: auto;
  border: 2px solid yellow;
} */
form h1 {
  margin: 50px 0 20px 0;
}
.input {
  width: 50%;
  margin-bottom: 20px;
}
.input input,
.input textarea {
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  outline: none;
  padding-left: 10px;
  border: 1px solid black;
}
.input input:focus,
textarea {
  border: 1px solid #7f5496;
}
.input textarea {
  height: 200px;
  padding-top: 10px;
}
.input span {
  color: #f02849;
}
button {
  height: 50px;
  width: 50%;
  background: #7f5496;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  border: none;
  transition: 0.3s;
}
button:hover {
  background: #a16dbd;
  transition: 0.3s;
}

.file {
  margin-bottom: 20px;
}
</style>