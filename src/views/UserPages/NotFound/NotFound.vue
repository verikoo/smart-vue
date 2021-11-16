<template>
  <div class="not_found">
    <p>Page Not Found</p>
    <img
      src="../../../assets/ilustrations/undraw_page_not_found_su7k.svg"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.not_found {
  display: block;
  text-align: center;
  font-size: 50px;
}
.not_found p {
    padding:20px;
}
.not_found img{
    width:40%;
}
</style>