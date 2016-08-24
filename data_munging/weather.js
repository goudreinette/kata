module.exports = {getHeadings, splitRows, getColumn,
   getColumns, convertNumbers, parseText}

function getHeadings (row)
{
  return row.trim().match(/\S+/g) || []
}

function splitRows (row)
{
  return row.split('\n').filter(row => row.trim() != "")
}

function getColumn (heading, rows)
{
  const start  = rows[0].indexOf(heading)
  const end    = start + heading.length + 1
  const column = rows.slice(1)
                     .map(row => row.slice(start, end).trim())

  return convertNumbers(column)
}

function convertNumbers (values)
{
  return values.map(val => !isNaN(Number(val)) ? Number(val) : val)
}

function getColumns (headings, rows)
{

  const columns   = headings.map(heading => getColumn(heading, rows))
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