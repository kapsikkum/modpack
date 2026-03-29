// Daily Shop crafting recipe
// Top row:    red carpet, white carpet, red carpet
// Middle row: stick, emerald, stick
// Bottom row: any planks (tag)
ServerEvents.recipes((event) => {
  event.shaped('dailyshop:daily_shop', [
    'RWR',
    'SES',
    'PPP'
  ], {
    R: 'minecraft:red_carpet',
    W: 'minecraft:white_carpet',
    S: 'minecraft:stick',
    E: 'minecraft:emerald',
    P: '#minecraft:planks'
  })
})
