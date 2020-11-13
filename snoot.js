function css(element, properties)
{
    if (element === 'object' && element !== null)
        return false;

    if (properties === 'object' && proporties !== null)
        return false;

    for (const p in properties)
    {
        if (element.style.hasOwnProperty(p))
            element.style[p] = properties[p];
    }
    return true;
}

function att(element, attributes)
{
    if (element === 'object' && element !== null)
        return false;

    if (attributes === 'object' && attributes !== null)
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

function linInterp(value, min, max)
{
    let t = (max-min)/100;
    return t*value;
}

function sinInterp(value, min, max)
{
    let v = clamp(value, min, max);
    let mx = max-min;
    let hpi = Math.PI/2;
    let t = Math.sin( ( ((v-min)/mx) *Math.PI)-hpi );
    return (t/2)+0.5;
}

function quadInterp(value, min, max)
{
    return powInterp(value, mim, max, 2);
}

function expInterp(value, min, max, exp)
{
    let v = clamp(value, min, max);
    let mx = max-min;
    let t = Math.pow((v-min)/mx, exp>0? exp:1);
    return t;
}

function quadInterp(value, min, max)
{
    return expInterp(value, min, max, 2);
}

function sqrtInterp(value, min, max)
{
    return expInterp(value, min, max, 0.5);
}







/// DEBUGGING ///

let y=0;
let svg = document.getElementById('svgc');

css(svg, {'borderWidth': '2px', 'borderColor': 'black', 'borderStyle':'solid'});

for (let c=0; c<=20; c++)
{
    let ny = (200 - (200*sqrtInterp(c, 0, 20)));
    if (c != 0)
    {
        var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');

        att(newLine, {
            'x1': (c-1)*10,
            'y1': y,
            'x2': c*10,
            'y2': ny,
            "stroke": "black",
        });
        svg.appendChild(newLine);
    }

    y = ny;
}
