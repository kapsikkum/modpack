// Wallet crafting recipe
// 1 gold ingot in the center, surrounded by leather (all 8 surrounding slots)
ServerEvents.recipes((event) => {
  event.shaped('kubejs:wallet', [
    'LLL',
    'LGL',
    'LLL'
  ], {
    L: 'minecraft:leather',
    G: 'minecraft:gold_ingot'
  })
})
