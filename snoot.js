/**
 * Sets a group of key/value style properties to a given element.
 * @param {object} element - HTML Element.
 * @param {object} properties - Key value pairs of style properties.
 * @returns {boolean} Returns false if element is not valid
 */
function css(element, properties)
{
    if (typeof element === 'object' && element !== null)
        return false;

    if (typeof properties === 'object' && properties !== null)
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
    if (typeof element === 'object' && element !== null)
        return false;

    if (typeof attributes === 'object' && attributes !== null)
        return false;

    for (const a in attributes)
    {
        element.setAttribute(a, attributes[a]);
    }
    return true;
}

function clamp(value, min, max)
{
    if (value < min) return min;
    if (value > max) return max;
    return value;
}


/*
 *
 *  TWEEN CLASS
 *
 */ 
class Tween
{
    /** Tween Class: Use setRange(min,max) to set range, and calculate
     *  interpolation using lin(t), sin(t), exp(t), where 't' is a
     *  number between 0-1.
     */
    constructor()
    {
        this.min = 0;
        this.max = 1;
        this.dR = 1;
    }

    /**
     * Sets range bounds, and calculated range difference (dR).
     * @param {number} min - Lower range limit.
     * @param {} max - Upper range limit.
     * @returns {null}
     */
    setRange(min, max)
    {
        this.min = min;
        this.max = max;
        this.dR = max-min;
    }

    /**
     * Returns the linear interpolation between min and max
     * given by parameter 't'.
     * @param {number} t - Decimal number between 0-1.
     * @returns {number} Linear interpolation between min-max (default 0-1).
     */
    lin(t)
    {
        let T = clamp(t, 0, 1);
        return ((this.dR*t) + this.min);
    }

    /**
     * Returns the sinusoidal interpolation between min and max
     * given by parameter 't'. Mapped between -PI/2 to PI/2.
     * @param {number} t - Decimal number between 0-1.
     * @returns {number} Sinusoidal interpolation between min-max (default 0-1).
     */
    sin(t)
    {
        let T = clamp(t, 0, 1);
        let U = Math.sin( ( T*Math.PI - (Math.PI/2) ) );
        return (this.dR * ((U/2)+0.5) + this.min);
    }

    /**
     * Returns the exponential interpolation between min and max
     * given by parameter 't' and exponent 'E'.
     * @param {number} t - Decimal number between 0-1.
     * @param {number} E - Exponential value (x^E).
     * @returns {number} Exponential interpolation between min-max (default 0-1).
     */
    exp(t, E=2)
    {
        let T = clamp(t, 0, 1);
        return (this.dR * Math.pow(T, E)) + this.min;
    }


}







/// DEBUGGING ///

let y=0;
let svg = document.getElementById('svgc');

css(svg, {'borderWidth': '2px', 'borderColor': 'black', 'borderStyle':'solid'});

var linLine = document.createElementNS('http://www.w3.org/2000/svg','line');
        att(linLine, {
            'x1': 0,
            'y1': 1,
            'x2': 1,
            'y2': 0,
            'stroke': '#CCCCCC',
            'stroke-width':'0.005'
        });
        svg.appendChild(linLine);


let t = new Tween();
t.setRange(0.25,0.75);

for (let c=0; c<=100; c++)
{
    let ny = (1 - (t.sin(c/100)));
    if (c != 0)
    {
        var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');

        att(newLine, {
            'x1': (c-1)/100,
            'y1': y,
            'x2': c/100,
            'y2': ny,
            'stroke': "black",
            'stroke-width':'0.005'
        });
        svg.appendChild(newLine);
    }

    y = ny;
}
