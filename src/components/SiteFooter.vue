<script setup>
import { t, locale, toggleLocale } from '../i18n'
import BrandMark from './BrandMark.vue'
</script>

<template>
  <footer id="contact" class="site-footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <BrandMark light />
      </div>

      <div class="footer-col">
        <span class="col-icon" aria-hidden="true">
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="8" y="14" width="32" height="22" rx="2.5" />
            <path d="M8 17 L24 28.5 L40 17" />
          </svg>
        </span>
        <div>
          <p class="col-title">{{ t('footer.contact') }}</p>
          <a class="col-link" href="mailto:hello@happythaiherb.com">
            {{ t('footer.contactSub') }}
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M10 24 H36" />
              <path d="M28 17 L36 24 L28 31" />
            </svg>
          </a>
        </div>
      </div>

      <div class="footer-col">
        <span class="col-icon" aria-hidden="true">
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M24 42 C24 42 12 30.5 12 21.5 C12 14.6 17.4 9.5 24 9.5 C30.6 9.5 36 14.6 36 21.5 C36 30.5 24 42 24 42 Z" />
            <circle cx="24" cy="21.5" r="4.5" />
          </svg>
        </span>
        <div>
          <p class="col-title">{{ t('footer.location') }}</p>
          <button class="col-lang" type="button" @click="toggleLocale" aria-label="Switch language">
            <span :class="{ on: locale === 'en' }">English</span>
            <span class="col-lang-sep">|</span>
            <span :class="{ on: locale === 'th' }">ไทย</span>
          </button>
        </div>
      </div>
    </div>

    <div class="footer-bottom">{{ t('footer.rights') }}</div>

    <svg class="watermark" viewBox="0 0 72 72" fill="#ffffff" aria-hidden="true">
      <g>
        <path d="M36 47 C33.2 41 32 31 32.4 21 C32.7 14 34 9.5 36 6 C38 9.5 39.3 14 39.6 21 C40 31 38.8 41 36 47 Z" />
        <path d="M36 47 C33.2 41 32 31 32.4 21 C32.7 14 34 9.5 36 6 C38 9.5 39.3 14 39.6 21 C40 31 38.8 41 36 47 Z" transform="rotate(25 36 47)" />
        <path d="M36 47 C33.2 41 32 31 32.4 21 C32.7 14 34 9.5 36 6 C38 9.5 39.3 14 39.6 21 C40 31 38.8 41 36 47 Z" transform="rotate(-25 36 47)" />
        <path d="M36 47 C34.4 43 33.6 36 33.9 30 C34.1 26 35 22.5 36 20 C37 22.5 37.9 26 38.1 30 C38.4 36 37.6 43 36 47 Z" transform="rotate(52 36 47)" />
        <path d="M36 47 C34.4 43 33.6 36 33.9 30 C34.1 26 35 22.5 36 20 C37 22.5 37.9 26 38.1 30 C38.4 36 37.6 43 36 47 Z" transform="rotate(-52 36 47)" />
        <path d="M36 47 C34.4 43 33.6 36 33.9 30 C34.1 26 35 22.5 36 20 C37 22.5 37.9 26 38.1 30 C38.4 36 37.6 43 36 47 Z" transform="rotate(78 36 47)" />
        <path d="M36 47 C34.4 43 33.6 36 33.9 30 C34.1 26 35 22.5 36 20 C37 22.5 37.9 26 38.1 30 C38.4 36 37.6 43 36 47 Z" transform="rotate(-78 36 47)" />
      </g>
    </svg>
  </footer>
</template>

<style scoped>
.site-footer {
  position: relative;
  overflow: hidden;
  background: #14332a;
  color: #e8efeb;
}

.footer-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr;
  gap: 40px;
  padding: 64px 0 56px;
}

.footer-brand {
  display: flex;
  align-items: center;
}

.footer-col {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  border-left: 1px solid rgba(255, 255, 255, 0.14);
  padding-left: 36px;
}

.col-icon {
  width: 44px;
  height: 44px;
  flex: none;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  color: #dce7e1;
}

.col-icon svg {
  width: 20px;
  height: 20px;
}

.col-title {
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
}

.col-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
  font-size: 13.5px;
  color: #a9c0b5;
  text-decoration: none;
  transition: color 0.2s;
}

.col-link:hover {
  color: #ffffff;
}

.col-link svg {
  width: 15px;
  height: 15px;
  transition: transform 0.2s;
}

.col-link:hover svg {
  transform: translateX(3px);
}

.col-lang {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 6px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 13.5px;
  color: #a9c0b5;
}

.col-lang .on {
  color: #ffffff;
  font-weight: 600;
}

.col-lang-sep {
  color: rgba(255, 255, 255, 0.3);
}

.footer-bottom {
  position: relative;
  z-index: 1;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding: 22px 24px;
  text-align: center;
  font-size: 13px;
  color: #8fa79c;
}

.watermark {
  position: absolute;
  right: -24px;
  bottom: -34px;
  width: 240px;
  height: 240px;
  opacity: 0.05;
  transform: rotate(14deg);
  pointer-events: none;
}

@media (max-width: 900px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 52px 0 44px;
  }

  .footer-col {
    border-left: none;
    padding-left: 0;
  }
}
</style>
