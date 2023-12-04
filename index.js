const switchboardFactory = function () {
  const switchboard = new Map();
  switchboard.set('alreadyFailed', false);

  return {
    get: function (k) {
      return switchboard.get(k);
    },
    set: function (k, v) {
      switchboard.set(k, v);
    },
  };
};

module.exports = { SBF: switchboardFactory() };
