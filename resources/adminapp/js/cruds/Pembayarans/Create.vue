<template>
  <div class="container-fluid">
    <form @submit.prevent="submitForm">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header card-header-primary card-header-icon">
              <div class="card-icon">
                <i class="material-icons">add</i>
              </div>
              <h4 class="card-title">
                {{ $t('global.create') }}
                <strong>{{ $t('cruds.pembayaran.title_singular') }}</strong>
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
                      $t('cruds.pembayaran.fields.pendaftar')
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
                      'has-items': entry.payment,
                      'is-focused': activeField == 'payment'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.pembayaran.fields.payment')
                    }}</label>
                    <v-select
                      name="payment"
                      :key="'payment-field'"
                      :value="entry.payment"
                      :options="lists.payment"
                      :reduce="entry => entry.value"
                      @input="updatePayment"
                      @search.focus="focusField('payment')"
                      @search.blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.keterangan,
                      'is-focused': activeField == 'keterangan'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.pembayaran.fields.keterangan')
                    }}</label>
                    <textarea
                      class="form-control"
                      rows="5"
                      :value="entry.keterangan"
                      @input="updateKeterangan"
                      @focus="focusField('keterangan')"
                      @blur="clearFocus"
                    ></textarea>
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.status,
                      'is-focused': activeField == 'status'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.pembayaran.fields.status')
                    }}</label>
                    <v-select
                      name="status"
                      :key="'status-field'"
                      :value="entry.status"
                      :options="lists.status"
                      :reduce="entry => entry.value"
                      @input="updateStatus"
                      @search.focus="focusField('status')"
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
    ...mapGetters('PembayaransSingle', ['entry', 'loading', 'lists'])
  },
  mounted() {
    this.fetchCreateData()
  },
  beforeDestroy() {
    this.resetState()
  },
  methods: {
    ...mapActions('PembayaransSingle', [
      'storeData',
      'resetState',
      'setPendaftar',
      'setPayment',
      'setKeterangan',
      'setStatus',
      'fetchCreateData'
    ]),
    updatePendaftar(value) {
      this.setPendaftar(value)
    },
    updatePayment(value) {
      this.setPayment(value)
    },
    updateKeterangan(e) {
      this.setKeterangan(e.target.value)
    },
    updateStatus(value) {
      this.setStatus(value)
    },
    submitForm() {
      this.storeData()
        .then(() => {
          this.$router.push({ name: 'pembayarans.index' })
          this.$eventHub.$emit('create-success')
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
