ServerEvents.recipes(event => {
  // Crush flint into gunpowder
  event.recipes.create.crushing(
    [Item.of('minecraft:gunpowder')],
    'minecraft:flint'
  )
})
