// https://coco-factory.jp/ugokuweb/move02/5-8/
// https://github.com/matteobruni/tsparticles

export default function throwConfetti() {
  // @ts-ignore
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
}
