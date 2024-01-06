function seedRandom(seed) {
  const m = Math.pow(2, 32)
  const a = 1103515245
  const c = 12345

  seed = (a * seed + c) % m
  return seed / m
}

function getSeedFromDate() {
  const today = new Date()
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate()
  return seed
}

export function onRequest() {
  const seed = getSeedFromDate()
  const randomNumber = seedRandom(seed)
  return new Response(JSON.stringify({ value: randomNumber }), {
    headers: { 'Content-Type': 'application/json' }
  })
}
