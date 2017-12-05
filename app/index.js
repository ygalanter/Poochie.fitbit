// import libraries
import clock from "clock";
import document from "document";
import {display} from "display";
import * as messaging from "messaging";
import * as fs from "fs";
import { me } from "appbit";
import {preferences} from "user-settings";
import { battery } from "power";
import { goals, today } from "user-activity";
import dtlib from "../common/datetimelib"


// trying to get user settings if saved before
let userSettings;
try {
  userSettings = fs.readFileSync("user_settings.json", "json");
} catch (e) {
  userSettings = {
    backColor: "black",
    timeColor: "yellow",
    timezoneOffset: null, // secondary timezone UTC offset
    timezoneName: null, // secondary timezone short name
  }
}

// on app exit collect settings 
me.onunload = () => {
    fs.writeFileSync("user_settings.json", userSettings, "json");
}

function setTimeColor(color) {
  h1Local.style.fill = color; 
  h2Local.style.fill = color; 
  m1Local.style.fill = color; 
  m2Local.style.fill = color; 
  
  h1Remote.style.fill = color;
  h2Remote.style.fill = color;
  m1Remote.style.fill = color;
  m2Remote.style.fill = color;
  
  localName.style.fill = color;
  remoteName.style.fill = color;
}

function setBackColor(color) {
  document.getElementById("back").style.fill = color;
}


// get user time format preference
dtlib.timeFormat = preferences.clockDisplay == "12h" ? 1: 0;
// Update the clock every minute
clock.granularity = "minutes";


let h1Local = document.getElementById("h1Local");
let h2Local = document.getElementById("h2Local");
let m1Local = document.getElementById("m1Local");
let m2Local = document.getElementById("m2Local");

let h1Remote = document.getElementById("h1Remote");
let h2Remote = document.getElementById("h2Remote");
let m1Remote = document.getElementById("m1Remote");
let m2Remote = document.getElementById("m2Remote");

let localName = document.getElementById("localName");
let remoteName = document.getElementById("remoteName");


// Update the <text> element with the current time
function updateClock() {
  let today = new Date(); // get current date/time
  
  // obtaining hours in user-preferred format and split them into 2 digits
  let hours = dtlib.format1224hour(today.getHours());
  let h1 = Math.floor(hours/10);
  let h2 = hours % 10;
  
  // obtaining minutes and split them into 2 digits
  let mins = today.getMinutes();
  let m1 = Math.floor(mins/10);
  let m2 = mins % 10;
  
  h1Local.href = `digits/${h1}.png`;
  h2Local.href = `digits/${h2}.png`;
  m1Local.href = `digits/${m1}.png`;
  m2Local.href = `digits/${m2}.png`;
  
  if (userSettings.timezoneOffset != null) { 
      let utc = today.getTime() + (today.getTimezoneOffset() * 60000);
      today = new Date(utc + (60000*userSettings.timezoneOffset));
    
      // obtaining hours in user-preferred format and split them into 2 digits
      hours = dtlib.format1224hour(today.getHours());
      h1 = Math.floor(hours/10);
      h2 = hours % 10;

      // obtaining minutes and split them into 2 digits
      mins = today.getMinutes();
      m1 = Math.floor(mins/10);
      m2 = mins % 10;
  }
  
  h1Remote.href = `digits/${h1}.png`;
  h2Remote.href = `digits/${h2}.png`;
  m1Remote.href = `digits/${m1}.png`;
  m2Remote.href = `digits/${m2}.png`;
 
}

setTimeColor(userSettings.timeColor);
setBackColor(userSettings.backColor);
remoteName.text = userSettings.timezoneName == null? "LOCAL" : userSettings.timezoneName;

// Update the clock every tick event
clock.ontick = () => updateClock();


// on socket open - begin fetching weather
messaging.peerSocket.onopen = () => {
  // kicking off weather updates
  console.log("App socket open")
}

// Message socket closes
messaging.peerSocket.onclose = () => {
  
}


messaging.peerSocket.onmessage  = evt =>  {
  
   switch (evt.data.key) {
     case "secondaryTimezone":
       userSettings.timezoneName = evt.data.newValue.timezoneName;
       userSettings.timezoneOffset = evt.data.newValue.timezoneOffset;
       remoteName.text = userSettings.timezoneName == null? "LOCAL" : userSettings.timezoneName;
       break
    case "timeColor": 
          userSettings.timeColor = evt.data.newValue.replace(/["']/g, "");
          setTimeColor(userSettings.timeColor);
          break;
    case "backColor":
          userSettings.backColor = evt.data.newValue.replace(/["']/g, "");
          setBackColor(userSettings.backColor);
          break;
   }
 
  
}

