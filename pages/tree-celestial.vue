<template>
  <ClientOnly>
    <VueFlow 
      :nodes="nodes" 
      :edges="edges"
      :translateExtent="graphExtents"
      :nodeExtent="graphExtents"
    >
      <template #node-building="buildingNodeProps">
        <BuildingNode v-bind="buildingNodeProps" />
      </template>
      <template #node-unit="unitNodeProps">
        <UnitNode v-bind="unitNodeProps" />
      </template>
      <Background />
      <Controls />
      <MiniMap pannable zoomable />
    </VueFlow>
  </ClientOnly>
</template>


<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import type { Node, Edge, CoordinateExtent } from '@vue-flow/core';
  import { VueFlow } from "@vue-flow/core";
  import { MiniMap } from '@vue-flow/minimap';
  import { Controls } from '@vue-flow/controls';
  import { Background } from '@vue-flow/background';
  import BuildingNode from '~/components/Tech Tree/nodes/BuildingNode.vue';
  import UnitNode from '~/components/Tech Tree/nodes/UnitNode.vue';
  // import CustomNode from '~/components/nodes/test/CustomNode.vue';
  // import ListNode from '~/components/nodes/test/ListNode.vue';
  import appConfig from '~/app.config';

  const graphExtents: CoordinateExtent = [[0, -1000], [1000, 1000]];

  onMounted(() => {
    document.title = "Celestial Tech Tree | SGTome";
    appConfig.ui.primary = "fuchsia";
    appConfig.ui.gray = "zinc";
    updateAppConfig(appConfig);
  });

  // these are our nodes
  const nodes = ref<Node[]>([
    // an input node, specified by using `type: 'input'`
    {
      id: '1',
      type: 'input',
      position: { x: 250, y: 5 },
      // all nodes can have a data object containing any data you want to pass to the node
      // a label property can be used for default nodes
      data: { label: 'Node 1' },
    },

    // default node, you can omit `type: 'default'` as it's the fallback type
    {
      id: '2',
      position: { x: 100, y: 100 },
      data: { label: 'Node 2' },
    },

    // An output node, specified by using `type: 'output'`
    {
      id: '3',
      position: { x: 400, y: 200 },
      data: { label: 'Node 3' },
    },

    // this is a list node
    {
      id: '4',
      type: 'building', // <-- this is the custom node type name
      position: { x: 420, y: 69 },
      data: {
        name: 'Test Building',
        icon: "HQ.png",
        description: 'This is a test building',
      },
    },
  ])

  // these are our edges
  const edges = ref<Edge[]>([
    // default bezier edge
    // consists of an edge id, source node id and target node id
    {
      id: 'e1->2',
      source: '1',
      target: '2',
    },

    // set `animated: true` to create an animated edge path
    {
      id: 'e2->3',
      source: '2',
      target: '3',
      animated: true,
    },

    // a custom edge, specified by using a custom type name
    // we choose `type: 'special'` for this example
    {
      id: 'e3->4',
      source: '3',
      target: '4',

      // all edges can have a data object containing any data you want to pass to the edge
      data: {
        hello: 'world',
      }
    },
  ])
</script>
