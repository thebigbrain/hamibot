auto.waitFor();

function nextVideo() {
  swipe(300, 2000, 300, 500, 200);
}

function generateRand() {
  return 1 + Math.random() * 10;
}

function main() {
  nextVideo();
  setTimeout(main, 1000 * generateRand());
}

main();
