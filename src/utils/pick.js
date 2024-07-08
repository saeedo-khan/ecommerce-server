/**
 * 
 * @param {Object} object 
 * @param {string[]} keys 
 * @returns {Object}
 */
// get specific properties from object 
const pick = (object, keys) => {
    return keys.reduce((obj, key) => {
        if (obj && Object.prototype.hasOwnProperty.call(object, key)){
            // eslint-disable-next-line no-param-reassign
            obj[key] = object[key];
        }
        return obj;
    }, {})
}