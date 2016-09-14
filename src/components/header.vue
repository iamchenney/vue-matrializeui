<template>
  <div class="row">
      <dropdown label="I am a dropdown" :large="true">
          <ul>
              <li><a href="#!">Inbox<badge old>2</badge></a></li>
              <li class="divider"></li>
              <li><a href="#!">Outbox<badge new>2</badge></a></li>
          </ul>
      </dropdown>
  </div>
</template>

<script>
  module.exports = {
    components: {
      'dropdown': require('material-ui-vue/components/dropdown/dropdown.vue'),
      'badge': require('material-ui-vue/components/badges/badge.vue')
    }
  }
</script>
