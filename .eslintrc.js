module.exports = {
     extends: [
       'eslint:recommended',
       'plugin:@typescript-eslint/recommended',
       'prettier'
     ],
     parserOptions: {
       ecmaVersion: 2020,
       sourceType: 'module'
     },
     rules: {
       // Добавьте правила линтинга по вашему усмотрению
     }
   };