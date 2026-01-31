const { PurgeCSS } = require("purgecss");

(async () => {
  const result = await new PurgeCSS().purge({
    content: [
      "./index.html",
      "./**/*.js"
    ],
    css: ["./style.nocomments.css"],
    rejected: true, 
  });

  console.log("===== UNUSED SELECTORS =====");
  console.log(result[0].rejected);
})();
