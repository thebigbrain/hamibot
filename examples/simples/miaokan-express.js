auto.waitFor();

app.launchApp("秒看极速版");

function unlock() {
  toast("点击解锁奖励");
  press(600, 1700, 100);
  press(600, 1400, 100);
}

function start() {
  unlock();

  setTimeout(() => {
    start();
  }, 60 * 1000);
}

start();
