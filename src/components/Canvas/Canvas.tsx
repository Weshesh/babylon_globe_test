import React from "react";
import { FreeCamera, Vector3, HemisphericLight, Mesh, ArcRotateCamera } from "@babylonjs/core";
import SceneComponent from "./SceneComponent"; // uses above component in same directory
import SphereGenerator from './SphereGenerator'; // if you install 'babylonjs-hook' NPM.

function Canvas() {
  let circles: Mesh[];

  const onSceneReady = (scene: any) => {
    // This creates and positions a free camera (non-mesh)

    let camera = new ArcRotateCamera("camera", 0, 0, 6, new Vector3(0, 5, -10), scene)
    // This targets the camera to scene origin
    camera.setTarget(Vector3.Zero());

    const canvas = scene.getEngine().getRenderingCanvas();

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    const sphereOptions = {
      sphereRadius: 4,
      parent: scene,
      spacing: .5
    }

    circles = SphereGenerator(sphereOptions);
    //console.log(circles);
    //MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);
  };

  const onRender = (scene: any) => {
    if (circles !== undefined) {
      //var deltaTimeInMillis = scene.getEngine().getDeltaTime();

      //const rpm = 10;
      // sphere.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
    }
  };
  return (
    <SceneComponent
      antialias
      adaptToDeviceRatio
      onSceneReady={onSceneReady}
      onRender={onRender}
      id="my-canvas"
    />
  )
}

export default Canvas;
