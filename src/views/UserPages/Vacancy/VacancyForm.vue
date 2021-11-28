<template>
  <div class="vacancy_form">
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
          <div class="input">
            <textarea
              placeholder="message"
              v-model="form.message"
              required
            ></textarea>
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <button type="submit">submit</button>
      </form>
    </ValidationObserver>
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
        message: "",
      },
    };
  },
};
</script>

<style scoped>
form h1{
    margin:50px 0 20px 0;
}
.input{
    width: 50%;
    margin-bottom:20px;
}
.input input, .input textarea {
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  outline: none;
  padding-left:10px;
}
.input input:focus, textarea{
    border:1px solid #7F5496;
}
.input textarea {
  height: 200px;
  padding-top:10px;
}
.input span{
    color: #F02849;
}
button{
    height: 50px;
    width:50%;
    background: #7F5496;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    transition: 0.3s;
}
button:hover{
    background: #a16dbd;
    transition: 0.3s;
}
</style>