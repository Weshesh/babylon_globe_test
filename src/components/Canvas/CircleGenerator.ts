import { DotCoordinates } from './SphereGenerator';

export interface CircleGeneratorProps {
  yIndex: number,
  yCoordinate: number,
  sphereRadius: number,
  spacing: number
}

/**
 * Takes in sphere specific parameters, including the current y value.
 * @returns A collection of coordinates, needed to draw a circle.
 */

export function CircleGenerator(props: CircleGeneratorProps): DotCoordinates[] {
  const { yIndex, yCoordinate, sphereRadius, spacing } = props;

  const planeRadius = sphereRadius * Math.sin(yIndex);
  const fullCircle = Math.PI * 2;
  const planecircumference = fullCircle * planeRadius;

  const howManyDotsOnAPlane = Math.floor(planecircumference / spacing);

  const step = (planeRadius > 0)
    ? fullCircle / howManyDotsOnAPlane
    : fullCircle;

  let dotPositionsOnAPlane: DotCoordinates[] = [];

  for (let circleIndex = 0; circleIndex < fullCircle; circleIndex += step) {

    const x = Math.cos(circleIndex) * planeRadius;
    const z = Math.sin(circleIndex) * planeRadius;

    const dotCoordinates: DotCoordinates = {
      x: x,
      y: yCoordinate,
      z: z
    }

    dotPositionsOnAPlane.push(dotCoordinates);
  }

  return dotPositionsOnAPlane;
}
