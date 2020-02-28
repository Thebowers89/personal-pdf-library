// Importing all of the packages that are required for this project.
var fs = require("fs");
var jsdom = require("jsdom");
var express = require("express");

// I am not entirely sure what this line does
var { JSDOM } = jsdom;

// This line just creates an express instance
// Express being the backbone of this whole project
var app = express();

// Declaring the port for the website to listen on
// It could be anything, using docker lets me route connections from external ports to
// internal ports
var port = 80;

// Creating static directories to create shorter file paths
app.use(express.static(__dirname + "/css"));
app.use(express.static(__dirname + "/pdfs"));
app.use(express.static(__dirname + "/folders"));

// List of folders to scan for files
const folders = [
    "arduino",
    "d&d",
    "electronics",
    "linux",
    "misc",
    "programming",
    "raspberrypi"
];

// Intercepts just a generic connection and redirects to the index.html connection
// Generic connection meaning http://localhost instead of having a target like http://localhost/index.html
app.get('/', (req, res) => {
    res.redirect("index.html");
});

// When this page is queried it looks for the index.html file and parses the data
// so I can edit it on the fly.
// I plan to redesign this page anyway so there is only the available categories to choose from instead of seeing
// a list of every single pdf.
app.get('/index.html', (req, res) => {
    fs.readFile("static/index.html", "utf-8", (err, data) => {
        // Creating a new JSDOM object which just creates a DOM from the HTML code read in plaintext
        let dom = new JSDOM(data);

        // The rest of the code looks like standard JavaScript you would find on a webpage creating and manipulating elements
        let document = dom.window.document;
        let list = document.getElementById("pdfs");

        // Getting file names from a function that uses the folders array above
        let filenames = getFilenames();
        for (let i = 0; i < filenames.length; i++) {
            let name = filenames[i];
            let a = document.createElement("a");
            a.setAttribute("href", name);
            a.innerHTML = name;
            let li = document.createElement("li");
            li.appendChild(a);
            list.appendChild(li);
        }

        // This is setting the response as a full HTML page created from the JSDOM object using .serialze();
        res.send(dom.serialize());
    });
});

// This section is the same as the index section, just the filenames variable is reading data from a different source
app.get('/arduino.html', (req, res) => {
    fs.readFile("static/arduino.html", "utf-8", (err, data) => {
        let dom = new JSDOM(data);
        let document = dom.window.document;
        let list = document.getElementById("pdfs");
        let filenames = fs.readdirSync("folders/arduino");
        for (let i = 0; i < filenames.length; i++) {
            let name = filenames[i];
            let a = document.createElement("a");
            a.setAttribute("href", "arduino/" + name);
            a.innerHTML = name;
            let li = document.createElement("li");
            li.appendChild(a);
            list.appendChild(li);
        }
        res.send(dom.serialize());
    });
});

// This section is the same as the index section, just the filenames variable is reading data from a different source
app.get('/d&d.html', (req, res) => {
    fs.readFile("static/d&d.html", "utf-8", (err, data) => {
        let dom = new JSDOM(data);
        let document = dom.window.document;
        let list = document.getElementById("pdfs");
        let filenames = fs.readdirSync("folders/d&d");
        for (let i = 0; i < filenames.length; i++) {
            let name = filenames[i];
            let a = document.createElement("a");
            a.setAttribute("href", "d&d/" + name);
            a.innerHTML = name;
            let li = document.createElement("li");
            li.appendChild(a);
            list.appendChild(li);
        }
        res.send(dom.serialize());
    });
});

// This section is the same as the index section, just the filenames variable is reading data from a different source
app.get('/electronics.html', (req, res) => {
    fs.readFile("static/electronics.html", "utf-8", (err, data) => {
        let dom = new JSDOM(data);
        let document = dom.window.document;
        let list = document.getElementById("pdfs");
        let filenames = fs.readdirSync("folders/electronics");
        for (let i = 0; i < filenames.length; i++) {
            let name = filenames[i];
            let a = document.createElement("a");
            a.setAttribute("href", "electronics/" + name);
            a.innerHTML = name;
            let li = document.createElement("li");
            li.appendChild(a);
            list.appendChild(li);
        }
        res.send(dom.serialize());
    });
});

// This section is the same as the index section, just the filenames variable is reading data from a different source
app.get('/linux.html', (req, res) => {
    fs.readFile("static/linux.html", "utf-8", (err, data) => {
        let dom = new JSDOM(data);
        let document = dom.window.document;
        let list = document.getElementById("pdfs");
        let filenames = fs.readdirSync("folders/linux");
        for (let i = 0; i < filenames.length; i++) {
            let name = filenames[i];
            let a = document.createElement("a");
            a.setAttribute("href", "linux/" + name);
            a.innerHTML = name;
            let li = document.createElement("li");
            li.appendChild(a);
            list.appendChild(li);
        }
        res.send(dom.serialize());
    });
});

// This section is the same as the index section, just the filenames variable is reading data from a different source
app.get('/misc.html', (req, res) => {
    fs.readFile("static/misc.html", "utf-8", (err, data) => {
        let dom = new JSDOM(data);
        let document = dom.window.document;
        let list = document.getElementById("pdfs");
        let filenames = fs.readdirSync("folders/misc");
        for (let i = 0; i < filenames.length; i++) {
            let name = filenames[i];
            let a = document.createElement("a");
            a.setAttribute("href", "misc/" + name);
            a.innerHTML = name;
            let li = document.createElement("li");
            li.appendChild(a);
            list.appendChild(li);
        }
        res.send(dom.serialize());
    });
});

// This section is the same as the index section, just the filenames variable is reading data from a different source
app.get('/programming.html', (req, res) => {
    fs.readFile("static/programming.html", "utf-8", (err, data) => {
        let dom = new JSDOM(data);
        let document = dom.window.document;
        let list = document.getElementById("pdfs");
        let filenames = fs.readdirSync("folders/programming");
        for (let i = 0; i < filenames.length; i++) {
            let name = filenames[i];
            let a = document.createElement("a");
            a.setAttribute("href", "programming/" + name);
            a.innerHTML = name;
            let li = document.createElement("li");
            li.appendChild(a);
            list.appendChild(li);
        }
        res.send(dom.serialize());
    });
});

// This section is the same as the index section, just the filenames variable is reading data from a different source
app.get('/raspberrypi.html', (req, res) => {
    fs.readFile("static/raspberrypi.html", "utf-8", (err, data) => {
        let dom = new JSDOM(data);
        let document = dom.window.document;
        let list = document.getElementById("pdfs");
        let filenames = fs.readdirSync("folders/raspberrypi");
        for (let i = 0; i < filenames.length; i++) {
            let name = filenames[i];
            let a = document.createElement("a");
            a.setAttribute("href", "raspberrypi/" + name);
            a.innerHTML = name;
            let li = document.createElement("li");
            li.appendChild(a);
            list.appendChild(li);
        }
        res.send(dom.serialize());
    });
});

// This if the function that uses the folders array to
// search directories for files and returns a new array with
// file locations.
// This function is soon to be removed because I am doing to redesign the index page.
function getFilenames() {
    let output = [];
    folders.forEach(folder => {
        fs.readdirSync("folders/" + folder).forEach(file => {
            output.push(folder + "/" + file);
        });
    });
    return output.sort();
}

// And this little snippet just tells the app object to listen on the port defined above.
app.listen(port);
