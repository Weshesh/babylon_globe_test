import { MeshBuilder, Mesh } from "@babylonjs/core";

interface Dot {
  x: number,
  y: number,
  z: number,
  parent: any
}

const CreateDot = (attributes: Dot) => {
  const { x, y, z, parent } = attributes;

  const dotId = 'sphere' + x + y + z;
  const options =  {
    diameter: .05,
  }

  let dot: Mesh = MeshBuilder.CreateSphere(dotId, options, parent);

  dot.position.x = x;
  dot.position.y = y;
  dot.position.z = z;

  return dot;
}

export default CreateDot;
