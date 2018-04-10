'use strict'

//factory functions:
const drive = state => ({ state.speed })
const oilChange = state => ({})
const rotateTires = state => ({})
const payForInsurance = state => ({})

const Car = state => {
  
  return Object.assign({...state}, 
    drive: drive(state),
    oilChange: oilChange(state),
    rotateTires: rotateTires(state),
    payForInsurance: payForInsurance(state)
  )
}

const x2 = Car({})
x2.name = 'Tesla X2'
x2.mpg = 125
const x3 = Car({ name: 'Tesla X3', mpg: 160 })

console.log(`${x2.name} w/ ${x2.mpg} => ${x3.name} w/ ${x3.mpg}`)