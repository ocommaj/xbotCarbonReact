export default function getRandom(fromLocations) {
  const randInt = Math.floor((Math.random() * fromLocations.length))

  return fromLocations[randInt]
}
