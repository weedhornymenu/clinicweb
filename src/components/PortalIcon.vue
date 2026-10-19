<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <!-- Cannabis Clinic: doctor with stethoscope -->
  <svg v-if="name === 'clinic'" class="icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="24" cy="12.5" r="6" />
    <path d="M9.5 41 C9.5 31.5 15.5 26.5 24 26.5 C32.5 26.5 38.5 31.5 38.5 41" />
    <path d="M16.5 28.5 C16.5 34 19.5 37.5 24 37.5 C28.5 37.5 31.5 34 31.5 28.5" />
    <path d="M24 37.5 V40" />
    <circle cx="33.5" cy="39" r="4.4" />
    <path d="M33.5 36.9 V41.1 M31.3 39 H35.7" />
  </svg>

  <!-- GHP Farm: greenhouse with cannabis leaf -->
  <svg v-else-if="name === 'farm'" class="icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M7 40 V21.5 L24 8 L41 21.5 V40" />
    <path d="M7 40 H41" />
    <path d="M15.5 40 V26" />
    <path d="M32.5 40 V26" />
    <g fill="currentColor" stroke="none" transform="translate(24 31)">
      <path d="M0 0.5 C-0.8 -1.5 -1 -4.5 -0.6 -7.5 C-0.4 -9.5 0 -11 0 -12 C0 -11 0.4 -9.5 0.6 -7.5 C1 -4.5 0.8 -1.5 0 0.5 Z" />
      <path d="M0 0.5 C-0.8 -1.5 -1 -4.5 -0.6 -7.5 C-0.4 -9.5 0 -11 0 -12 C0 -11 0.4 -9.5 0.6 -7.5 C1 -4.5 0.8 -1.5 0 0.5 Z" transform="rotate(32) scale(0.72)" />
      <path d="M0 0.5 C-0.8 -1.5 -1 -4.5 -0.6 -7.5 C-0.4 -9.5 0 -11 0 -12 C0 -11 0.4 -9.5 0.6 -7.5 C1 -4.5 0.8 -1.5 0 0.5 Z" transform="rotate(-32) scale(0.72)" />
      <path d="M0 0.5 C-0.8 -1.5 -1 -4.5 -0.6 -7.5 C-0.4 -9.5 0 -11 0 -12 C0 -11 0.4 -9.5 0.6 -7.5 C1 -4.5 0.8 -1.5 0 0.5 Z" transform="rotate(62) scale(0.5)" />
      <path d="M0 0.5 C-0.8 -1.5 -1 -4.5 -0.6 -7.5 C-0.4 -9.5 0 -11 0 -12 C0 -11 0.4 -9.5 0.6 -7.5 C1 -4.5 0.8 -1.5 0 0.5 Z" transform="rotate(-62) scale(0.5)" />
    </g>
  </svg>

  <!-- Herbal Health: mortar and pestle with leaf -->
  <svg v-else-if="name === 'herbal'" class="icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M9.5 25.5 H38.5 C38.5 33.5 32.5 38.5 24 38.5 C15.5 38.5 9.5 33.5 9.5 25.5 Z" />
    <path d="M17.5 42.5 H30.5" />
    <path d="M26.5 24 L35.5 11.5" />
    <circle cx="36.5" cy="10.5" r="3" />
    <g fill="currentColor" stroke="none" transform="translate(15 17) scale(0.72)">
      <path d="M0 0.5 C-0.8 -1.5 -1 -4.5 -0.6 -7.5 C-0.4 -9.5 0 -11 0 -12 C0 -11 0.4 -9.5 0.6 -7.5 C1 -4.5 0.8 -1.5 0 0.5 Z" />
      <path d="M0 0.5 C-0.8 -1.5 -1 -4.5 -0.6 -7.5 C-0.4 -9.5 0 -11 0 -12 C0 -11 0.4 -9.5 0.6 -7.5 C1 -4.5 0.8 -1.5 0 0.5 Z" transform="rotate(35) scale(0.75)" />
      <path d="M0 0.5 C-0.8 -1.5 -1 -4.5 -0.6 -7.5 C-0.4 -9.5 0 -11 0 -12 C0 -11 0.4 -9.5 0.6 -7.5 C1 -4.5 0.8 -1.5 0 0.5 Z" transform="rotate(-35) scale(0.75)" />
    </g>
  </svg>

  <!-- Our Standards: shield with checklist and check badge -->
  <svg v-else class="icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M24 6.5 L37.5 11 V22.5 C37.5 31 32 36.5 24 39.8 C16 36.5 10.5 31 10.5 22.5 V11 Z" />
    <path d="M16.5 17.5 H28.5" />
    <path d="M16.5 23.5 H28.5" />
    <path d="M16.5 29.5 H23.5" />
    <circle cx="34" cy="35.5" r="6" fill="#ffffff" />
    <path d="M31.2 35.7 L33.2 37.7 L36.9 33.3" />
  </svg>
</template>

<style scoped>
.icon {
  width: 44px;
  height: 44px;
  display: block;
}
</style>
