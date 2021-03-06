var SkyDomeSample = /** @class */ (function () {
    function SkyDomeSample() {
        Laya3D.init(0, 0);
        Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
        Laya.Stat.show();
        var scene = Laya.stage.addChild(new Laya.Scene3D());
        var camera = scene.addChild(new Laya.Camera(0, 0.1, 100));
        camera.transform.rotate(new Laya.Vector3(10, 0, 0), true, false);
        camera.addComponent(CameraMoveScript);
        camera.clearFlag = Laya.BaseCamera.CLEARFLAG_SKY;
        //天空盒
        Laya.BaseMaterial.load("../../res/threeDimen/skyBox/DawnDusk/SkyBox.lmat", Laya.Handler.create(null, function (mat) {
            camera.skyboxMaterial = mat;
            var exposureNumber = 0;
            Laya.timer.frameLoop(1, this, function () {
                mat.exposure = Math.sin(exposureNumber += 0.01) + 1;
            });
        }));
    }
    return SkyDomeSample;
}());
new SkyDomeSample;
