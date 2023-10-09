
function changeTemp(fromUnit, toUnit, input)
{
    if (input == '')
        return ''
    input = Number(input)
    if (fromUnit == 'C')
    {
        if(toUnit == 'F')
            return input*1.8 + 32
        if (toUnit == 'K')
            return input + 273
    }
    if (fromUnit == 'F')
    {
        if(toUnit == 'C')
            return (input - 32)*5/9
        if (toUnit == 'K')
            return (input - 32)*5/9+ 273
    }
    if (fromUnit == 'K')
    {
        if(toUnit == 'F')
            return (input - 273)*1.8 + 32
        if (toUnit == 'C')
            return input - 273
    }
    return input
}

function displayTemp()
{
    const input = document.getElementById('input').value
    output = document.getElementById('output')
    const fromUnit = document.getElementById('from').value
    const toUnit = document.getElementById('to').value
    output.innerHTML = changeTemp(fromUnit, toUnit, input)
}