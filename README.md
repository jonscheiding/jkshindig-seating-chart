# #jkshindig Seating Chart Generator

This project generates an SVG file (and PNG file) from seating chart data for our wedding.  I thought this would be less time-consuming than trying to build it out by hand in a graphics editor.  I was probably wrong about that.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Generates the seating chart in development mode.  View it in the browser at http://localhost:3000.  Will reload as edits are made.

### `yarn run prepare-data <filename.csv>`

Reads and munges the CSV data for the seating chart.  Expects data to have the following columns:

| Column Name | Redundant Description            |
|-------------|----------------------------------|
| Title       | "Mr.", "Miss", etc               |
| First       | Guest's first name               |
| Last        | Guest's last name                |
| Table       | Table number or other identifier |

### `yarn run render-image <arguments>`

Creates SVG and PNG files for the final image.  Accepts the following arguments:

| Argument       | Description                                                                                 | Default Value            |
|----------------|---------------------------------------------------------------------------------------------|--------------------------|
| --render-width | The rendering width (in inches) to use for the SVG.  Height will be computed automatically. | 36in                     |
| --output-svg   | The filename for the rendered SVG file.                                                     | ./data/seating-chart.svg |
| --output-png   | The filename for the rendered PNG file.                                                     | ./data/seating-chart.png |
| --dpi          | The DPI setting to use when converting inches to pixels for PNG rendering.                  | 300                      |                                                     | ./data/seating-chart.png |
