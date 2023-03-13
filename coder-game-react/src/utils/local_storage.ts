export function getItem(key: string, default_value: any = "") {
  let value = window.localStorage.getItem(key) ?? default_value;
  return JSON.parse(value);
}

export function setItem(key: string, value: any) {
  value = JSON.stringify(value);
  window.localStorage.setItem(key, value);
}

export function removeItem(key: string) {
  window.localStorage.removeItem(key);
}

export function clear(key: string) {
  window.localStorage.clear();
}
