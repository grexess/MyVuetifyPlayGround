<template>
  <div>
    <v-row class="justify-center">
      <v-col cols="4" sm="4" md="2" class="align-self-center">
        <div class="text-center white--text text-uppercase pr-2">
          <v-img :src="`${$imagehost}logo/text-transp-blue-yellow.png`" max-height="30px" contain></v-img>
          <div class="pa-0"><b>Dein</b> exclusives</div>
          <div class="pa-0"><i>Sofort</i>-Event</div>
        </div>
      </v-col>
      <v-col cols="7" sm="7" md="4">
        <div class="text-caption text-left white--text font-weight-thin my-4 pl-2" style="border-left: 1px solid white">
          <div class="pa-0">Dein persönliches Event</div>
          <div class="pa-0">Überall und sofort</div>
          <div class="pa-0">Verfügbar in wenigen Klicks</div>
        </div>
      </v-col>
    </v-row>

    <!-- layout for medium and larger devices -->
    <div v-if="$vuetify.breakpoint.name !== 'xs'">
      <v-row class="justify-center" style="background: rgba(169, 169, 169, 0.3)">
        <v-col v-for="(item, i) in facts" :key="'largeTitleFacts' + i" cols="3" class="">
          <v-img :src="`${$imagehost}logo/${item.icon}`" max-height="25px" contain></v-img>
          <div class="factTitle">{{ item.title }}</div>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-col v-for="(item, i) in facts" :key="'largeTextFacts' + i" cols="3" class="px-2 py-1 mx-4">
          <v-row dense class="fill-height facts-style mx-2 px-0 align-center">
            <v-col cols="12">
              {{ item.text }}
            </v-col>
          </v-row>
          <v-row justify="center" dense no-gutters>
            <v-col class="text-right"
              ><v-btn
                dense
                plain
                color="white"
                class="font-weight-light px-0"
                @click="$router.push({ name: 'Details', params: { title: item.title, images: item.images } })"
              >
                <span style="font-size: 0.6em !important"><i>Mehr</i></span>
                <v-icon color="wrDarkYellow" x-small> mdi-chevron-double-right </v-icon>
              </v-btn></v-col
            >
          </v-row>
        </v-col>
      </v-row>

      <v-row class="justify-center mt-8">
        <v-col>
          <v-btn x-large color="wrDarkYellow" outlined :href="`${origin}/timer/#/popup/create`" target="_blank">
            Zum Popup-Creator <v-icon x-large class="mx-2"> mdi-open-in-new </v-icon>
          </v-btn></v-col
        >
      </v-row>
      <v-row class="justify-center mt-12">
        <v-col class="text-button white--text">
          <span>Alle Popup-</span><span class="text-button wrDarkYellow--text">Features</span
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
    <div v-else>
      <div v-for="(item, i) in facts" :key="'smallFacts' + i">
        <v-row class="justify-center mt-4" style="background: rgba(169, 169, 169, 0.3)">
          <v-col cols="12">
            <v-img :src="`${$imagehost}logo/${item.icon}`" max-height="25px" contain></v-img>
            <div class="factTitle">{{ item.title }}</div>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col cols="10" class="facts-style mx-2"
            ><span>{{ item.text }}</span>
          </v-col>
        </v-row>
        <v-row justify="center" dense no-gutters>
          <v-col class="text-right"
            ><v-btn
              dense
              plain
              color="white"
              class="font-weight-light px-0"
              @click="$router.push({ name: 'Details', params: { title: item.title, images: item.images } })"
            >
              <span style="font-size: 0.6em !important"><i>Mehr</i></span>
              <v-icon color="wrDarkYellow" x-small> mdi-chevron-double-right </v-icon>
            </v-btn></v-col
          >
        </v-row>
      </div>
      <v-row class="justify-center">
        <v-col>
          <v-btn x-large color="wrDarkYellow" outlined :href="`${origin}/timer/#/popup/create`" target="_blank">
            Zum Popup-Creator <v-icon x-large class="mx-2"> mdi-open-in-new </v-icon>
          </v-btn></v-col
        >
      </v-row>
      <v-row class="justify-center mt-12">
        <v-col class="text-button white--text">
          <span>Alle </span><span class="text-button wrDarkYellow--text">Features</span><span> auf einen Blick</span>
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
</template>

<script>
export default {
  name: 'PopupTeaser',

  data() {
    return {
      origin: new URL(window.location.href).origin,
      facts: [
        {
          icon: 'weraceWhite.png',
          title: 'Popup-Creator',
          text: 'Erstelle Dein Event schnell und unkompliziert in 1 Minute.',
          images: ['creator01.png', 'creator02.png', 'creator03.png'],
        },
        {
          icon: 'weraceWhite.png',
          title: 'Popup-Timer',
          text: 'Erfasse die Ergebnisse ohne lästige App-Installation einfach und intuitiv im Browser auf dem Smartphone',
          images: ['timer01.png', 'timer02.png', 'timer03.png', 'timer04.png'],
        },
        {
          icon: 'weraceWhite.png',
          title: 'Popup-Results',
          text: 'Verfolge die Ergebnisse live auf Deiner Popup-Results-Seite. Teile den Link mit Deinen Popup-Teilnehmern.',
          images: ['results01.png', 'results02.png', 'results03.png'],
        },
      ],
      features: [
        {
          title: 'Persönlich',
          text: 'Deine Freunde und Du. Exklusiv. Nur für Euch.',
        },
        {
          title: 'Erstellung von Popups',
          text: 'In wenigen Klicks. Du brauchst nur eine E-Mail-Adresse und uns sagen, wie Du Die Ergebnisse für Deine Rennen erfassen möchtest.',
        },
        {
          title: 'Einfache Zeiterfassung',
          text: 'Mit dem Smartphone. So einfach wie möglich im Browser. Keine Installation einer App notwendig.',
        },
        {
          title: 'Deine Regeln',
          text: 'Du bestimmts wie die Ergebnisse Deines Events aussehen. Zeiten, Weite oder Punkte. Rundkurs oder Strecke.',
        },
        {
          title: 'Ergebnis-Auswertung',
          text: 'Alle Daten werden auf der Ergebnis-Seite Deiner Popups angezeigt. Selbstverständlich LIVE!',
        },
        {
          title: 'Privatsphäre',
          text: 'Deine Daten sind Deine Daten. Du entscheidest, ob nach 24h alles (Versprochen!) automatisch gelöscht wird. Die Ergebnisse bekommst Du nochmal per E-Mail.',
        },
      ],
    }
  },
}
</script>

<style scoped>
.factTitle {
  font-size: 1.2em;
  font-weight: bold;
  font-style: italic;
  color: #ffed00;
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
</style>
