const express = require("express");
const session = require("express-session");

const app = express();
const PORT = 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "123"
}));

// First step is to get an access code from GitHub
// We redirect requests to Github where you can then log in.
app.get("/auth/github", (_req, res) => {
    //Client ID is in GitHub settings.
    const authUrl = "https://github.com/login/oauth/authorize?client_id=b68e6874e5f21942b543";
    res.redirect(authUrl);
});

// Here we come with a code that can be used to exchange for a token.
app.get("/auth/github/callback", async (req, res) => {
    const code = req.query.code;

    // Here we get the access_token itself
    const response = await fetch("http://github.com/login/oauth/access_token", {
        method: "POST",
        body: new URLSearchParams({
            client_id: "b68e6874e5f21942b543",
            client_secret: "", // Key
            code: code,
        }),

        // We will have our token in JSON-format
        header: {
            Accept: "application/json",
        },
    });

    const jsonResponse = await response.json();
    req.session.username = await getUserInfoFromGitHub(jsonResponse.access_token);
    res.send("Authentication successful!");
});

const getUserInfoFromGitHub = async (access_token) => {
    const response = await fetch("http://api.github.com/user", {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
    return await response.json();
};

// Get user information with token
app.get("/user", async (req, res) => {
    if (!req.session.access_token) {
        res.status(403).send("Access Denied.");
    }
    res.send(await response.json());
});

