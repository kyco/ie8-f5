// ... your code that runs before foundation initiation


// Fix for foundation stylesheets being picked up as "null" or "not an object",
// implementation from here: http://foundation.zurb.com/forum/posts/3189-foundation-5-orbit-slider-ie8-issue
(function($) {
	if (!Foundation.stylesheet) {
		Foundation._style_element = $('<style></style>').appendTo('head')[0];
		Foundation.stylesheet     = Foundation._style_element.styleSheet;
		
		if (Foundation.stylesheet) {
			Foundation.stylesheet.cssRules = {
				length: 0
			};

			Foundation.stylesheet.insertRule = function(rule, index) {
				var media, mediaMatch, mediaRegex, namespace, ruleMatch, ruleRegex;
				mediaRegex = /^\s*@media\s*(.*?)\s*\{\s*(.*?)\s*\}\s*$/;
				mediaMatch = mediaRegex.exec(rule);
				media      = '';

				if (mediaMatch) {
					media = '@media ' + mediaMatch[1] + ' ';
					rule  = mediaMatch[2];
				}

				ruleRegex = /^\s*(.*?)\s*\{\s*(.*?)\s*\}\s*$/;
				ruleMatch = ruleRegex.exec(rule);
				namespace = '' + media + ruleMatch[1];
				rule      = ruleMatch[2];

				return this.addRule(namespace, rule);
			};
		} else if (window.console) {
			console.log('Could not fix Foundation CSS rules...');
		}
	}
})(jQuery);


// Safely initiate foundation now
$(document).foundation();


// ... the rest of your code
