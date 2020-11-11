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