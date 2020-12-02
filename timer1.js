//process.stdout.write('\x07'); didn't work
const times = process.argv.slice(2);
let alarms = [];

for (let time of times) {
  if (parseInt(time) && parseInt(time) > 0) {
    alarms.push(time);
  }
}
for (let alarm of alarms) {
  setTimeout(() => process.stdout.write('beep'), alarm * 1000);
}

setTimeout(() => {
  process.stdout.write("\n");
  // or console.log(" ")
}, 5000);