<template>
  <div class="vacancy_detail_container">
    <h1 class="vacancy_detail_title">{{ vacancy.title }}</h1>
    <div class="vacancy_detail_div">
      <div class="vacancy_detail_header_div">
        <h1 class="vacancy_detail_subtitle">{{ vacancy.subtitle }}</h1>
        <!-- <button class="vacancy_detail_button">
          <p>შეავსე ახლა</p>
        </button> -->
      </div>
      <div class="vacancy_detail_description_div">
        <p>{{ vacancy.description }}</p>
      </div>
      <!-- 
      <button class="vacancy_detail_responsive_button">
        <p>შეავსე ახლა</p>
      </button> -->

      <VacancyForm />
    </div>
  </div>
</template>

<script>
import VacancyForm from "./VacancyForm.vue";

export default {
  name: "VacancyDetail",
  props: ["vacancy"],
  components: {
    VacancyForm,
  },
};
</script>

<style scoped>
* {
  font-family: inside_text;
}
.vacancy_detail_container {
  width: 100%;
  height: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  /* border: solid 5px green; */
  margin-left: 30px;
}

.vacancy_detail_title {
  /* font-size: 24px; */
  width: 100%;
  margin: auto;
  color: #462359;
}

.vacancy_detail_div {
  width: 100%;
  height: 80%;
  margin: auto;
  margin-top: 30px;
  /* border: solid 1px #591a92; */
}

.vacancy_detail_header_div {
  width: 100%;
  height: 60px;
  margin: auto;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: solid 1px red; */
}

.vacancy_detail_subtitle {
  font-size: 24px;
  color: #462359;
  /* font-family: inside_text; */
  font-weight: bold;
}

.vacancy_detail_button {
  text-align: center;
  text-decoration: none;
  color: #462359;
  border: 1px solid #462359;
  background-color: transparent;
  transition: all 0.4s cubic-bezier(0.88, -0.99, 0, 1.81);
  font-weight: normal;
  font-size: 18px;
  border-radius: 10px;
  padding: 10px 10px 6px 10px;
  transition: 0.4s;
}
.vacancy_detail_button:hover {
  color: #f2f5fa;
  background: #462359;
  transition: 0.4s;
}
/* Responsive button */

.vacancy_detail_responsive_button {
  width: 180px;
  height: 40px;
  border: none;
  margin: 20px auto;
  border-radius: 10px;
  cursor: pointer;
  display: none;
  border: 1px solid #462359;
  background-color: white;
}

.vacancy_detail_responsive_button p {
  color: #462359;
  font-size: 20px;

  text-align: center;
}

/* Responsive button */

.vacancy_detail_description_div {
  width: 100%;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
}

.vacancy_detail_description_div p {
  text-align: justify;
  font-size: 21px;
  color: #462359;
}

@media only screen and (max-width: 800px) {
  .vacancy_detail_div {
    width: 100%;
  }

  .vacancy_detail_title {
    text-align: center;
  }

  .vacancy_detail_header_div {
    display: block;
    margin-top: 10px;
  }

  .vacancy_detail_subtitle {
    text-align: center;
    /* border: solid 1px red; */
    display: block;
    margin: auto;
  }

  .vacancy_detail_button {
    display: none;
  }

  .vacancy_detail_description_div {
    margin-top: 10px;
  }

  .vacancy_detail_responsive_button {
    display: block;
  }
  .vacancy_detail_container {
    margin-left: 0px;
  }
}

@media only screen and (max-width: 490px) {
  .vacancy_detail_div {
    width: 100%;
  }
}

@media only screen and (max-width: 490px) {
  .vacancy_detail_description_div p {
    font-size: 18px;
  }
}
</style>
