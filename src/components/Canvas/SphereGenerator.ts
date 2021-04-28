import { Mesh } from "@babylonjs/core";
import { CircleGenerator, CircleGeneratorProps } from './CircleGenerator'
import CreateDot from './CreateDot';

interface SphereGeneratorProps {
  radius: number,
  step: number
  parent: any
}
export interface DotCoordinates {
  y: number,
  x: number,
  z: number
}

function SphereGenerator(props: SphereGeneratorProps): Mesh[] {

  const { radius, step, parent } = props;

  let sphereCoordinates: DotCoordinates[] = [];
  let sphere: Mesh[] = [];

  for (let yIndex = 0; yIndex < 1; yIndex += step) {

    //let y: number, x: number, z: number;

    let dotPositionsOnAPlane: DotCoordinates[];

    const circleGeneratorParameters: CircleGeneratorProps = {
      yCoordinate: 0,
      radius: radius
    }

    dotPositionsOnAPlane = CircleGenerator(circleGeneratorParameters);

    sphereCoordinates = [...sphereCoordinates, ...dotPositionsOnAPlane];

  }

  sphereCoordinates.forEach(dotCoordinates => {
    const { x, y, z } = dotCoordinates;
    sphere.push(CreateDot({x, y, z, parent}));
  })

  return sphere;
}

export default SphereGenerator;
