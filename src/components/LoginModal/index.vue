<template>
  <div class="modal-wrapper">
    <div
      class="modal-backdrop opacity-70"
      :class="[isVisible ? 'visible' : 'invisible']"
      @click="toggleModal"
    ></div>
    <div class="modal" :class="[isVisible ? 'visible' : 'invisible']">
      <div class="modal-content shadow-md hover:shadow-2xl">
        <div class="modal-body px-8 py-8">
          <!-- Modal Title -->
          <div class="modal-logo w-full h-full">
              <h2 class="text-fraunces text-center text-3xl italic text-indigo-500">Chaggy</h2>
          </div>
          <div class="modal-title text-center font-thin my-6">
            <div class="signIn text-2xl">
                <h4>Sign In</h4>
            </div>
            <div class="continue text-md mt-2">
                <h5>to continue to Chaggy</h5>
            </div>
          </div>

          <!-- Write your content here -->
          <div class="form-group flex flex-col">
            <div class="emailLabel relative">
                <input type="email" name="email" class="email border rounded outline-none border-gray-400 focus:border-indigo-600 focus:border-2 w-full p-3" id="email" placeholder=" " v-model="form.email" required>
                <div class="emailText text-gray-400">Email</div>
            </div>
            <div class="forgotEmail mt-2">
                <span class="font-semibold text-sm text-indigo-600 hover:underline cursor-pointer">Forgot email?</span>
            </div>
          </div>
          
          <div class="form-group mt-6 mb-6">
            <div class="emailLabel relative">
              <input type="password" name="password" class="email border rounded outline-none border-gray-400 focus:border-indigo-600 focus:border-2 w-full p-3" placeholder=" " id="password" v-model="form.password">
            <div class="emailText text-gray-400">Password</div>
            </div>
            <div class="showPassword mt-3 flex flex-row justify-between">
                <p>
                  <label for="showPasswordCheckBox"><input type="checkbox" class="showPasswordCheckBox" id='showPasswordCheckBox'><span class="ml-2">Show Password</span></label>
                </p>
                <p class="font-semibold text-sm text-indigo-600 hover:underline cursor-pointer">Forgot Password</p>
            </div>
          </div>
          <div class="submit-button">
              <button @click="$emit('loginButtonPressed',form)" class="btn w-full btn-indigo cursor-pointer">Log In</button>
          </div>
          <div class="google-login border border-indigo-600 rounded-2xl py-1 my-1 hover:bg-indigo-600 group">
            <button class="google-login__button w-full flex justify-center items-center text-sm">
              <div class="google-login__icon-wrapper w-5 h-auto mr-1">
                <img class="google-login__icon w-full h-full object-cover" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
              </div>
              <div class="google-login__text text-indigo-600 group-hover:text-white" @click="$emit('tryGoogleLogin')">Login With Google</div>
            </button>
          </div>
          <div class="forgot-password">
              
          </div>


        </div>
        <!-- Footer Goes Here -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginModal",
  data: function() {
    return {
      isVisible: false,
      form:{
          email:'',
          password:'',
      }
    };
  },
  methods: {
    toggleModal: function() {
      console.log("MODAL TOGGLED");
      this.form.email = ''
      this.form.password = ''
      this.isVisible = !this.isVisible;
    },
  },
  mounted() {
    
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease-in-out;
}
.fade-enter-from {
  transform: translateX(-100%);
}
.fade-leave-to {
  transform: translateX(100%);
}
.emailLabel .emailText{
    @apply transition-all duration-100 ease-in absolute inset-y-2 px-4 text-center align-middle	w-auto h-5 text-lg font-medium;
}
.email:focus~.emailText{
  @apply bg-white transform -translate-y-5 scale-75	text-indigo-600 px-3;
}
.email:not(:placeholder-shown)~.emailText{
    @apply bg-white transform -translate-y-5 scale-75	text-indigo-600 px-3;
}
</style>
