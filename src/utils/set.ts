import { transformDotPath } from './transform-dot-path';

export function set(path: string, newValue: any, data: Indexable): Indexable {
  if (typeof path === "string") {
    let pathArray = transformDotPath(path);

  }
  let newObj = Object.assign({}, data);
  newObj[path] = newValue;
  return newObj;
}
