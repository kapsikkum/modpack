// Dirt <-> Coarse Dirt cycle via Create
//
// This builds on the vanilla coarse dirt → dirt conversion (hoeing coarse dirt
// gives dirt) by adding a cheap Create route in the other direction:
//
//   2× dirt + 2× gravel → [Mixer]     → 4× coarse dirt
//   coarse dirt          → [Millstone] → dirt

ServerEvents.recipes(event => {
  // 2x dirt + 2x gravel → 4x coarse dirt
  event.recipes.create.mixing(
    ['4x minecraft:coarse_dirt'],
    ['2x minecraft:dirt', '2x minecraft:gravel']
  )

  // coarse dirt → dirt (millstone — mechanically tills the coarse soil back to fine dirt)
  event.recipes.create.milling(
    'minecraft:dirt',
    'minecraft:coarse_dirt'
  )
})
