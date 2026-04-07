// Tag fixes for missing registry entries referenced by mods
// Luminous Nether registers entries against vanilla/forge tags but the
// corresponding items/entities don't exist in the currently installed version.
// Removing them here silences the KubeJS ERROR and LMFT WARN on every startup.

ServerEvents.tags('entity_type', event => {
  // luminous_nether:cultist_archer is declared in minecraft:cultists by Luminous Nether
  // but the entity is not registered in this version of the mod.
  event.remove('minecraft:cultists', 'luminous_nether:cultist_archer')
})

ServerEvents.tags('item', event => {
  // luminous_nether:loot_vase_* are declared in forge:vases by Luminous Nether
  // but the items are not registered in this version of the mod.
  event.remove('forge:vases', 'luminous_nether:loot_vase')
  event.remove('forge:vases', 'luminous_nether:loot_vase_2')
  event.remove('forge:vases', 'luminous_nether:loot_vase_3')
  event.remove('forge:vases', 'luminous_nether:loot_vase_4')
  event.remove('forge:vases', 'luminous_nether:loot_vase_5')
  event.remove('forge:vases', 'luminous_nether:loot_vase_6')
})
