import { Mesh } from "@babylonjs/core";
import CreateDot from './CreateDot';

interface SphereGeneratorProps {
  radius: number,
  step: number
  parent: any
}

function SphereGenerator(props: SphereGeneratorProps): Mesh[] {

  const { radius, step, parent } = props;

  let sphere: Mesh[] = [];

  const yStep = 2 * Math.PI / 180 /step;

  for (let yIndex = 0; yIndex <= 180; yIndex += step) {
    console.log(yIndex);
    console.log(Math.sin(yIndex * Math.PI));
    let y: number, x: number, z: number;

    y = radius * Math.cos(yIndex);

    const circleStepModifier = Math.sin(yIndex) > 0
      ? 1
      : 360 / step;

    const circleStep = step * circleStepModifier;

    for (let circleIndex = 0; circleIndex < 360; circleIndex += circleStep) {

      x = radius * Math.sin(circleIndex);
      z = radius * Math.cos(circleIndex);

      //console.log('x', x, 'y', y, 'z', z);

      sphere.push(
        CreateDot({x, y, z, parent})
      );
    }

  }
  return [];
}

export default SphereGenerator;
