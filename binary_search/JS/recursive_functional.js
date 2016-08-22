module.exports = chop


function chop (int, array, offset)
{
  offset = offset || 0

  if (array.length == 0 || (array.length == 1 && array[0] != int))
    return -1
  
  const center = getCenter(array)

  if (int == array[center])
    return center + offset
  
  if (int > array[center])
    return chop(int, array.slice(center), center + offset)
  
  if (int < array[center])
    return chop(int, array.slice(0, center), 0)
}

function getCenter (array)
{
  return Math.floor(array.length / 2)
}

const index = chop(5, [1, 2, 3, 4, 5])