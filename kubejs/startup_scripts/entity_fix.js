// Priority: 0

Platform.mods.kubejs.name = 'KubeJS'

// Import ProbeJS utilities if available
const LOGGER = Java.loadClass('dev.latvian.mods.kubejs.util.ConsoleJS').INSTANCE

// Handle entity data synchronization with better error handling
EntityEvents.afterDataPacket('minecraft:player', (event, entity, data) => {
  try {
    // Check if the data is related to crouching
    if (data && data.has('field_21')) {
      let oldValue = data.get('field_21')
      LOGGER.debug(`EntityJS Fix: Received field_21 data: ${oldValue}`)
      
      if (typeof oldValue === 'string') {
        // Convert string to proper format if needed
        let newValue = {
          keyPressed: false,
          selected: 0,
          tick: 0,
          type: oldValue
        }
        
        data.set('field_21', newValue)
        LOGGER.debug(`EntityJS Fix: Converted field_21 data to: ${JSON.stringify(newValue)}`)
      }
    }
  } catch (error) {
    LOGGER.error(`EntityJS Fix: Error handling entity data: ${error.toString()}`)
    // Don't throw the error - we want to handle it gracefully
  }
})

// Register a startup event to verify the fix is loaded
StartupEvents.registry('item', event => {
  LOGGER.info('EntityJS Fix: Initialization complete')
}) 