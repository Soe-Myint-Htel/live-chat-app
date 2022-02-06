<template>
  <div class="container">
    <navbar />
  </div>
</template>

<script>
import { watch } from '@vue/runtime-core'
import Navbar from '../components/Navbar.vue'
import getUser from "../composables/getUser"
import {useRouter} from "vue-router"
export default {
  components: { Navbar },
  setup(){
    let {user} = getUser();
    let router = useRouter();
    watch(user, ()=>{
      if(!user.value)router.push('/')
    })
  }
}
</script>

<style>
</style>