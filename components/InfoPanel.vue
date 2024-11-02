<!--
  Things to display:
  For all types:
    - Icon
    - Name
    - Description
  For units & buildings:
    - Cost
      - Lumenite
      - Therium
      - Supply/Power
      - Build time
    - Movespeed
    - Health
    - Energy
    - Armor type
    - Armor
    - Weapons
      - Damage (DPS)
      - Attack cooldown
      - Range
      - Air/Ground
  For research:
    - Cost
      - Lumenite
      - Therium
      - Research time
    - Affected units/buildings
-->
<template>
  <UCard class="
    w-[400px]
    min-w-[200px]
    h-full
    p-0"
    :ui="{
      body: { 
        padding: 'sm:px-[4px] sm:py-[4px]' 
      },
    }"
  >
    <div class="
      w-full
      overflow-hidden
      flex
      space-x-[2px]
      justify-center"
    >
      <img class="
        w-0
        max-w-[164px]
        flex-1
        aspect-square
        border-box
        border-2
        border-solid
        border-transparent
        rounded-l-[40px]
        bg-gray-800"
        :src=icon
        alt="selection icon"
      />
      <div class="
        max-w-[164px]
        flex-1
        flex
        flex-col
        space-y-[2px]"
      >
        <div class="
          w-full
          flex-1
          rounded-tr-[20px]
          bg-gray-800
          place-content-center
          text-center"
        >
          Lumenite
        </div>
        <div class="
          w-full
          flex-1
          bg-gray-800
          place-content-center
          text-center"
        >
          Therium
        </div>
        <div class="
          w-full
          flex-1
          rounded-br-[20px]
          bg-gray-800
          place-content-center
          text-center"
        >
          Supply
        </div>
      </div>
    </div>
    <h1>Info Panel</h1>
  </UCard>
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string,
  icon: string,
  description: string,
}>();

</script>
