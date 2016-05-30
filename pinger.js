var fs = require('fs');
var http  = require('http');
var config;


function start() {
    
}

function loadConfig(){
    config = JSON.parse(fs.readFileSync('./config/config.json', 'utf8'));
    console.log("Loaded Config");
    var listLength = config.serverList.length;
    for(var i = 0; i < listLength;  i++) {
        console.log(JSON.stringify(config.serverList[i].server));
    }

    return config;
}

module.exports = {
    start: start(),
    loadConfig: loadConfig()
};