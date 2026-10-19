<script setup>
import { t } from '../i18n'
import PortalIcon from './PortalIcon.vue'

const icons = ['clinic', 'farm', 'herbal', 'standards']
</script>

<template>
  <section id="portals" class="portals">
    <div class="container portals-grid">
      <article v-for="(portal, i) in t('portals.items')" :key="portal.title" class="portal-card">
        <div class="portal-icon">
          <PortalIcon :name="icons[i]" />
        </div>
        <h3>{{ portal.title }}</h3>
        <span class="card-rule" aria-hidden="true"></span>
        <p>{{ portal.text }}</p>
        <a class="portal-link" href="#portals" @click.prevent>
          {{ t('portals.explore') }}
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M10 24 H36" />
            <path d="M28 17 L36 24 L28 31" />
          </svg>
        </a>
      </article>
    </div>
  </section>
</template>

<style scoped>
.portals {
  padding: 90px 0 96px;
  background: #ffffff;
}

.portals-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 26px;
}

.portal-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 42px 26px 34px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.portal-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(23, 57, 44, 0.1);
}

.portal-icon {
  width: 92px;
  height: 92px;
  flex: none;
  display: grid;
  place-items: center;
  border: 1.5px solid #c8a566;
  border-radius: 50%;
  color: #b4904f;
  margin-bottom: 26px;
}

.portal-card h3 {
  font-family: var(--serif);
  font-size: 23px;
  font-weight: 600;
  color: var(--green);
}

.card-rule {
  width: 38px;
  height: 2px;
  background: var(--gold);
  margin: 18px auto;
}

.portal-card p {
  font-size: 14.5px;
  color: var(--muted);
  line-height: 1.7;
  flex: 1;
}

.portal-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 26px;
  font-size: 15px;
  font-weight: 600;
  color: var(--green);
  text-decoration: none;
  transition: color 0.2s;
}

.portal-link svg {
  width: 17px;
  height: 17px;
  transition: transform 0.2s;
}

.portal-link:hover {
  color: #96743c;
}

.portal-link:hover svg {
  transform: translateX(4px);
}

@media (max-width: 1024px) {
  .portals-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .portals {
    padding: 64px 0 72px;
  }

  .portals-grid {
    grid-template-columns: 1fr;
  }
}
</style>
