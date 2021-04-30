import { Mesh } from "@babylonjs/core";
import { CircleGenerator, CircleGeneratorProps } from './CircleGenerator'
import CreateDot from './CreateDot';

interface SphereGeneratorProps {
  sphereRadius: number,
  spacing: number,
  parent: any
}
export interface DotCoordinates {
  y: number,
  x: number,
  z: number
}

function SphereGenerator(props: SphereGeneratorProps): Mesh[] {

  const { sphereRadius, spacing, parent } = props;

  let sphereCoordinates: DotCoordinates[] = [];
  let sphere: Mesh[] = [];

  const semiCircle = Math.PI;
  const semiCircleLength = semiCircle * sphereRadius;
  const howManyDotsOnAnArc = Math.floor(semiCircleLength / spacing);
  const step = semiCircle / howManyDotsOnAnArc;
  const endPoint = semiCircle + step;

  for (let yIndex = 0; yIndex < endPoint; yIndex += step) {

    const yCoordinate = Math.cos(yIndex) * sphereRadius;

    let dotPositionsOnAPlane: DotCoordinates[];

    const spacing = .5;

    const circleGeneratorParameters: CircleGeneratorProps = {
      yIndex: yIndex,
      yCoordinate: yCoordinate,
      sphereRadius: sphereRadius,
      spacing: spacing
    }

    dotPositionsOnAPlane = CircleGenerator(circleGeneratorParameters);
    sphereCoordinates = [...sphereCoordinates, ...dotPositionsOnAPlane];
  }

  sphereCoordinates.forEach( dotCoordinates => {
    const { x, y, z } = dotCoordinates;
    sphere.push(CreateDot({x, y, z, parent}));
  })

  return sphere;
}

export default SphereGenerator;
