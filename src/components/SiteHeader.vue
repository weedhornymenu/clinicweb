<script setup>
import { ref } from 'vue'
import { t, locale, toggleLocale } from '../i18n'
import BrandMark from './BrandMark.vue'

const links = [
  { id: 'home', key: 'nav.home' },
  { id: 'portals', key: 'nav.portals' },
  { id: 'about', key: 'nav.about' },
  { id: 'contact', key: 'nav.contact' },
]

const active = ref('home')
const open = ref(false)

function go(id) {
  active.value = id
  open.value = false
}
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">
      <a href="#home" class="brand-link" @click="go('home')">
        <BrandMark />
      </a>

      <nav class="main-nav" :class="{ open }" aria-label="Main navigation">
        <a
          v-for="link in links"
          :key="link.id"
          :href="`#${link.id}`"
          class="nav-link"
          :class="{ active: active === link.id }"
          @click="go(link.id)"
        >{{ t(link.key) }}</a>

        <button class="lang-toggle" type="button" @click="toggleLocale" aria-label="Switch language">
          <svg class="flag" viewBox="0 0 30 20" aria-hidden="true">
            <rect width="30" height="20" rx="2" fill="#a51931" />
            <rect y="3.3" width="30" height="13.4" fill="#f4f5f8" />
            <rect y="6.7" width="30" height="6.6" fill="#2d2a4a" />
          </svg>
          <span class="lang-label" :class="{ on: locale === 'en' }">EN</span>
          <span class="lang-sep">|</span>
          <span class="lang-label" :class="{ on: locale === 'th' }">ไทย</span>
        </button>
      </nav>

      <button
        class="burger"
        type="button"
        :class="{ open }"
        :aria-expanded="open"
        aria-label="Menu"
        @click="open = !open"
      >
        <span />
        <span />
        <span />
      </button>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 60;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(10px);
  box-shadow: 0 1px 0 var(--line);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  height: 88px;
}

.brand-link {
  text-decoration: none;
  flex: none;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 38px;
}

.nav-link {
  position: relative;
  font-size: 15px;
  font-weight: 500;
  color: var(--muted);
  text-decoration: none;
  padding: 8px 0;
  transition: color 0.2s;
}

.nav-link:hover {
  color: var(--green);
}

.nav-link.active {
  color: var(--green);
  font-weight: 600;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 2px;
  height: 2px;
  border-radius: 2px;
  background: var(--green-soft);
}

.lang-toggle {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: var(--muted);
  padding: 6px 0;
}

.flag {
  width: 22px;
  height: 15px;
  border-radius: 2px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  margin-right: 3px;
}

.lang-label {
  transition: color 0.2s;
}

.lang-label.on {
  color: var(--green);
  font-weight: 600;
}

.lang-sep {
  color: #c3cec8;
}

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.burger span {
  width: 22px;
  height: 2px;
  border-radius: 2px;
  background: var(--green);
  transition: transform 0.2s, opacity 0.2s;
}

@media (max-width: 900px) {
  .header-inner {
    height: 76px;
  }

  .burger {
    display: inline-flex;
  }

  .main-nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    background: #ffffff;
    border-bottom: 1px solid var(--line);
    padding: 14px 24px 22px;
    box-shadow: 0 24px 32px rgba(23, 57, 44, 0.08);
  }

  .main-nav.open {
    display: flex;
  }

  .nav-link {
    padding: 10px 0;
  }
}
</style>
