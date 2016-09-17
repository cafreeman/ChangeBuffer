import { set, get } from 'lodash/fp';
export class ChangeBuffer {
    constructor(object) {
        this.object = this.buffer = object;
    }
    isClean() {
        return this.object === this.buffer;
    }
    isDirty() {
        return this.object !== this.buffer;
    }
    rollback() {
        this.buffer = this.object;
        return this.buffer;
    }
    get(path) {
        return get(path, this.buffer);
    }
    set(path, newValue) {
        this.buffer = set(path, newValue, this.buffer);
    }
    apply() {
        return this.buffer;
    }
}
//# sourceMappingURL=index.js.map