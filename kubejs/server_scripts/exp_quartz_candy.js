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

ServerEvents.recipes((event) => {
  // Haunt rose quartz → exp quartz
  event.recipes.create.haunting('kubejs:exp_quartz', 'create:rose_quartz')

  // Polish exp quartz → XS candy (1:1)
  event.recipes.create.sandpaper_polishing('cobblemon:exp_candy_xs', 'kubejs:exp_quartz')

  // Crush exp quartz → crushed exp quartz (+ bonus drops)
  event.recipes.create.crushing(
    [
      '2x kubejs:crushed_exp_quartz',
      CreateItem.of('create:experience_nugget', 0.5),
      CreateItem.of('minecraft:redstone', 0.125)
    ],
    'kubejs:exp_quartz'
  ).processingTime(250)

  // Wash crushed exp quartz → S candies (+ bonus XS)
  event.recipes.create.splashing(
    [
      '2x cobblemon:exp_candy_s',
      CreateItem.of('cobblemon:exp_candy_xs', 0.75),
      CreateItem.of('cobblemon:exp_candy_xs', 0.5)
    ],
    'kubejs:crushed_exp_quartz'
  )

  // Mixing bowl candy upgrades (9:3 ratio per tier, requires heat)
  event.recipes.create.mixing('3x cobblemon:exp_candy_s',  '9x cobblemon:exp_candy_xs').heated()
  event.recipes.create.mixing('3x cobblemon:exp_candy_m',  '9x cobblemon:exp_candy_s').heated()
  event.recipes.create.mixing('3x cobblemon:exp_candy_l',  '9x cobblemon:exp_candy_m').heated()
  event.recipes.create.mixing('3x cobblemon:exp_candy_xl', '9x cobblemon:exp_candy_l').heated()

  // Mekanism Enrichment Chamber candy upgrades (9:3 ratio per tier)
  event.recipes.mekanism.enriching('3x cobblemon:exp_candy_s',  '9x cobblemon:exp_candy_xs')
  event.recipes.mekanism.enriching('3x cobblemon:exp_candy_m',  '9x cobblemon:exp_candy_s')
  event.recipes.mekanism.enriching('3x cobblemon:exp_candy_l',  '9x cobblemon:exp_candy_m')
  event.recipes.mekanism.enriching('3x cobblemon:exp_candy_xl', '9x cobblemon:exp_candy_l')
})
