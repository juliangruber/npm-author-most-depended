#!/usr/bin/env node
'use strict'
process.title = 'npm-author-most-depended'

const get = require('..')

const main = async author => {
  if (!author) {
    console.error('Usage: npm-author-most-depended AUTHOR')
    process.exit(1)
  }
  const packages = await get(author)
  for (const pkg of packages) {
    console.log(
      `${String(pkg.dependents).padStart(6)} : http://npm.im/${pkg.name}`
    )
  }
}

main(process.argv[2]).catch(err => {
  console.error(err)
  process.exit(1)
})
