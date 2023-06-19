function browserHistory(obj, arr) {

    let receiveObj = obj;
    let arrReceive = arr;
    // receiveObj["Browser Logs"].push('1');

    for (const key of arrReceive) {
        let test = key === "Clear History and Cache";
        let workarr = key.split(" ")
        if (test) {
            receiveObj["Browser Logs"] = [];
            receiveObj["Open Tabs"] = [];
            receiveObj["Recently Closed"] = [];
        } else if (workarr[0] === "Close" && receiveObj["Open Tabs"].includes(workarr[1])) {
            let index = receiveObj["Open Tabs"].indexOf(workarr[1]);
            receiveObj["Open Tabs"].splice(index, 1);
            receiveObj["Browser Logs"].push(key);
            receiveObj["Recently Closed"].push(workarr[1]);
        } else if (workarr[0] === "Open" && !receiveObj["Open Tabs"].includes(workarr[1])) {
            receiveObj["Open Tabs"].push(workarr[1]);
            receiveObj["Browser Logs"].push(key);

        }

    }
    console.log(receiveObj["Browser Name"]);
    for (const [key, value] of Object.entries(receiveObj)) {
        if (key !== "Browser Name") {
            console.log(`${key}: ${value.join(", ")}`);
        }
        
    }
}
browserHistory({
    "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},
    ["Close Facebook", "Open StackOverFlow", "Open Google"]
)
console.log(`+++++++++++++++++++++++++++++++++++++`);
browserHistory({
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
)