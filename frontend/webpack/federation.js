const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
require("dotenv").config()

const deps = require("../package.json").dependencies
const NAME = process.env.NAME
const FEDERATION_NAME = process.env.FEDERATION_NAME

const createFederation = () => {
  return {
    plugins: [
      new ModuleFederationPlugin({
        name: NAME,
        filename: "remoteEntry.js",
        exposes: {
          [FEDERATION_NAME]: "./src/bootstrap.tsx",
        },
        remotes: {},
        shared: {},
      }),
    ],
  }
}

module.exports = { createFederation }
