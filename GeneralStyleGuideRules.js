/**
 * @author Jesse Pinuelas
 * @desc General style guide for frontend development
 * @overview
 *
 * <p><i>During the life of an application and or website, it is important for everyone involved in development of the project to follow the practices and conventions outlined in this document. Please follow the standards outlined in this style guide while coding, as it will assist in standardization and continuity, as well as future maintenance.</i></p>
 *
 * <p>Object literal notation and methods are preferred as it is faster to process, better-performing and overall easier to maintain. Also please adapt any OOJS (object oriented javascript) patterns that you see fit for the task at hand, always following industry best-practices.</p>
 *
 * <p>“$” your jQuery objects: If any variable and or object you create is utilizing jQuery to create those objects, make sure you prepend the “$” sign in your variable naming convention.</p>
 *
 * <p>Naming in general, use functionNamesLikeThis, variableNamesLikeThis, ClassNamesLikeThis, EnumNamesLikeThis, methodNamesLikeThis, CONSTANT_VALUES_LIKE_THIS</p>
 *
 * <p>Use parentheses sparingly and only when required by the syntax and semantics. Never use parentheses for unary operators such as <span class="unary-operators">delete</span>, <span class="unary-operators">typeof</span> and <span class="unary-operators">void</span> or after keywords such as <span class="unary-operators">return</span> and <span class="unary-operators">throw</span>, as well as others (<span class="unary-operators">case</span>, <span class="unary-operators">in</span> or <span class="unary-operators">new</span>).</p>
 *
 * <p>Do not declare functions within blocks.
 * if(someCondition){
 *      function someFunctionName() {
 *          some code here
 *      }
 * }
 * </p>
 *
 * <p>No inline scripts, unless you have to instantiate/initiate a javascript library or plugin, etc. Scripts embedded in an HTML document can become decentralized and scattered, making it difficult to manage, maintain and debug.</p>

 * <p>Use <i>CDN hosted</i> js files whenever possible, with local fallback.</p>

 * <p>Place scripts at the bottom of your page: When loading js files the user agent can’t continue loading the rest of the page until the js is complete. Therefore users will have to wait before your page renders. By placing your scripts at the bottom of the page you are ensuring the markup and elements your are targeting/manipulating will load before your scripts do.</p>

 * <p>Concatenate + minify all js files, if required.</p>

 * <p>Keep it DRY <i>(Don't repeat yourself)</i></p>
 *
 * <p>Always declare variables</p>
 *
 * <p>Semicolon, Use it. Unless you're using CoffeeScript</p>
 *
 * <p>Reduce Globals</p>
 *
 * <p>Comment Your Code, Use JSDoc tags for consistency and if docs or API's are required</p>
 *
 * <p>Omit var in long lists of variables</p>
 *
 * <p>Self-Executing Functions
    Rather than calling a function, it's quite simple to make a function run automatically when a page loads, or a parent function is called. Simply wrap your function in parenthesis, and then append an additional set, which essentially calls the function.</p>
 *
 * <p>Avoid eval() except for deserialization.</p>
 *
 * <p>Avoid with() on objects and for-in on arrays.</p>
 *
 * <p>Object Caching and Chaining: For cross browser compatibility we often use jQuery for consistency across the several user agents we support. Using techniques such as caching selectors and chaining statements will be the best way to handle jQuery selectors for optimum performance.</p>
 *
 * <p>Use standards features over non-standards features (Directly From Google Style Guide)
    For maximum portability and compatibility, always prefer standards features over non-standards features (e.g., string.charAt(3) over string[3] and element access with DOM functions instead of using an application-specific shorthand).</p>
 *
 * <p>When in doubt a good reference to follow besides the general practices outlined here is <a href="http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml" target="_blank">Googles JavaScript Guide</a></p>
 *
 *
 *
 *
 *
 *
 * <hr></hr>
 */
