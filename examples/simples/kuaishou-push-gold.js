auto.waitFor();

function closeCollectDialog() {
  // toast("开心收下");
  // press(600, 2500, 100);
  // press(600, 2000, 100);

  // press(580, 1800, 100);
  press(580, 1600, 100);
  // press(580, 1500, 100);
}

function collect() {
  var clock = selector().textStartsWith("widget-clock");
  if (clock.exists()) {
    clock.findOne().click();

    setTimeout(() => {
      closeCollectDialog();
    }, 1500);

    setTimeout(() => {
      collect();
    }, 1000 * 5);
  }
}

collect();
