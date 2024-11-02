<template>
  <div class="flex flex-col w-full max-w-[1280px] h-screen justify-self-center">
    <Navbar class="w-full max-w-[500px]"/>
    <div class="flex w-full h-full">
      <slot/>
      <!-- <InfoPanel 
        name="name"
        description="description"
        icon="/HQ.png"/> -->
    </div>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>