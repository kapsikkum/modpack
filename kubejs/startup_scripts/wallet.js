// Register the Wallet item
// Ported from BigChadGuys Plus (https://github.com/bigchadguys/bigchadguys-plus-modpack)
// Adapted for NeoForge 1.21.1

StartupEvents.registry('item', (event) => {
  event
    .create('wallet')
    .maxStackSize(1)
    .displayName(Text.of('§6Wallet'))
    .tooltip(Text.of('§7Right-click with emeralds to deposit'))
    .tooltip(Text.of('§7Sneak + right-click to withdraw'))
    .tooltip(Text.of('§a+0.5% interest every 30 min'))
})
