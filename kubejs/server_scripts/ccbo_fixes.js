// Fixes for Create: Cobblemon Balls Overhaul (createcobblemonballsoverhaul-0.0.4)
// The mod uses the old fluid_stack ingredient format that KubeJS Create 2101.x cannot parse.
// Remove and redefine all 13 affected recipes using Fluid.of() syntax.

ServerEvents.recipes(event => {
  // --- Removals ---
  event.remove({id: 'createmonballsoverhaul:mixing/tumblestone_coating'})
  event.remove({id: 'createmonballsoverhaul:mixing/light_tumblestone_coating'})
  event.remove({id: 'createmonballsoverhaul:mixing/dense_tumblestone_coating'})

  event.remove({id: 'createmonballsoverhaul:filling/coated_black_ball_lid'})
  event.remove({id: 'createmonballsoverhaul:filling/coated_blue_ball_lid'})
  event.remove({id: 'createmonballsoverhaul:filling/coated_green_ball_lid'})
  event.remove({id: 'createmonballsoverhaul:filling/coated_pink_ball_lid'})
  event.remove({id: 'createmonballsoverhaul:filling/coated_red_ball_lid'})
  event.remove({id: 'createmonballsoverhaul:filling/coated_white_ball_lid'})
  event.remove({id: 'createmonballsoverhaul:filling/coated_yellow_ball_lid'})
  event.remove({id: 'createmonballsoverhaul:filling/dense_coated_black_ball_lid'})
  event.remove({id: 'createmonballsoverhaul:filling/light_coated_blue_ball_lid'})

  event.remove({id: 'createmonballsoverhaul:sequenced_assembly/ball_lids/ancient_origin_ball_lid'})

  // --- Mixing: dust + 200mb water → 200mb coating fluid ---
  event.recipes.create.mixing(
    Fluid.of('createmonballsoverhaul:source_standard_tumblestone_coating', 200),
    ['createmonballsoverhaul:tumblestone_dust', Fluid.of('minecraft:water', 200)]
  )
  event.recipes.create.mixing(
    Fluid.of('createmonballsoverhaul:source_light_tumblestone_coating', 200),
    ['createmonballsoverhaul:sky_tumblestone_dust', Fluid.of('minecraft:water', 200)]
  )
  event.recipes.create.mixing(
    Fluid.of('createmonballsoverhaul:source_dense_tumblestone_coating', 200),
    ['createmonballsoverhaul:black_tumblestone_dust', Fluid.of('minecraft:water', 200)]
  )

  // --- Filling: ball lid + 200mb coating → coated ball lid ---
  const std  = 'createmonballsoverhaul:source_standard_tumblestone_coating'
  const lite = 'createmonballsoverhaul:source_light_tumblestone_coating'
  const dens = 'createmonballsoverhaul:source_dense_tumblestone_coating'

  event.recipes.create.filling('createmonballsoverhaul:coated_black_ball_lid',        ['createmonballsoverhaul:black_ball_lid',  Fluid.of(std, 200)])
  event.recipes.create.filling('createmonballsoverhaul:coated_blue_ball_lid',         ['createmonballsoverhaul:blue_ball_lid',   Fluid.of(std, 200)])
  event.recipes.create.filling('createmonballsoverhaul:coated_green_ball_lid',        ['createmonballsoverhaul:green_ball_lid',  Fluid.of(std, 200)])
  event.recipes.create.filling('createmonballsoverhaul:coated_pink_ball_lid',         ['createmonballsoverhaul:pink_ball_lid',   Fluid.of(std, 200)])
  event.recipes.create.filling('createmonballsoverhaul:coated_red_ball_lid',          ['createmonballsoverhaul:red_ball_lid',    Fluid.of(std, 200)])
  event.recipes.create.filling('createmonballsoverhaul:coated_white_ball_lid',        ['createmonballsoverhaul:white_ball_lid',  Fluid.of(std, 200)])
  event.recipes.create.filling('createmonballsoverhaul:coated_yellow_ball_lid',       ['createmonballsoverhaul:yellow_ball_lid', Fluid.of(std, 200)])
  event.recipes.create.filling('createmonballsoverhaul:dense_coated_black_ball_lid',  ['createmonballsoverhaul:black_ball_lid',  Fluid.of(dens, 200)])
  event.recipes.create.filling('createmonballsoverhaul:light_coated_blue_ball_lid',   ['createmonballsoverhaul:blue_ball_lid',   Fluid.of(lite, 200)])

  // --- Sequenced Assembly: ancient_origin_ball_lid ---
  // Input: red_ball_lid → 6 steps × 2 loops → ancient_origin_ball_lid
  const trans = 'createmonballsoverhaul:unfinished_ancient_origin_ball_lid'
  event.recipes.create.sequenced_assembly(
    'createmonballsoverhaul:ancient_origin_ball_lid',
    'createmonballsoverhaul:red_ball_lid',
    [
      event.recipes.create.deploying(trans, [trans, 'minecraft:netherite_scrap']),
      event.recipes.create.filling(trans,   [trans, Fluid.of('minecraft:lava', 250)]),
      event.recipes.create.pressing(trans, trans),
      event.recipes.create.filling(trans,   [trans, Fluid.of(std,  100)]),
      event.recipes.create.filling(trans,   [trans, Fluid.of(lite, 100)]),
      event.recipes.create.filling(trans,   [trans, Fluid.of(dens, 100)])
    ]
  ).transitionalItem(trans).loops(2)
})
