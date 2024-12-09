import express from "express";
import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPath = path.resolve(__dirname, '../public');

export const homeUrl = (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
};

export const aboutUrl = (req, res) => {
    res.sendFile(path.join(publicPath, "pages/about.html"));
};

export const directoryUrl = (req, res) => {
    res.sendFile(path.join(publicPath, "pages/directory.html"));
};

export const reflectionUrl = (req, res) => {
    res.sendFile(path.join(publicPath, "pages/reflections.html"));
};

export const roughUrl = (req, res) => {
    res.sendFile(path.join(publicPath, "pages/rough.html"));
}

export const pOneUrl = (req, res) => {
    res.sendFile(path.join(publicPath, "pages/projects/ThisIBelieve.html"));
};

export const pTwoUrl = (req, res) => {
    res.sendFile(path.join(publicPath, "pages/projects/civilian-soldiers.html"));
};

export const pThreeUrl = (req, res) => {
    res.sendFile(path.join(publicPath, "pages/projects/mindsets.html"));
};