import { DotCoordinates } from './SphereGenerator';

export interface CircleGeneratorProps {
  yIndex: number,
  yCoordinate: number,
  sphereRadius: number,
  dotsOnTheEquator: number
}

/**
 * Takes in sphere specific parameters, including the current y value.
 * @returns A collection of coordinates, needed to draw a circle.
 */

export function CircleGenerator(props: CircleGeneratorProps): DotCoordinates[] {
  const { yIndex, yCoordinate, sphereRadius, dotsOnTheEquator } = props;

  const radius = sphereRadius * Math.sin(yIndex);
  const circleCircumference = Math.PI * 2;

  const multiplier = Math.sin(yIndex);
  console.log(multiplier);

  const dotsOnACircle = Math.abs(multiplier * dotsOnTheEquator)
  console.log(dotsOnACircle);

  const step = (multiplier === 0)
    ? circleCircumference
    : circleCircumference / dotsOnACircle;

  console.log('step', step)

  let dotPositionsOnAPlane: DotCoordinates[] = [];

  for (let circleIndex = step; circleIndex < circleCircumference + step; circleIndex += step) {

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
