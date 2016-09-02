interface Indexable {
  [prop: string]: any
  [prop: number]: any
};

const transformDotPath = (path: string): Array<string> => path.split('.');

export function get(path: string | number, data: Indexable): any {
  if (typeof path === "string") {
    let pathArray = transformDotPath(path);
    return pathArray.reduce((acc, elem) => {
      return acc ? acc[elem] : undefined;
    }, data);
  } else {
    return data[path];
  }
};
