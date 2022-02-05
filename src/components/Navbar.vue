<template>
  <nav v-if="user">
      <div>
          <p class="error">{{error}}</p>
          <p>HI {{user.displayName}}</p>
          <p class="email">logged in as {{user.email}}</p>
      </div>
      <button @click="logout">Log out</button>
  </nav>
</template>

<script>
import navLogout from "../composables/navLogout"
import getUser from "../composables/getUser"
export default {
    setup(){
        let {user } = getUser();
        let {error, logout} = navLogout();
        return {error, logout, user}
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