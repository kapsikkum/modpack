// Etched blank music disc production chain
//
// Two parallel mixing inputs both feed into a single heated compacting step:
//
// Route A — PneumaticCraft plastic sheet:
//   pneumaticcraft:plastic + mekanism:dust_coal → [Mixer] → kubejs:vinyl_compound
//
// Route B — Mekanism HDPE sheet:
//   mekanism:hdpe_sheet + mekanism:dust_coal → [Mixer] → kubejs:vinyl_compound
//
// Final step (both routes):
//   kubejs:vinyl_compound → [Heated Compacting] → etched:blank_music_disc
//
// The vanilla smelting recipe (any music disc → blank disc) is removed to prevent
// bypassing the chain.

ServerEvents.recipes(event => {
  // --- Route A: PneumaticCraft plastic sheet + coal dust → vinyl compound ---
  // Item.of() disambiguates from the pneumaticcraft:plastic fluid
  event.recipes.create.mixing(
    'kubejs:vinyl_compound',
    [Item.of('pneumaticcraft:plastic'), 'mekanism:dust_coal']
  )

  // --- Route B: Mekanism HDPE sheet + coal dust → vinyl compound ---
  event.recipes.create.mixing(
    'kubejs:vinyl_compound',
    ['mekanism:hdpe_sheet', 'mekanism:dust_coal']
  )

  // --- Final step: heated compacting (Press + Basin + Blaze Burner) → blank disc ---
  event.recipes.create.compacting(
    'etched:blank_music_disc',
    ['kubejs:vinyl_compound']
  ).heated()
})
