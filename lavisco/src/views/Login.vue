<template>
  <div>
    <!-- Body -->
    <section>
      <div class="col-md-4 offset-md-4 mt-4 mb-4">
        <h3 class="text-center">Sign In</h3>
        <p class="text-center">To unlock Exclusive drops and Discounts</p>
        <p class="text-center">
          New member? Register here as
          <a href="#"><strong>Seller</strong></a> or
          <a href="#"><strong>Customer</strong></a>
        </p>
        <form method="post">
          <div class="form-outline mb-4">
            <input type="email" placeholder="Email" class="form-control" />
          </div>
          <div class="form-outline mb-4">
            <input
              type="password"
              placeholder="Password"
              class="form-control"
            />
          </div>

          <!-- 2 column grid layout for inline styling -->

          <!-- Submit button -->
          <button type="submit" class="btn btn-primary btn-block mb-4">
            Sign In
          </button>

          <!-- Register buttons -->
          <div class="text-center">
            <p>Sign In with:</p>
            <button type="button" class="btn btn-primary btn-floating mx-1">
              <vue-fontawesome icon="facebook-f" color="white">
              </vue-fontawesome>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <vue-fontawesome icon="google" color="white">
              </vue-fontawesome>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <vue-fontawesome icon="twitter" color="white">
              </vue-fontawesome>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <vue-fontawesome icon="apple" color="white">
              </vue-fontawesome>
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