/**
 * Created by Igor on 02.09.2017.
 */
var scene = (function () {
    "use strict";

    var scene = new THREE.Scene();
    var camera,sphere;
    var renderer = new THREE.WebGLRenderer({ alpha: true });

    function InitScene() {
        renderer.setSize(window.innerWidth,window.innerHeight);
        document.getElementById('container').appendChild(renderer.domElement);
        camera = new THREE.PerspectiveCamera(35,window.innerWidth/innerHeight,1,1000);
        camera.position.z=13;

        scene.add(camera);
        sphere = new  THREE.Mesh(new THREE.SphereGeometry(3, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2),
            new THREE.MeshBasicMaterial({ transparent: false, map: THREE.ImageUtils.loadTexture('./texture/earth.jpg')}));
        scene.add(sphere);

        render();
    }

    function render() {
        sphere.rotation.y += 0.01;
        renderer.render(scene,camera);
        requestAnimationFrame(render);
    }
    return {
        initScene: InitScene
    }
})();