const User = state => {
    const properties = {...state}
    this.proto = {
      create: create({state, ...properties})
    }
  
    return Object.assign({}, properties, this.proto)
  }
  
  const create = ({state, classType}) => {
    return classType({state})
  }
  
  // const remove = (state, class) => ({})
  
  // const update = (state, class) => ({})