import { MeshBuilder, Mesh } from "@babylonjs/core";

interface Dot {
  x: number,
  y: number,
  z: number,
  parent: any
}

const CreateTile = (attributes: Dot) => {
  const { x, y, z, parent } = attributes;

  const dotId = 'sphere' + x + y + z;
  const options =  {
    diameter: .05,
  }

  let dot: Mesh = MeshBuilder.CreateCylinder(dotId, options, parent);

  dot.position.x = x;
  dot.position.y = y;
  dot.position.z = z;

  /*
  dot.rotation
    dot.rotation
  */
  return dot;
}

export default CreateTile;
