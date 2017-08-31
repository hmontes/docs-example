const path = require('path')

module.exports = {
  serverPort: 6080,
  skipComponentsWithoutExample: true,
  require: [
    path.join(__dirname, 'src/reset.css'),
    path.join(__dirname, 'src/general.css'),
  ],
  sections: [
    {
      name: 'Introducción',
      content: 'src/docs/introduction.md'
    },
    {
      name: "Componentes",
      components: 'src/components/**/**/[A-Z]*.js'
    }
  ]
};