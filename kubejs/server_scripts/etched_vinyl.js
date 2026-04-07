// Etched blank music disc production chains
//
// Two parallel routes, both end at etched:blank_music_disc via a Create Mechanical Press:
//
// Route A — PneumaticCraft (plastic focus):
//   biodiesel + charcoal → [Thermopneumatic Plant] → liquid plastic
//   liquid plastic → [Heat Frame, ≤ 0°C] → pneumaticcraft:plastic
//   pneumaticcraft:plastic → [Create Press] → etched:blank_music_disc
//
// Route B — Mekanism (polymer focus):
//   biofuel → [Chemical Oxidizer] → bio gas
//   bio gas + substrate + water → [PRC] → ethene fluid
//   ethene + substrate + oxygen → [PRC] → mekanism:hdpe_pellet
//   3× hdpe_pellet → [Enrichment Chamber] → mekanism:hdpe_sheet
//   mekanism:hdpe_sheet + mekanism:dust_coal → [Create Mixer] → kubejs:vinyl_compound
//   kubejs:vinyl_compound → [Create Press] → etched:blank_music_disc
//
// The vanilla smelting recipe (any music disc → blank disc) is removed to prevent
// bypassing both chains.

ServerEvents.recipes(event => {
  // --- Remove vanilla shortcut ---
  event.remove({ id: 'etched:blank_music_disc' })

  // --- Route A: pneumaticcraft:plastic pressed into a blank disc ---
  event.recipes.create.pressing(
    'etched:blank_music_disc',
    'pneumaticcraft:plastic'
  )

  // --- Route B step 1: HDPE sheet + coal dust mixed into vinyl compound ---
  event.recipes.create.mixing(
    'kubejs:vinyl_compound',
    ['mekanism:hdpe_sheet', 'mekanism:dust_coal']
  )

  // --- Route B step 2: vinyl compound pressed into a blank disc ---
  event.recipes.create.pressing(
    'etched:blank_music_disc',
    'kubejs:vinyl_compound'
  )
})
