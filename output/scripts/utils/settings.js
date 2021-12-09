// Launcher settings
const settings = {
    xmx: '4096m',
    xms: '4096m',
    args: '-XX:+UseG1GC -Dsun.rmi.dgc.server.gcInterval=600000 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:G1NewSizePercent=20 -XX:G1ReservePercent=20 -XX:MaxGCPauseMillis=50 -XX:G1HeapRegionSize=32 '
}

module.exports = {settings}