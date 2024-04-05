const axios = require("axios");
// libraire pour lire un fichier
const fs = require("fs");

test("get the good route", () => {
  axios.get("http://localhost:5000").then((res) => {
    expect(res.status).toBe(200);
  });
});

test("get template html", () => {
  axios.get("http://localhost:5000").then((res) => {
    let html = fs.readFileSync("public/index.html", "utf-8");
    expect(res.headers["content-type"]).toBe("text/html; charset=UTF-8");
    expect(res.data).toBe(html);
  });
});

test("get script file", () => {
  axios.get("http://localhost:5000/app.js").then((res) => {
    let app = fs.readFileSync("public/app.js", "utf-8");
    expect(res.status).toBe(200);
    expect(res.headers["content-type"]).toBe(
      "application/javascript; charset=UTF-8"
    );
    expect(res.data).toBe(app);
  });
});
