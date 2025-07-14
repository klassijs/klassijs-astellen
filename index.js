function switchboardFactory() {
  const switchboard = new Map();
  switchboard.set("alreadyFailed", false);

  return {
    get(k) {
      return switchboard.get(k);
    },
    set(k, v) {
      if (k === undefined || k === null) {
        throw new Error('Key cannot be undefined or null');
      }
      switchboard.set(k, v);
    },
    has(k) {
      return switchboard.has(k);
    },
    delete(k) {
      return switchboard.delete(k);
    },
    print() {
      console.log(" --->   Switchboard contents:");
      for (const [key, value] of switchboard.entries()) {
        console.log(`  └──>  "${key}": "${value}"`);
      }
    },
    reset() {
      switchboard.clear();
    }
  };
}

module.exports = {astellen: switchboardFactory()}
