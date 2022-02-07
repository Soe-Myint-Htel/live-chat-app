<template>
  <div class="chat-window">
    <div class="messages" ref="msgBox">
      <div class="single" v-for="msg in formattedMessages" :key="msg.id">
        <spam class="created-at">{{ msg.created_at }}</spam>
        <spam class="name">{{ msg.name }}</spam>
        <spam class="message">{{ msg.message }}</spam>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { db } from "../firebase/config";
import { formatDistanceToNow } from "date-fns";
import { computed, onUpdated } from "@vue/runtime-core";
export default {
  setup() {
    let messages = ref([]);
    let msgBox = ref(null);

    onUpdated(()=>{
      msgBox.value.scrollTop = msgBox.value.scrollHeight 
     
    })

    let formattedMessages = computed(() => {
      return messages.value.map((msg) => {
        let formatTime = formatDistanceToNow(msg.created_at.toDate())
        return { ...msg, created_at: formatTime };
      });
    });

    db.collection("messages")
      .orderBy("created_at")
      .onSnapshot((snap) => {
        let results = [];
        snap.docs.forEach((doc) => {
          let document = { ...doc.data(), id: doc.id };
          doc.data().created_at && results.push(document);
        });
        messages.value = results;
      });

    return { messages, formattedMessages, msgBox };
  },
};
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
.title{
  font-weight: 800;
  font-size: 20px;
}
</style>