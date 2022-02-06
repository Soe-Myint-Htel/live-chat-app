<template>
  <div class="container">
    <navbar />
    <new-chat-form/>
  </div>
</template>

<script>
import { watch } from '@vue/runtime-core'
import Navbar from '../components/Navbar.vue'
import getUser from "../composables/getUser"
import {useRouter} from "vue-router"
import NewChatForm from '../components/NewChatForm.vue'
export default {
  components: { Navbar, NewChatForm },
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