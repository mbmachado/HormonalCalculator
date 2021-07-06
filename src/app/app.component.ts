import { Component } from '@angular/core';

@Component({
  selector: 'hcl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  referenceValues = [
    {
      name: '25-hidroxivitamina D',
      references: {
        male: { min: 75, max: 120 },
        female: { min: 75, max: 120 },
      }
    },
    {
      name: 'PTH - Paratormônio',
      references: {
        male: { min: 12, max: 20 },
        female: { min: 12, max: 20 },
      }
    },
    {
      name: 'Cortisol',
      references: {
        male: { min: 15, max: 23 },
        female: { min: 15, max: 23 },
      }
    },
    {
      name: '5DHEA',
      references: {
        male: { min: 350, max: 600 },
        female: { min: 300, max: 550 },
      }
    },
    {
      name: 'T3 livre',
      references: {
        male: { min: 0.37, max: 1.2 },
        female: { min: 0.37, max: 1.2 },
      }
    },
    {
      name: 'T3 reverso',
      references: {
        male: { min: 50, max: 150 },
        female: { min: 50, max: 150 },
      }
    },
    {
      name: 'T4 livre',
      references: {
        male: { min: 0.7, max: 1.5 },
        female: { min: 0.7, max: 1.5 },
      }
    },
    {
      name: 'TSH Ultra-sensível',
      references: {
        male: { min: 0.1, max: 1 },
        female: { min: 0.1, max: 1 },
      }
    },
    {
      name: 'TGB - Anti-tireoglobulina',
      references: {
        male: { min: 0, max: 40 },
        female: { min: 0, max: 40 },
      }
    },
    {
      name: 'TPO Anti-peroxidase',
      references: {
        male: { min: 0, max: 34 },
        female: { min: 0, max: 34 },
      }
    },
    {
      name: 'Estradiol',
      references: {
        male: { min: 35, max: 100 },
        female: { min: 35, max: 100 },
      }
    },
    {
      name: 'F.S.H',
      references: {
        male: { min: 5, max: 15 },
        female: { min: 5, max: 15 },
      }
    },
    {
      name: 'Progesterona',
      references: {
        male: { min: 3, max: 25 },
        female: { min: 3, max: 25 },
      }
    },
    {
      name: 'LH',
      references: {
        male: { min: 1.5, max: 8 },
        female: { min: 1.5, max: 8 },
      }
    },
    {
      name: 'Estrona',
      references: {
        male: { min: 25, max: 350 },
        female: { min: 25, max: 350 },
      }
    },
    {
      name: 'Dihidrotestosterona - dht',
      references: {
        male: { min: 20, max: 370 },
        female: { min: 20, max: 370 },
      }
    },
    {
      name: 'Testosterona biodisponível',
      references: {
        male: { min: 12, max: 30 },
        female: { min: 12, max: 30 },
      }
    },
    {
      name: 'Testosterona livre',
      references: {
        male: { min: 6, max: 8.5 },
        female: { min: 6, max: 8.5 },
      }
    },
    {
      name: 'Testosterona total',
      references: {
        male: { min: 50, max: 75 },
        female: { min: 50, max: 75 },
      }
    },
    {
      name: 'Prolactina',
      references: {
        male: { min: 3, max: 30 },
        female: { min: 3, max: 30 },
      }
    },
    {
      name: 'SHBG',
      references: {
        male: { min: 15, max: 35 },
        female: { min: 15, max: 35 },
      }
    },
    {
      name: 'IGFBP 3',
      references: {
        male: { min: 4, max: 6 },
        female: { min: 4, max: 6 },
      }
    },
    {
      name: 'IGF-1 Somatomedina',
      references: {
        male: { min: 280, max: 340 },
        female: { min: 280, max: 340 },
      }
    },
    {
      name: 'Ácido Úrico',
      references: {
        male: { min: 1.7, max: 4 },
        female: { min: 1.7, max: 3.5 },
      }
    },
    {
      name: 'Albumina',
      references: {
        male: { min: 3.5, max: 5.5 },
        female: { min: 3.5, max: 5.5 },
      }
    },
    {
      name: 'Colesterol total',
      references: {
        male: { min: 140, max: 180 },
        female: { min: 140, max: 180 },
      }
    },
    {
      name: 'Col T / HDL',
      references: {
        male: { min: -Infinity, max: 3.5 },
        female: { min: -Infinity, max: 3.5 },
      }
    },
    {
      name: 'Creatinina',
      references: {
        male: { min: 0.5, max: 1.2 },
        female: { min: 0.5, max: 1.2 },
      }
    },
    {
      name: 'Eosinófilos',
      references: {
        male: { min: 0, max: 3 },
        female: { min: 0, max: 3 },
      }
    },
    {
      name: 'Fertilina',
      references: {
        male: { min: 20, max: 80 },
        female: { min: 20, max: 80 },
      }
    },
    {
      name: 'Ferro Sérico',
      references: {
        male: { min: 60, max: 190 },
        female: { min: 60, max: 190 },
      }
    },
    {
      name: 'Fibrinogênio',
      references: {
        male: { min: 180, max: 300 },
        female: { min: 180, max: 300 },
      }
    },
    {
      name: 'Gama GT',
      references: {
        male: { min: 10, max: 30 },
        female: { min: 10, max: 30 },
      }
    },
    {
      name: 'Glicemia Jejum',
      references: {
        male: { min: 55, max: 85 },
        female: { min: 65, max: 85 },
      }
    },
    {
      name: 'HDL - Colesterol bom',
      references: {
        male: { min: 50, max: 100 },
        female: { min: 50, max: 100 },
      }
    },
    {
      name: 'Hemoglobina Glicosilada',
      references: {
        male: { min: 3.5, max: 5.1 },
        female: { min: 3.5, max: 5.1 },
      }
    },
    {
      name: 'Homocisteína',
      references: {
        male: { min: 0, max: 8 },
        female: { min: 0, max: 8 },
      }
    },
    {
      name: 'Hematócrito',
      references: {
        male: { min: 36, max: 47 },
        female: { min: 36, max: 47 },
      }
    },
    {
      name: 'Indice Atividade Inflamatória',
      references: {
        male: { min: -Infinity, max: 1 },
        female: { min: -Infinity, max: 1 },
      }
    },
    {
      name: 'Insulina Jejum',
      references: {
        male: { min: 1, max: 6 },
        female: { min: 1, max: 6 },
      }
    },
    {
      name: 'LDL - Colesterol ruim',
      references: {
        male: { min: 0, max: 100 },
        female: { min: 0, max: 100 },
      }
    },
    {
      name: 'Lipoproteína A',
      references: {
        male: { min: 0.5, max: 30 },
        female: { min: 0.5, max: 30 },
      }
    },
    {
      name: 'PCR Ultra-sensível',
      references: {
        male: { min: 0, max: 0.11 },
        female: { min: 0, max: 0.11 },
      }
    },
    {
      name: 'Plaquetas',
      references: {
        male: { min: 150000, max: 400000 },
        female: { min: 150000, max: 400000 },
      }
    },
    {
      name: 'Serotonina',
      references: {
        male: { min: 100, max: 200 },
        female: { min: 100, max: 200 },
      }
    },
    {
      name: 'TGO',
      references: {
        male: { min: 18, max: 26 },
        female: { min: 18, max: 26 },
      }
    },
    {
      name: 'TGP',
      references: {
        male: { min: 18, max: 26 },
        female: { min: 18, max: 26 },
      }
    },
    {
      name: 'TGL/HDL',
      references: {
        male: { min: -Infinity, max: 2 },
        female: { min: -Infinity, max: 2 },
      }
    },
    {
      name: 'Triglicerídeos',
      references: {
        male: { min: 0, max: 100 },
        female: { min: 0, max: 100 },
      }
    },
    {
      name: 'Vitamina B12',
      references: {
        male: { min: 500, max: 980 },
        female: { min: 500, max: 980 },
      }
    }

  ];


}
