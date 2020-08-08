<template>
  <div class="container mt-6">
    <div class="columns is-mobile">
      <div class="column is-8 is-offset-2">
        <article class="message">
          <div class="message-header has-background-primary-light">
            <p class="has-text-black">
              <span class="icon"><i class="fas fa-id-card"></i></span>
              お客様の情報を入力してください。</p>
          </div>
          <div class="message-body has-background-white">
            <div class="field mb-6">
              <label class="has-text-link">-性別-</label>
              <div class="control mt-2 has-text-black">
                <label class="radio">
                  <input type="radio" class="mr-1" name="question">男性
                </label>
                  <label class="radio">
                  <input type="radio" class="mr-1" name="question">女性
                </label>
              </div>
            </div>
            <div class="field">
              <label class="has-text-link">-生年月日-</label>
              <div class="control is-flex mt-2 has-text-black">
                <div class="select">
                  <select>
                    <option>1990（平成1）</option>
                    <option>1991（平成2）</option>
                  </select>
                </div>
                <div class="mx-1 mt-3">年</div>
                <div class="select">
                  <select>
                    <option>1990</option>
                    <option>1991</option>
                  </select>
                </div>
                <div class="mx-1 mt-3">月</div>
                <div class="select">
                  <select>
                    <option>1990</option>
                    <option>1991</option>
                  </select>
                </div>
                <div class="mx-1 mt-3">日</div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
    <div class="columns">
        <div class="column has-text-centered">
          <router-link to="/form-question" class="button is-primary mx-6">次に進む<i class="ml-2 fas fa-angle-right"></i></router-link>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'FormProfile'
}
</script>
