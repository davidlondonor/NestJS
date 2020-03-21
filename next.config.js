module.export = {
  exportTrailingslash: true,
  exportPathMap: function() {
    const path = {
      "/": { page: "/" },
      "/blog": { page: "/blog" }, //En minuscula como la page
      "/contact": { page: "/Contact" } // En mayuscula como la page
    };
    return path;
  }
};
