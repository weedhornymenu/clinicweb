<script setup>
import { t } from '../i18n'
import aboutImg from '../assets/about-farm.jpg'
</script>

<template>
  <section id="about" class="about">
    <div class="container about-grid">
      <figure class="about-media">
        <img :src="aboutImg" alt="Cannabis cultivation at the Happy Thai Herb farm" loading="lazy" />
      </figure>

      <div class="about-body">
        <p class="about-eyebrow">
          {{ t('about.eyebrow') }}
          <span class="about-rule" aria-hidden="true"></span>
        </p>
        <h2>{{ t('about.heading') }}</h2>
        <p class="about-text">{{ t('about.text') }}</p>

        <ul class="values">
          <li v-for="(value, i) in t('about.values')" :key="value">
            <span class="value-icon" aria-hidden="true">
              <!-- Professional Care: leaf -->
              <svg v-if="i === 0" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
                <path d="M8 37 C8 21 20 12 37 11 C37 28 26 37 8 37 Z" />
                <path d="M12 33 C18 26 25 20 33 15" />
              </svg>
              <!-- Quality Cultivation: sprout -->
              <svg v-else-if="i === 1" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
                <path d="M24 41 V27" />
                <path d="M24 29 C24 21 18 16 9 16 C9 25 15 29 24 29 Z" />
                <path d="M24 25 C24 18 30 13 39 13 C39 22 33 25 24 25 Z" />
              </svg>
              <!-- Herbal Wellness: lotus -->
              <svg v-else-if="i === 2" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
                <path d="M24 35 C19 31 17 25 18 17 C23 20 24 27 24 35 Z" />
                <path d="M24 35 C29 31 31 25 30 17 C25 20 24 27 24 35 Z" />
                <path d="M24 35 C18 34.5 12 32 9.5 27 C15 25.5 21 28.5 24 35 Z" />
                <path d="M24 35 C30 34.5 36 32 38.5 27 C33 25.5 27 28.5 24 35 Z" />
                <path d="M13 38.5 C17 41.5 31 41.5 35 38.5" />
              </svg>
              <!-- Responsible Practices: shield with check -->
              <svg v-else viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
                <path d="M24 8 L36 12 V22 C36 30 31 35 24 38 C17 35 12 30 12 22 V12 Z" />
                <path d="M18 23 L22 27 L29 18.5" />
              </svg>
            </span>
            <span class="value-label">{{ value }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 96px 0 104px;
  background: #ffffff;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.02fr 1fr;
  gap: 68px;
  align-items: center;
}

.about-media img {
  width: 100%;
  aspect-ratio: 5 / 4;
  object-fit: cover;
  border-radius: 14px;
  box-shadow: 0 24px 50px rgba(23, 57, 44, 0.14);
}

.about-eyebrow {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 13px;
  letter-spacing: 0.34em;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--green-soft);
}

.about-rule {
  width: 64px;
  height: 2px;
  background: var(--gold);
}

.about-body h2 {
  font-family: var(--serif);
  font-size: clamp(1.9rem, 3vw, 2.55rem);
  font-weight: 600;
  color: var(--green);
  margin-top: 18px;
}

.about-text {
  margin-top: 20px;
  font-size: 16.5px;
  color: var(--muted);
  line-height: 1.8;
}

.values {
  list-style: none;
  padding: 0;
  margin: 46px 0 0;
  display: flex;
}

.values li {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
}

.values li + li {
  border-left: 1px solid var(--line);
}

.value-icon {
  display: inline-flex;
  color: var(--green-soft);
}

.value-icon svg {
  width: 32px;
  height: 32px;
}

.value-label {
  font-size: 13.5px;
  font-weight: 500;
  color: #3c5348;
  line-height: 1.4;
  max-width: 100px;
}

@media (max-width: 900px) {
  .about {
    padding: 72px 0 80px;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 44px;
  }
}

@media (max-width: 480px) {
  .values {
    flex-wrap: wrap;
    gap: 24px 0;
  }

  .values li {
    flex: 1 1 50%;
  }

  .values li + li {
    border-left: none;
  }
}
</style>
