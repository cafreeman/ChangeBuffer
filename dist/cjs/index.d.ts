export interface Buffer<T> {
    buffer: T;
    isClean: () => boolean;
    isDirty: () => boolean;
    set: (path: string, value: any) => void;
    get: (path: string) => any;
    rollback: () => T;
    apply: () => T;
}
export interface Indexable {
    [prop: string]: any;
    [prop: number]: any;
}
export declare class ChangeBuffer<Indexable> implements Buffer<Indexable> {
    private object;
    buffer: any;
    constructor(object: any);
    isClean(): boolean;
    isDirty(): boolean;
    rollback(): any;
    get(path: string): any;
    set(path: string, newValue: any): void;
    apply(): any;
}
