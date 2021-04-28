import { DotCoordinates } from './SphereGenerator';
export interface CircleGeneratorProps {
  yCoordinate: number,
  radius: number,
}

export function CircleGenerator(props: CircleGeneratorProps): DotCoordinates[] {

  const { yCoordinate, radius } = props;
  const circleCircumference: number = Math.PI * 2;
  const step: number = Math.PI / 6;

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
