<template>
  <div class="welcome container">
    <div v-if="showLogin">
      <log-in></log-in>
      <p>
        Don't have account ?
        <span @click="showLogin = !showLogin">Sign Up</span> here
      </p>
      <p></p>
    </div>
    <div v-else>
      <sign-up></sign-up>
      <p>
        Already have account !
        <span @click="showLogin = !showLogin">Log in</span> here
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import LogIn from "../components/LogIn.vue";
import SignUp from "../components/SignUp.vue";
export default {
  components: { SignUp, LogIn },
  setup() {
    let showLogin = ref(true);
    return { showLogin };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
/* form styles */
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
  background-color: yellowgreen;
}
</style>