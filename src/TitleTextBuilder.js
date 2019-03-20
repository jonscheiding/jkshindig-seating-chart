import { Text } from './Text';

export class TitleTextBuilder {
  constructor(design) {
    this.design = design;
  }

  build() {
    const { position, font, parts } = this.design;

    const texts = [];
    let currentOrigin = {x: position.x, y: position.y };

    for(let i = 0; i < parts.length; i++) {
      const { size, offset, lines } = parts[i];

      currentOrigin.x += offset;

      texts.push(new Text(`title-${i}`, 
        lines, currentOrigin, 
        {name: font, size}, 
        {alignmentBaseline: 'middle', textAnchor: 'middle'}));

      currentOrigin = {x: position.x, y: currentOrigin.y + (lines.length * size)}
    }

    return texts;
  }
}
