import { Mesh } from "@babylonjs/core";
import { CircleGenerator, CircleGeneratorProps } from './CircleGenerator'
import CreateDot from './CreateDot';

interface SphereGeneratorProps {
  sphereRadius: number,
  dotsOnTheEquator: number,
  parent: any
}
export interface DotCoordinates {
  y: number,
  x: number,
  z: number
}

function SphereGenerator(props: SphereGeneratorProps): Mesh[] {

  const { sphereRadius, dotsOnTheEquator, parent } = props;

  let sphereCoordinates: DotCoordinates[] = [];
  let sphere: Mesh[] = [];

  const semicircleCircumference = Math.PI;
  const step = semicircleCircumference / dotsOnTheEquator;
  console.log('step', step);
  const endPoint = semicircleCircumference + step;

  for (let yIndex = 0; yIndex < endPoint; yIndex += step) {
    console.log('Itertion', yIndex);
    console.log('cos',  Math.cos(yIndex));
    //let y: number, x: number, z: number;
    const yCoordinate = Math.cos(yIndex) * sphereRadius;

    let dotPositionsOnAPlane: DotCoordinates[];

    const circleGeneratorParameters: CircleGeneratorProps = {
      yIndex: yIndex,
      yCoordinate: yCoordinate,
      sphereRadius: sphereRadius,
      dotsOnTheEquator: dotsOnTheEquator
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
