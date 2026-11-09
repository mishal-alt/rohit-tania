// Single source of truth for every piece of content on the invitation.
// To re-skin for another couple, edit this file and swap the files in /public/assets.

const maps = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`

export const couple = {
  groom: 'Rohit',
  bride: 'Tania',
  monogramAlt: 'Rohit and Tania monogram',
  groomParents: 'S/o Smt. Nirmal & Sh. Suresh Bareja',
  brideParents: 'D/o Smt. Makhna Devi & Sh. Jeet Sharma, Udhampur (J&K)',
}

export const wedding = {
  // Countdown target: Departure of Barat, 4 Dec 2026, 7:00 PM IST
  target: '2026-12-04T19:00:00+05:30',
  weekday: 'FRIDAY',
  dayMonth: '4th December',
  year: '2026',
  revealTime: 'Barat departs 7:00 PM',
  entranceDate: '4 DECEMBER 2026 · UDHAMPUR (J&K)',
  countdownLabel: 'Countdown to 4 December 2026, 7 PM India time',
  countdownCaption: '4 December 2026 · 7:00 PM IST',
  revealedLabel: 'Friday, 4th December 2026',
  revealedStatus: 'Wedding ceremony: Friday, 4th December 2026. Departure of Barat at 7:00 PM, India time.',
  footerDate: '4 DECEMBER 2026 · UDHAMPUR (J&K)',
}

export const media = {
  music: 'assets/sunehra-background.mp3',
  transitionVideo: 'assets/palace-opening-transition.mp4',
  entranceVideo: 'assets/entrance-background.mp4',
  entrancePoster: 'assets/entrance-video-poster.jpg',
  transitionPoster: 'assets/transition-poster.jpg',
  formalVideo: 'assets/formal-garden-background.mp4',
  formalPoster: 'assets/formal-garden-poster.jpg',
  logo: 'assets/couple-logo-transparent.png',
  ganesh: 'assets/ganeshji.png',
}

export const invitation = {
  shloka: ['वक्रतुण्ड महाकाय सूर्यकोटि समप्रभः।', 'निर्विघ्नं कुरुमेदेव सर्वकार्येषु सर्वदा॥'],
  blessingsOf: ['With the heavenly blessings of', 'Late Smt. Sheela Wanti & Late Sh. Sahib Ram Bareja'],
  hosts: ['Smt. Nirmal & Sh. Suresh Bareja', 'solicit the honour of your gracious presence to shower blessings on the auspicious wedding ceremony of their loving son'],
  eyebrow: 'We are getting married',
  blessing: 'Your gracious presence and blessings will make this joyous occasion even more special as two hearts unite and begin a beautiful journey of togetherness.',
}

export const closing = {
  regards: 'With warm regards — Bareja Family',
  compliments: ['With best compliments from', 'All relatives & friends'],
}

// ---- Venues (index referenced by events) ----
export const venues = [
  {
    number: '01',
    date: '27 NOVEMBER & 2 DECEMBER 2026',
    title: 'Our Residence, Rohtak',
    address: '1030, Sector-2, Rohtak',
    lines: ['Mata Ki Chowki · 6:00 PM (27 Nov)', 'Dinner · 9:00 PM (27 Nov)', 'Mehandi & Sangeet · 7:00 PM (2 Dec)'],
    map: maps('1030, Sector-2, Rohtak, Haryana'),
  },
  {
    number: '02',
    date: '4 DECEMBER 2026',
    title: 'Hotel Dolphin',
    address: 'Udhampur (J&K)',
    lines: ['Haldi · 12:00 Noon', 'Ghadi Ghadoli · 2:00 PM', 'Sehra Bandi · 6:00 PM'],
    map: maps('Hotel Dolphin, Udhampur, Jammu and Kashmir'),
  },
  {
    number: '03',
    date: '4 DECEMBER 2026',
    title: 'Thapa Palace',
    address: 'Housing Colony, Udhampur (J&K)',
    lines: ['Departure of Barat · 7:00 PM', 'Dinner · 8:00 PM', 'Wedding ceremony as per programme'],
    map: maps('Thapa Palace, Housing Colony, Udhampur, Jammu and Kashmir'),
  },
  {
    number: '04',
    date: '7 DECEMBER 2026',
    title: 'The Page',
    address: 'Opp. Tilyar Lake, Delhi Road, Rohtak',
    lines: ['Reception (Dinner) · 8:00 PM'],
    map: maps('The Page, Opp. Tilyar Lake, Delhi Road, Rohtak, Haryana'),
  },
]

export const venueAddress = [
  '1030, Sector-2, Rohtak',
  'Hotel Dolphin, Udhampur (J&K)',
  'Thapa Palace, Housing Colony, Udhampur (J&K)',
  'The Page, Opp. Tilyar Lake, Delhi Road, Rohtak',
]

// ---- Events ----
export const events = [
  {
    id: 'chowki', title: 'Mata Ki Chowki & Dinner', date: 'Friday, 27 November 2026', short: '27 NOVEMBER 2026',
    time: 'Chowki · 6:00 PM · Dinner · 9:00 PM', color: '#285345', venue: 0,
    desc: 'Join the Bareja family at our residence in Rohtak for Mata Ki Chowki, an evening of devotion and blessings, followed by dinner.',
    image: 'assets/bhaat-illustrated.webp',
  },
  {
    id: 'sangeet', title: 'Mehandi & Sangeet', date: 'Wednesday, 2 December 2026', short: '2 DECEMBER 2026',
    time: '7:00 PM', color: '#722c42', venue: 0,
    desc: 'An evening of mehandi, music, laughter and dance with family and friends at our residence.',
    image: 'assets/cocktail-dinner-illustrated.webp',
  },
  {
    id: 'haldi', title: 'Haldi, Ghadi Ghadoli & Sehra Bandi', date: 'Friday, 4 December 2026', short: '4 DECEMBER 2026',
    time: 'Haldi · 12:00 Noon · Ghadi Ghadoli · 2:00 PM · Sehra Bandi · 6:00 PM', color: '#87581c', venue: 1,
    desc: 'The wedding day begins with Haldi at noon, Ghadi Ghadoli at 2:00 PM and Sehra Bandi at 6:00 PM at Hotel Dolphin, Udhampur.',
    image: 'assets/haldi-mehendi-illustrated.webp',
  },
  {
    id: 'wedding', title: 'Wedding Ceremony', date: 'Friday, 4 December 2026', short: '4 DECEMBER 2026',
    time: 'Departure of Barat · 7:00 PM · Dinner · 8:00 PM', color: '#741e2c', venue: 2,
    desc: 'The Barat departs at 7:00 PM, with dinner at 8:00 PM, and the wedding ceremony follows as per programme. Your gracious presence and blessings will make this joyous occasion even more special.',
    image: 'assets/wedding-illustrated.webp',
  },
  {
    id: 'reception', title: 'Reception (Dinner)', date: 'Monday, 7 December 2026', short: '7 DECEMBER 2026',
    time: '8:00 PM', color: '#491620', venue: 3,
    desc: 'Celebrate the newly married couple at the reception dinner in Rohtak.',
    image: 'assets/cocktail-dinner-illustrated.webp',
  },
]

// ---- Gallery ----
// Photos are blank for now: each card shows an empty white frame.
// To add a photo, drop the file in /public/assets and set `src` (e.g. 'assets/gallery-01.webp'); the card then becomes clickable.
const captions = ['A little laughter', 'Celebrating together', 'You and me', 'My favourite person', 'Better, together', 'Moments to treasure', 'Adventures with you', 'Our kind of forever', 'Side by side', 'Every day, us']
const sizes = [[1350, 1800], [1350, 1800], [1600, 1066], [1350, 1800], [1170, 1560], [960, 1280], [1350, 1800], [1012, 1800], [1200, 1800], [1350, 1800]]
export const gallery = captions.map((caption, i) => ({
  caption,
  description: `Rohit and Tania together — photograph ${i + 1}`,
  src: null,
  width: sizes[i][0],
  height: sizes[i][1],
}))
