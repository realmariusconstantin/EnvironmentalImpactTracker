<template>
  <div id="app">

    <main>
    <admin-page></admin-page>
    </main>

  </div>
</template>
<script>

import {defineComponent} from "vue";
import AdminPage from "@/pages/AdminPage.vue";

export default defineComponent({
  components: {AdminPage}
})
</script>

<style>
#app {
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh; /* Make sure it only fills the viewport */
  margin: 0;
  padding: 0;
}

main {
  flex-grow: 1; /* Allows main content to expand while keeping footer at the bottom */
  display: flex;
  justify-content: center;
  align-items: center;
}

footer {
  text-align: center;
  padding: 10px;
  background-color: #000000;
  color: #ffffff;
}
</style>