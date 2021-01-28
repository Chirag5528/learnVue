<template>
    <div class="content">
        <navbar-template :isLoggedIn="isLoggedIn" @loginButtonClicked="toggleModal" @logOutButtonClicked="tryLogOut"></navbar-template>
        <div class="wrapper">
          <router-view></router-view>
        </div>
        <LoginModal ref='modal' @login-button-pressed="tryLogIn" @try-google-login="tryGoogleLogin" />
    </div>
</template>


<script>

import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import firebaseConfig from "@/utility/firebase/firebase";

import NavbarTemplate from './components/NavbarTemplate'
import LoginModal from './components/LoginModal'
export default {
  name: 'App',
  components: {
    NavbarTemplate,
    LoginModal
  },
  data:function(){
    return {
      user:'',
      isLoggedIn:false
    }
  },
  methods:{
    toggleModal:function(){
      this.$refs['modal'].toggleModal();
    },
    tryLogIn:function(data){
      firebase.auth().signInWithEmailAndPassword( data.email,data.password )
      .then((res) => {
        console.log(res);
        this.isLoggedIn = true
        this.toggleModal()
      })
      .catch( (err) => {
        console.log(err)
      })
    },
    tryLogOut:function(){
      firebase
      .auth()
        .signOut()
          .then( (res) => { 
            console.log(res)
            this.isLoggedIn = false 
          })
          .catch( (err) =>{
            console.log(err)
          })
    },
    checkUserLogin:function(){
      firebase.auth().onAuthStateChanged( (user) => {
        if( user ){
          this.isLoggedIn = true
          this.user = user
        }else{
          // alert("No User Is Logged In")
        }

      })
    },
    tryGoogleLogin:function(){
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth()
          .signInWithPopup(provider)
          .then(() => {
            /** @type {firebase.auth.OAuthCredential} */
            // var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            // var token = credential.accessToken;
            // The signed-in user info.
            // var user = result.user;
            // ...
          }).catch(() => {
        // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // The email of the user's account used.
        // var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        // ...
      });
    }
  },
  mounted(){
    if( ! firebase.apps.length  ){
      firebase.initializeApp(firebaseConfig)
    }
    this.checkUserLogin()
  },
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .rm-2{
    margin-right:2em;
  }
  .bm-2{
    margin-bottom:2em;
  }
</style>