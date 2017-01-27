/**
 * This file is ignored by elsint, expecting lint-staged to skip as well
 * @param  {Object} ) {               'use strict';    var moduleName [description]
 * @return {[type]}   [description]
 */
var functionName = (function () {
    'use strict'

    var funcMemoized = function () {
        var cacheKey = JSON.stringify(Array.prototype.slice.call(arguments))
        var result

        if (!funcMemoized.cache.hasOwnProperty(cacheKey)) {
                // your expensive computation goes here
                // to reference the paramaters passed, use arguments[n]
                // eg.: result = arguments[0] + arguments[1];
            funcMemoized.cache[cacheKey] = result
        }

        return funcMemoized.cache[cacheKey]
    }

    funcMemoized.cache = {}

    return funcMemoized
}())
