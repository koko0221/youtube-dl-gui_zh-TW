const execa = require("execa");

const actions = {
    "win32": {
        "睡眠": ["rundll32.exe", "powrprof.dll,SetSuspendState", "0,1,0"],
        "鎖定": ["rundll32.exe", "user32.dll,LockWorkStation"],
        "關機": ["shutdown", "/s", "/f", "/t", "0"],
        "休眠 (如果啟用)": ["shutdown", "/h", "/f", "/t", "0"],
        "重新啟動": ["shutdown", "/r", "/f", "/t", "0"],
    },
    "linux": {
        "睡眠": ["systemctl", "suspend"],
        "關機": ["shutdown", "-h", "now"],
        "重新啟動": ["shutdown", "-r", "now"]
    },
    "darwin": {
        "睡眠": ["pmset", "sleepnow"],
        "關機": ["shutdown", "-h", "now"],
        "重新啟動": ["shutdown", "-r", "now"]
    }
}

class DoneAction {
    constructor() {
        this.platform = process.platform;
    }

    getActions() {
        return Object.keys(actions[this.platform]);
    }

    async executeAction(action) {
        if(action === "Close app") {
            process.exit(1);
            return;
        } else if(action === "Do nothing") {
            return;
        }
        const command = actions[this.platform][action][0];
        const args = actions[this.platform][action].slice(1);
        try {
            await execa(command, args);
        } catch(e) {
            console.error(e)
        }
    }

}

module.exports = DoneAction;
