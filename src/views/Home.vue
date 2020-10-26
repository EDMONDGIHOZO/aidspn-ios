<template>
  <div class="b-container main">
    <Spinner v-if="loadingIssue" text="Loading Current Issue"> </Spinner>
    <div class="article-body" v-else>
      <b-card
        :title="CurrentIssue.title"
        :sub-title="subtitle"
        tag="issue"
        class="mb-12 title-cont"
        footer-tag="footer"
        footer-bg-variant="primary"
      >
        <template #footer>
          <div class="title-footer" style="color:white;">
            <strong class="text-left"
              >{{ CurrentIssue.related_articles.length }} Articles</strong
            >
            <em class="text-right">{{ CurrentIssue.changed | formatDate }}</em>
          </div>
        </template>
      </b-card>

      <b-list-group class="articles-list">
        <b-list-group-item
          class="flex-column align-items-start"
          v-for="article in CurrentIssue.related_articles"
          :key="article.nid"
          href="#"
          @click="openArticle(article.nid)"
        >
          <div class="d-flex w-100">
            <h5 class="mb-1 text-left">{{ article.title }}</h5>
          </div>
          <p
            class="mb-1 mt-3 text-left"
            v-html="article.article_abstract.field_article_abstract_value"
          ></p>
          <div class="list-footer">
            <b-badge variant="secondary"
              ><Strong>{{ authored }} :</Strong
              >{{ article.article_author.field_article_author_value }}</b-badge
            >
          </div>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Spinner from "@/components/spinner";
export default {
  name: "currentIssue",
  props: ["lang"],
  components: {
    Spinner,
  },

  data() {
    return {
      language: "",
      subtitle: "",
      authored: "",
    };
  },
  mounted() {
    if (this.lang === "indexofm.php") {
      this.language = "fr";
      this.subtitle = "EDITION COURANTE";
      this.authored = "Par ";
    } else {
      this.language = "en";
      this.subtitle = "CURRENT ISSUE";
      this.authored = "By ";
    }
    this.$store.dispatch("loadCurrentIssue", this.language);
  },
  computed: mapState(["CurrentIssue", "loadingIssue"]),
  methods: {
    openArticle(nid) {
      return this.$router.push({
        name: "article",
        params: { id: nid },
      });
    },
  },
};
</script>
