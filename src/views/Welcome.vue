<template>
  <div class="welcome container">
    <sign-up></sign-up>
    <log-in></log-in>
  </div>
</template>

<script>
import LogIn from '../components/LogIn.vue';
import SignUp from '../components/SignUp.vue';
export default {
  components: { SignUp, LogIn },
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