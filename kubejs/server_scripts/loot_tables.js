// Loot table improvements for Lootr chests
// Uses LootJS (lootjs-neoforge-1.21.1) — https://github.com/AlmostReliable/lootjs

LootJS.modifyLootTables((event) => {

  // ── Dungeons ──────────────────────────────────────────────────────────────
  event.getLootTable('minecraft:chests/simple_dungeon')
    .firstPool((pool) => {
      // Boost base rolls from [1,3] to [2,4]
      pool.rolls(2, 4)
    })
    .addPool((pool) => {
      pool.rolls(1, 2)
      pool.addEntry(LootEntry.item('minecraft:enchanted_book').weight(15))
      pool.addEntry(LootEntry.item('cobblemon:poke_ball').weight(20).count(1, 3))
      pool.addEntry(LootEntry.item('cobblemon:great_ball').weight(8).count(1, 2))
      pool.addEntry(LootEntry.item('minecraft:name_tag').weight(10))
      pool.addEntry(LootEntry.item('minecraft:golden_apple').weight(6))
      pool.addEntry(LootEntry.item('artifacts:lucky_scarf').weight(2))
    })

  // ── Mineshafts ────────────────────────────────────────────────────────────
  event.getLootTable('minecraft:chests/abandoned_mineshaft')
    .firstPool((pool) => {
      pool.rolls(3, 5) // up from [1,4]
    })
    .addPool((pool) => {
      pool.rolls(1, 2)
      pool.addEntry(LootEntry.item('minecraft:rail').weight(20).count(4, 16))
      pool.addEntry(LootEntry.item('minecraft:torch').weight(20).count(4, 16))
      pool.addEntry(LootEntry.item('minecraft:enchanted_book').weight(10))
      pool.addEntry(LootEntry.item('cobblemon:poke_ball').weight(15).count(1, 3))
      pool.addEntry(LootEntry.item('alloyforge:copper_ingot').weight(12).count(2, 6))
      pool.addEntry(LootEntry.item('minecraft:golden_apple').weight(4))
    })

  // ── Shipwreck treasure ────────────────────────────────────────────────────
  event.getLootTable('minecraft:chests/shipwreck_treasure')
    .firstPool((pool) => {
      pool.rolls(3, 6) // up from [2,5]
    })
    .addPool((pool) => {
      pool.rolls(1, 2)
      pool.addEntry(LootEntry.item('things:displacement_tome').weight(4))
      pool.addEntry(LootEntry.item('minecraft:nautilus_shell').weight(15).count(1, 3))
      pool.addEntry(LootEntry.item('minecraft:heart_of_the_sea').weight(2))
      pool.addEntry(LootEntry.item('minecraft:enchanted_book').weight(12))
      pool.addEntry(LootEntry.item('cobblemon:dive_ball').weight(8).count(1, 2))
    })

  // ── Stronghold corridor ───────────────────────────────────────────────────
  event.getLootTable('minecraft:chests/stronghold_corridor')
    .firstPool((pool) => {
      pool.rolls(2, 5) // up from [1,5]
    })
    .addPool((pool) => {
      pool.rolls(1, 2)
      pool.addEntry(LootEntry.item('minecraft:enchanted_book').weight(15))
      pool.addEntry(LootEntry.item('ae2:certus_quartz_crystal').weight(10).count(2, 6))
      pool.addEntry(LootEntry.item('cobblemon:ultra_ball').weight(6).count(1, 2))
      pool.addEntry(LootEntry.item('minecraft:golden_apple').weight(8))
      pool.addEntry(LootEntry.item('artifacts:charm_of_sinking').weight(3))
    })

  // ── Stronghold library ────────────────────────────────────────────────────
  event.getLootTable('minecraft:chests/stronghold_library')
    .firstPool((pool) => {
      pool.rolls(3, 7) // up from [2,10] — narrower but guaranteed
    })
    .addPool((pool) => {
      pool.rolls(1, 3)
      pool.addEntry(LootEntry.item('minecraft:enchanted_book').weight(30))
      pool.addEntry(LootEntry.item('minecraft:book').weight(15).count(1, 4))
      pool.addEntry(LootEntry.item('minecraft:compass').weight(5))
      pool.addEntry(LootEntry.item('minecraft:name_tag').weight(8))
    })

  // ── Nether fortress ───────────────────────────────────────────────────────
  event.getLootTable('minecraft:chests/nether_bridge')
    .firstPool((pool) => {
      pool.rolls(3, 6) // up from [2,4]
    })
    .addPool((pool) => {
      pool.rolls(1, 2)
      pool.addEntry(LootEntry.item('cobblemon:ultra_ball').weight(12).count(1, 2))
      pool.addEntry(LootEntry.item('minecraft:blaze_rod').weight(15).count(1, 4))
      pool.addEntry(LootEntry.item('minecraft:enchanted_book').weight(10))
      pool.addEntry(LootEntry.item('minecraft:golden_apple').weight(5))
      pool.addEntry(LootEntry.item('artifacts:fire_gauntlet').weight(2))
    })

  // ── Desert temple ─────────────────────────────────────────────────────────
  event.getLootTable('minecraft:chests/desert_pyramid')
    .firstPool((pool) => {
      pool.rolls(3, 6) // up from [2,4]
    })
    .addPool((pool) => {
      pool.rolls(1, 2)
      pool.addEntry(LootEntry.item('minecraft:enchanted_book').weight(12))
      pool.addEntry(LootEntry.item('cobblemon:heal_ball').weight(10).count(1, 3))
      pool.addEntry(LootEntry.item('minecraft:golden_apple').weight(6))
      pool.addEntry(LootEntry.item('artifacts:lucky_scarf').weight(3))
      pool.addEntry(LootEntry.item('minecraft:diamond').weight(4).count(1, 2))
    })

  // ── Jungle temple ─────────────────────────────────────────────────────────
  event.getLootTable('minecraft:chests/jungle_temple')
    .firstPool((pool) => {
      pool.rolls(4, 7) // up from [2,6]
    })
    .addPool((pool) => {
      pool.rolls(1, 2)
      pool.addEntry(LootEntry.item('minecraft:enchanted_book').weight(12))
      pool.addEntry(LootEntry.item('cobblemon:nest_ball').weight(15).count(1, 3))
      pool.addEntry(LootEntry.item('artifacts:kitty_slippers').weight(3))
      pool.addEntry(LootEntry.item('minecraft:diamond').weight(4).count(1, 2))
    })

  // ── End city ──────────────────────────────────────────────────────────────
  event.getLootTable('minecraft:chests/end_city_treasure')
    .firstPool((pool) => {
      pool.rolls(3, 6)
    })
    .addPool((pool) => {
      pool.rolls(1, 3)
      pool.addEntry(LootEntry.item('minecraft:enchanted_book').weight(20))
      pool.addEntry(LootEntry.item('cobblemon:master_ball').weight(1))
      pool.addEntry(LootEntry.item('cobblemon:beast_ball').weight(6).count(1, 2))
      pool.addEntry(LootEntry.item('ae2:fluix_crystal').weight(10).count(2, 6))
      pool.addEntry(LootEntry.item('minecraft:elytra').weight(2))
    })

})
