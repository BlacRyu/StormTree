<template>
  <tippy 
    interactive 
    sticky
    placement="top"
    hideOnClick=false
    duration="0"
    :popperOptions="popperOptions"
  >
    <template #content>
      <UCard :ui="{ header: {padding: 'px-1.5 py-0.5 sm:px-1.5'} }">
        <template #header>
          <h1 class="flex items-center justify-center">{{ nodeProps.data.name }}</h1>
        </template>

        <!-- UCard body -->
        <img :src="nodeProps.data.icon" />
      </UCard>
    </template>


      <img :src="nodeProps.data.icon">
        <Handle type="target" :position="Position.Top" />
        <Handle type="source" :position="Position.Bottom" />
      </img>
  </tippy>
</template>

<script lang="ts" setup>
import { Position, Handle } from '@vue-flow/core';
import type { NodeProps } from '@vue-flow/core';

const nodeProps = defineProps<NodeProps>()

const popperOptions = {
  modifiers: [
    {
      // // Prevent the tooltip from changing positions at the edge of the screen.
      // name: 'flip',
      // options: { fallbackPlacements: [] }
    } 
  ]
}
</script>