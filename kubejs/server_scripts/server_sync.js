// Priority: 0

// Server-side entity synchronization
ServerEvents.tick(event => {
    // Process entity sync every 5 ticks
    if (event.tick % 5 !== 0) return
    
    event.server.players.forEach(player => {
        try {
            // Ensure player data is properly synced
            if (player.crouching) {
                // Force sync player state
                player.sync()
            }
        } catch (error) {
            LOGGER.error(`Server Sync: Error syncing player ${player.name}: ${error.toString()}`)
        }
    })
})

// Handle incoming client data
NetworkEvents.fromClient('entityjs:crouch_sync', event => {
    try {
        let player = event.player
        let data = event.data
        
        LOGGER.debug(`Server Sync: Processing crouch data for ${player.name}`)
        
        // Validate and process the data
        if (data.playerId === player.id) {
            // Update server-side state
            player.data.crouchSync = {
                state: data.crouching,
                lastUpdate: event.server.time
            }
        }
    } catch (error) {
        LOGGER.error(`Server Sync: Error processing client data: ${error.toString()}`)
    }
}) 