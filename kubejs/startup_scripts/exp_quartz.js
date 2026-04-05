// Register Exp Quartz and Crushed Exp Quartz items
// Ported from Create-Cobblemon by HexeChroma (Fabric 1.20.1)
// Adapted for NeoForge 1.21.1 — used as intermediates in the candy-making pipeline:
//   create:rose_quartz → [Haunt] → kubejs:exp_quartz
//   kubejs:exp_quartz  → [Sandpaper Polish] → cobblemon:exp_candy_m
//   kubejs:exp_quartz  → [Crush] → kubejs:crushed_exp_quartz (x2)
//   kubejs:crushed_exp_quartz → [Wash] → cobblemon:exp_candy_s (x2) + bonus XS

StartupEvents.registry('item', (event) => {
  event
    .create('exp_quartz')
    .displayName('Exp Quartz')
    .tooltip('§7Haunt rose quartz in a Soul Fire')
    .tooltip('§7Polish for candy, or crush for crushed exp quartz')

  event
    .create('crushed_exp_quartz')
    .displayName('Crushed Exp Quartz')
    .tooltip('§7Wash in a waterwheel to obtain exp candies')
})
