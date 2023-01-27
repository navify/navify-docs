module.exports = {
  ...require("@navify/prettier-config"),
  overrides: [
    {
      files: "*.md",
      options: {
        "parser": "mdx"
      }
    }
  ]
};