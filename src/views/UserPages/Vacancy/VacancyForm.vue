<template>
  <div class="vacancy_form">
    <div class="formCont">
      <ValidationObserver>
        <form @submit.prevent="submit">
          <h1>შეავსეთ ფორმა</h1>
          <p class="wishTitle">
            სურვილის შემთხვევაში შეგიძლიათ გადმოტვირთოთ კომპანიის რეზიუმე
            <a :href="careerFile"> <br /><b>Download application</b> </a>
          </p>
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
import axios from "axios";
import env from ".././../../env.json";
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
      careerFile: "",
    };
  },

  mounted() {
    axios
      .get(`${env.host}/api/get/career/file`)
      .then((result) => {
        this.careerFile = result.data.item[0].url;
        console.log(result.data.item[0].url);
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
* {
  font-family: inside_text;
}
.vacancy_form {
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  padding-top: 20px;
  padding-bottom: 20px;
  /* border: 2px solid red; */
  width: 70%;
  /* display: flex; */
  /* border: 2px solid red; */
  margin-left: 0 auto;
  /* border: 2px solid red; */
  /* align-items: center;
  justify-content: center;
  text-align: center; */
  /* border: 2px solid red; */
}
::-webkit-file-upload-button {
  /* width: 40%; */
  border-radius: 4px;
  background: #7f5496;
  color: white;
  padding: 8px;
  cursor: pointer;
}

.file {
  /* border: 2px solid orange; */
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  width: 50%;
  /* margin: 0 auto; */
  text-align: start;

  /* margin-right: auto; */
  /* border: 2px solid red; */
  /* float: left;
  border: 2px solid red;
  justify-content: center;
  text-align: center;
  margin: auto; */
}
.file input {
  width: 100%;
  display: flex;
  margin-left: auto;
  margin-right: auto;

  /* border: 2px solid red; */
}

.formCont {
  /* border: 2px solid yellow; */
  width: 100%;
}
form h1 {
  /* margin: 20px 0 20px 0; */
  color: #452357;
  font-size: 21px;
}
.input {
  width: 100%;
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
  border: 1px solid #7f5496;
}
.input input:focus,
textarea {
  border: 1px solid #7f5496;
}
.input textarea {
  height: 200px;
  padding-top: 10px;
}

button {
  height: 50px;
  width: 100%;
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
.input span {
  color: #f02849;
  display: flex;
  justify-content: center;
  margin: auto;
  font-size: 12px;
  justify-content: left;
  padding-top: 5px;
}
.wishTitle {
  text-align: justify;
  padding: 20px 0px;

  /* border: 2px solid orange; */
  color: #666666;
  font-size: 16px;
}

.downloadCV {
  padding: 10px 0px;
  /* border: 2px solid blue; */
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 18px;
}

.linkCV {
  /* border: 2px solid red; */
  color: #452357;
  font-weight: bold;
}
@media only screen and (max-width: 1500px) {
  .vacancy_form {
    width: 70%;
  }
}

@media only screen and (max-width: 1080px) {
  .input input,
  .input textarea {
    width: 100%;
  }
  button {
    width: 100%;
  }
  .vacancy_form {
    width: 100%;
  }
}

@media only screen and (max-width: 801px) {
  .vacancy_form {
    width: 80%;
    margin: auto;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .input {
    margin-left: auto;
    margin-right: auto;
  }
  .file {
    margin-left: auto;
    margin-right: auto;
  }
  .input span {
    justify-content: center;
  }
  .wishTitle {
    text-align: center;
  }
}
@media only screen and (max-width: 620px) {
}
</style>