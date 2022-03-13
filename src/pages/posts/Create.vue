<template>
  <h2 class="mb-3">Create Post :</h2>

  <PostForm @formData="createPost" :button-loading="loading" button-text="Create Post"/>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import PostForm from "@/components/posts/Form.vue";
import { ref } from 'vue';

export default {
  name: "CreatePost",

  components: {
    PostForm,
  },

  setup() {
    const loading = ref(false);

    function createPost(formData) {
      loading.value = true;

      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: formData.title,
          body: formData.body,
          userId: 1,
        })
        .then(() => {
          loading.value = false;

          Swal.fire({
            icon: "success",
            title: "Thanks",
            text: "Post created successfully!",
            confirmButtonText: "Ok",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return { loading, createPost };
  },
};
</script>

<style>
</style>