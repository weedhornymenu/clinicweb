<script setup>
import logoUrl from '../assets/logo.png'

defineProps({
  light: Boolean,
})
</script>

<template>
  <span class="brand" :class="{ light }">
    <img class="mark" :src="logoUrl" alt="Happy Thai Herb logo" width="72" height="72" />
    <span class="word">
      <span class="name">Happy Thai Herb</span>
      <span class="sub"><i />Cannabis Clinic and Dispensary<i /></span>
      <span class="tag">Healthcare • Herbal Wellness • Quality Standards</span>
    </span>
  </span>
</template>

<style scoped>
.brand {
  display: inline-flex;
  align-items: center;
  gap: 13px;
  color: var(--green);
  text-decoration: none;
  line-height: 1.2;
}

.mark {
  width: 52px;
  height: 52px;
  flex: none;
  object-fit: contain;
  border-radius: 50%;
}

.word {
  display: flex;
  flex-direction: column;
}

.name {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  color: var(--green);
}

.sub {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 2.6px;
  color: #7c8f85;
  margin-top: 2px;
  text-transform: uppercase;
  white-space: nowrap;
}

.sub i {
  display: block;
  width: 13px;
  height: 1px;
  background: #b6c4bc;
  flex: none;
}

.tag {
  font-size: 10.5px;
  color: var(--muted);
  letter-spacing: 0.3px;
  margin-top: 4px;
}

.brand.light,
.brand.light .name {
  color: #ffffff;
}

.brand.light .sub {
  color: rgba(255, 255, 255, 0.78);
}

.brand.light .sub i {
  background: rgba(255, 255, 255, 0.45);
}

.brand.light .tag {
  color: rgba(255, 255, 255, 0.62);
}

@media (max-width: 480px) {
  .tag {
    display: none;
  }

  .name {
    font-size: 17px;
  }

  .mark {
    width: 44px;
    height: 44px;
  }
}
</style>
