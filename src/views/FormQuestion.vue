<template>
  <div class="container mt-6">
    <div class="columns is-mobile">
      <div class="column is-8 is-offset-2">
        <article class="message">
          <div class="message-header has-background-primary-light">
            <p class="has-text-black">
              <span class="icon"><i class="fas fa-id-card"></i></span>
              以下にお答えください。</p>
          </div>
          <div class="message-body has-background-white">
            <div class="field mb-5">
              <label class="has-text-link">-現在、生命保険に加入されていますか？-</label>
              <div class="control mt-2 has-text-black">
                <label class="radio">
                  <input type="radio" class="mr-1" name="question01" value="true" v-model="question01">はい
                </label>
                  <label class="radio">
                  <input type="radio" class="mr-1" name="question01" value="false" v-model="question01">いいえ
                </label>
              </div>
            </div>
            <div v-if="question01" class="field mb-5">
              <label class="has-text-link">-現在入院中ですか？また、最近3カ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-</label>
              <div class="control mt-2 has-text-black">
                <label class="radio">
                  <input type="radio" class="mr-1" name="question02" value="true" v-model="question02">はい
                </label>
                <label class="radio">
                  <input type="radio" class="mr-1" name="question02" value="false" v-model="question02">いいえ
                </label>
              </div>
            </div>
            <div v-if="question02" class="field">
              <label class="has-text-link">-過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？-</label>
              <div class="control mt-2 has-text-black">
                <label class="radio">
                  <input type="radio" class="mr-1" name="question03" value="true" v-model="question03">はい
                </label>
                <label class="radio">
                  <input type="radio" class="mr-1" name="question03" value="false" v-model="question03">いいえ
                </label>
              </div>
            </div>
          </div>
        </article>
        <div class="columns">
          <div class="column has-text-centered">
            <router-link to="/" tag="button" class="button is-primary mx-6"><i class="mr-2 fas fa-angle-left"></i>前に戻る</router-link>
            <router-link to="/form-consultation" tag="button" class="button is-primary mx-6" :disabled="isPush">次に進む<i class="ml-2 fas fa-angle-right"></i></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FormQuestion',
  computed: {
    question01: {
      get () {
        return this.$store.getters.question01
      },
      set (value) {
        this.$store.commit('saveQuestion01', value)
      }
    },
    question02: {
      get () {
        return this.$store.getters.question02
      },
      set (value) {
        this.$store.commit('saveQuestion02', value)
      }
    },
    question03: {
      get () {
        return this.$store.getters.question03
      },
      set (value) {
        this.$store.commit('saveQuestion03', value)
      }
    },
    isPush () {
      if (this.question01 && this.question02 && this.question03) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>
