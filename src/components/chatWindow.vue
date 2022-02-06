<template>
  <div class="chat-window">
      <div class="messages" v-for="msg in messages" :key="msg.id">
          <div class="single">
              <spam class="created-at">{{msg.created_at}}</spam>
              <spam class="name">{{msg.name}}</spam>
              <spam class="message">{{msg.message}}</spam>
          </div>
      </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { db } from '../firebase/config'
export default {
    setup(){
        let messages = ref([]);
        db.collection("messages").orderBy("created_at").onSnapshot((snap)=>{
            let results = [];
            snap.docs.forEach((doc)=>{
                let document = {...doc.data(),id: doc.id};
                results.push(document);
            })
            messages.value = results;
        })
        return {messages}
    }
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