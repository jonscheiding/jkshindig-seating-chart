import { SeatingChartColumnTextBuilder } from './SeatingChartColumnTextBuilder';

export class SeatingChartTextBuilder {
  constructor(design, data) {
    this.design = design;
    this.data = data;
  }

  calculateColumnOffset(index, layout) {
    return layout.margin + ((layout.width + layout.spacing) * index);
  }

  build() {
    const { columns, fonts } = this.design;
    const { placements, layout } = columns;
    const data = this.data;

    const texts = [];

    for(let i = 0; i < placements.length; i++) {
      const column = placements[i];
      const letters = column.letters.split('');
      const origin = { 
        x: this.calculateColumnOffset(i, layout),
        y: column.top
      };

      texts.push(...new SeatingChartColumnTextBuilder(
        origin, fonts, letters, layout, data)
        .build());
    }

    return texts;
  }
}
