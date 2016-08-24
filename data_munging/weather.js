module.exports = {getHeadings, splitRows, getColumn,
   getColumns, convertIfNumber, parseText, removeHyphens}

function getHeadings (row)
{
  return row.trim().match(/\S+/g) || []
}

function splitRows (row)
{
  return row.split('\n')
            .map(row => row.replace(/-+/g, ''))
            .filter(row => row.trim() != "")
}

function getColumn (heading, nextHeading, rows)
{
  const start  = rows[0].indexOf(heading)
  const end    = nextHeading
                     ? rows[0].indexOf(nextHeading) 
                     : start + heading.length + 1
  
  const column = rows.slice(1)
                     .map(row => row.slice(start, end).trim())
                     .map(convertIfNumber)
                     .map(removeHyphens)

  return column
}

function convertIfNumber (val)
{
  return !isNaN(Number(val)) ? Number(val) : val
}

function removeHyphens (val)
{
  return typeof val == 'string'
          ? val.replace(/[\s+|-]/gi, "")
          : val
}

function getColumns (headings, rows)
{
  const columns   = headings.map((heading, i) => getColumn(heading, headings[i + 1], rows))
  const byHeading = columns.map((column, i) => ({[headings[i]]: column}))

  return Object.assign(...byHeading)
}

function parseText (text)
{
  const rows      = splitRows(text)
  const headings  = getHeadings(rows[0])
  const columns   = getColumns(headings, rows)
  
  return columns
}