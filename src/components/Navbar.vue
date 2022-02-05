<template>
  <nav>
      <div>
          <p class="error">{{error}}</p>
          <p>HI display name</p>
          <p class="email">logged in as email</p>
      </div>
      <button @click="logout">Log out</button>
  </nav>
</template>

<script>
import navLogout from "../composables/navLogout"
export default {
    setup(){
        let {error, logout} = navLogout();
        return {error, logout}
    }
}
</script>

<style>
nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
}
nav p.email {
    font-size: 14px;
    color: #999;
}
</style>