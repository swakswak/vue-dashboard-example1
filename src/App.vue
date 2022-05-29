<template>
  <AppHeader/>
  <div class="container-fluid">
    <div class="row">
      <AppSideBar/>
    </div>
  </div>
</template>

<script>

import AppHeader from "@/components/AppHeader";
import AppSideBar from "@/components/AppSideBar";

export default {
  name: 'App',
  components: {
    AppSideBar,
    AppHeader
  }
}
</script>

<style>
  /*GLOBAL*/
  * {
    font-size: 0.85rem;
  }
</style>