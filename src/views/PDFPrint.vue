<template>
  <div>
    <v-card>
      <v-card-text>
        <v-row justify="center">
          <v-dialog v-model="dialog" persistent max-width="290">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="blue-grey" class="ma-2 white--text" v-bind="attrs" v-on="on">
                Print
                <v-icon right dark> mdi-cloud-upload </v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="text-h5"> Drucke Resultate </v-card-title>
              <v-card-text>
                <v-btn-toggle v-model="printFormat" mandatory>
                  <v-btn>
                    <span class="">CSV</span>
                    <v-icon>mdi-file-delimited-outline</v-icon>
                  </v-btn>

                  <v-btn>
                    <span class="">PDF</span>
                    <v-icon>mdi-file-pdf-box</v-icon>
                  </v-btn></v-btn-toggle
                >
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="gray darken-1" text @click="dialog = false"> Abbrechen </v-btn>
                <v-btn color="green darken-1" text @click="print()"> Drucken </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </v-card-text></v-card
    >
  </div>
</template>

<script>
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

const PRINT_CSV = 0
const PRINT_PDF = 1

const sampleArray = [
  ['Job', 'job@doe.com', '123456'],
  ['Joe', 'joe@doe.com', '234567'],
  ['Joi', 'joi@doe.com', '345678'],
  ['Jon', 'jon@doe.com', '456789'],
  ['Jou', 'jou@doe.com', '987654'],
  ['Joy', 'joy@doe.com', '876543'],
]

export default {
  data() {
    return {
      printFormat: PRINT_CSV,
      dialog: false,
    }
  },

  methods: {
    print() {
      switch (this.printFormat) {
        case PRINT_CSV:
          this.printCSV()
          break
        case PRINT_PDF:
          this.printPDF()
          break
        default:
          this.printCSV()
          break
      }
    },

    printCSV() {
      let csv = ''
      // set column headers
      csv += 'Column1,'
      csv += 'Column2,'
      csv += 'Column3'
      csv += '\r\n'

      for (let row of sampleArray) {
        for (const [index, col] of row.entries()) {
          csv += col + `${index < row.length - 1 ? ',' : ''}`
        }
        csv += '\r\n'
      }
      const url = window.URL.createObjectURL(new Blob([csv], { type: 'text/csv' }))
      const anchor = document.createElement('a')
      anchor.href = url
      anchor.setAttribute('download', 'Results.csv')
      anchor.click()
    },

    printPDF() {
      const doc = new jsPDF()
      autoTable(doc, {
        head: [['Column1', 'Column2', 'Column3']],
        body: sampleArray,
      })
      doc.save('Results.pdf')
    },
  },
}
</script>
