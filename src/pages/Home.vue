<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          temporibus neque beatae, cumque eligendi atque dolorum, odio repellat,
          animi excepturi aspernatur? Optio laudantium tempora consequuntur!
          Obcaecati est porro ab doloribus?
        </p>

        <router-link :to="{ name: 'users.index' }" class="btn btn-dark">Users</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>