const design = {
  viewbox: {
    width: 3000,
    height: 4000
  },
  title: {
    font: 'yesteryear',
    position: { x: 880, y: 725 },
    parts: [
      {
        size: 250,
        lines: [ 'Jon &', 'Kaleigh' ],
        offset: 0
      },
      {
        size: 125,
        lines: [ 'March 29,', '2019' ],
        offset: 50
      }
    ],
  },
  colors: {
    background: '#21303d',
    foregroundDark: '#cc9389',
    foregroundLight: '#f0d0bd',
    foregroundOutline: '#9b4e34'
  },
  borderHexagons: {
    radius: 177.5,
    strokeWidth: 10,
    description: [
      { rowNumber: 0, left: 3, right: 2 },
      { rowNumber: 1, left: 3, right: 2 },
      { rowNumber: 2, left: 2, right: 1 },
      { rowNumber: 3, left: 1, right: 0 },
      { rowNumber: 4, left: 1, right: 0 },
      { rowNumber: 5, left: 1, right: 0 },
      { rowNumber: 6, left: 1, right: 0 },
      { rowNumber: 17, left: 0, right: 1 },
      { rowNumber: 19, left: 0, right: 1 },
      { rowNumber: 20, left: 0, right: 1 },
      { rowNumber: 21, left: 0, right: 1 },
      { rowNumber: 22, left: 0, right: 1 },
      { rowNumber: 23, left: 0, right: 1 },
      { rowNumber: 24, left: 1, right: 1 },
      { rowNumber: 25, left: 2, right: 2 },
      { rowNumber: 26, left: 2, right: 3 }
    ],
    placements: [],
  },
  chart: {
    fonts: {
      letters: { font: 'yesteryear', size: 65 },
      names: { font: 'vollkorn', size: 35 },
    },
    columns: {
      layout: {
        spacing: 100,
        margin: 150
      },
      placements: [
        { top: 1200, letters: 'BC' },
        { top: 1500, letters: 'DEFG' },
        { top: 420, letters: 'HIKLM' },
        { top: 380, letters: 'NOPRS' },
        { top: 500, letters: 'TUVWZ' }
      ]
    }
  },
  gradient: {
    stops: ['20%', '40%', '55%', '65%', '80%']
  }
}

{
  const borderHexagons = design.borderHexagons;
  const countPerRow = Math.floor(design.viewbox.width / (design.borderHexagons.radius * 3));

  for(const row of borderHexagons.description) {
    for(var i = 0; i < row.left; i++) {
      borderHexagons.placements.push({row: row.rowNumber, col: i});
    }
    for(var j = 0; j < row.right; j++) {
      borderHexagons.placements.push({row: row.rowNumber, col: countPerRow - j})
    }
  }

  delete borderHexagons.description;
}

{
  const layout = design.chart.columns.layout;
  const placements = design.chart.columns.placements;

  const columnCount = placements.length;

  layout.width =
    (
      design.viewbox.width // Overall width of viewbox
      - (layout.spacing * (columnCount - 1)) // Not counting space between columns
      - (layout.margin * 2) // Not counting space at edges
     ) // Remaining amount is what's available for actual column content
     / columnCount;
}

export default design;
