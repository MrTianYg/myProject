import Demo from './test/demo'

let routesArray = []

let toArray = (pages) => {
  Object.keys(pages).forEach((key) => {
    let obj = pages[key]
    Object.keys(obj).forEach((key) => {
      routesArray.push(obj[key])
    })
  })
}

toArray([Demo])

export default routesArray
