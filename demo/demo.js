require('when/monitor/console');

var Zephyros = require('./../src/zephyros');

var z = new Zephyros({
  port: 1235,
  host: 'localhost'
});

z.bind('t', ['Cmd', 'Shift']).thenClipboardContents().then(function(clip){
  console.log("clip: ", clip);
});

z.bind('r', ['Cmd', 'Shift']).thenFocusedWindow().then(function(window){
  console.log("window: ", window);
});

z.bind('e', ['Cmd', 'Shift'])
.thenFocusedWindow()
.thenWindowFrame()
.then(function(frame){
  console.log("frame: ", frame);
});
