// Register the Vinyl Compound item used for pressing blank music discs
// Part of the custom vinyl record production chain

StartupEvents.registry('item', (event) => {
  event
    .create('vinyl_compound')
    .displayName(Text.of('Vinyl Compound'))
    .tooltip(Text.of('§7A blend of HDPE polymer and carbon black,'))
    .tooltip(Text.of('§7ready to be pressed into a music disc.'))
})
