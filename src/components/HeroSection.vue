<script setup>
import { t } from '../i18n'
import heroImg from '../assets/hero-clinic.jpg'
</script>

<template>
  <section id="home" class="hero">
    <div
      class="hero-bg"
      :style="{ backgroundImage: `url(${heroImg})` }"
      role="img"
      aria-label="Cannabis leaf and stethoscope in a bright medical clinic"
    ></div>
    <div class="container hero-inner">
      <p class="hero-eyebrow">{{ t('hero.eyebrow') }}</p>
      <span class="hero-rule" aria-hidden="true"></span>
      <h1 class="hero-title">{{ t('hero.title') }}</h1>
      <p class="hero-sub">{{ t('hero.sub') }}</p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  min-height: 590px;
  background: #eef3f0;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center right;
}

.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.98) 0%,
    rgba(255, 255, 255, 0.93) 30%,
    rgba(255, 255, 255, 0.62) 52%,
    rgba(255, 255, 255, 0.1) 72%,
    rgba(255, 255, 255, 0) 86%
  );
}

.hero-inner {
  position: relative;
  z-index: 1;
  padding: 88px 0 96px;
}

.hero-eyebrow {
  font-size: 13px;
  letter-spacing: 0.34em;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--green-soft);
}

.hero-rule {
  display: block;
  width: 58px;
  height: 2px;
  background: var(--gold);
  margin: 18px 0 26px;
}

.hero-title {
  font-family: var(--serif);
  font-weight: 600;
  font-size: clamp(2.4rem, 4.2vw, 3.35rem);
  line-height: 1.16;
  color: var(--green);
  max-width: 580px;
}

.hero-sub {
  margin-top: 24px;
  font-size: 17px;
  color: var(--muted);
  max-width: 520px;
  line-height: 1.7;
}

@media (max-width: 760px) {
  .hero {
    min-height: 520px;
  }

  .hero-bg {
    background-position: 68% center;
  }

  .hero::after {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.96) 0%,
      rgba(255, 255, 255, 0.85) 100%
    );
  }

  .hero-inner {
    padding: 72px 0 80px;
  }
}
</style>
