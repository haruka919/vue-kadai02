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
                  <input type="radio" class="mr-1" name="gender" value="male" v-model="gender">男性
                </label>
                  <label class="radio">
                  <input type="radio" class="mr-1" name="gender" value="female" v-model="gender">女性
                </label>
              </div>
            </div>
            <div class="field">
              <label class="has-text-link">-生年月日-</label>
              <div class="control is-flex mt-2 has-text-black">
                <div class="select">
                  <select v-model="selectedYear">
                    <option v-for="y in years" :key="y" :value="y">{{ showYear(y) }}</option>
                  </select>
                </div>
                <div class="mx-1 mt-3">年</div>
                <div class="select">
                  <select v-model="selectedMonth">
                    <option v-for="month in 12" :key="month" :value="month">{{ month }}</option>
                  </select>
                </div>
                <div class="mx-1 mt-3">月</div>
                <div class="select">
                  <select v-model="selectedDay">
                    <option v-for="day in maxDays" :key="day" :value="day">{{ day }}</option>
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
          <router-link to="/form-question" tag="button" class="button is-primary mx-6" :disabled="isPush">次に進む<i class="ml-2 fas fa-angle-right"></i></router-link>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'FormProfile',
  data () {
    return {
      years: [...Array(50)].map((_, i) => i + 1955),
      maxDays: ''
    }
  },
  computed: {
    gender: {
      get () {
        return this.$store.state.gender
      },
      set (gender) {
        this.$store.commit('saveGender', gender)
      }
    },
    selectedYear: {
      get () {
        return this.$store.state.year
      },
      set (year) {
        this.$store.commit('saveYear', year)
      }
    },
    selectedMonth: {
      get () {
        return this.$store.state.month
      },
      set (month) {
        this.$store.commit('saveMonth', month)
      }
    },
    selectedDay: {
      get () {
        return this.$store.state.day
      },
      set (day) {
        this.$store.commit('saveDay', day)
      }
    },
    isPush () {
      if (this.gender && this.selectedYear && this.selectedMonth && this.selectedDay) {
        return false
      } else {
        return true
      }
    }
  },
  watch: {
    selectedYear () {
      return this.getMaxDays()
    },
    selectedMonth () {
      return this.getMaxDays()
    }
  },
  methods: {
    // 指定年月の最終日を取得
    getMaxDays () {
      this.maxDays = new Date(this.selectedYear, this.selectedMonth, 0).getDate()
    },
    showYear (year) {
      if (year >= 2019) {
        return year + '（令和' + (year - 2018) + '年）'
      }
      if (year < 2019 && year >= 1989) {
        return year + '（平成' + (year - 1988) + '年）'
      }
      if (year < 1989 && year >= 1926) {
        return year + '（昭和' + (year - 1925) + '年）'
      }
    }
  },
  created () {
    this.getMaxDays()
  }
}
</script>
