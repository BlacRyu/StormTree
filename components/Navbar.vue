<template>
  <header>
    <div class="bg-gray-800 border-2 border-gray-600 rounded-lg inline-flex navbar-main">
      <NuxtLink to="tree-vanguard"><AppIcon class="max-w-full max-h-full"/></NuxtLink>
      <UTabs :items="factions" :ui="{ wrapper: 'w-full h-full', list: { width: 'w-full', height: 'h-full', tab: { height: 'h-full'} } }" @change="onFactionTabClicked" />
    </div>
  </header>
</template>

<script lang="ts" setup>
  const factions = [
    {
      label: 'Vanguard',
      page: 'tree-vanguard',
    },
    {
      label: 'Infernal',
      page: 'tree-infernal',
    },
    {
      label: 'Celestial',
      page: 'tree-celestial',
    },
  ]

  function onFactionTabClicked(index: number): void {
    const item: { label: string, page: string } = factions[index];

    navigateTo(item.page);
  }
</script>

<style>
  .navbar-main {
    width: 100%;
    --navbar-height: 50px;
    /* background-color: #333; */
    /* border: 2px solid #444; */
    /* border-radius: 0.5rem; */
    --navbar-margin-size: 3px;
    margin-top: var(--navbar-margin-size);
    margin-bottom: var(--navbar-margin-size);
    height: calc(var(--navbar-height) - 2 * var(--navbar-margin-size));
  }

  .main-logo {
    max-width: 100%;
    max-height: 100%;
  }
</style>