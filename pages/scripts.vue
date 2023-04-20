<template>
  <div class="p-5 flex flex-row">
    <ui-button color="primary" type="button" @click="importMotoData">
      Script moto
    </ui-button>
    <ui-button color="primary" type="button" @click="importRadarData">
      Script radars
    </ui-button>
  </div>
</template>
<script lang="ts" setup>
import { importMotoData } from '../scripts/moto'
import { importRadarData } from '../scripts/radar'
</script>
