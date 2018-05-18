var kittens = ["Milo", "Otis", "Garfield"]

//destructive!!! Oh No!

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
  return kittens
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
  return kittens
}

// NOT Destructive! :)

function appendKitten(Broom, name){
  return [name, ...kittens]
  kittens
}