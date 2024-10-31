function switchboardFactory() {
  const switchboard = new Map();
  switchboard.set("alreadyFailed", false);

  return {
    get(k) {
      return switchboard.get(k);
    },
    set(k, v) {
      switchboard.set(k, v);
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

// Exporting ASB as a constant object
module.exports = {ASB: switchboardFactory()}