module.exports ={
  "presets": [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        "modules": false, // Disable module transformation for ESM support
        "targets": {
          "browsers": ["last 2 versions", "not dead", "not < 2%"],
          "node": "current"
        }
      }
    ]
  ]
}
