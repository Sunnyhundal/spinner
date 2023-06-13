let timer = 1000
const animationArray = ['\r|', '\r/', '\r-', '\r\\', '\r/', '\r-', '\r\\', '\r|']
for (const char of animationArray) {
  setTimeout(() => {
  process.stdout.write(char);
}, (timer += 200 ))
}
setTimeout(() => {
  process.stdout.write("\n")
}, timer);