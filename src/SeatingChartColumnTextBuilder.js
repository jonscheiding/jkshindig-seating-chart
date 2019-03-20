import { SeatingChartSectionTextBuilder, calculateSectionHeightOffset } from './SeatingChartSectionTextBuilder';

export class SeatingChartColumnTextBuilder {
  constructor(origin, fonts, letters, layout, data) {
    this.origin = origin;
    this.fonts = fonts;
    this.letters = letters;
    this.layout = layout;
    this.data = data;
  }

  build() {
    const { origin, letters, fonts, layout, data } = this;

    const texts = [];
    let currentTop = origin.y;

    for(const letter of letters) {
      const currentOrigin = {x: origin.x, y: currentTop}
      const rows = data[letter];

      texts.push(...new SeatingChartSectionTextBuilder(
        currentOrigin, fonts, letter, layout.width, rows)
        .build())

      currentTop += calculateSectionHeightOffset(rows, fonts);
    }

    return texts;
  }
}