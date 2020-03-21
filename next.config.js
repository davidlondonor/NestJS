module.export = {
  exportTrailingslash: true,
  exportPathMap: function() {
    const path = {
      "/": { page: "/" }
    };
    return path;
  }
};
