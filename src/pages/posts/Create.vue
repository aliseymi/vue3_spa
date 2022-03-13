<template>
  <h2 class="mb-3">Create Post :</h2>

  <div class="col-md-6">
    <form @submit.prevent="validate">
      <div class="mb-3">
        <label for="title" class="form-label">Title :</label>
        <input
          v-model.lazy.trim="form.title"
          type="text"
          class="form-control"
          id="title"
        />
        <div class="form-text text-danger">
          {{ form.titleErrorText }}
        </div>
      </div>
      <div class="mb-3">
        <label for="body" class="form-label">Body :</label>
        <textarea
          v-model.lazy.trim="form.body"
          class="form-control"
          id="body"
          rows="5"
        ></textarea>

        <div class="form-text text-danger">{{ form.bodyErrorText }}</div>
      </div>

      <button type="submit" class="btn btn-dark" :disabled="loading">
        <div
          v-if="loading"
          class="spinner-border spinner-border-sm"
          role="status"
        ></div>
        Create
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "CreatePost",

  setup() {
    const form = reactive({
      title: "",
      body: "",
      titleErrorText: "",
      bodyErrorText: "",
    });

    const loading = ref(false);

    function validate() {
      if (form.title === "") {
        form.titleErrorText = "Title is required!";
      } else {
        form.titleErrorText = "";
      }

      if (form.body === "") {
        form.bodyErrorText = "Body is required!";
      } else {
        form.bodyErrorText = "";
      }

      if (form.title !== "" && form.body !== "") {
        loading.value = true;

        createPost();
      }
    }

    function createPost() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: form.title,
          body: form.body,
          userId: 1,
        })
        .then((response) => {
          loading.value = false;

          Swal.fire({
            icon: "success",
            title: "Thanks",
            text: "Post created successfully!",
            confirmButtonText: "Ok"
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return { form, validate, loading };
  },
};
</script>

<style>
</style>