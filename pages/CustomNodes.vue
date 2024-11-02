<template>
  <ClientOnly>
    <VueFlow :nodes="nodes">
      <template #node-custom="customNodeProps">
        <CustomNode v-bind="customNodeProps" />
      </template>
      
      <template #node-list="listNodeProps">
        <ListNode v-bind="listNodeProps" />
      </template>
      
      <Background />
    </VueFlow>
  </ClientOnly>
</template>

<script setup>
import { ref } from 'vue'
import { VueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background';

import CustomNode from '~/components/nodes/test/CustomNode.vue'
import ListNode from '~/components/nodes/test/ListNode.vue';
// import SpecialNode from './SpecialNode.vue'

const nodes = ref([
  {
    id: '1',
    data: { label: 'Node 1' },
    // this will create the node-type `custom`
    type: 'custom',
    position: { x: 50, y: 50 },
  },
  {
    id: '2',
    data: { label: 'Node 2' },
    // this will create the node-type `list`
    type: 'list',
    position: { x: 150, y: 50 },
  }
])
</script>

