<template>
  <div style="background-color: transparent">
    <v-container class="text-center justify-center">
      <v-item-group mandatory v-model="switchContent">
        <v-container>
          <v-row>
            <v-col cols="6" class="d-flex flex-column justify-end align-end">
              <v-hover v-slot="{ hover }">
                <v-item v-slot="{ active, toggle }">
                  <v-card
                    color="transparent"
                    height="100%"
                    width="220"
                    elevation="0"
                    :class="`align-center ${hover ? 'zCardHover' : ''} `"
                    @click="toggle"
                  >
                    <div v-if="active" class="pa-2" style="background: rgba(0, 204, 255, 0.5)">
                      <v-img :src="`${$imagehost}logo/events.png`" height="50px" contain> </v-img>
                      <v-divider color="#ffed00" class="ma-4" />
                      <div class="white--text">Deine perfekt organisierte Veranstaltung</div>
                    </div>
                    <div v-else class="pa-2">
                      <v-img :src="`${$imagehost}logo/events.png`" height="50px" contain class="mb-4"> </v-img>
                      <v-icon x-large color="#ffed00"> mdi-cursor-default-click-outline </v-icon>
                    </div>
                  </v-card>
                </v-item></v-hover
              >
            </v-col>
            <v-col cols="6" class="d-flex flex-column justify-end align-start">
              <v-hover v-slot="{ hover }">
                <v-item v-slot="{ active, toggle }">
                  <v-card
                    color="transparent"
                    :class="`align-center ${hover ? 'zCardHover' : ''} `"
                    height="100%"
                    width="220"
                    elevation="0"
                    @click="toggle"
                  >
                    <div v-if="active" class="pa-2" style="background: rgba(0, 204, 255, 0.5)">
                      <div class="white--text">Die spontane Herausforderung</div>
                      <v-divider color="#ffed00" class="ma-4" />
                      <v-img :src="`${$imagehost}logo/popup-white.png`" height="50px" contain> </v-img>
                    </div>
                    <div v-else class="pa-2">
                      <v-icon x-large color="#ffed00" class="mb-4"> mdi-cursor-default-click-outline </v-icon
                      ><v-img :src="`${$imagehost}logo/popup-white.png`" height="50px" contain> </v-img>
                    </div>
                  </v-card> </v-item
              ></v-hover>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>

      <!-- Event Content-->
      <transition name="fade" mode="out-in">
        <div v-if="switchContent === 0">
          <v-row class="justify-center">
            <v-col cols="7" sm="7" md="4">
              <div
                class="text-caption text-right white--text font-weight-thin my-4 pr-2"
                style="border-right: 1px solid white"
              >
                <div class="pa-0">Du veranstaltest Sport-Events?</div>
                <div class="pa-0">Du suchst Unterstützung bei der Organisation?</div>
                <div class="pa-0">Du möchtest Zeit und Nerven sparen?</div>
              </div>
            </v-col>
            <v-col cols="4" sm="4" md="2" class="align-self-center">
              <div class="text-center white--text text-uppercase">
                <v-img :src="`${$imagehost}logo/text-transp-blue-yellow.png`" max-height="30px" contain></v-img>
                <div class="pa-0">Macht <b>Dein</b></div>
                <div class="pa-0">Event zum Erfolg</div>
              </div>
            </v-col>
          </v-row>

          <!-- layout for medium and larger devices -->
          <div v-if="$vuetify.breakpoint.name !== 'xs'">
            <v-row class="justify-center" style="background: rgba(169, 169, 169, 0.3)">
              <v-col v-for="(item, i) in facts" :key="'largeTitleFacts' + i" cols="3" class="">
                <v-img :src="`${$imagehost}logo/${item.icon}`" max-height="50px" contain></v-img>
              </v-col>
            </v-row>
            <v-row class="justify-center">
              <v-col v-for="(item, i) in facts" :key="'largeTextFacts' + i" cols="3" class="facts-style mx-2"
                ><span>{{ item.text }}</span>
              </v-col>
            </v-row>

            <v-row class="justify-center mt-12">
              <v-col class="text-button white--text">
                <span>Alle </span><span class="text-button wrDarkYellow--text">Features</span
                ><span> auf einen Blick</span>
              </v-col>
            </v-row>

            <v-row class="justify-center" style="background: rgba(0, 204, 255, 0.5)">
              <v-col v-for="(item, i) in features.slice(0, 3)" :key="'largeTitleFeature1' + i" cols="3" class="pa-0"
                ><span class="text-button white--text">{{ item.title }}</span>
              </v-col>
            </v-row>

            <v-row class="justify-center">
              <v-col
                v-for="(item, i) in features.slice(0, 3)"
                :key="'largeTextFeature1' + i"
                cols="3"
                class="features-style mx-2"
                ><span>{{ item.text }}</span>
              </v-col>
            </v-row>

            <v-row class="justify-center mt-8" style="background: rgba(0, 204, 255, 0.5)">
              <v-col v-for="(item, i) in features.slice(3, 6)" :key="'largeTitleFeature2' + i" cols="3" class="pa-0"
                ><span class="text-button white--text">{{ item.title }}</span>
              </v-col>
            </v-row>

            <v-row class="justify-center">
              <v-col
                v-for="(item, i) in features.slice(3, 6)"
                :key="'largeTextFeature2' + i"
                cols="3"
                class="features-style mx-2"
                ><span>{{ item.text }}</span>
              </v-col>
            </v-row>
          </div>

          <!-- layout for small devices -->
          <div v-else>
            <div v-for="(item, i) in facts" :key="'smallFacts' + i">
              <v-row class="justify-center mt-4" style="background: rgba(169, 169, 169, 0.3)">
                <v-col cols="12">
                  <v-img :src="`${$imagehost}logo/${item.icon}`" max-height="50px" contain></v-img>
                </v-col>
              </v-row>
              <v-row class="justify-center">
                <v-col cols="10" class="facts-style mx-2"
                  ><span>{{ item.text }}</span>
                </v-col>
              </v-row>
            </div>

            <v-row class="justify-center mt-12">
              <v-col class="text-button white--text">
                <span>Alle </span><span class="text-button wrDarkYellow--text">Features</span
                ><span> auf einen Blick</span>
              </v-col>
            </v-row>

            <div v-for="(item, i) in features" :key="'smallFeatures' + i">
              <v-row class="justify-center mt-4" style="background: rgba(0, 204, 255, 0.5)">
                <v-col cols="12" class="pa-0"
                  ><span class="text-button white--text">{{ item.title }}</span>
                </v-col>
              </v-row>
              <v-row class="justify-center">
                <v-col cols="10" class="features-style mx-2"
                  ><span>{{ item.text }}</span>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
        <PopupTeaser v-else />
      </transition>
      <v-row class="justify-center mt-12">
        <v-col class="text-uppercase white--text pa-0">
          <div class="font-weight-bold pa-0">Neugierig?</div>
          <div class="font-weight-thin pa-0">Wir arbeiten mit Hochdruck an den ersten Events!</div>
          <div class="font-weight-bold pa-0">Lust mitzumachen?</div>
          <div class="font-weight-thin pa-0">
            Sende uns eine <a href="mailto:support@werace.de">eMail</a> und bleib auf dem Laufenden
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PopupTeaser from '@/components/content/startPage/PopupTeaser.vue'

export default {
  components: { PopupTeaser },

  name: 'GetStartPage',

  watch: {
    $route: {
      immediate: true,
      // eslint-disable-next-line no-unused-vars
      handler(to, from) {
        if (to.params?.type === 'popup') {
          this.switchContent = 1
        }
      },
    },
  },

  data() {
    return {
      tab: null,
      switchContent: true,
      picIndex: 0,
      features: [
        {
          title: 'Event-Editor',
          text: 'Erstelle Dein Event in wenigen Minuten. Du erhältst eine exklusive Internet-Seite für deine Veranstaltung mit Teilnehmeranmeldung und Online-Bezahloption.',
        },
        {
          title: 'Teilnehmer-Anmeldung',
          text: 'Bewirb deine exklusive Veranstaltungsseite auf Deinen Kanälen und nimm Anmeldungen online entgegen.',
        },
        {
          title: 'Teilnehmer-Verwaltung',
          text: 'Bearbeite die Teilnehmerlisten (z.B. Bezahlstatus). Gewinne Überblick über Deine TeilnehmerInnen mit den einfachen aber mächtigen Filter und Reportfunktionen.',
        },
        {
          title: 'Einfache Zeiterfassung',
          text: 'Erfasse Start und Zielzeiten digital mit unserer App und einfacher Sensortechnik.',
        },
        {
          title: 'Ergebnis-Auswertung',
          text: 'In Echtzeit. Erfasste Zeiten werden sofort auf der Ergebnis-Seite Deiner Veranstaltung angezeigt.',
        },
        {
          title: 'Ergebnis-Editor',
          text: 'Auch bei digitaler Zeiterfassung können Fehler passieren – korrigiere fehlerhafte Daten im komfortablen Editor. Schalte die finalen Ergebnisse frei.',
        },
      ],
      facts: [
        {
          icon: 'editor.png',
          text: 'Mit dem WeRace Event-Editor kannst Du Dein Event in wenigen Minuten aufsetzen. Du erhältst eine exklusive Internet-Seite mit Anmeldeformular für Deine Teilnehmer inklusive Online-Bezahloptionen.',
        },
        {
          icon: 'dash.png',
          text: 'Mit dem WeRace Event-Dashboard kannst Du Anmeldungen z.B. bei der Startnummernausgabe bearbeiten und mit Teilnehmern in Kontakt treten. Du hast immer den vollen Überblick.',
        },
        {
          icon: 'app.png',
          text: 'Mit der WeRace App kannst Du die Renn-Ergebnisse in Echtzeit erfassen und auf unseren Live-Pages direkt darstellen.',
        },
      ],
    }
  },
}
</script>

<style scoped>
.zCardHover {
  border: solid 1px #ffed00 !important;
}

.container {
  max-width: 1200px;
}

.bg-text {
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  border: 3px solid #ffed00;
}

.facts-style {
  text-align: center;
  border-left: 1px solid rgba(169, 169, 169, 0.6);
  border-bottom: 1px solid rgba(169, 169, 169, 0.6);
  padding: 8px;
  color: white;
  font-size: 1em;
}

.features-style {
  text-align: center;
  border-left: 1px solid rgba(0, 204, 255, 0.5);
  border-bottom: 1px solid rgba(0, 204, 255, 0.5);
  padding: 8px;
  color: white;
  font-size: 0.8em;
}

.slanted-line {
  height: 100px;
  width: 1px;
  background-color: #00ccff;
  transform: rotateZ(-10deg);
  margin: 2px;
}

.zCardBGleft {
  background: rgb(52, 52, 52);
  background: linear-gradient(114deg, rgba(52, 52, 52, 1) 66%, rgba(0, 204, 255, 1) 88%, rgba(255, 255, 0, 1) 100%);
}

.zCardBGright {
  background: rgb(52, 52, 52);
  background: linear-gradient(290deg, rgba(52, 52, 52, 1) 66%, rgba(0, 204, 255, 1) 88%, rgba(255, 255, 0, 1) 100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
