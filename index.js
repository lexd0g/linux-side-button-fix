const { Plugin } = require('powercord/entities');

module.exports = class Template extends Plugin {
    startPlugin() {
        return;
    }
    pluginWillUnload() {
        return;
    }
};

require('electron').ipcRenderer.removeListener('DISCORD_NAVIGATE_BACK', require('electron').ipcRenderer._events.DISCORD_NAVIGATE_BACK)
