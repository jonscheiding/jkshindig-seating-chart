import { Text } from './Text';

export class SeatingChartSectionTextBuilder {
  constructor(origin, fonts, letter, width, rows) {
    this.origin = origin;
    this.letter = letter;
    this.fonts = fonts;
    this.width = width;
    this.rows = rows;
  }

  translate(point, dx, dy) {
    return { x: point.x + dx, y: point.y + dy };
  }

  build() {
    const { origin, letter, fonts, width, rows } = this;

    return [
      new Text(`chart-${letter}-letter`, 
        [letter], 
        origin, fonts.letters),

      new Text(`chart-${letter}-names`, 
        rows.map(row => `${row.Title} ${row.First} ${row.Last}`),
        this.translate(origin, 0, fonts.letters.size), fonts.names,
        { lineSpacing: 1.2 }),

      new Text(`chart-${letter}-tables`,
        rows.map(row => row.Table),
        this.translate(origin, width, fonts.letters.size), fonts.names,
        { lineSpacing: 1.2 })
    ];
  }
}

export function calculateSectionHeight(data, fonts) {
  return fonts.letters.size + (fonts.names.size * 1.2 * data.length);
}

export function calculateSectionHeightOffset(data, fonts) {
  return calculateSectionHeight(data, fonts) + fonts.letters.size;
}
