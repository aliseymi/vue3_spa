<template>
  <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>

  <div v-else class="col-md-5">
    <div class="card">
      <div class="card-header">
        {{ post.title }}
      </div>

      <ul class="list-group list-group-flush">
        <li class="list-group-item">Body: {{ post.body }}</li>
      </ul>

      <div class="card-footer">
        <button class="btn btn-sm btn-danger me-4">Delete</button>
        <router-link class="btn btn-sm btn-dark" :to="{ name: 'post.edit', params: { id: post.id } }">Edit</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "ShowPost",

  setup() {
    const post = ref({});
    const loading = ref(true);

    const route = useRoute();

    function getPost() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then((response) => {
          post.value = response.data;
          loading.value = false;
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getPost();

    return { post, loading };
  },
};
</script>

<style>
</style>