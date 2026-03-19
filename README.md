# Modpack

**Minecraft 1.21.1 · NeoForge 21.1.219 · By Solariity & kapsikkum**

A kitchen-sink modpack combining Create, Cobblemon, Ars Nouveau, Applied Energistics 2, Mekanism, and a lot more.

---

## Contributing Guide (hi Solariity 👋)

### Prerequisites

- Install [packwiz](https://packwiz.infra.link/) and make sure it's on your PATH
- Clone this repo and `cd` into it
- All commands below should be run from the repo root

### Adding a mod

Always use Modrinth first. Only fall back to CurseForge if the mod isn't on Modrinth.

```bash
# From Modrinth (preferred)
packwiz modrinth add <slug|url|id>

# From CurseForge (fallback only)
packwiz curseforge add <slug|url|id>
```

Example:
```bash
packwiz modrinth add https://modrinth.com/mod/sodium
```

packwiz resolves dependencies automatically and runs `refresh` for you.

### Removing a mod

```bash
packwiz remove <name>     # name = slug shown in its .pw.toml file
packwiz refresh
```

### Updating mods

```bash
packwiz update --all -y   # update everything not pinned
packwiz update <name>     # update one mod
```

### After manually editing any config file

```bash
packwiz refresh           # regenerates index.toml and hashes
```

Never manually edit `index.toml` or any `*.pw.toml` file — always go through packwiz.
The **only** file safe to edit directly is `pack.toml`.

### Side-only mods

```bash
packwiz modrinth add sodium --side client
packwiz modrinth add luckperms --side server
```

### Pinning / unpinning

```bash
packwiz pin <name>     # lock at current version
packwiz unpin <name>   # allow updates again
```

### Version mismatch warnings

If `packwiz update --all` prints a warning about inconsistent version numbers, no action is needed — it picks the newest by release date. If the wrong version was selected, pin the mod and manually add the correct URL.

Some mods only publish for `1.21` not `1.21.1`. If you see `no valid versions found`, run:

```bash
packwiz settings acceptable-versions 1.21,1.21.1
```

### Committing

Keep PRs small and scoped (e.g. "Add Sodium" or "Tweak Create config"). If you had to manually edit a `.pw.toml`, say why in the PR and confirm you ran `packwiz refresh`.

---

## Pinned Mods ⚠️

These mods are locked at specific versions and **must not be updated** without checking compatibility first.

| Mod | Pinned version | Reason |
|-----|---------------|--------|
| **Relics** | `0.10.7.8` | Newer versions break compatibility with other mods in the pack |
| **Relics: Artifacts Compat** | `0.9.7` | Last version supporting Relics 0.10.x — v1.0 requires Relics ≥ 0.11.8, causes crash on launch |
| **Reliquified Ars Nouveau** | `0.6.1` | Newer versions require Relics ≥ 0.11.8 |
| **Reliquified L_Ender's Cataclysm** | `0.1.1` | Newer versions require Relics ≥ 0.11.8 |
| **Sinytra Connector** | `2.0.0-beta.8` | beta.9+ broke Cardinal Components API classloading through Connector — causes `things` to crash the server with `NoClassDefFoundError: org/ladysnake/cca/api/v3/entity/EntityComponentInitializer` at startup |

> **Warning:** Do NOT unpin or update any of the above without also updating Relics to ≥ 0.11.8 and verifying all four are mutually compatible.

> **Warning (Connector):** Before unpinning Connector, test that `things` (and anything else using Cardinal Components API via Connector) still loads on the dedicated server. The CCA classloader regression was introduced between beta.8 and beta.9.

---

## Mod List

<details>
<summary>Click to expand (~240 mods)</summary>

### Core & APIs
- Architectury API
- AzureLib
- Balm
- Caelus API
- Cloth Config API
- CreativeCore
- Cupboard
- Curios API
- Framework
- Fzzy Config
- Geckolib
- GlitchCore
- Glodium
- JinxedLib
- Kotlin for Forge
- libIPN
- Lionfish-API
- Lithostitched
- Mechanicals Lib
- Moonlight Lib
- Moog's Structure Lib
- Oracle Index
- oωo (owo-lib)
- Patchouli
- playerAnimator
- Puzzles Lib
- Resourceful Lib
- Rhino
- ShatterLib / OctoLib
- StateObserver
- Stitch (formerly Athena)
- SuperMartijn642's Config Lib
- SuperMartijn642's Core Lib
- YetAnotherConfigLib (YACL)

### Performance & Compatibility
- Connectivity
- FerriteCore
- Forgified Fabric API
- KryptonFoxified
- Lithium
- ModernFix
- ScalableLux
- Sinytra Connector
- Connector Extras
- Sodium
- Sodium Extras
- Sodium Options API
- Too Fast

### Create & Addons
- Create
- Create: Bells & Whistles
- Create: Central Kitchen
- Create: Cobblemon Balls Overhaul
- Create Confectionery
- Create: Connected
- Create: Copycats+
- Create Crafts & Additions
- Create: Dragons Plus
- Create: Dreams & Desires
- Create Encased
- Create: Enchantable Machinery
- Create: Enchantment Industry
- Create Enchantment Industry Plus
- Create: Fishery Industry
- Create: Fuel Motor
- Create: Integrated Farming
- Create: Let The Adventure Begin
- Create Man of Many Planes
- Create Mechanical Spawner
- Create Oritech Compat
- Create: Power Loader
- Create: Quality of Life
- Create: Renewable Netherite
- Create Sifting
- Create Stock Bridge
- Create: Stones
- Create: Structures Arise
- Create Stuff 'N Additions
- Create: Teleporters
- Create: Trading Floor
- Create: Ultimate Factory
- Create: Vibrant Vaults
- Create: Winery
- Steam 'n' Rails

### Cobblemon & Addons
- Cobblemon
- BoniMons
- Cobbleloots: Loot Balls and More!
- Cobblemon Capture XP
- Cobblemon Fight or Flight Reborn
- Cobblemon Integrations
- Cobblemon: Mega Showdown
- Cobblemon Pokenav
- Cobblemon Size Variations
- Cobblemon Spawn Notification
- Cobblemon Tim Core
- Cobbreeding
- HiddenMons [Cobblemon]
- Tomtaru's Cobblemon and Farmer's Delight Tweaks

### Ars Nouveau & Magic
- Ars Nouveau
- Ars Creo
- Ars Énergistique
- Enchanted: Witchcraft
- Lavender
- Relics
- Relics: Artifacts Compat
- Reliquified Ars Nouveau
- Reliquified L_Ender's Cataclysm
- StarbuncleMania
- Things

### Applied Energistics 2
- Applied Energistics 2
- Applied Energistics 2 Wireless Terminals
- Applied Mekanistics
- Bigger AE2
- Extended AE
- GuideME

### Mekanism
- Mekanism

### Food & Farming
- Aether's Delight
- Brewin' And Chewin'
- Chef's Delight
- Cooking for Blockheads
- End's Delight
- Expanded Delight
- Farmer's Delight
- Farming for Blockheads
- Fright's Delight
- Repurposed Structures - Farmer's Delight Compat
- Serene Seasons

### Exploration & Structures
- Dungeons and Taverns
- Incendium
- MES - Moog's End Structures
- MMV - Moog's Missing Villages
- MNS - Moog's Nether Structures
- MSS - Moog's Soaring Structures
- MVS - Moog's Voyager Structures
- Nullscape
- Repurposed Structures
- Repurposed Structures - Friends and Foes Compat
- Sky Villages
- Structory
- Structory: Towers
- Tectonic
- Terralith
- Tidal Towns
- Towers of the Wild Modded
- Underground Bunkers
- Underground Villages
- When Dungeons Arise: Seven Seas
- Whimscape
- YUNG's API
- YUNG's Better Desert Temples
- YUNG's Better Dungeons
- YUNG's Better End Island
- YUNG's Better Jungle Temples
- YUNG's Better Mineshafts
- YUNG's Better Nether Fortresses
- YUNG's Better Ocean Monuments
- YUNG's Better Strongholds
- YUNG's Better Witch Huts
- YUNG's Bridges
- YUNG's Extras

### Dimensions
- Deeper and Darker
- The Aether
- Zelda: Hyrule Terrors

### Mobs & Combat
- Artifacts
- Better Combat
- Dragonkind Evolved (End Battle Reborn)
- Friends & Foes
- Gardens of the Dead
- Goblin Traders
- L_Ender's Cataclysm
- Musket Mod
- Mutant Monsters
- Mythic Metals
- Nyf's Spiders
- Ribbits
- Simply Swords

### Building & Decoration
- A Man With Plushies
- Amendments
- Builder's Boundry
- Chipped
- Coastal Waves
- Diagonal Fences
- Diagonal Walls
- Every Compat (Stone Zone)
- Every Compat (Wood Good)
- Handcrafted
- Immersive Paintings
- Items Displayed
- Macaw's Bridges
- Macaw's Doors
- Macaw's Fences and Walls
- Macaw's Furniture
- Macaw's Lights and Lamps
- Macaw's Paths and Pavings
- Macaw's Roofs
- Macaw's Trapdoors
- Macaw's Windows
- Mel's DeCo
- MrCrayfish's Furniture Mod: Refurbished
- Rechiseled
- Rechiseled: Chipped
- SecurityCraft
- Supplementaries

### Travel & Transport
- Air Balloons
- Hang Glider
- Immersive Aircraft
- Man of Many Planes
- Splinecart
- Traveler's Backpack
- Waystones

### Inventory & UI
- AppleSkin
- Carry On
- Clumps
- Comforts
- Controlling
- Easy Anvils
- Easy Magic
- EMI
- Explorer's Compass
- Inventory Profiles Next
- Jade 🔍
- Jade Addons
- Just Enough Items (JEI)
- Just Zoom
- KeyBind Bundles
- Lootr
- Mouse Tweaks
- Nature's Compass
- Polymorph
- Recipe Essentials
- Reese's Sodium Options
- Searchables
- Simple Hats
- Size Rayguns
- Trash Cans
- TrashSlot
- You're in Grave Danger

### Maps & Info
- BlueMap
- JourneyMap
- JourneyMap Integration
- Modopedia
- ProbeJS
- spark

### Quality of Life
- Accessories
- Bridging Mod
- Building Wands
- Chunky
- Configured
- Crawl
- Default Options
- Elytra Slot
- Fast IP Ping
- Fusion (Connected Textures)
- Global Packs
- Leaves Be Gone
- Load My F***ing Tags
- Moyai
- Particular ✨ Reforged
- Ponder for KubeJS
- Seamless Loading Screen
- ServerCore
- Subtle Effects
- Undertale Death Screen

### Visual & Audio
- AmbientSounds
- [EMF] Entity Model Features
- [ETF] Entity Texture Features
- Entity Culling
- Exposure
- Fresh Animations
- Iris Shaders
- Luminous
- Sound Physics Remastered

### Tech & Scripting
- Almost Unified
- Alloy Forgery
- KubeJS
- Oritech
- PneumaticCraft: Repressurized

### Quests
- FTB Chunks
- FTB Essentials
- FTB Library
- FTB Quests
- FTB Teams
- FTB Ultimine

</details>

---

## FTB Quests

Quest chapters are in `config/ftbquests/quests/chapters/`.

| Chapter | Topic |
|---------|-------|
| Getting Started | Vanilla progression — wood to Ender Dragon |
| Create: Rotational Force | Create mod + Steam 'n' Rails |
| Cobblemon | Catching, breeding, Mega Evolution |
| Ars Nouveau: Arcane Arts | Spellcasting, Source, Archmage |
| Applied Energistics 2 | ME network, autocrafting |
| Mekanism | Ore processing, nuclear power |
| Food & Farming | Farmer's Delight, Cooking for Blockheads, Brewin' & Chewin' |
| Adventure & Exploration | Bosses, Deep Dark, Aether, L_Ender's Cataclysm |

---

## Controls

Most non-standard keybinds are grouped into three radial menus via [KeyBind Bundles](https://www.curseforge.com/minecraft/mc-mods/keybind-bundles).

**How radial menus work:**
- **Hold** the assigned key to open the radial menu, hover over an entry, then release.
- **Right-click** an entry to bookmark it — the next press of that key will trigger it directly without opening the radial.
- To open the radial even when a bookmark is set, hold **Left Alt** while pressing the key.

### Radial Menus

| Key | Bundle | Contents |
|-----|--------|----------|
| **Z** | Pokemon | Battle commands (Attack, Move+Attack, Move, Stay, No Command, Attack Position, Clear) + Move slots 1–4 |
| **X** | Abilities | Artifacts toggles · Ars Nouveau (familiar, spellbook, spell HUD) · Cataclysm helmet/boots abilities · Mekanism head mode · Aether invisibility · PneumaticCraft armor upgrades (jet boots, hover, magnet, night vision, trackers, charging, scuba) |
| **G** | Utility | AE2 terminals · Create tools · Building Wands · Traveler's Backpack · JourneyMap (waypoints, zoom, minimap toggle) |
| **V** | Settings | Shader Pack selection · Reload Shaders · Entity Culling toggle · Jade Config |

### Other Notable Binds

| Key | Action |
|-----|--------|
| **J** | Cobblemon summary (selected party Pokémon) |
| **M** | JourneyMap fullscreen |
| **C** | Crawl (toggle) |
| **Left Alt** | Radial menu modifier (hold while pressing a bundle key to force-open the radial) |
| **` (Grave)** | FTB Ultimine |
