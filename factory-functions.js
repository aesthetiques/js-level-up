'use strict'

const Dog = () => {
  const sound = 'woof'
  return {
    talk: () => console.log(sound)
  }
}

const sniffles = Dog()

//////////////////////////////////////////////////////////////////////////

const barker = state => ({ bark: () => console.log(`Woof, woof, I'm ${state.name}`) })

const driver = state => ({ drive: () => state.position = state.position + state.speed })

const killer = state => ({ bodyCount: () => state.murders - state.bodiesFound })

const murderRobotDog = name => {
  const state = {
    name,
    speed: 100,
    position: 0,
    murders: 15,
    bodiesFound: 5
  }

  return Object.assign(
    {}, 
    barker(state),
    driver(state),
    killer(state)
  )

}

murderRobotDog('alphonse').bark()