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
      // Wie viel Energie steht dem Spawn zur Verfuegung?  
      var spenergy = Game.spawns[i].energy;
      // Kosten des ersten Harvesters
      var hprice = BODYPART_COST['work']+BODYPART_COST['carry']+2*BODYPART_COST['move'];
      // console.log(hprice);
      // Pruefen ob es schon Creeps gibt und falls noetig ersten Creep erstellen
      if (!creepcount & spenergy>=hprice) {
        // keine Creeps vorhanden, erstelle Harvester
        console.log("keine Creeps vorhanden");
        Game.spawns[i].spawnCreep([WORK, CARRY, MOVE, MOVE], "FIRST", { memory: {role: 'harvester', status: 'idle', for: ''} });
      }
      else {
        // Als nÃÂ¤chstes .... ???
        // console.log("Anzahl Creeps:"+creepcount);
      }  
    }
  }
};
