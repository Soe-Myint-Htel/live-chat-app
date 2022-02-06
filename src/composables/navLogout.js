import { ref } from "vue";
import {auth} from "../firebase/config"
let error = ref(null);
let logout = async()=>{
    try {
        await auth.signOut();
    }catch(err){
        error.value = err.message;
    }
}

let navLogout = ()=>{
    return {error, logout}
}
export default navLogout;