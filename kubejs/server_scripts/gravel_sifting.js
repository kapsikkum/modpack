ServerEvents.recipes(event => {
  // Replace the built-in recipes with comprehensive multimod versions
  event.remove({ id: 'createsifter:sifting/gravel_andesite' })
  event.remove({ id: 'createsifter:sifting/gravel_brass' })

  // ── Brass mesh: sift gravel → crushed ores ───────────────────────────────
  event.recipes.createsifter.sifting(
    [
      // ── Vanilla / Create ─────────────────────────────────────────────────
      Output.of('create:crushed_raw_iron',    0.50),
      Output.of('create:crushed_raw_gold',    0.20),
      Output.of('create:crushed_raw_copper',  0.40),
      Output.of('create:crushed_raw_zinc',    0.40),

      // ── Mekanism ─────────────────────────────────────────────────────────
      Output.of('create:crushed_raw_tin',     0.30),
      Output.of('create:crushed_raw_lead',    0.25),
      Output.of('create:crushed_raw_osmium',  0.20),
      Output.of('create:crushed_raw_uranium', 0.05),

      // ── Oritech ──────────────────────────────────────────────────────────
      Output.of('create:crushed_raw_nickel',  0.30),

      // ── Mythic Metals ─────────────────────────────────────────────────────
      Output.of('create:crushed_raw_silver',   0.15),
      Output.of('create:crushed_raw_platinum', 0.10),
    ],
    'minecraft:gravel',
    'createsifter:brass_mesh'
  )

  // ── Andesite mesh: sift gravel ────────────────────────────────────────────
  event.recipes.createsifter.sifting(
    [
      // ── Vanilla / Create ─────────────────────────────────────────────────
      Output.of('minecraft:flint',         0.50),
      Output.of('create:zinc_nugget',      0.40),
      Output.of('minecraft:iron_nugget',   0.40),
      Output.of('create:copper_nugget',    0.30),
      Output.of('minecraft:gold_nugget',   0.20),
      Output.of('minecraft:coal',          0.10),

      // ── Mekanism ─────────────────────────────────────────────────────────
      Output.of('mekanism:nugget_tin',     0.15),
      Output.of('mekanism:nugget_lead',    0.12),
      Output.of('mekanism:nugget_osmium',  0.10),
      Output.of('mekanism:nugget_uranium', 0.04),

      // ── Oritech ──────────────────────────────────────────────────────────
      Output.of('oritech:nickel_nugget',   0.15),

      // ── Mythic Metals ────────────────────────────────────────────────────
      Output.of('mythicmetals:manganese_nugget',   0.015),
      Output.of('mythicmetals:silver_nugget',      0.010),
      Output.of('mythicmetals:banglum_nugget',     0.008),
      Output.of('mythicmetals:prometheum_nugget',  0.008),
      Output.of('mythicmetals:aquarium_nugget',    0.006),
      Output.of('mythicmetals:carmot_nugget',      0.006),
      Output.of('mythicmetals:midas_gold_nugget',  0.006),
      Output.of('mythicmetals:mythril_nugget',     0.006),
      Output.of('mythicmetals:orichalcum_nugget',  0.006),
      Output.of('mythicmetals:kyber_nugget',       0.005),
      Output.of('mythicmetals:palladium_nugget',   0.005),
      Output.of('mythicmetals:quadrillum_nugget',  0.005),
      Output.of('mythicmetals:runite_nugget',      0.005),
      Output.of('mythicmetals:adamantite_nugget',  0.004),
      Output.of('mythicmetals:platinum_nugget',    0.004),
    ],
    'minecraft:gravel',
    'createsifter:andesite_mesh'
  )
})
