<template>
  <div>
    <section>
      <div class="col-md-4 offset-md-4 mt-4 mb-4">
        <h3 class="text-center">Sign Up</h3>
        <p class="text-center">To unlock Exclusive drops and Discounts</p>
        <form>
          <!-- Email input -->
          <div class="form-outline mb-4">
            <input
              type="text"
              id="form2Example1"
              class="form-control"
              placeholder="Name"
            />
          </div>

          <!-- Password input -->
          <div class="form-outline mb-4">
            <input
              type="email"
              class="form-control"
              placeholder="Email"
            />
          </div>

          <div class="form-outline mb-4">
            <input
              type="password"
              class="form-control"
              placeholder="Passowrd"
            />
          </div>

          <div class="form-outline mb-4">
            <input
              type="password"
              class="form-control"
              placeholder="COnfirm Passowrd"
            />
          </div>

          <!-- 2 column grid layout for inline styling -->

          <!-- Submit button -->
          <button type="submit" class="btn btn-primary btn-block mb-4">
            Sign Up
          </button>

          <!-- Register buttons -->
          <div class="text-center">
            <p>Sign up with:</p>
            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-facebook-f"></i>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-google"></i>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-twitter"></i>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-apple"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
</style>