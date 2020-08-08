<template>
  <div class="container mt-6">
    <div class="columns is-mobile">
      <div class="column is-8 is-offset-2">
        <article class="message">
          <div class="message-header has-background-primary-light">
            <p class="has-text-black">
              <span class="icon"><i class="fas fa-id-card"></i></span>
              ご相談内容をご記入ください。</p>
          </div>
          <div class="message-body has-background-white">
            <div class="field mb-5">
              <label class="has-text-link">-ご相談内容-</label>
              <textarea class="mt-3 textarea" rows="10"></textarea>
            </div>
          </div>
        </article>
      </div>
    </div>
    <div class="columns">
      <div class="column has-text-centered">
        <router-link to="/form-question" class="button is-primary mx-6"><i class="mr-2 fas fa-angle-left"></i>前に戻る</router-link>
        <router-link to="#" class="button is-primary mx-6">次に進む<i class="ml-2 fas fa-angle-right"></i></router-link>
      </div>
    </div>
  </div>
</template>
