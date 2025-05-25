// Priority: 0

// Client-side animation handling
ClientEvents.tick(event => {
    // Throttle animation updates to reduce network load
    if (event.tick % 2 !== 0) return // Only process every other tick
    
    let player = event.player
    if (!player) return
    
    // Handle animation states
    if (player.crouching) {
        // Add custom handling for crouch state
        ClientEvents.sendData('entityjs:crouch_sync', {
            playerId: player.id,
            crouching: true,
            tick: event.tick
        })
    }
})

// Handle incoming animation data
NetworkEvents.dataReceived('entityjs:crouch_sync', event => {
    try {
        let data = event.data
        LOGGER.debug(`Animation Fix: Received crouch sync data: ${JSON.stringify(data)}`)
    } catch (error) {
        LOGGER.error(`Animation Fix: Error processing animation data: ${error.toString()}`)
    }
}) 