const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
module.exports = function(eleventyConfig) {
  
// passthrough
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

// this is needed to automatically handle prefixing
// gh-pages hosting needs prefixing.
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  };
  

