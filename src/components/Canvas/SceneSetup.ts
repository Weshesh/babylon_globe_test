import {
    Vector3,
    PointLight,
    Mesh,
    ArcRotateCamera,
    Color3,
    Scene,
    StandardMaterial,
    CubeTexture,
    Texture
} from "@babylonjs/core";
import bg from './../../assets/bg.jpg';
import studio from './../../assets/studio.jpg';


const SceneSetup = (scene: Scene) => {
    setUpCamera(scene);
    setUpBackground(scene);
    setUpLighting(scene);
}

const setUpBackground = (scene: Scene)  => {
    var skybox = Mesh.CreateBox("skyBox", 100.0, scene);
    var skyboxMaterial = new StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.disableLighting = true;
    skybox.material = skyboxMaterial;
    skybox.infiniteDistance = true;
    skyboxMaterial.disableLighting = true;
    skyboxMaterial.reflectionTexture = new CubeTexture(bg, scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE;
    skyboxMaterial.reflectionTexture = new CubeTexture(studio, scene);
}

const setUpCamera = (scene: Scene)  => {
    let camera = new ArcRotateCamera("camera", 0, 0, 6, new Vector3(0, 5, -10), scene)
    camera.setTarget(Vector3.Zero());

    const canvas = scene.getEngine().getRenderingCanvas();
    camera.attachControl(canvas, true);
}

const setUpLighting = (scene: Scene)  => {
    var light = new PointLight("light", new Vector3(0, 1, 10), scene);
    var backlight = new PointLight("backlight", new Vector3(0, -1, -10), scene);

    const lightColor = new Color3(74, 51, 245);
    const backlightColor = new Color3(239, 213, 245);

    light.intensity = 0.15;
    light.diffuse = lightColor;

    backlight.intensity = 0.15;
    backlight.diffuse = backlightColor;
}

export default SceneSetup;
