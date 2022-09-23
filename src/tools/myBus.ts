class MyBus {
  // 总对象
  events: { [key: string]: any } = {};

  on(name: string, fn: Function) {
    this.events[name] = fn;
  }

  emit(name: string) {
    if (!this.events[name]) throw Error(`${name}事件并没有挂载成功!`);
    const fn = this.events[name];
    const params = Array.prototype.slice.apply(arguments).slice(1);
    fn(...params);
  }

  off(name: string) {
    this.events[name] ? delete this.events[name] : null;
  }
}
