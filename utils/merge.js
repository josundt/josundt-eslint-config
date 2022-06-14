/**
 *
 * @param {any} o
 * @returns o is {}
 */
 function isPlainObject(value) {
    return  !!value &&
        !!(value = Object.getPrototypeOf(value)) &&
        !Object.getPrototypeOf(value);
}

/**
 *
 * @param {any[]} first
 * @param {any[]} second
 * @param {boolean} insertBoth
 * @returns {any[]}
 */
 function deepMergeArrays(first, second, insertBoth = true) {
     let result = [];
     for (let i = 0; i < Math.max(first.length, second.length); i++) {
        if (i < second.length) {
            if (i < first.length) {
                if (Array.isArray(second[i])) {
                    if (Array.isArray(first[i])) {
                        result.push(deepMergeArrays(first[i], second[i]));
                    } else {
                        result.push(first[i]);
                    }
                } else if (isPlainObject(second[i])) {
                    if (isPlainObject(first[i])) {
                        result.push(deepMergeObjects(first[i], second[i]));
                    } else {
                        result.push(first[i]);
                    }
                } else {
                    if (first[i] === second[i] && !insertBoth) {
                        result.push(first[i]);
                    } else {
                        result.push(first[i], second[i]);
                    }
                }
            } else {
                result.push(second[i]);
            }
        } else {
            result.push(first[i]);
        }
     }
     return result;
}

/**
 *
 * @param {{}} first
 * @param {{}} second
 * @returns {{}}
 */
function deepMergeObjects(first, second) {
    const result = {};
    const remainingKeysFromSecond = new Set(Object.keys(second));
    for (const key of Object.keys(first)) {
        if (remainingKeysFromSecond.has(key)) {
            if (Array.isArray(first[key])) {
                if (Array.isArray(second[key])) {
                    result[key] = deepMergeArrays(first[key], second[key]);
                } else {
                    result[key] = first[key];
                }
            } else if (isPlainObject(first[key])) {
                if (isPlainObject(second[key])) {
                    result[key] = deepMergeObjects(first[key], second[key]);
                } else {
                    result[key] = first[key];
                }
            } else {
                result[key] = first[key];
            }
            remainingKeysFromSecond.delete(key);
        } else {
            result[key] = first[key];
        }
    }
    for (const key of Array.from(remainingKeysFromSecond)) {
        result[key] = second[key];
    }
    return result;
}

module.exports = {
    deepMergeObjects,
    deepMergeArrays
};
