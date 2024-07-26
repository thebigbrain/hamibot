auto.waitFor();

function nextVideo() {
  toast("下一个西瓜");
  swipe(300, 1800, 300, 500, 200);
}

function generateRand() {
  return 1 + Math.random() * 10;
}

function main() {
  nextVideo();
  setTimeout(main, 1000 * generateRand());
}

main();
