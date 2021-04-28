import { DotCoordinates } from './SphereGenerator';
export interface CircleGeneratorProps {
  yCoordinate: number,
  sphereRadius: number,
  dotsOnTheEquator: number
}

/**
 * @returns A collection of coordinates to draw a circle
 */

export function CircleGenerator(props: CircleGeneratorProps): DotCoordinates[] {
  const { yCoordinate, sphereRadius, dotsOnTheEquator } = props;

  const radius = sphereRadius * Math.sin(yCoordinate);
  const circleCircumference = Math.PI * 2;
  const spacing = dotsOnTheEquator / dotsOnTheEquator;
  //const step = circleCircumference / spacing;
  const step = circleCircumference / 24;

  let dotPositionsOnAPlane: DotCoordinates[] = [];

  for (let circleIndex = 0; circleIndex <= circleCircumference; circleIndex += step) {

    const x = Math.cos(circleIndex) * radius;
    const z = Math.sin(circleIndex) * radius;

    const dotCoordinates: DotCoordinates = {
      x: x,
      y: yCoordinate,
      z: z
    }

    dotPositionsOnAPlane.push(dotCoordinates);
  }

  return dotPositionsOnAPlane;
}
