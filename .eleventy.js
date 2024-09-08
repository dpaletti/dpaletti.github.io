
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
module.exports = function(eleventyConfig) {
  
// passthrough
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.setServerPassthroughCopyBehavior("passthrough");


// format date to YYYY-mm-dd
    eleventyConfig.addFilter("YearMonthDay", (dateString) => {
        dateObj = new Date(dateString);
        return dateObj.toJSON().slice(0, 10);
    });

// Add prefix to make deployment work
// gh-pages needs prefix for working
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

	return {
		pathPrefix: "/daniele-paletti/",
	};

  };
  

