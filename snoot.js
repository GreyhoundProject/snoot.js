/**
 * Sets a group of key/value style properties to a given element.
 * @param {object} element - HTML Element.
 * @param {object} properties - Key value pairs of style properties.
 * @returns {boolean} Returns false if element is not valid
 */
function css(element, properties)
{
    if (typeof element !== 'object' && element !== null)
        return false;

    if (typeof properties !== 'object' && properties !== null)
        return false;

    for (const p in properties)
    {
        if (element.style.hasOwnProperty(p))
            element.style[p] = properties[p];
    }
    return true;
}


/**
 * Sets a group of key/value style properties to a given element.
 * @param {object} element - HTML Element.
 * @param {object} attributes - Key value pairs of attributes.
 * @returns {boolean} Returns false if element is not valid
 */
function att(element, attributes)
{
    if (typeof element !== 'object' && element !== null)
        return false;

    if (typeof attributes !== 'object' && attributes !== null)
        return false;

    for (const a in attributes)
    {
        element.setAttribute(a, attributes[a]);
    }
    return true;
}


/**
 * Clamps a given number between min and max.
 * @param {number} value - The value to be clamped.
 * @param {number} min - The min/lower value.
 * @param {number} max - The max/upper value.
 * @returns {number} Returns the clamped value between min and max.
 */
function clamp(value, min, max)
{
    if (value < min) return min;
    if (value > max) return max;
    return value;
}


/**
 * Shorthand for document.getElementById and document.getElementsByClassName
 * Use #string For ID's and .string for classes. Also '.' for document
 * '^' for head and '_' for body.
 * @param {string} q - Search query
 * @returns {object} Returns the dom object or HTMLCollection of dom objects.
 */
function get(q)
{
    if (q === '.')    { return document; }
    if (q === '^')    { return document.head; }
    if (q === '_')    { return document.body; }
    if (q[0] === '#') { return document.getElementById(q.substring(1)); }
    if (q[0] === '.') { return document.getElementsByClassName(q.substring(1)); }   
}

