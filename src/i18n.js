import { ref } from 'vue'

export const locale = ref('en')

const messages = {
  en: {
    nav: {
      home: 'Home',
      portals: 'Our Portals',
      about: 'About Us',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Health • Wellness • Together',
      title: 'A Connected Approach to Healthcare & Herbal Wellness',
      sub: 'Explore our healthcare services, cultivation standards and herbal wellness initiatives.',
    },
    portals: {
      explore: 'Explore portal',
      items: [
        {
          title: 'Cannabis Clinic',
          text: 'Professional medical care and consultation for better health and wellbeing.',
        },
        {
          title: 'GHP Farm',
          text: 'Quality cultivation and sustainable growing practices.',
        },
        {
          title: 'Herbal Health',
          text: 'Traditional knowledge and natural herbal wellness solutions.',
        },
        {
          title: 'Our Standards',
          text: 'Commitment to quality, safety and responsible operations.',
        },
      ],
    },
    locations: {
      eyebrow: 'Our Locations',
      heading: 'Visit Our Shops',
      reviews: 'Reviews on Google Maps',
      directions: 'Get Directions',
    },
    about: {
      eyebrow: 'About',
      heading: 'About Happy Thai Herb',
      text: 'Happy Thai Herb is a connected network of healthcare, cultivation and herbal wellness initiatives. We are committed to professional care, high cultivation quality and responsible herbal wellness, creating a healthier future — together.',
      values: [
        'Professional Care',
        'Quality Cultivation',
        'Herbal Wellness',
        'Responsible Practices',
      ],
    },
    footer: {
      tagline: 'Healthcare • Herbal Wellness • Quality Standards',
      contact: 'Contact',
      contactSub: 'Get in touch with our team',
      location: 'Thailand',
      rights: '© 2025 Happy Thai Herb. All rights reserved.',
    },
  },
  th: {
    nav: {
      home: 'หน้าหลัก',
      portals: 'พอร์ทัลของเรา',
      about: 'เกี่ยวกับเรา',
      contact: 'ติดต่อเรา',
    },
    hero: {
      eyebrow: 'สุขภาพ • ความเป็นอยู่ที่ดี • ไปด้วยกัน',
      title: 'แนวทางแห่งการดูแลสุขภาพและสมุนไพรที่เชื่อมโยงถึงกัน',
      sub: 'สำรวจบริการด้านสุขภาพ มาตรฐานการเพาะปลูก และแนวทางการดูแลด้วยสมุนไพรของเรา',
    },
    portals: {
      explore: 'เข้าสู่พอร์ทัล',
      items: [
        {
          title: 'คลินิกกัญชา',
          text: 'การดูแลทางการแพทย์และการให้คำปรึกษาอย่างมืออาชีพ เพื่อสุขภาพและความเป็นอยู่ที่ดีกว่า',
        },
        {
          title: 'ฟาร์ม GHP',
          text: 'การเพาะปลูกที่มีคุณภาพและแนวทางการปลูกที่ยั่งยืน',
        },
        {
          title: 'สมุนไพรเพื่อสุขภาพ',
          text: 'ความรู้แบบดั้งเดิมและทางออกด้านสมุนไพรธรรมชาติเพื่อสุขภาพ',
        },
        {
          title: 'มาตรฐานของเรา',
          text: 'ความมุ่งมั่นด้านคุณภาพ ความปลอดภัย และการดำเนินงานอย่างรับผิดชอบ',
        },
      ],
    },
    locations: {
      eyebrow: 'สถานที่ตั้ง',
      heading: 'เยี่ยมชมร้านของเรา',
      reviews: 'รีวิวบน Google Maps',
      directions: 'เปิดเส้นทาง',
    },
    about: {
      eyebrow: 'เกี่ยวกับ',
      heading: 'เกี่ยวกับ Happy Thai Herb',
      text: 'Happy Thai Herb เป็นเครือข่ายที่เชื่อมโยงถึงกันของการดูแลสุขภาพ การเพาะปลูก และการดูแลด้วยสมุนไพร เรามุ่งมั่นสู่การดูแลอย่างมืออาชีพ คุณภาพการเพาะปลูกที่สูง และการดูแลด้วยสมุนไพรอย่างรับผิดชอบ เพื่อสร้างอนาคตที่มีสุขภาพดีไปด้วยกัน',
      values: [
        'การดูแลอย่างมืออาชีพ',
        'การเพาะปลูกคุณภาพ',
        'สมุนไพรเพื่อสุขภาพ',
        'แนวทางที่รับผิดชอบ',
      ],
    },
    footer: {
      tagline: 'Healthcare • Herbal Wellness • Quality Standards',
      contact: 'ติดต่อเรา',
      contactSub: 'ติดต่อทีมงานของเรา',
      location: 'ประเทศไทย',
      rights: '© 2025 Happy Thai Herb. สงวนลิขสิทธิ์',
    },
  },
}

export function t(path) {
  const node = path.split('.').reduce((acc, key) => acc?.[key], messages[locale.value])
  return node ?? path
}

export function toggleLocale() {
  locale.value = locale.value === 'en' ? 'th' : 'en'
}
