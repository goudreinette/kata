module.exports = chop

function chop (int, array)
{
  function chop_inner (array, offset)
  {
    const center = getCenter(array)
    offset = offset || 0

    if (array[0] != int && array.length <= 1)
      return -1

    if (int == array[center])
      return offset + center

    if (int > array[center])
      return chop_inner(array.slice(center), center + offset)
 
    if (int < array[center])
      return chop_inner(array.slice(0, center))
 }

 return chop_inner(array)
}

function getCenter (array)
{
  return Math.floor(array.length / 2)
}

const index = chop(5, [1, 2, 3, 4, 5])