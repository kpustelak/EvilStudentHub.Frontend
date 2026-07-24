import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.168.0/build/three.module.js";

const LABELS = [
  "Notes",
  "Math",
  "Exam",
  "Lab",
  "PDF",
  "CS",
  "Deadline",
  "Tutorial",
  "Coding",
  "Wake up",
  "Finals",
  "Uni",
];

const DOT_COLOR = 0x0ed72f;
const LABEL_FONT_SIZE = 32;
const LABEL_HEIGHT = 0.16;
const LABEL_MIN_ANGLE = 0.65;

function randomSpherePoint(radius) {
  const u = Math.random();
  const v = Math.random();
  const theta = 2 * Math.PI * u;
  const phi = Math.acos(2 * v - 1);

  return new THREE.Vector3(
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

function fibonacciSpherePoints(count, radius) {
  const points = [];
  const goldenRatio = (1 + Math.sqrt(5)) / 2;

  for (let i = 0; i < count; i++) {
    const t = (i + 0.5) / count;
    const inclination = Math.acos(1 - 2 * t);
    const azimuth = (2 * Math.PI * i) / goldenRatio;

    points.push(
      new THREE.Vector3(
        radius * Math.sin(inclination) * Math.cos(azimuth),
        radius * Math.cos(inclination),
        radius * Math.sin(inclination) * Math.sin(azimuth),
      ),
    );
  }

  return points;
}

function isTooCloseToLabels(point, labelDirections, minDot) {
  const direction = point.clone().normalize();

  for (const labelDirection of labelDirections) {
    if (direction.dot(labelDirection) > minDot) {
      return true;
    }
  }

  return false;
}

function createTextSprite(text) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const fontSize = LABEL_FONT_SIZE;
  const padding = 16;

  context.font = `600 ${fontSize}px Inter, system-ui, sans-serif`;
  const textWidth = context.measureText(text).width;

  canvas.width = Math.ceil(textWidth + padding * 2);
  canvas.height = fontSize + padding;

  context.font = `600 ${fontSize}px Inter, system-ui, sans-serif`;
  context.fillStyle = "rgba(0, 0, 0, 0.35)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#0ed72f";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(text, canvas.width / 2, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: true,
  });

  const sprite = new THREE.Sprite(material);
  const aspect = canvas.width / canvas.height;
  sprite.scale.set(LABEL_HEIGHT * aspect, LABEL_HEIGHT, 1);

  return sprite;
}

function initSphere(root) {
  if (!root || root.dataset.wired === "true") {
    return;
  }

  const canvas = root.querySelector(".dot-sphere__canvas");
  if (!canvas) {
    return;
  }

  root.dataset.wired = "true";

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.z = 4;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const sphere = new THREE.Group();
  const radius = 1.6;
  const count = 900;

  const labelPositions = fibonacciSpherePoints(LABELS.length, radius * 1.02);
  const labelDirections = labelPositions.map((position) => position.clone().normalize());
  const minDotDot = Math.cos(LABEL_MIN_ANGLE * 0.85);

  for (let i = 0; i < LABELS.length; i++) {
    const sprite = createTextSprite(LABELS[i]);
    sprite.position.copy(labelPositions[i]);
    sphere.add(sprite);
  }

  const dotPositions = [];

  for (let i = 0; i < count; i++) {
    let point = null;
    let attempts = 0;

    while (attempts < 12) {
      const candidate = randomSpherePoint(radius);
      if (!isTooCloseToLabels(candidate, labelDirections, minDotDot)) {
        point = candidate;
        break;
      }
      attempts++;
    }

    if (!point) {
      point = randomSpherePoint(radius);
    }

    dotPositions.push(point.x, point.y, point.z);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(dotPositions, 3));

  const material = new THREE.PointsMaterial({
    color: DOT_COLOR,
    size: 0.035,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.95,
  });

  sphere.add(new THREE.Points(geometry, material));
  scene.add(sphere);

  const resize = () => {
    const rect = root.getBoundingClientRect();
    const width = Math.max(1, Math.round(rect.width));
    const height = Math.max(1, Math.round(rect.height));

    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  new ResizeObserver(resize).observe(root);
  resize();

  let targetX = 0;
  let targetY = 0;
  let rotX = 0;
  let rotY = 0;

  root.addEventListener(
    "mousemove",
    (event) => {
      const rect = root.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
      targetY = x * 0.9;
      targetX = -y * 0.6;
    },
    { passive: true },
  );

  const tick = () => {
    rotX += (targetX - rotX) * 0.06;
    rotY += (targetY - rotY) * 0.06;

    sphere.rotation.x = rotX + performance.now() * 0.0002;
    sphere.rotation.y = rotY + performance.now() * 0.00025;

    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  };

  tick();
}

function initAll() {
  document.querySelectorAll(".dot-sphere").forEach(initSphere);
}

initAll();
document.addEventListener("DOMContentLoaded", initAll);
window.addEventListener("load", initAll);
setTimeout(initAll, 50);
setTimeout(initAll, 250);
