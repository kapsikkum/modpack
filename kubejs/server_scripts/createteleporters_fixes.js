// Fixes for Create Teleporters Remastered (createteleporters-remastered-1.1.0)
// The mod uses the old fluid_stack ingredient format that KubeJS Create 2101.x cannot parse.
// Remove and redefine the two affected recipes using Fluid.of() syntax.

ServerEvents.recipes(event => {
  event.remove({id: 'createteleporters:quantum_fluid_recipe'})
  event.remove({id: 'createteleporters:quantum_mechanism_recipe'})

  // Quantum fluid: chorus fruit + 250mb water → 250mb quantum fluid (heated mixing)
  event.recipes.create.mixing(
    Fluid.of('createteleporters:quantum_fluid', 250),
    ['minecraft:chorus_fruit', Fluid.of('minecraft:water', 250)]
  ).heated()

  // Quantum mechanism: sequenced assembly on a sturdy sheet
  const trans = 'createteleporters:incomplete_q_mechanism'
  event.recipes.create.sequenced_assembly(
    'createteleporters:quantum_mechanism',
    'create:sturdy_sheet',
    [
      event.recipes.create.filling(trans, [trans, Fluid.of('createteleporters:quantum_fluid', 250)]),
      event.recipes.create.deploying(trans, [trans, 'createteleporters:advanced_part']),
      event.recipes.create.pressing(trans, trans)
    ]
  ).transitionalItem(trans).loops(1)
})
