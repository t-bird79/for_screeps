module.exports = {
  // Automatische Reproduktion der Creeps
  run () {
    // Anzahl Creeps ermitteln
    var creepcount = 0;
    for (var sKey in Game.creeps) {
      if (Game.creeps.hasOwnProperty(sKey)) creepcount++;
    }
    // Alle Spawns durchgehen
    for(const i in Game.spawns) {
      // Prüfen ob es schon Creeps gibt und falls nötig ersten Creep erstellen
      if (!creepcount) {
        // keine Creeps vorhanden, erstelle Harvester
        console.log("keine Creeps vorhanden");
        Game.spawns[i].spawnCreep([WORK, CARRY, MOVE, MOVE], "FIRST", { memory: {role: 'harvester'} });
      }
      else {
        // Als nächstes .... ???
        // console.log("Anzahl Creeps:"+creepcount);
      }  
    }
  }
};
