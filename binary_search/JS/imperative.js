module.exports = chop

/**
 * Performs a binary search on an array of 
 * sorted integers.
 */
function chop (int, array)
{
  var center = getCenter(array)

  while (true)
  {
    if (center == array.length - 1 || center == 0)
      if (array[center] != int)
        return -1

    if (int == array[center])
      return center

    if (int > array[center])
    {
      center = center + getCenter(array.slice(center))
      continue
    }

    if (int < array[center])
    {
      center = center + getCenter(array.slice(0, center))
      continue  
    }
  }
}

function getCenter (array)
{
  return Math.floor(array.length / 2)
}

var index = chop(10, [])