# largesis

### Criação
```
== PASSO 1 ==
vue create largesis
cd largesis
vue add vuetify
npm install express serve-static --save
npm run serve
npm run build
git init
git remote add origin https://github.com/felipeleepo/largesis
git add .
git commit -m "Commit"
git push -u origin master
== PASSO 2 ==
- Ir no Webhooks do Projeto e criar com https://notify.travis-ci.org
- Criar se não existir um token para o travis em https://github.com/settings/tokens (marcar opção repo)
- Add Environment Key no Travis
== PASSO 3 ==
- Arquivos modificados:
-- Package.json
-- travis.yml
-- .gitignore (liberado o /dist)
-- server.js
== PASSO 4 ==
- Criar app no heroku e conectar o repositorio com github, marcando a opção de esperar o building
````

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
