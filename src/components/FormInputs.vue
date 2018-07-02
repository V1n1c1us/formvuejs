<template>
  <div>
    <form>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="cep">CEP</label>
          <input type="text" class="form-control" id="cep" v-model="cep" v-on:keyup="buscar" v-mask="'#####-###'">
          <small id="emailHelp alert alert-secondary" class="form-text text-muted" style="display: none" v-show="naoLocalizado">Endereço Não Localizado. Entre com o Endereço Manualmente</small>
        </div>
        <div class="form-group col-md-6">
          <label for="rua">Rua</label>
          <input type="text" class="form-control" id="rua" v-model="endereco.logradouro" value="endereco.logradouro">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="cidade">Cidade</label>
          <input type="text" class="form-control" id="cidade" v-model="endereco.localidade" value="endereco.localidade">
        </div>
        <div class="form-group col-md-3">
          <label for="numero">Número</label>
          <input type="text" class="form-control" id="numero" v-model="numero">
        </div>
        <div class="form-group col-md-3">
          <label for="uf">UF</label>
          <input type="text" class="form-control" id="uf" v-model="endereco.uf" value="endereco.uf">
        </div>
      </div>
      <button type="button" class="btn btn-primary" v-on:click="enviar">Enviar</button>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'FormInputs',
  data: function () {
    return {
      cep: '',
      endereco: { },
      naoLocalizado: false,
      numero: ''
    }
  },
  methods: {
    buscar: function () {
      var self = this

      self.endereco = { }
      self.naoLocalizado = false

      if (/^[0-9]{5}-[0-9]{3}$/.test(this.cep)) {

        $.getJSON('https://viacep.com.br/ws/' + this.cep + '/json/', function (endereco) {
          console.log(endereco)

          if (endereco.erro) {
            $('#cep').focus()
            self.naoLocalizado = true
            return
          }
          self.endereco = endereco
          $('#numero').focus()
        })
      }
    },
    enviar: function () {
      alert('Cidade: ' + this.endereco.localidade +
            'Rua: ' + this.endereco.logradouro +
            'UF: ' + this.endereco.uf +
            'Número: ' + this.numero)
    }
  }
}
</script>
<style scoped>
</style>
