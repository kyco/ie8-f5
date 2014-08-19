Getting Foundation 5 to work in IE8
===================================

Over the past days I had to get a site to work in IE8 with Foundation 5.
Having gone through lots of frustration and hours of reading "solutions"
on forums I've decided to compile a template of things I did to solve 
this problem.

Hopefully it will ease your pain of getting your own site to work in IE8 
with Foundation 5. It's not a fix-all solution, but it will get you there
to roughly 80-90%.

foundation-ie8-template.html
----------------------------

<pre>
<code>&lt;!DOCTYPE html&gt;
&lt;!--[if lt IE 9]&gt; &lt;html class="no-js lt-ie10 lt-ie9" xmlns:fb="http://ogp.me/ns/fb#"&gt; &lt;![endif]--&gt;
&lt;!--[if IE 9]&gt; &lt;html class="no-js lt-ie10" xmlns:fb="http://ogp.me/ns/fb#"&gt; &lt;![endif]--&gt;
&lt;!--[if gt IE 9]&gt;&lt;!--&gt; &lt;html class="no-js" xmlns:fb="http://ogp.me/ns/fb#"&gt; &lt;!--&lt;![endif]--&gt;
&lt;head&gt;
    // ... charset, title, relevant meta tags etc.

    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"&gt;
    &lt;meta name="viewport" content="width=device-width, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0, user-scalable=no"&gt;

    // Your main stylesheet, this contains all your styles.
    &lt;link rel="stylesheet" href="css/style.css"&gt;

    &lt;!--[if lt IE 9]&gt;
        // Your IE8 stylesheet, see ie8-grid-support.css further below which
        // needs to be included in the ie8.css before you write any custom
        // IE8 rules (i.e. at the top of your ie8.css file). You might have
        // to change the ".row" width to match your project.
        &lt;link rel="stylesheet" href="css/ie8.css"&gt;

        // Your first IE8 shim set, takes care of CSS, media queries and
        // ES5 functions and methods support, see further below what's
        // included in this file.
        &lt;script src="js/ie8-head.js"&gt;&lt;/script&gt;
    &lt;![endif]--&gt;

    // ... favicon, modernizr, GA code etc.
&lt;/head&gt;
&lt;body&gt;
    // ... your page markup

    // Your site's compressed js file, it needs some amendments. Take a look
    // further below for specifics. It includes a Foundation shim before the
    // foundation initiate function.
    &lt;script src="js/production.js"&gt;&lt;/script&gt;

    // ... possibly some more markup and/or scripts

    // The following must be the absolute last thing before the closing body tag.
    &lt;!--[if lt IE 9]&gt;
        &lt;div class="browsehappy"&gt;
            &lt;p&gt;
                You are using an &lt;strong&gt;outdated&lt;/strong&gt; browser.
                Please &lt;a href="//browsehappy.com/"&gt;upgrade your browser&lt;/a&gt;
                to improve your experience.
            &lt;/p&gt;
            &lt;span class="close"&gt;X&lt;/span&gt;
        &lt;/div&gt;

        // The last shim to do REM conversions.
        &lt;script src="js/ie8.js"&gt;&lt;/script&gt;
    &lt;![endif]--&gt;
&lt;/body&gt;
&lt;/html&gt;</code>
</pre>


style.css
---------

<pre>
<code>// ... your awesome styles for the entire site</code>
</pre>


ie8.css
-------

<pre>
<code>// Import grid support for IE8, this is SASS syntax for the
// sake of not having to copy the file contents here.
@import "ie8-12col-grid-support";

// Custom styling for IE8
.lt-ie9 {
    .show-for-medium-down,
    .show-for-medium,
    .show-for-small,
    .show-on-android {
        display: none !important;
    }

    .show-for-large-up,
    .hide-for-medium-down,
    .hide-on-android {
        display: block !important;
    }
}</code>
</pre>


ie8-grid-support.css
--------------------

<pre>
<code>.small-1,  .row .small-1  { width: 8.33333%;  }
.small-2,  .row .small-2  { width: 16.66667%; }
.small-3,  .row .small-3  { width: 25%;       }
.small-4,  .row .small-4  { width: 33.33333%; }
.small-5,  .row .small-5  { width: 41.66667%; }
.small-6,  .row .small-6  { width: 50%;       }
.small-7,  .row .small-7  { width: 58.33333%; }
.small-8,  .row .small-8  { width: 66.66667%; }
.small-9,  .row .small-9  { width: 75%;       }
.small-10, .row .small-10 { width: 83.33333%; }
.small-11, .row .small-11 { width: 91.66667%; }
.small-12, .row .small-12 { width: 100%;      }

.medium-1,  .row .medium-1  { width: 8.33333%;  }
.medium-2,  .row .medium-2  { width: 16.66667%; }
.medium-3,  .row .medium-3  { width: 25%;       }
.medium-4,  .row .medium-4  { width: 33.33333%; }
.medium-5,  .row .medium-5  { width: 41.66667%; }
.medium-6,  .row .medium-6  { width: 50%;       }
.medium-7,  .row .medium-7  { width: 58.33333%; }
.medium-8,  .row .medium-8  { width: 66.66667%; }
.medium-9,  .row .medium-9  { width: 75%;       }
.medium-10, .row .medium-10 { width: 83.33333%; }
.medium-11, .row .medium-11 { width: 91.66667%; }
.medium-12, .row .medium-12 { width: 100%;      }

.large-1,  .row .large-1  { width: 8.33333%;  }
.large-2,  .row .large-2  { width: 16.66667%; }
.large-3,  .row .large-3  { width: 25%;       }
.large-4,  .row .large-4  { width: 33.33333%; }
.large-5,  .row .large-5  { width: 41.66667%; }
.large-6,  .row .large-6  { width: 50%;       }
.large-7,  .row .large-7  { width: 58.33333%; }
.large-8,  .row .large-8  { width: 66.66667%; }
.large-9,  .row .large-9  { width: 75%;       }
.large-10, .row .large-10 { width: 83.33333%; }
.large-11, .row .large-11 { width: 91.66667%; }
.large-12, .row .large-12 { width: 100%;      }

.row .small-offset-1  { margin-left: 8.33333%;  }
.row .small-offset-2  { margin-left: 16.66667%; }
.row .small-offset-3  { margin-left: 25%;       }
.row .small-offset-4  { margin-left: 33.33333%; }
.row .small-offset-5  { margin-left: 41.66667%; }
.row .small-offset-6  { margin-left: 50%;       }
.row .small-offset-7  { margin-left: 58.33333%; }
.row .small-offset-8  { margin-left: 66.66667%; }
.row .small-offset-9  { margin-left: 75%;       }
.row .small-offset-10 { margin-left: 83.33333%; }
.row .small-offset-11 { margin-left: 91.66667%; }
.row .small-offset-12 { margin-left: 100%;      }

.row .medium-offset-1  { margin-left: 8.33333%;  }
.row .medium-offset-2  { margin-left: 16.66667%; }
.row .medium-offset-3  { margin-left: 25%;       }
.row .medium-offset-4  { margin-left: 33.33333%; }
.row .medium-offset-5  { margin-left: 41.66667%; }
.row .medium-offset-6  { margin-left: 50%;       }
.row .medium-offset-7  { margin-left: 58.33333%; }
.row .medium-offset-8  { margin-left: 66.66667%; }
.row .medium-offset-9  { margin-left: 75%;       }
.row .medium-offset-10 { margin-left: 83.33333%; }
.row .medium-offset-11 { margin-left: 91.66667%; }
.row .medium-offset-12 { margin-left: 100%;      }

.row .large-offset-1  { margin-left: 8.33333%;  }
.row .large-offset-2  { margin-left: 16.66667%; }
.row .large-offset-3  { margin-left: 25%;       }
.row .large-offset-4  { margin-left: 33.33333%; }
.row .large-offset-5  { margin-left: 41.66667%; }
.row .large-offset-6  { margin-left: 50%;       }
.row .large-offset-7  { margin-left: 58.33333%; }
.row .large-offset-8  { margin-left: 66.66667%; }
.row .large-offset-9  { margin-left: 75%;       }
.row .large-offset-10 { margin-left: 83.33333%; }
.row .large-offset-11 { margin-left: 91.66667%; }
.row .large-offset-12 { margin-left: 100%;      }

.push-1  { position: relative; right: auto; left: 8.33333%;  }
.push-2  { position: relative; right: auto; left: 16.66667%; }
.push-3  { position: relative; right: auto; left: 25%;       }
.push-4  { position: relative; right: auto; left: 33.33333%; }
.push-5  { position: relative; right: auto; left: 41.66667%; }
.push-6  { position: relative; right: auto; left: 50%;       }
.push-7  { position: relative; right: auto; left: 58.33333%; }
.push-8  { position: relative; right: auto; left: 66.66667%; }
.push-9  { position: relative; right: auto; left: 75%;       }
.push-10 { position: relative; right: auto; left: 83.33333%; }
.push-11 { position: relative; right: auto; left: 91.66667%; }
.push-12 { position: relative; right: auto; left: 100%;      }

.pull-1  { position: relative; left: auto; right: 8.33333%;  }
.pull-2  { position: relative; left: auto; right: 16.66667%; }
.pull-3  { position: relative; left: auto; right: 25%;       }
.pull-4  { position: relative; left: auto; right: 33.33333%; }
.pull-5  { position: relative; left: auto; right: 41.66667%; }
.pull-6  { position: relative; left: auto; right: 50%;       }
.pull-7  { position: relative; left: auto; right: 58.33333%; }
.pull-8  { position: relative; left: auto; right: 66.66667%; }
.pull-9  { position: relative; left: auto; right: 75%;       }
.pull-10 { position: relative; left: auto; right: 83.33333%; }
.pull-11 { position: relative; left: auto; right: 91.66667%; }
.pull-12 { position: relative; left: auto; right: 100%;      }

.column.small-centered,
.columns.small-centered,
.column.medium-centered,
.columns.medium-centered,
.column.large-centered,
.columns.large-centered { margin-left: auto; margin-right: auto; float: none !important; }

.column.small-uncentered,
.columns.small-uncentered,
.column.medium-uncentered,
.columns.medium-uncentered,
.column.large-uncentered,
.columns.large-uncentered { margin-left: 0; margin-right: 0; float: left !important; }

.row { width: 1000px; }</code>
</pre>


ie8-head.js
-----------

<pre>
<code>/*
**  This script must be loaded after all CSS and should ideally be loaded in the HEAD.
**
**  This file contains the following 5 scripts, in the order provided:
**      1.  cdnjs.cloudflare.com/ajax/libs/html5shiv/3.6.2/html5shiv.js
**      2.  s3.amazonaws.com/nwapi/nwmatcher/nwmatcher-1.2.5-min.js
**      3.  html5base.googlecode.com/svn-history/r38/trunk/js/selectivizr-1.0.3b.js
**      4.  cdnjs.cloudflare.com/ajax/libs/respond.js/1.1.0/respond.min.js
**      5.  github.com/es-shims/es5-shim - shim.js
*/</code>
</pre>


production.js
-------------

<pre>
<code>// ... your code that runs before foundation initiation


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
</code>
</pre>


ie8.js
------

<pre>
<code>/*
**  This script should be the last script on the page.
**
**  This file contains some custom code and a shim:
**      1.  Custom code
**      2.  REM shim
*/</code>
</pre>


Support
-------

For bugs or improvements please use the [issues tab](https://github.com/kyco/ie8-f5/issues)
or email [support@kycosoftware.com](mailto:support@kycosoftware.com).