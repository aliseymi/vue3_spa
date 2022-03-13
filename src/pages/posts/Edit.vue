<template>
  <h2 class="mb-3">Update Post :</h2>

  <div v-if="pageLoading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>

  <PostForm
    v-else
    @formData="updatePost"
    :button-loading="loading"
    button-text="Edit Post"
    :post="post"
  />
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import PostForm from "@/components/posts/Form.vue";
import { useRoute } from "vue-router";

export default {
  name: "EditPost",

  components: {
    PostForm,
  },

  setup() {
    const route = useRoute();

    const pageLoading = ref(true);

    const loading = ref(false);
    const post = ref({});

    function getPost() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then((response) => {
          pageLoading.value = false;

          post.value = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getPost();

    function updatePost(formData) {
      loading.value = true;

      axios
        .put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
          id: route.params.id,
          title: formData.title,
          body: formData.body,
          userId: 1,
        })
        .then(() => {
          loading.value = false;

          Swal.fire({
            icon: "success",
            title: "Thanks",
            text: "Post updated successfully!",
            confirmButtonText: "Ok",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return { loading, updatePost, post, pageLoading };
  },
};
</script>

<style>
</style>