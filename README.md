1) Nesse tutorial vamos usar módulos do Node.js e o editor Visual Studio Code. Certifique-se de ter o Node.js instalado antes de começar o tutorial. Caso não tenha o Node.js, você pode adquiri-lo na aba de downloads no site da Node.js.

2) É preciso instalar o transpiler da Sass no seu projeto. Para isso abra o prompt de comando e, no caminho do seu projeto, digite o comando abaixo:

npm install -g node-sass

3) Vamos usar Gulp para automatizar a compilação dos nossos arquivos SCSS. Para instalá-lo abra o prompt de comando no caminho do seu projeto e digite os seguintes comandos:

npm install -g gulp

npm install gulp gulp-sass

4) Crie um arquivo chamado js na pasta principal do seu projeto e insira o código:

vargulp=require(‘gulp’);
varsass=require(‘gulp-sass’);
gulp.task(‘sass’,function(){
    gulp.src(‘./PATH/*.scss’)
        .pipe(sass())
        .pipe(gulp.dest(function(f){
            return (f.base+”\CSSFile”);
        }))
});

gulp.task(‘default’, [‘sass’],function(){
    gulp.watch(‘./PATH/*scss’, [‘sass’]);
})

Note que na linha 5 e 13 é informado o caminho onde os arquivos SCSS estão e na linha 8 o nome da pasta onde ficarão os arquivos CSS. Tal pasta ficará no mesmo diretório que os arquivos SCSS. Adapte os caminhos para a arquitetura do seu projeto. No exemplo acima, a arquitetura se configura da seguinte forma:

architecture

5) Agora precisamos configurar uma Gulp Task. No VSCode navegue Tasks > Configure Tasks e selecione Create tasks.json file from templates > Others. Será gerado um arquivo tasks.json na pasta .vscode. Substitua o código do arquivo pelo seguinte código:

{
“version“: “2.0.0“,
“tasks“: [
    {
        “type“: “gulp“,
        “task“: “default“,
        “group“: {
            “kind“: “build“,
            “isDefault“: true
        }
    }
],
}

Assim que a task é executada, os arquivos CSS serão gerados e, toda vez que um arquivo SCSS for alterado, as alterações serão feitas no arquivo CSS equivalente. Para executar a task no VSCode tem-se o atalho Ctrl+Shift+B.

6) Com os arquivos CSS gerados, o último passo é conectar o HTML principal ao CSS principal. Para isso, cole o seguinte código na aba header do seu HTML:

<link rel=“stylesheet“ href=“./Style/CSSFile/main.css“>

Adapte o caminho e nome do arquivo para os equivalentes no seu projeto.