<template>
  <div class="main">
    <b-container fluid="sm">
      <b-navbar type="light" sticky variant="light" class="top-navigation">
        <b-btn pill variant="secondary" @click="back">Back</b-btn>
        <b-badge pill>Number {{
          article.article_number.field_article_number_value
        }}</b-badge>
      </b-navbar>
      <b-card
        footer-tag="footer"
        :title="article.title"
        class="mt-3 title-card"
      >
        <hr />
        <b-card-text v-if="article.article_second_title !== null">{{
          article.article_second_title.field_article_secondary_title_value
        }}</b-card-text>
      </b-card>
      <div class="mt-2 subtit">
        <div class="author">
          {{ article.article_author.field_article_author_value }}
        </div>
        <div class="date">
          {{ article.changed | formatDate }}
        </div>
      </div>
      <b-card title="Abstract" class="mt-2 text-left" bg-variant="secondary" text-variant="white">
          <b-card-text v-html="article.article_abstract.field_article_abstract_value" class="abstract-text">
          </b-card-text>
      </b-card>

      <div class="contents">
          <span v-html="article.article_content.field_article_content_value"></span>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "article",
  props: ["id"],

  data() {
    return {
      articleId: this.id,
    };
  },

  mounted() {
    this.$store.dispatch("loadArticle", this.id);
  },

  computed: mapState(["article"]),

  methods: {
    back() {
      return this.$router.go(-1);
    },
  },
};
</script>