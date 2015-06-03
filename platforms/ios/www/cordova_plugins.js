cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/io.gvox.plugin.phonecalltrap/www/PhoneCallTrap.js",
        "id": "io.gvox.plugin.phonecalltrap.PhoneCallTrap",
        "clobbers": [
            "window.PhoneCallTrap"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "io.gvox.plugin.phonecalltrap": "0.1.0"
}
// BOTTOM OF METADATA
});