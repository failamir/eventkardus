<template>
  <div class="container-fluid">
    <form @submit.prevent="submitForm">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header card-header-primary card-header-icon">
              <div class="card-icon">
                <i class="material-icons">edit</i>
              </div>
              <h4 class="card-title">
                {{ $t('global.edit') }}
                <strong>{{ $t('cruds.tiket.title_singular') }}</strong>
              </h4>
            </div>
            <div class="card-body">
              <back-button></back-button>
            </div>
            <div class="card-body">
              <bootstrap-alert />
              <div class="row">
                <div class="col-md-12">
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.pendaftar_id !== null,
                      'is-focused': activeField == 'pendaftar'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.tiket.fields.pendaftar')
                    }}</label>
                    <v-select
                      name="pendaftar"
                      label="nama"
                      :key="'pendaftar-field'"
                      :value="entry.pendaftar_id"
                      :options="lists.pendaftar"
                      :reduce="entry => entry.id"
                      @input="updatePendaftar"
                      @search.focus="focusField('pendaftar')"
                      @search.blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.no_tiket,
                      'is-focused': activeField == 'no_tiket'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.tiket.fields.no_tiket')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.no_tiket"
                      @input="updateNoTiket"
                      @focus="focusField('no_tiket')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.qr,
                      'is-focused': activeField == 'qr'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.tiket.fields.qr')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.qr"
                      @input="updateQr"
                      @focus="focusField('qr')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.checkin,
                      'is-focused': activeField == 'checkin'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.tiket.fields.checkin')
                    }}</label>
                    <v-select
                      name="checkin"
                      :key="'checkin-field'"
                      :value="entry.checkin"
                      :options="lists.checkin"
                      :reduce="entry => entry.value"
                      @input="updateCheckin"
                      @search.focus="focusField('checkin')"
                      @search.blur="clearFocus"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <vue-button-spinner
                class="btn-primary"
                :status="status"
                :isLoading="loading"
                :disabled="loading"
              >
                {{ $t('global.save') }}
              </vue-button-spinner>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      status: '',
      activeField: ''
    }
  },
  computed: {
    ...mapGetters('TiketsSingle', ['entry', 'loading', 'lists'])
  },
  beforeDestroy() {
    this.resetState()
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler() {
        this.resetState()
        this.fetchEditData(this.$route.params.id)
      }
    }
  },
  methods: {
    ...mapActions('TiketsSingle', [
      'fetchEditData',
      'updateData',
      'resetState',
      'setPendaftar',
      'setNoTiket',
      'setQr',
      'setCheckin'
    ]),
    updatePendaftar(value) {
      this.setPendaftar(value)
    },
    updateNoTiket(e) {
      this.setNoTiket(e.target.value)
    },
    updateQr(e) {
      this.setQr(e.target.value)
    },
    updateCheckin(value) {
      this.setCheckin(value)
    },
    submitForm() {
      this.updateData()
        .then(() => {
          this.$router.push({ name: 'tikets.index' })
          this.$eventHub.$emit('update-success')
        })
        .catch(error => {
          this.status = 'failed'
          _.delay(() => {
            this.status = ''
          }, 3000)
        })
    },
    focusField(name) {
      this.activeField = name
    },
    clearFocus() {
      this.activeField = ''
    }
  }
}
</script>
