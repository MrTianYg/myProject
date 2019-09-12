import projectRouter from './projectRouter'

let routesArray = []

let toArray = (pages) => {
  Object.keys(pages).forEach((key) => {
    let obj = pages[key]
    Object.keys(obj).forEach((key) => {
      routesArray.push(obj[key])
    })
  })
}

toArray([projectRouter])

export default routesArray
