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


function clamp(value, min, max)
{
    if (value < min) return min;
    if (value > max) return max;
    return value;
}


function interpolate(value, min, max, op)
{
    let d = (max-min)/100;
    return d*value;
}

function sinterp(value, min, max, option)
{
    return Math.sin( value*(max-min)/(20*3.14) );
}


let y=0;
let svg = document.getElementById('svgc');

for (let c=0; c<=10; c++)
{
    let ny = (200 - (200*sinterp(c, 0, 10)));
    if (c != 0)
    {
        var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
        newLine.setAttribute('x1', (c-1)*20);
        newLine.setAttribute('y1', y);
        newLine.setAttribute('x2', c*20);
        newLine.setAttribute('y2', ny);
        newLine.setAttribute("stroke", "black");
        svg.appendChild(newLine);
    }

    console.log(y)

    y = ny;
}