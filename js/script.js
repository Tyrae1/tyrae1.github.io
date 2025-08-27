'use strict';
function createMiniBus() {
  let handlers = []; // просто масив функцій
function logDiff(tag, before, after) {
  const {added, removed} = diffHandlers(before, after);
  console.log(`${tag} +[${added.map(labelOf).join(', ')}] -[${removed.map(labelOf).join(', ')}] now=[${after.map(labelOf).join(', ')}]`);
}
  function on(handler) {
    const before = handlers.slice();
  handlers.push(handler);
  logDiff('on', before, handlers);
  }

  function emit(value) {
    setTimeout(() => {
      // копіюємо, щоб не зламалась ітерація при зміні масиву
      const snapshot = handlers.slice();
      for (const h of snapshot) {
        h(value);
      }
    }, 0);
  }
  function off(handler) {
  const before = handlers.slice();
  handlers = handlers.filter(h => h !== handler);
  logDiff('off', before, handlers);
}
  return { on, off, emit };
}
const bus = createMiniBus();
const h1 = (x) => { console.log("handler 1:", x); bus.off(h1); };
bus.on(h1);
bus.emit("A");
bus.emit("B");
console.log("before emit");
bus.emit("Hello!");
console.log("after emit");
bus.off(h1);
console.log("after off");
