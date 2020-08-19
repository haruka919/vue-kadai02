<template>
  <div class="container mt-6">
    <div class="columns is-mobile">
      <div class="column is-8 is-offset-2">
        <article class="message">
          <div class="message-header has-background-primary-light">
            <p class="has-text-black">
              <span class="icon"><i class="fas fa-id-card"></i></span>
              以下の内容をご確認ください。</p>
          </div>
          <div class="message-body has-background-white">
            <div class="field mb-5">
              <label class="has-text-link">-性別-</label>
              <p>{{ gender }}</p>
            </div>
            <div class="field mb-5">
              <label class="has-text-link">-生年月日-</label>
              <p>{{ year }}年{{ month }}月{{ day }}日</p>
            </div>
            <div class="field mb-5">
              <label class="has-text-link">-現在、生命保険に加入されていますか？-</label>
              <p>{{ question01 }}</p>
            </div>
            <div class="field mb-5">
              <label class="has-text-link">-現在入院中ですか？また、最近3カ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-</label>
              <p>{{ question02 }}</p>
            </div>
            <div class="field mb-5">
              <label class="has-text-link">-過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？-</label>
              <p>{{ question03 }}</p>
            </div>
            <div class="field mb-5">
              <label class="has-text-link">-ご相談内容-</label>
              <p>{{ consultation }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
    <div class="columns">
      <div class="column has-text-centered">
        <router-link to="/form-consultation" class="button is-primary mx-6"><i class="mr-2 fas fa-angle-left"></i>前に戻る</router-link>
        <router-link to="#" class="button is-primary mx-6">送信<i class="ml-2 fas fa-angle-right"></i></router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'FormComfirm',
  computed: {
    ...mapState([
      'gender',
      'year',
      'month',
      'day',
      'question01',
      'question02',
      'question03',
      'consultation'
    ])
  }
}
</script>
