<template>
  <div class="flex justify-between p-1">
    <dt class="font-bold">
      <slot name="label"></slot>
    </dt>

    <dd class="font-semibold">
      <slot></slot>
    </dd>
  </div>
</template>
