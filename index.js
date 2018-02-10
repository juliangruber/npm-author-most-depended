'use strict'

const npmUserPackages = require('npm-user-packages')
const counts = require('dependent-counts')

module.exports = async author => {
  let packages = await npmUserPackages(author)
  for (const pkg of packages) {
    const count = counts.find(count => count.name === pkg.name)
    pkg.dependents = count
      ? count.totalDirectDependents
      : 0
  }
  packages.sort((a, b) => b.dependents - a.dependents)
  return packages
}
