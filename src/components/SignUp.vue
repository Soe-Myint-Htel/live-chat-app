<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="signup">
      <input type="text" placeholder="name" v-model="displayName">
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import {auth} from "../firebase/config"
export default {
    setup(){
        let displayName = ref("");
        let email = ref("");
        let password = ref("");
        let error = ref("");
        let signup = async()=>{
            try {
                let res = await auth.createUserWithEmailAndPassword(email.value, password.value);
                if(!res){
                    throw new Error ("Could not create new account");
                }
            }catch(err){
                error.value = err.message;
                console.log(error.value)
            }
        }
        return {displayName, email, password, signup}
    }
}
</script>

<style>

</style>