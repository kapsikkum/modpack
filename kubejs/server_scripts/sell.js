// Selling system — /sell hand  |  /sell all
// Inspired by BCG's Selling Bin mod (https://modrinth.com/mod/selling-bin)
// The original mod is Fabric-only / 1.20.1; this is a KubeJS port for NeoForge 1.21.1
//
// Prices are adapted from BCG's selling_bin.json, with BCG-specific mod items
// replaced by the equivalent mods in this pack.
//
// Usage:
//   /sell hand     — sell the stack currently in your main hand
//   /sell all      — sell all sellable stacks across your inventory
//
// Emeralds go directly into your Wallet bank (use kubejs:wallet to withdraw).

// ── Price map: item_id → { amount: N, value: E } ──────────────────────────
// amount = how many items must be sold at once for that value in emeralds
const PRICES = {
  // ── Vanilla crops ─────────────────────────────────────────────────────────
  'minecraft:wheat':           { amount: 16, value: 1 },
  'minecraft:potato':          { amount: 24, value: 1 },
  'minecraft:carrot':          { amount: 24, value: 1 },
  'minecraft:melon_slice':     { amount: 16, value: 1 },
  'minecraft:pumpkin':         { amount:  8, value: 1 },
  'minecraft:cactus':          { amount: 16, value: 1 },
  'minecraft:beetroot':        { amount: 16, value: 1 },
  'minecraft:cocoa_beans':     { amount: 16, value: 1 },
  'minecraft:bamboo':          { amount: 16, value: 1 },
  'minecraft:sugar_cane':      { amount: 16, value: 1 },
  'minecraft:kelp':            { amount: 16, value: 1 },
  'minecraft:glow_berries':    { amount: 16, value: 1 },
  'minecraft:apple':           { amount: 32, value: 6 },
  'minecraft:paper':           { amount: 16, value: 1 },
  'minecraft:sugar':           { amount: 16, value: 2 },

  // ── Farmer's Delight crops ────────────────────────────────────────────────
  'farmersdelight:tomato':     { amount: 12, value: 1 },
  'farmersdelight:onion':      { amount: 12, value: 1 },
  'farmersdelight:rice':       { amount: 12, value: 1 },
  'farmersdelight:cabbage':    { amount: 12, value: 1 },

  // ── Cobblemon apricorns ───────────────────────────────────────────────────
  'cobblemon:white_apricorn':  { amount: 12, value: 1 },
  'cobblemon:yellow_apricorn': { amount: 12, value: 1 },
  'cobblemon:red_apricorn':    { amount: 12, value: 1 },
  'cobblemon:green_apricorn':  { amount: 12, value: 1 },
  'cobblemon:pink_apricorn':   { amount: 12, value: 1 },
  'cobblemon:blue_apricorn':   { amount: 12, value: 1 },
  'cobblemon:black_apricorn':  { amount: 12, value: 1 },

  // ── Brewin' and Chewin' ───────────────────────────────────────────────────
  'brewinandchewin:hops':      { amount: 12, value: 1 },
  'brewinandchewin:barley':    { amount: 12, value: 1 },

  // ── Vanilla mob drops ─────────────────────────────────────────────────────
  'minecraft:blaze_rod':       { amount: 16, value: 2 },
  'minecraft:feather':         { amount: 16, value: 3 },
  'minecraft:leather':         { amount: 16, value: 4 },
  'minecraft:string':          { amount: 16, value: 1 },
  'minecraft:arrow':           { amount: 32, value: 1 },
  'minecraft:gunpowder':       { amount:  8, value: 1 },
  'minecraft:rotten_flesh':    { amount: 32, value: 1 },
  'minecraft:ender_pearl':     { amount: 16, value: 3 },
  'minecraft:ghast_tear':      { amount:  8, value: 1 },
  'minecraft:prismarine_shard':{ amount: 16, value: 1 },
  'minecraft:magma_cream':     { amount: 16, value: 1 },
  'minecraft:bone':            { amount: 32, value: 1 },
  'minecraft:slime_ball':      { amount: 32, value: 2 },
  'minecraft:spider_eye':      { amount: 16, value: 1 },
  'minecraft:ink_sac':         { amount: 16, value: 1 },
  'minecraft:phantom_membrane':{ amount:  4, value: 1 },

  // ── Stones & natural blocks ───────────────────────────────────────────────
  'minecraft:cobblestone':        { amount: 32, value: 1 },
  'minecraft:blackstone':         { amount: 32, value: 2 },
  'minecraft:cobbled_deepslate':  { amount: 32, value: 2 },
  'minecraft:calcite':            { amount: 32, value: 2 },
  'minecraft:tuff':               { amount: 32, value: 2 },
  'minecraft:andesite':           { amount: 32, value: 2 },
  'minecraft:diorite':            { amount: 32, value: 2 },
  'minecraft:granite':            { amount: 32, value: 2 },
  'minecraft:sand':               { amount: 32, value: 2 },
  'minecraft:gravel':             { amount: 32, value: 2 },
  'minecraft:netherrack':         { amount: 32, value: 1 },
  'minecraft:soul_sand':          { amount: 16, value: 1 },
  'minecraft:dirt':               { amount: 32, value: 2 },

  // ── Logs ──────────────────────────────────────────────────────────────────
  'minecraft:oak_log':        { amount: 32, value: 2 },
  'minecraft:spruce_log':     { amount: 32, value: 3 },
  'minecraft:birch_log':      { amount: 32, value: 3 },
  'minecraft:acacia_log':     { amount: 32, value: 3 },
  'minecraft:jungle_log':     { amount: 32, value: 3 },
  'minecraft:cherry_log':     { amount: 32, value: 3 },
  'minecraft:dark_oak_log':   { amount: 32, value: 3 },
  'minecraft:mangrove_log':   { amount: 32, value: 3 },

  // ── Metals ────────────────────────────────────────────────────────────────
  'minecraft:iron_ingot':     { amount: 8, value: 1 },
  'minecraft:gold_ingot':     { amount: 8, value: 1 },
  'minecraft:copper_ingot':   { amount: 8, value: 1 },
  'minecraft:diamond':        { amount: 2, value: 1 },

  // ── Raw fish & meat ───────────────────────────────────────────────────────
  'minecraft:salmon':         { amount: 10, value: 1 },
  'minecraft:cooked_salmon':  { amount:  8, value: 1 },
  'minecraft:cod':            { amount: 10, value: 1 },
  'minecraft:cooked_cod':     { amount:  8, value: 1 },
  'minecraft:chicken':        { amount: 12, value: 1 },
  'minecraft:cooked_chicken': { amount: 10, value: 1 },
  'minecraft:porkchop':       { amount:  6, value: 1 },
  'minecraft:cooked_porkchop':{ amount:  5, value: 1 },
  'minecraft:beef':           { amount:  6, value: 1 },
  'minecraft:cooked_beef':    { amount:  5, value: 1 },
  'minecraft:mutton':         { amount:  6, value: 1 },
  'minecraft:cooked_mutton':  { amount:  5, value: 1 },
  'minecraft:rabbit':         { amount:  6, value: 1 },
  'minecraft:cooked_rabbit':  { amount:  5, value: 1 },
}

// ── Helper: sell a single item stack, return emeralds earned ──────────────
function sellStack(player, itemId, count) {
  const price = PRICES[itemId]
  if (!price) return 0

  const sets = Math.floor(count / price.amount)
  if (sets === 0) return 0

  const sold = sets * price.amount
  const earned = sets * price.value

  // KubeJS clear() only accepts a single argument (item ID); use
  // clear-all + give-back to remove exactly 'sold' items.
  const totalInInventory = player.inventory.count(itemId)
  const excess = totalInInventory - sold
  player.inventory.clear(itemId)
  if (excess > 0) {
    player.give(Item.of(itemId, excess))
  }

  const bankData = player.persistentData
  bankData.PersonalBank = (bankData.PersonalBank || 0) + earned

  return earned
}

// /sell command removed — selling is now handled by the Selling Bin mod (config/sellingbin/selling_bin.json).
