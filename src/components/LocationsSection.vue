<script setup>
import { t } from '../i18n'
import sukhumvitImg from '../assets/shopsk.webp'
import udomsukImg from '../assets/shopudomsuk.webp'
import bangnaImg from '../assets/shopbangna.jpg'

const shops = [
  {
    name: 'WeedHorny.com',
    branch: 'Sukhumvit 33/1',
    area: 'Sukhumvit, Bangkok',
    image: sukhumvitImg,
    mapQuery: 'WeedHorny.com Sukhumvit 33/1',
    listingUrl: 'https://maps.app.goo.gl/KvS3ex3Dp9ny5KBY8',
  },
  {
    name: 'Happy Thai Herb',
    branch: 'Udomsuk',
    area: 'Udomsuk, Bangkok',
    image: udomsukImg,
    mapQuery: 'Happy Thai Herb Udomsuk',
    listingUrl: 'https://maps.app.goo.gl/xEjwrZ3LpbJtosGg6',
  },
  {
    name: 'Happy Thai Herb',
    branch: 'Bangna',
    area: 'Bangna, Bangkok',
    image: bangnaImg,
    mapQuery: '32 Soi Bang Na-Trat 23, Bang Na Nuea, Bang Na, Bangkok 10260',
    listingUrl: 'https://maps.app.goo.gl/aM7Xovop5QB6AvNLA',
  },
]

function embedUrl(query) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=16&output=embed`
}
</script>

<template>
  <section id="locations" class="locations">
    <div class="container">
      <p class="locations-eyebrow">
        {{ t('locations.eyebrow') }}
        <span class="locations-rule" aria-hidden="true"></span>
      </p>
      <h2 class="locations-heading">{{ t('locations.heading') }}</h2>

      <div class="locations-grid">
        <article v-for="shop in shops" :key="shop.branch" class="shop-card">
          <div class="shop-media">
            <img :src="shop.image" :alt="`${shop.name} ${shop.branch} storefront`" loading="lazy" />
          </div>

          <div class="shop-body">
            <h3>{{ shop.name }} <span>— {{ shop.branch }}</span></h3>

            <p class="shop-area">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M24 42 C24 42 12 30.5 12 21.5 C12 14.6 17.4 9.5 24 9.5 C30.6 9.5 36 14.6 36 21.5 C36 30.5 24 42 24 42 Z" />
                <circle cx="24" cy="21.5" r="4.5" />
              </svg>
              {{ shop.area }}
            </p>

            <a class="shop-reviews" :href="shop.listingUrl" target="_blank" rel="noopener">
              <svg viewBox="0 0 48 48" fill="currentColor" aria-hidden="true">
                <path d="M24 6 L29.7 18.6 L43.5 19.7 L33 28.5 L36.3 41.9 L24 34.7 L11.7 41.9 L15 28.5 L4.5 19.7 L18.3 18.6 Z" />
              </svg>
              {{ t('locations.reviews') }}
            </a>

            <iframe
              class="shop-map"
              :src="embedUrl(shop.mapQuery)"
              :title="`${shop.name} ${shop.branch} map`"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
            ></iframe>

            <a class="shop-directions" :href="shop.listingUrl" target="_blank" rel="noopener">
              {{ t('locations.directions') }}
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M10 24 H36" />
                <path d="M28 17 L36 24 L28 31" />
              </svg>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.locations {
  padding: 92px 0 96px;
  background: #f7faf8;
}

.locations-eyebrow {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 13px;
  letter-spacing: 0.34em;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--green-soft);
}

.locations-rule {
  width: 64px;
  height: 2px;
  background: var(--gold);
}

.locations-heading {
  font-family: var(--serif);
  font-size: clamp(1.9rem, 3vw, 2.55rem);
  font-weight: 600;
  color: var(--green);
  margin-top: 18px;
}

.locations-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;
  margin-top: 48px;
}

.shop-card {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.shop-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(23, 57, 44, 0.1);
}

.shop-media img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
}

.shop-body {
  display: flex;
  flex-direction: column;
  padding: 22px 22px 24px;
}

.shop-body h3 {
  font-family: var(--serif);
  font-size: 19px;
  font-weight: 600;
  color: var(--green);
}

.shop-body h3 span {
  color: #96743c;
  white-space: nowrap;
}

.shop-area {
  display: flex;
  align-items: center;
  gap: 7px;
  margin-top: 10px;
  font-size: 13.5px;
  color: var(--muted);
}

.shop-area svg {
  width: 15px;
  height: 15px;
  color: var(--green-soft);
  flex: none;
}

.shop-reviews {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-top: 12px;
  font-size: 13.5px;
  font-weight: 600;
  color: #96743c;
  text-decoration: none;
}

.shop-reviews:hover {
  color: #7a5c2c;
}

.shop-reviews svg {
  width: 15px;
  height: 15px;
  color: var(--gold);
}

.shop-map {
  width: 100%;
  height: 190px;
  margin-top: 16px;
  border: 1px solid var(--line);
  border-radius: 8px;
  display: block;
}

.shop-directions {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
  padding: 11px 18px;
  border: 1.5px solid var(--green);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  color: var(--green);
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}

.shop-directions:hover {
  background: var(--green);
  color: #ffffff;
}

.shop-directions svg {
  width: 16px;
  height: 16px;
}

@media (max-width: 1024px) {
  .locations-grid {
    grid-template-columns: 1fr;
    max-width: 560px;
    margin-inline: auto;
  }
}

@media (max-width: 600px) {
  .locations {
    padding: 64px 0 72px;
  }
}
</style>
