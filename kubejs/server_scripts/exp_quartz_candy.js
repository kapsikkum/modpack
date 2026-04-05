// Exp Quartz candy-making recipes — ported from Create-Cobblemon (HexeChroma, Fabric 1.20.1)
// Pipeline:
//   create:rose_quartz  →[Haunt]→   kubejs:exp_quartz
//   kubejs:exp_quartz   →[Polish]→  cobblemon:exp_candy_m  (1:1, direct)
//   kubejs:exp_quartz   →[Crush]→   kubejs:crushed_exp_quartz ×2
//                                   + 50% create:experience_nugget
//                                   + 12.5% minecraft:redstone
//   kubejs:crushed_exp_quartz →[Wash]→ cobblemon:exp_candy_s ×2
//                                      + 75% cobblemon:exp_candy_xs
//                                      + 50% cobblemon:exp_candy_xs
//
// Note: create:haunting is not supported by KubeJS Create, so it uses event.custom().
// All other Create recipes use the KubeJS Create integration syntax.

ServerEvents.recipes((event) => {
  // Haunt rose quartz → exp quartz (haunting not in KubeJS Create, use raw JSON)
  event.custom({
    type: 'create:haunting',
    ingredients: [{ item: 'create:rose_quartz' }],
    results: [{ item: 'kubejs:exp_quartz' }]
  })

  // Polish exp quartz → M candy (1:1)
  event.recipes.createSandpaperPolishing('cobblemon:exp_candy_m', 'kubejs:exp_quartz')

  // Crush exp quartz → crushed exp quartz (+ bonus drops)
  event.recipes.createCrushing(
    [
      Item.of('kubejs:crushed_exp_quartz', 2),
      Item.of('create:experience_nugget').withChance(0.5),
      Item.of('minecraft:redstone').withChance(0.125)
    ],
    'kubejs:exp_quartz'
  ).processingTime(250)

  // Wash crushed exp quartz → S candies (+ bonus XS)
  event.recipes.createSplashing(
    [
      Item.of('cobblemon:exp_candy_s', 2),
      Item.of('cobblemon:exp_candy_xs').withChance(0.75),
      Item.of('cobblemon:exp_candy_xs').withChance(0.5)
    ],
    'kubejs:crushed_exp_quartz'
  )
})
