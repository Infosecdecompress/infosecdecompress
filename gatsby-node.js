"use strict";

require("source-map-support").install();
require("ts-node").register();

const { createPages } = require("./internal/gatsby/create-pages");
const { onCreateNode } = require("./internal/gatsby/on-create-node");

module.exports = { createPages, onCreateNode };
