// Extra Disks items are hidden from JEI and EMI in favour of their Extra Storage equivalents.
// Almost Unified cannot hide them automatically because the two mods share no common recipes.
// Adding items to jei:hidden_from_recipe_viewers hides them from JEI.
// Adding items to emi:hidden_from_recipe_viewers hides them from EMI.

const EXTRADISKS_ITEMS = [
  'extradisks:256k_item_storage_disk',
  'extradisks:1024k_item_storage_disk',
  'extradisks:4096k_item_storage_disk',
  'extradisks:16384k_item_storage_disk',
  'extradisks:16384b_fluid_storage_disk',
  'extradisks:65536b_fluid_storage_disk',
  'extradisks:262144b_fluid_storage_disk',
  'extradisks:1048576b_fluid_storage_disk',
  'extradisks:256k_item_storage_block',
  'extradisks:1024k_item_storage_block',
  'extradisks:4096k_item_storage_block',
  'extradisks:16384k_item_storage_block',
  'extradisks:16384b_fluid_storage_block',
  'extradisks:65536b_fluid_storage_block',
  'extradisks:262144b_fluid_storage_block',
  'extradisks:1048576b_fluid_storage_block',
  'extradisks:256k_item_storage_part',
  'extradisks:1024k_item_storage_part',
  'extradisks:4096k_item_storage_part',
  'extradisks:16384k_item_storage_part',
  'extradisks:16384b_fluid_storage_part',
  'extradisks:65536b_fluid_storage_part',
  'extradisks:262144b_fluid_storage_part',
  'extradisks:1048576b_fluid_storage_part',
]

ServerEvents.tags('item', event => {
  event.add('jei:hidden_from_recipe_viewers', EXTRADISKS_ITEMS)
  event.add('emi:hidden_from_recipe_viewers', EXTRADISKS_ITEMS)
})
