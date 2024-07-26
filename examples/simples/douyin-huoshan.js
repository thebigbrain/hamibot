auto.waitFor();

function nextVideo() {
  toast("进入下一个火山");
  swipe(300, 1800, 300, 500, 200);
}

function generateRand() {
  return 1 + Math.random() * 30;
}

function main() {
  nextVideo();
  setTimeout(main, 1000 * generateRand());
}

main();
