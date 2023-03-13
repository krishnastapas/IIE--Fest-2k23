interface store {
  getItem(key: string, default_value: any): any;
  setItem(key: string, value: any): void;
  removeItem(key: string): void;
  clear(key: string): void;
}
export function makeStorage(store: store) {
  return Object.freeze({ getItem, setItem });
  function getItem(key: string, default_value: any): any {
    return store.getItem(key, default_value);
  }
  function setItem(key: string, value: any): void {
    store.setItem(key, value);
  }
  function removeItem(key: string): void {}
  function clear(key: string): void {}
}
