'use strict';
function createBus() {
  const topics = Object.create(null); // { [topic]: Set<Function> }

  function on(topic, handler) {
    // TODO: 1) Ініціалізувати контейнер підписників для topic
    //       2) Додати handler
    //       3) Повернути функцію відписки
    const set = topics[topic] || (topics[topic] = new Set());
    set.add(handler);
    let active = true;
    return function unsubscribe() {
      if (!active) return;
      active = false;

      const s = topics[topic];
      if (!s) return;
      s.delete(handler);
      if (s.size === 0) delete topics[topic];
    };
  }

  function off(topic, handler) {
    // TODO: 1) Прибрати handler із теми
    //       2) Видалити тему, якщо підписників не залишилось
    const set = topics[topic];
    if (!set) return;
    set.delete(handler);
    if (set.size === 0) {
      delete topics[topic];
    }
  }

  function emit(topic, payload, delay = 0) {
    // TODO: 1) Використати setTimeout з delay
    //       2) Усередині таймера викликати всіх підписників теми з payload
    //       3) Акуратно обійти ітерацію, якщо під час виклику відбудеться off()
  setTimeout(()=> {
    const set = topics[topic];
    if (!set || set.size === 0) return;

    const snapshot = [...set];
    for (const handler of snapshot) {
      handler(payload);
    }
  }, delay);
  }
  return { on, off, emit };
}

// Bus Check:
// 1 Basic Async
const bus = createBus();
bus.on('tick', (x)=> console.log('tick', x));
bus.emit('tick', {step: 1}, 0);
console.log('after schedule');
// 2 Event chain
bus.on('tick', (x)=> {
  console.log('handler step:', x.step);
  if (x.step === 1) {
    bus.emit('tick', {step: 2}, 0);
  }
});
bus.emit('tick', {step: 1}, 0);
// 3 Unsubscribtion between events
const off = bus.on('news', (x) => {
  console.log('news', x);
  off();
});
bus.emit('news', 'A', 0);
bus.emit('news', 'B', 0);
// 4 Subscribers number and call waranty
bus.on('ev', (v) => console.log('h1', v));
bus.on('ev', (v) => console.log('h2', v));
bus.on('ev', (v) => console.log('h3', v));
bus.emit('ev', 42, 0);