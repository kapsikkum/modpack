// RPG Series smithing upgrade fix
//
// Root cause: SpellEngine writes a persistent SPELL_CONTAINER data component to
// RPG-series armour/weapons the first time they are used (spell slots populated).
// NeoForge 21.1.x deserializes the vanilla smithing_transform JSON into a
// DataComponentIngredient that performs a partial component check, so a "used"
// item (with the extra SPELL_CONTAINER component) fails the base-ingredient test
// even though the item type matches — resulting in no output in the smithing table.
//
// Fix: remove the original recipes and re-register them via KubeJS, which creates
// plain ItemIngredient objects (type-check only, no component comparison).
//
// Covers: rogues (berserker + assassin armour, rogue weapons — netherite tier only)
//         paladins (crusader + prior_robe armour, paladin weapons — netherite tier only)
//         wizards (arcane + fire + frost robes, staves + wands)
//
// Note: ruby-tier recipes (rogues:ruby_* / paladins:ruby_*) are omitted because
// betternether:nether_ruby and the ruby result items do not exist in this pack.

ServerEvents.recipes(event => {
  const TEMPLATE = 'minecraft:netherite_upgrade_smithing_template'
  const NETH = 'minecraft:netherite_ingot'

  const recipes = [
    // ── Rogues ───────────────────────────────────────────────────────────────
    ['rogues:netherite_assassin_armor_chest_smithing', 'rogues:assassin_armor_chest',   'rogues:netherite_assassin_armor_chest',  TEMPLATE, NETH],
    ['rogues:netherite_assassin_armor_feet_smithing',  'rogues:assassin_armor_feet',    'rogues:netherite_assassin_armor_feet',   TEMPLATE, NETH],
    ['rogues:netherite_assassin_armor_head_smithing',  'rogues:assassin_armor_head',    'rogues:netherite_assassin_armor_head',   TEMPLATE, NETH],
    ['rogues:netherite_assassin_armor_legs_smithing',  'rogues:assassin_armor_legs',    'rogues:netherite_assassin_armor_legs',   TEMPLATE, NETH],
    ['rogues:netherite_berserker_armor_chest_smithing','rogues:berserker_armor_chest',  'rogues:netherite_berserker_armor_chest', TEMPLATE, NETH],
    ['rogues:netherite_berserker_armor_feet_smithing', 'rogues:berserker_armor_feet',   'rogues:netherite_berserker_armor_feet',  TEMPLATE, NETH],
    ['rogues:netherite_berserker_armor_head_smithing', 'rogues:berserker_armor_head',   'rogues:netherite_berserker_armor_head',  TEMPLATE, NETH],
    ['rogues:netherite_berserker_armor_legs_smithing', 'rogues:berserker_armor_legs',   'rogues:netherite_berserker_armor_legs',  TEMPLATE, NETH],
    ['rogues:netherite_dagger_smithing',               'rogues:diamond_dagger',         'rogues:netherite_dagger',                TEMPLATE, NETH],
    ['rogues:netherite_double_axe_smithing',           'rogues:diamond_double_axe',     'rogues:netherite_double_axe',            TEMPLATE, NETH],
    ['rogues:netherite_glaive_smithing',               'rogues:diamond_glaive',         'rogues:netherite_glaive',                TEMPLATE, NETH],
    ['rogues:netherite_sickle_smithing',               'rogues:diamond_sickle',         'rogues:netherite_sickle',                TEMPLATE, NETH],

    // ── Paladins ─────────────────────────────────────────────────────────────
    ['paladins:netherite_claymore_smithing',            'paladins:diamond_claymore',      'paladins:netherite_claymore',            TEMPLATE, NETH],
    ['paladins:netherite_crusader_armor_chest_smithing','paladins:crusader_armor_chest', 'paladins:netherite_crusader_armor_chest', TEMPLATE, NETH],
    ['paladins:netherite_crusader_armor_feet_smithing', 'paladins:crusader_armor_feet',  'paladins:netherite_crusader_armor_feet',  TEMPLATE, NETH],
    ['paladins:netherite_crusader_armor_head_smithing', 'paladins:crusader_armor_head',  'paladins:netherite_crusader_armor_head',  TEMPLATE, NETH],
    ['paladins:netherite_crusader_armor_legs_smithing', 'paladins:crusader_armor_legs',  'paladins:netherite_crusader_armor_legs',  TEMPLATE, NETH],
    ['paladins:netherite_great_hammer_smithing',        'paladins:diamond_great_hammer', 'paladins:netherite_great_hammer',         TEMPLATE, NETH],
    ['paladins:netherite_holy_staff_smithing',          'paladins:diamond_holy_staff',   'paladins:netherite_holy_staff',           TEMPLATE, NETH],
    ['paladins:netherite_holy_wand_smithing',           'paladins:diamond_holy_wand',    'paladins:netherite_holy_wand',            TEMPLATE, NETH],
    ['paladins:netherite_kite_shield_smithing',         'paladins:diamond_kite_shield',  'paladins:netherite_kite_shield',          TEMPLATE, NETH],
    ['paladins:netherite_mace_smithing',                'paladins:diamond_mace',         'paladins:netherite_mace',                 TEMPLATE, NETH],
    ['paladins:netherite_prior_robe_chest_smithing',    'paladins:prior_robe_chest',     'paladins:netherite_prior_robe_chest',     TEMPLATE, NETH],
    ['paladins:netherite_prior_robe_feet_smithing',     'paladins:prior_robe_feet',      'paladins:netherite_prior_robe_feet',      TEMPLATE, NETH],
    ['paladins:netherite_prior_robe_head_smithing',     'paladins:prior_robe_head',      'paladins:netherite_prior_robe_head',      TEMPLATE, NETH],
    ['paladins:netherite_prior_robe_legs_smithing',     'paladins:prior_robe_legs',      'paladins:netherite_prior_robe_legs',      TEMPLATE, NETH],

    // ── Wizards ──────────────────────────────────────────────────────────────
    ['wizards:netherite_arcane_robe_chest_smithing',    'wizards:arcane_robe_chest',     'wizards:netherite_arcane_robe_chest',     TEMPLATE, NETH],
    ['wizards:netherite_arcane_robe_feet_smithing',     'wizards:arcane_robe_feet',      'wizards:netherite_arcane_robe_feet',      TEMPLATE, NETH],
    ['wizards:netherite_arcane_robe_head_smithing',     'wizards:arcane_robe_head',      'wizards:netherite_arcane_robe_head',      TEMPLATE, NETH],
    ['wizards:netherite_arcane_robe_legs_smithing',     'wizards:arcane_robe_legs',      'wizards:netherite_arcane_robe_legs',      TEMPLATE, NETH],
    ['wizards:netherite_fire_robe_chest_smithing',      'wizards:fire_robe_chest',       'wizards:netherite_fire_robe_chest',       TEMPLATE, NETH],
    ['wizards:netherite_fire_robe_feet_smithing',       'wizards:fire_robe_feet',        'wizards:netherite_fire_robe_feet',        TEMPLATE, NETH],
    ['wizards:netherite_fire_robe_head_smithing',       'wizards:fire_robe_head',        'wizards:netherite_fire_robe_head',        TEMPLATE, NETH],
    ['wizards:netherite_fire_robe_legs_smithing',       'wizards:fire_robe_legs',        'wizards:netherite_fire_robe_legs',        TEMPLATE, NETH],
    ['wizards:netherite_frost_robe_chest_smithing',     'wizards:frost_robe_chest',      'wizards:netherite_frost_robe_chest',      TEMPLATE, NETH],
    ['wizards:netherite_frost_robe_feet_smithing',      'wizards:frost_robe_feet',       'wizards:netherite_frost_robe_feet',       TEMPLATE, NETH],
    ['wizards:netherite_frost_robe_head_smithing',      'wizards:frost_robe_head',       'wizards:netherite_frost_robe_head',       TEMPLATE, NETH],
    ['wizards:netherite_frost_robe_legs_smithing',      'wizards:frost_robe_legs',       'wizards:netherite_frost_robe_legs',       TEMPLATE, NETH],
    ['wizards:staff_netherite_arcane_smithing',         'wizards:staff_arcane',          'wizards:staff_netherite_arcane',          TEMPLATE, NETH],
    ['wizards:staff_netherite_fire_smithing',           'wizards:staff_fire',            'wizards:staff_netherite_fire',            TEMPLATE, NETH],
    ['wizards:staff_netherite_frost_smithing',          'wizards:staff_frost',           'wizards:staff_netherite_frost',           TEMPLATE, NETH],
    ['wizards:wand_netherite_arcane_smithing',          'wizards:wand_arcane',           'wizards:wand_netherite_arcane',           TEMPLATE, NETH],
    ['wizards:wand_netherite_fire_smithing',            'wizards:wand_fire',             'wizards:wand_netherite_fire',             TEMPLATE, NETH],
    ['wizards:wand_netherite_frost_smithing',           'wizards:wand_frost',            'wizards:wand_netherite_frost',            TEMPLATE, NETH],
  ]

  for (const [rid, base, result, template, addition] of recipes) {
    event.remove({ id: rid })
    event.recipes.minecraft.smithing_transform(
      { id: result },
      { item: template },
      { item: base },
      { item: addition }
    )
  }
})

