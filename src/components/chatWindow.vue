<template>
  <div class="chat-window">
      <div class="messages">
          <div class="single">
              <spam class="created-at">1 min ago</spam>
              <spam class="name">soo</spam>
              <spam class="message">who are you</spam>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.chat-window {
        background: #fafafa;
        padding: 30px 20px;
      }
      .single {
        margin: 18px 0;
      }
      .created-at {
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px;
      }
      .name {
        font-weight: bold;
        margin-right: 6px;
      }
      .messages {
        max-height: 400px;
        overflow: auto;
      }
</style>