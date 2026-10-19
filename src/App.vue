<script setup>
import { watchEffect } from 'vue'
import { locale } from './i18n'
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import PortalSection from './components/PortalSection.vue'
import AboutSection from './components/AboutSection.vue'
import LocationsSection from './components/LocationsSection.vue'
import SiteFooter from './components/SiteFooter.vue'

watchEffect(() => {
  document.documentElement.lang = locale.value === 'th' ? 'th' : 'en'
})
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSection />
    <PortalSection />
    <AboutSection />
    <LocationsSection />
  </main>
  <SiteFooter />
</template>
