<template>
<div id="agency">
  <div class="page-header">
    <h1>{{ $t('pages.agency') }}</h1>
    <component-clouds />
    <div class="illustration">
      <img src="~assets/images/header-agency.svg" alt="Illustration">
      <img class="ship" src="~assets/images/header-agency-ship.svg" alt="Illustration">
    </div>
  </div>
  <div class="page-content boundaries">
    <section class="company section--shadow">
      <h2>{{ $t('company.heading') }}</h2>
      <p class="abstract">{{ $t('company.abstract') }}</p>
    </section>

    <section class="team section--shadow">
      <h2>{{ $t('team.heading') }}</h2>
      <p class="abstract">{{ $t('team.abstract') }}</p>
      <v-layout class="members" wrap justify-center>
        <v-flex xs6 sm3 v-for="(item,i) in team" :key="i">
          <div class="member-thumb">
            <img :src="'/images/agency/' +item.thumb" alt="Photo">
          </div>
          <div class="member-name">
            {{ item.name }}
          </div>
          <div class="member-position">
            {{ item.position }}
          </div>
          <div class="member-contacts">
            <div v-for="item in item.contacts">
              <a :href="item.url" target="_blank" rel="noopener">{{ item.label }}</a>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </section>

    <section class="mission section--shadow">
      <h2>{{ $t('mission.heading') }}</h2>
      <p class="abstract">{{ $t('mission.abstract') }}</p>
    </section>

    <section class="partner">
      <h2>{{ $t('partner.heading') }}</h2>
      <p class="abstract">{{ $t('partner.abstract') }}</p>
      <v-layout class="partner" wrap justify-center>
        <v-flex xs6 sm3 v-for="(item,i) in partner" :key="i">
          <div class="partner-logo">
            <img :src="'/images/agency/' + item.logo" :alt="item.name">
          </div>
          <div class="partner-description">
            {{ item.description }}
          </div>
          <v-btn flat outline :href="item.web" target="_blank" rel="noopener">{{ $t('buttons.website') }}</v-btn>
        </v-flex>
      </v-layout>
    </section>
  </div>
</div>
</template>

<script>
import Clouds from '~/components/clouds.vue'

export default {
  head() {
    return {
      title: this.$t('pages.agency')
    }
  },
  data() {
    return {
      team: {
        christophe: {
          thumb: 'christophe.jpg',
          position: this.$t('team.christophe.position'),
          name: 'Christophe',
          contacts: [{
              label: 'Email',
              url: 'mailto:info@santihans.com'
            },
            {
              label: 'Twitter',
              url: 'https://twitter.com/stophecom'
            },
            {
              label: 'Facebook',
              url: 'https://www.facebook.com/christopheschwyzer'
            }
          ]
        },
        remo: {
          thumb: 'remo.jpg',
          position: this.$t('team.remo.position'),
          name: 'Remo'
        },
        david: {
          thumb: 'david.jpg',
          position: this.$t('team.david.position'),
          name: 'David'
        },
        et: {
          thumb: 'et.svg',
          position: this.$t('team.et.position'),
          name: this.$t('team.et.name'),
          contacts: [{
            label: this.$t('team.et.contact'),
            url: 'mailto:info@santihans.com'
          }]
        }
      },
      partner: [{
          logo: 'cometas.svg',
          name: 'cometas',
          web: 'http://cometas.ch',
          description: 'Digitale Kurse, Web- und Mobile-Software.'
        }
        // {
        //   logo: 'taktwerk.svg',
        //   name: 'taktwerk',
        //   web: 'http://taktwerk.ch',
        //   description: 'Digitalisierung für KMU aus Industrie und Bau.'
        // }
      ]
    }
  },
  components: {
    'component-clouds': Clouds
  },
  i18n: {
    messages: {
      en: {
        company: {
          heading: 'About us',
          abstract: 'Santihans is a design and communications agency with its main focus on web design, branding and advertising. "Santihans" is an old basel-german expression for "St. Johann", a district in the north of Gross-Basel with a border to France and access to the Rhine.'
        },
        team: {
          heading: 'Team',
          abstract: 'Tiny team with magical skills and great ambition. We work without fixed structures, without office and without office hours. Instead, we use the possibilities of the Internet, work remotely, communicate and collaborate online. (We meet in person to celebrate though.)',
          christophe: {
            position: 'Founder, Designer, Web Enthusiast'
          },
          remo: {
            position: 'Consultant Strategy & Finance'
          },
          david: {
            position: 'Consultant Graphic Design'
          },
          et: {
            position: 'Whatever you do best',
            name: 'You?',
            contact: 'Apply'
          }
        },
        mission: {
          heading: 'Mission',
          abstract: 'Santihans produces appealing, custom-made and thought-through communication solutions for demanding customers. The company\'s style follows modern design principles, is sometimes out of the ordinary, often minimalistic, but always unique.'
        },
        partner: {
          heading: 'Partner',
          abstract: 'Santihans works together with great companies.'
        },
        buttons: {
          website: 'Website'
        }
      },
      de: {
        company: {
          heading: 'Über uns',
          abstract: 'Santihans ist eine Design- und Kommunikationsagentur mit Fokus auf Webdesign, Markengestaltung und Werbung. "Santihans" ist ein alter, basel-deutscher Ausdruck für "St. Johann", das nördlichste Quartier in Gross-Basel an der Grenze zu Frankreich  und mit Zugang zum Rhein.'
        },
        team: {
          heading: 'Team',
          abstract: 'Ein kleines Team mit magischen Kräften und grossem Tatendrang. Wir arbeiten ohne starre Strukturen, ohne Büro und ohne Bürozeiten. Wir nutzen die Möglichkeiten des Internets, arbeiten remote, kommunizieren und kollaborieren online. (Wir sehen uns um anzustossen.)',
          christophe: {
            position: 'Gründer, Tausendsassa'
          },
          remo: {
            position: 'Beratung Strategie/Finanzen'
          },
          david: {
            position: 'Grafikdesign Freelancer'
          },
          et: {
            position: 'Was ist deine Leidenschaft? Wo liegt dein Talent?',
            name: 'Du?',
            contact: 'Bewirb dich'
          }
        },
        mission: {
          heading: 'Mission',
          abstract: 'Santihans produziert ansprechende, handgemachte und durchdachte Kommunikationslösungen für anspruchsvolle Kunden. Santihans’ Stil folgt modernen Design-Prinzipien, ist manchmal ungewöhnlich, oft minimalistisch, aber immer einzigartig.'
        },
        partner: {
          heading: 'Partner',
          abstract: 'Santihans arbeitet mit hervorragenden Partnern zusammen.'
        },
        buttons: {
          website: 'Webseite'
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import "agency.scss";
</style>
