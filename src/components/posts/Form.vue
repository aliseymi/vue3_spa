<template>
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

      <button type="submit" class="btn btn-dark" :disabled="buttonLoading">
        <div
          v-if="buttonLoading"
          class="spinner-border spinner-border-sm"
          role="status"
        ></div>
        {{ buttonText }}
      </button>
    </form>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  props: {
    buttonLoading: Boolean,
    buttonText: String,
    post: Object,
  },

  setup(props, { emit }) {
    const form = reactive({
      title: "",
      body: "",
      titleErrorText: "",
      bodyErrorText: "",
    });

    function setInput() {
      if (props.post !== undefined) {
        (form.title = props.post.title), (form.body = props.post.body);
      }
    }

    setInput();

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
        emit("formData", form);
      }
    }

    return { form, validate };
  },
};
</script>

<style>
</style>