<template>
  <div class="team_management">
    <AddTeam />
    <table>
      <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
        <th>edit</th>
        <th>delete</th>
      </tr>
      <tr v-for="team in allTeam" :key="team.id">
        <td>{{team}}</td>
        <td>Maria Anders</td>
        <td>Germany</td>
        <td>
          <button class="button" @click="deleteTeam(team.id)">
            <i class="fal fa-pen"></i>
          </button>
        </td>
        <td>
          <button class="button">
            <i class="fal fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import env from "../../../env.json";

import AddTeam from "../AddComponents/AddTeam.vue";
export default {
  name: "getTeam",
  components: {
    AddTeam,
  },
  data() {
    return {
      allTeam: [],
    };
  },
  methods: {
    getTeam() {
      axios.get(`${env.host}/get/all/teammate`).then((res) => {
        console.log(res);
        this.allTeam = res;
      });
    },
    deleteTeam(id) {
      axios.delete(`${env.host}/delete/teammate`, id);
    },
  },
};
</script>

<style>
.team_management {
  padding: 20px;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
.button {
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
</style>