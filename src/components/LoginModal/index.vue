<template>
  <div class="modal-wrapper">
    <div
      class="modal-backdrop"
      :class="[isVisible ? 'visible' : 'invisible']"
      @click="toggleModal"
    ></div>
    <div class="modal" :class="[isVisible ? 'visible' : 'invisible']">
      <div class="modal-content shadow-md hover:shadow-2xl">
        <div class="modal-body px-8 py-14">
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
                <input type="email" name="email" class="email form-control w-full p-3 rounded border border-gray-400" id="email" v-model="form.email">
                <div class="emailText">Email</div>
            </div>
            <div class="forgotEmail">
                <span class="forgotEmail">Forgot email?</span>
            </div>
          </div>
          
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" name="password" class="form-control" placeholder="Enter Password" id="password" v-model="form.password">
            <div class="showPassword">
                <label for="showPasswordCheckBox"><input type="checkbox" class="showPasswordCheckBox" id='showPasswordCheckBox'>Show Password</label>
            </div>
          </div>

          <div class="submit-button">
              <button class="btn w-full">Log In</button>
          </div>
          <div class="forgot-password">
              <p class="text-blue-500 hover:underline cursor-pointer">Forgot Password</p>
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
      this.isVisible = !this.isVisible;
    },
  },
  mounted() {},
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
    @apply transition-all duration-200 absolute inset-y-2 inset-x-3 p-1 w-16 h-12 text-xl;
}
.email:focus~.emailText{
    @apply inset-px -top-3.5 inset-x-3 bg-white;
}
</style>
