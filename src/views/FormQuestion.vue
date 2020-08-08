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
                  <input type="radio" class="mr-1" name="question">はい
                </label>
                  <label class="radio">
                  <input type="radio" class="mr-1" name="question">いいえ
                </label>
              </div>
            </div>
            <div class="field mb-5">
              <label class="has-text-link">-現在入院中ですか？また、最近3カ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-</label>
              <div class="control mt-2 has-text-black">
                <label class="radio">
                  <input type="radio" class="mr-1" name="question">はい
                </label>
                <label class="radio">
                  <input type="radio" class="mr-1" name="question">いいえ
                </label>
              </div>
            </div>
            <div class="field">
              <label class="has-text-link">-過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？-</label>
              <div class="control mt-2 has-text-black">
                <label class="radio">
                  <input type="radio" class="mr-1" name="question">はい
                </label>
                <label class="radio">
                  <input type="radio" class="mr-1" name="question">いいえ
                </label>
              </div>
            </div>
          </div>
        </article>
        <div class="columns">
          <div class="column has-text-centered">
            <router-link to="/" class="button is-primary mx-6"><i class="mr-2 fas fa-angle-left"></i>前に戻る</router-link>
            <router-link to="/form-consultation" class="button is-primary mx-6">次に進む<i class="ml-2 fas fa-angle-right"></i></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
