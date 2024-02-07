module.exports = function(eleventyConfig) {
  
    eleventyConfig.addPassthroughCopy("css");
  
    eleventyConfig.addPassthroughCopy("assets");
  };
  
// this is needed to automatically handle prefixing
// gh-pages hosting needs prefixing.
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
};
