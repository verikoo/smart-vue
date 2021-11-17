<template>
  <div class="values">
    <tabs>
      <tab title="გამბედაობა" class="tabs_values">
        <div class="icons">
          <img
            src="../../../assets/ilustrations/undraw_gravitas_d3ep.svg"
            alt=""
            style="background: #A580B5"
          />
          <img
            src="../../../assets/ilustrations/undraw_solution_mindset_34bi.svg"
            alt=""
          />
          <img
            src="../../../assets/ilustrations/undraw_informed_decision_p2lh.svg"
            alt=""
          />

          <img
            src="../../../assets/ilustrations/undraw_Active_support_re_b7sj.svg"
            alt=""
          />
        </div>
        <p v-if="lang == 'ka'" v-html="data.courage.textKA"></p>
        <p v-else v-html="data.courage.textEN"></p>
      </tab>
      <tab title="გონივრული გადაწყვეტილება" class="tabs_values">
        <div class="icons">
          <img
            src="../../../assets/ilustrations/undraw_gravitas_d3ep.svg"
            alt=""
          />
          <img
            src="../../../assets/ilustrations/undraw_solution_mindset_34bi.svg"
            alt=""
            style="background: #A580B5"
          />
          <img
            src="../../../assets/ilustrations/undraw_informed_decision_p2lh.svg"
            alt=""
          />
          <img
            src="../../../assets/ilustrations/undraw_Active_support_re_b7sj.svg"
            alt=""
          />
        </div>
        <p v-if="lang == 'ka'">
          <span style="font-weight: 700"></span>
          {{ data.areasonabledecision.textKA }}
        </p>
        <p v-else>
          <span style="font-weight: 700"></span>
          {{ data.areasonabledecision.textEN }}
        </p>
      </tab>
      <tab title="პასუხისმგებლობა" class="tabs_values">
        <div class="icons">
          <img
            src="../../../assets/ilustrations/undraw_gravitas_d3ep.svg"
            alt=""
          />
          <img
            src="../../../assets/ilustrations/undraw_solution_mindset_34bi.svg"
            alt=""
          />
          <img
            src="../../../assets/ilustrations/undraw_informed_decision_p2lh.svg"
            alt=""
            style="background: #A580B5"
          />

          <img
            src="../../../assets/ilustrations/undraw_Active_support_re_b7sj.svg"
            alt=""
          />
        </div>
        <p v-if="lang == 'ka'">
          {{ data.responsibility.textKA }}
        </p>
        <p v-else>
          {{ data.responsibility.textEN }}
        </p>
      </tab>

      <tab title="მხარდაჭერა" class="tabs_values">
        <div class="icons">
          <img
            src="../../../assets/ilustrations/undraw_gravitas_d3ep.svg"
            alt=""
          />
          <img
            src="../../../assets/ilustrations/undraw_solution_mindset_34bi.svg"
            alt=""
          />
          <img
            src="../../../assets/ilustrations/undraw_informed_decision_p2lh.svg"
            alt=""
          />

          <img
            src="../../../assets/ilustrations/undraw_Active_support_re_b7sj.svg"
            alt=""
            style="background: #A580B5"
          />
        </div>
        <p v-if="lang == 'ka'">
        {{data.support.textKA}}
        </p>
        <p v-else>
        {{data.support.textEN}}
        </p>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from "../../../components/tabs/Tab.vue";
import Tabs from "../../../components/tabs/Tabs.vue";
import axios from "axios";
import env from "../../../env.json";

export default {
  components: {
    Tab,
    Tabs,
  },
  data() {
    return {
      data: {},
      lang: "ka",
    };
  },
  mounted() {
    if (localStorage.getItem("lang") == "ka") {
      this.lang = "ka";
    } else {
      this.lang = "en";
    }

    axios.get(`${env.host}/api/get/values`).then((res) => {
      this.data = res.data.item;
    });
  },
};
</script>

<style>
.values {
  width: 100%;
  max-width: 1400px;
  margin: auto;
  min-height: calc(100vh - 258px);
  text-align: justify;
  margin-top: 145px;
  /* border: 2px solid red; */
}

.values p {
  font-size: 24px;
}

.values span {
  font-size: 25px;
}

.tabs_values {
  display: inline-block;
  align-self: center;
  padding: 20px;
  padding-left: 100px;
}

.icons {
  display: flex;
  margin: -100px 0 50px 0;
}

.icons img {
  background: #a4a8aa;
  border-radius: 20px;
  padding: 20px;
  width: 200px;
  height: auto;
  margin-right: 15px;
  margin-left: 15px;
}
.link {
  font-weight: 700;
}
.link a {
  margin-left: 10px;
  font-size: 18px;
}
.link i {
  text-align: center;
  width: 60px;
  font-weight: 500;
  transition: 0.4s;
}
.link i:hover {
  margin-left: 20px;
  transition: 0.4s;
}

@media all and (max-width: 1400px) {
  .values {
    padding: 20px;
  }
  .tabs_values {
    padding-left: 20px;
  }
}

@media all and (max-width: 1280px) {
  .icons {
    padding-bottom: 50px;
    justify-content: center;
    margin: 0 !important;
  }
  .values p {
    font-size: 20px;
    padding-bottom: 50px;
  }
  .tabs_values {
    padding-left: 20px;
  }
}
@media all and (max-width: 992px) {
  .icons img {
    width: 150px;
  }
  .tabs_values {
    padding-left: 20px;
  }
}
@media all and (max-width: 780px) {
  .icons img {
    width: 100px;
  }
  .values {
    margin: auto;
  }

  .tabs ul {
    display: grid;
    /* grid-template-columns: auto auto; */
  }
  .link a {
    font-size: 18px;
  }
}
@media all and (max-width: 582px) {
  .icons {
    display: block;
    text-align: center;
  }
}

@media all and (max-width: 332px) {
  .values p {
    font-size: 5vw;
  }
}
</style>
