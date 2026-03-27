// Wallet — deposit emeralds on right-click, withdraw on sneak+right-click
// Ported from BigChadGuys Plus (https://github.com/bigchadguys/bigchadguys-plus-modpack)
// Adapted for NeoForge 1.21.1

const MAX_WITHDRAWAL_AMOUNT = 5184 // 576 blocks worth (9×576 = 5184 emeralds max withdrawal)
const INTEREST_TIMER = 36000 // ticks — 30 minutes at 20 tps
const INTEREST_RATE = 1.005 // 0.5% per period

function depositEmeralds(player, depositAmount) {
  const balance = Number(player.persistentData.PersonalBank) || 0

  if (!(depositAmount > 0)) {
    player.statusMessage = Text.green(`You have ${balance} Emerald${balance !== 1 ? 's' : ''}.`)
    return
  }

  const newBalance = balance + depositAmount
  player.persistentData.PersonalBank = newBalance
  player.inventory.clear('minecraft:emerald')
  player.inventory.clear('minecraft:emerald_block')

  player.statusMessage = Text.green(`Deposited ${depositAmount} Emerald${depositAmount !== 1 ? 's' : ''}! Balance: ${newBalance}.`)
}

function withdrawEmeralds(player, bankAmount) {
  if (!(bankAmount > 0)) {
    player.statusMessage = Text.of('§7Your wallet is empty.')
    return 0
  }

  const amount = Math.min(bankAmount, MAX_WITHDRAWAL_AMOUNT)
  const blocks = Math.floor(amount / 9)
  const singles = amount % 9
  const actual = singles + blocks * 9

  if (blocks > 0) player.give(Item.of('minecraft:emerald_block', blocks))
  if (singles > 0) player.give(Item.of('minecraft:emerald', singles))

  const newBalance = bankAmount - actual
  player.statusMessage = Text.green(`Withdrew ${actual} Emerald${actual !== 1 ? 's' : ''}. Balance: ${newBalance}.`)
  return newBalance
}

ItemEvents.rightClicked('kubejs:wallet', (e) => {
  const { player } = e

  const { x, y, z } = player
  player.server.runCommandSilent(`playsound minecraft:block.amethyst_block.hit master @p ${x} ${y} ${z}`)

  if (!player.isCrouching()) {
    const emeraldCount = player.inventory.count('minecraft:emerald')
    const emeraldBlockCount = player.inventory.count('minecraft:emerald_block')
    const depositAmount = (Number(emeraldCount) || 0) + (Number(emeraldBlockCount) || 0) * 9
    depositEmeralds(player, depositAmount)
  } else {
    const balance = Number(player.persistentData.PersonalBank) || 0
    player.persistentData.PersonalBank = withdrawEmeralds(player, balance)
  }
})

// Interest — paid every 30 minutes while online
let tick = 0
ServerEvents.tick((e) => {
  tick += 1
  if (tick !== INTEREST_TIMER) return
  tick = 0

  e.server.players.forEach((player) => {
    const balance = Number(player.persistentData.PersonalBank) || 0
    if (balance < 24) return // no interest on tiny balances

    const interest = Math.floor(balance * INTEREST_RATE) - balance
    if (interest > 0) {
      player.persistentData.PersonalBank = balance + interest
      player.statusMessage = Text.green(`+${interest} Emerald${interest !== 1 ? 's' : ''} interest! Balance: ${balance + interest}.`)
    }
  })
})
