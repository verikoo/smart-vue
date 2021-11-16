<template>
  <div class="main">
    <div
      class="improvement"
      :style="{ backgroundImage: `url('${improvement.image}')` }"
    >
      <div>
        <div class="description">
          <h2>
            {{ improvement.text }}
          </h2>
        </div>
        <router-link :to="{ name: 'company' }" class="info" exact-path
          ><span>{{ improvement.buttonText }}</span></router-link
        >
      </div>
    </div>

    <div class="icon">
      <div class="exact_icon" v-for="(item, index) in heros" :key="index">
        <i :class="item.icon"></i>
        <p>{{ item.text }}</p>
      </div>
    </div>

    <div
      class="responsibility"
      :style="{ backgroundImage: `url('${photos[0].url}')` }"
    >
      <div>
        <div class="description">
          <h2>
            ჩვენ ყოველთვის ვცდილობთ შემოგთავაზოთ ეფექტური, გამოცდილი და
            გაუმჯობესებული საშუალებები თქვენი საქმიანობისთვის, ჯანმრთელობისა და
            სიჯანსაღისთვის
          </h2>
        </div>
        <span class="info">პასუხისმგებლობა</span>
      </div>
    </div>

    <div class="video">
      <div style="margin: 150px 0 150px 0">
        <h1>
          შესაძლოა ყველას ჰქონდეს თავსართი
        </h1>
        <div class="iframe">
          <iframe
            width="100%"
            height="600"
            src="https://www.youtube.com/embed/-z_W3yRA9I8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>

    <div class="values">
      <div>
        <div class="description">
          <h2>
            ფასეულობები ისაა, რაც ჩვენ გვაერთიანებს და მუდმივი გაერთიანებისკენ
            სვლის ენერგიას გვაძლევს ენერგიას გვაძლევს
          </h2>
        </div>
        <router-link :to="{ name: 'values' }" class="info" exact-path
          ><span>გამბედაობა</span></router-link
        >
      </div>
    </div>

    <div class="blog">
      <div class="blog_header">
        <h1 class="blog_title">ბლოგი</h1>
        <p>SmartPharm</p>
      </div>
      <div class="blog_card">
        <BlogsCard
          key="hgyhgjh"
          id="value.id"
          img="medicine_news.png"
          header="სათაური"
          date="2020-09-14"
        />
        <BlogsCard
          key="jhgfds"
          id="value.id"
          img="medicine_news.png"
          header="სათაური"
          date="2020-09-14"
        />
        <BlogsCard
          key="qwerty"
          id="value.id"
          img="medicine_news.png"
          header="სათაური"
          date="2020-09-14"
        />
      </div>
    </div>

    <div class="team">
      <div>
        <div class="description">
          <h2>
            ფასეულობები ისაა, რაც ჩვენ გვაერთიანებს და მუდმივი გაერთიანებისკენ
            სვლის ენერგიას გვაძლევს ენერგიას გვაძლევს
          </h2>
        </div>
        <router-link :to="{ name: 'team' }" class="info" exact-path
          ><span>გუნდი და გონივრული გადაწყვეტილებები</span></router-link
        >
      </div>
    </div>

    <div class="team_member">
      <div class="image">
        <img src="../../../assets/img/team.png" alt="" />
      </div>
      <div class="team_description hovereffect">
        <div>
          <p style="font-weight: 700; font-size: 30px; padding-bottom: 20px">
            “ჩვენი გაუმჯობესებითვის (გუნდის რომელიმე წევრის წინადადება ან
            ისტორია გამოტანილი)”
          </p>
          <p style="font-size: 20px">სახელი გვარი</p>
          <a href="/team"><span>მეტის ნახვა</span></a>
        </div>
      </div>
    </div>

    <div class="csr">
      <div>
        <div class="description">
          <h2>CSR</h2>
        </div>
        <router-link :to="{ name: 'csr' }" class="info" exact-path
          ><span>მხარდაჭერა </span></router-link
        >
      </div>
    </div>

    <div class="csr_projects">
      <div class="blog_header">
        <h1 class="blog_title">CSR</h1>
        <p>პროექტები</p>
      </div>
      <div class="projects">
        <div class="hovereffect">
          <img src="../../../assets/img/project.png" alt="" />
          <div class="overlay">
            <h2>პროექტი</h2>
            <p>
              სიახლეებიდან საწყისი ორი აბზაცი იქნება განთავსებული, ვისაუბრებთ
              ექიმების რჩევებზე, მითითებებზე, პრაქტიკაზე, მიღწევებზერჩევებზე
            </p>

            <router-link
              :to="{ name: 'csrDetails', params: { id: 'csrDetails' } }"
              class="info"
              exact-path
              ><span>მეტის ნახვა</span></router-link
            >
          </div>
        </div>
        <div class="hovereffect">
          <img src="../../../assets/img/project.png" alt="" />
          <div class="overlay">
            <h2>პროექტი</h2>
            <p>
              სიახლეებიდან საწყისი ორი აბზაცი იქნება განთავსებული, ვისაუბრებთ
              ექიმების რჩევებზე, მითითებებზე, პრაქტიკაზე, მიღწევებზერჩევებზე
            </p>

            <router-link
              :to="{ name: 'csrDetails', params: { id: 'csrDetails' } }"
              class="info"
              exact-path
              ><span>მეტის ნახვა</span></router-link
            >
          </div>
        </div>
        <div class="hovereffect">
          <img src="../../../assets/img/project.png" alt="" />
          <div class="overlay">
            <h2>პროექტი</h2>
            <p>
              სიახლეებიდან საწყისი ორი აბზაცი იქნება განთავსებული, ვისაუბრებთ
              ექიმების რჩევებზე, მითითებებზე, პრაქტიკაზე, მიღწევებზერჩევებზე
            </p>

            <router-link
              :to="{ name: 'csrDetails', params: { id: 'csrDetails' } }"
              class="info"
              exact-path
              ><span>მეტის ნახვა</span></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogsCard from "../Blog/Main/BlogsCard.vue";
import axios from "axios";
import env from "../../../env.json";

export default {
  name: "MainPage",
  components: {
    BlogsCard,
  },

  data() {
    return {
      photos: [],
      heros: [],
      improvement: {},
    };
  },

  mounted() {
    axios
      .get(`${env.host}/api/get/slides`)
      .then((response) => {
        this.photos = JSON.parse(JSON.stringify(response.data));
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`${env.host}/api/get/companies/heros`)
      .then((result) => (this.heros = JSON.parse(JSON.stringify(result.data))))
      .catch((err) => console.log(err));

    axios
      .get(`${env.host}/api/get/companies/improvements`)
      .then((result) => {
        this.improvement = result.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  margin: auto;
  min-height: calc(100vh - 258px);
}
.improvement {
  width: 100%;
  height: 40rem;
  background-image: url("../../../assets/img/testPhoto.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}
.responsibility {
  width: 100%;
  height: 40rem;
  background-image: url("../../../assets/img/testPhoto.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}
.values {
  width: 100%;
  height: 40rem;
  background-image: url("../../../assets/img/testPhoto.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}
.team {
  width: 100%;
  height: 40rem;
  background-image: url("../../../assets/img/testPhoto.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}
.csr {
  width: 100%;
  height: 40rem;
  background-image: url("../../../assets/img/testPhoto.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}
.description {
  width: 100%;
  max-width: 1400px;
  text-align: center;
  margin: auto;
  /* background: #6d08a76c; */
  padding: 50px 100px 50px 100px;
  color: white;
  border-radius: 20px;
  margin-bottom: 50px;
  font-size: 25px;
  letter-spacing: 2px;
}
.improvement .info,
.responsibility .info,
.values .info,
.team .info,
.csr .info {
  border-radius: 10px;
  color: white;
  text-align: center;
  margin: auto;
  justify-content: center;
  display: flex;
  border: 1px solid white;
  padding: 15px 15px 11px 15px;
  width: 200px;
  transition: 0.4s;
  cursor: pointer;
}

.hovereffect a:hover,
.improvement .info:hover,
.responsibility .info:hover,
.values .info:hover,
.team .info:hover,
.csr .info:hover {
  border: 1px solid transparent;
  color: #f2f5fa;
  background: #462359;
  transition: 0.4s;
}
.icon {
  width: 100%;
  max-width: 1400px;
  margin: auto;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
}
.icon img {
  width: 70px;
}
.exact_icon {
  text-align: center;
  padding: 150px 0 150px 0;
}
.exact_icon p {
  color: #571f8e;
  font-weight: 600;
  font-size: 20px;
}
.exact_icon i {
  color: #7f5496;
  margin-bottom: 20px;
  font-size: 50px;
}
.video {
  width: 100%;
  max-width: 1400px;
  text-align: center;
  margin: auto;
}
.team_member {
  width: 100%;
  max-width: 1400px;
  margin: auto;
  padding: 100px 0 100px 0;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
}
.team_description {
  color: #7f5496;
  display: flex;
  align-items: center;
  justify-content: center;
}
.image {
  margin: auto;
  height: 300px;
  text-align: center;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image img {
  width: 300px;
  height: 300px;
  border-radius: 150px;
}
/* sdsdf */
.csr_projects {
  max-width: 1400px;
  margin: auto;
  padding: 50px 0 50px 0;
  width: 100%;
}
.projects {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
}
.hovereffect {
  border-radius: 16px;
  width: 100%;
  height: auto;
  cursor: default;
}
.hovereffect img {
  width: 100%;
  height: 350px;
  display: block;
  object-fit: cover;
  border-radius: 20px;
}
.hovereffect h2 {
  margin: auto;
  color: black;
  padding-top: 20px;
  padding-bottom: 20px;
}
.hovereffect p {
  padding-bottom: 20px;
}
.hovereffect a,
.team_member a {
  text-align: center;
  text-decoration: none;
  color: #462359;
  border: 1px solid #462359;
  background-color: transparent;
  transition: all 0.4s cubic-bezier(0.88, -0.99, 0, 1.81);
  font-weight: normal;
  font-size: 20px;
  border-radius: 10px;
  padding: 10px 10px 6px 10px;
  transition: 0.4s;
}
/* .hovereffect a.info:hover,
.team_member a:hover {
  color: #f2f5fa;
  background: #462359;
  transition: 0.4s;
} */
.blog {
  width: 100%;
  max-width: 1400px;
  margin: auto;
  padding: 100px 0 100px 0;
}
.blog_card {
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(3, 1fr);
}
.blog_header {
  color: #7f5496;
  text-align: center;
  padding-bottom: 50px;
}
.blog_header p {
  font-size: 19px;
  color: #7f5496;
  /* margin-left: 130px; */
}
.blog .blog_title {
  font-size: 40px;
}

.video h1 {
  text-align: center;
  padding-bottom: 50px;
  color: #a3a7a9;
}

.description h2{
  font-weight: normal;
}

@media all and (max-width: 1400px) {
  .improvement,
  .responsibility,
  .values,
  .team,
  .blog_card,
  .projects {
    padding: 10px 40px 10px 40px;
  }

  /* 
  .iframe {
    padding: 0 40px 0 40px;
  } */
  .main {
    margin-top: 130px;
  }
}
@media all and (max-width: 1200px) {
  .projects {
    grid-template-columns: repeat(2, 1fr);
  }
  .blog_card {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media all and (max-width: 992px) {
  .blog,
  .team_member,
  .blog_card,
  .projects {
    grid-template-columns: repeat(1, 1fr);
  }
  .team_member {
    width: 80%;
    margin: auto;
  }
  .hovereffect img {
    height: 500px;
  }
  .hovereffect h2 {
    font-size: 2.5vw;
    margin-top: 150px;
  }
  .icon {
    grid-template-columns: repeat(2, 1fr);
  }
  .exact_icon {
    padding: 50px 0 50px 0;
  }
  .iframe iframe {
    height: 200px;
  }
}
@media all and (max-width: 768px) {
  .hovereffect img {
    height: 400px;
  }
  .hovereffect h2 {
    font-size: 3.5vw;
    margin-top: 100px;
  }
  .video h1 {
    padding: 0px 30px 30px 30px;
  }
}
@media all and (max-width: 531px) {
  .description {
    padding: 20px !important;
  }
  .icon {
    grid-template-columns: repeat(1, 1fr);
  }
  .description {
    font-size: 18px;
  }
}
@media all and (max-width: 450px) {
  .hovereffect img {
    height: 300px;
  }
  .hovereffect h2 {
    font-size: 4.5vw;
  }
}
@media all and (max-width: 400px) {
  .hovereffect img {
    height: 250px;
  }
  .hovereffect h2 {
    margin-top: 50px;
    width: 150px;
    font-size: 5.5vw;
  }
  .blog_header {
    display: block;
  }
  .blog_title {
    border: none !important;
  }
}
@media all and (max-width: 316px) {
  .hovereffect a.info {
    width: 150px;
  }
}
</style>
