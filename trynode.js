const chalk = require('chalk');// нужно установить через npm

// (function testChalk() {
//     console.log('Обычный текст');
//     console.log(chalk.green('Теперь зеленый цвет'));
//     console.log(chalk.blue('голубой') + ' Простой' + chalk.yellow(' желтый'));
//     console.log(chalk.white.bgRed.bold('Белый текст на красном фоне'));
//     console.log(chalk.red('Простое ', chalk.underline.bgBlue('Слово с красной чертой на голубом фоне') + '!'));
//     console.log(chalk.green(
//         'I am a green line ' +
//         chalk.blue.underline.bold('with a blue substring') +
//         ' that becomes green again!'
//     ));
// })();

const fs = require('fs'); //file system. уже есть в node js

(function createFiles() {

    //Этот фрагмент позволит записывать всю консоль в лог
    var trueLog = console.log;
    console.log = function (msg) {
        fs.appendFile("log.txt", msg, function (err) {
            if (err) {
                return trueLog(err);
            }
        });
        trueLog(msg); //uncomment if you want logs
    }

    //Создание и внесение данных
    fs.writeFile('testFile2.txt', 'Файл создан', (err) => {
        //.writeFile() содержимое файла всегда заменяется на новое
        if (err) throw err;
        console.log('Data создана и вписана');
    });

    //Добавление данных
    fs.appendFile('testFile2.txt', '\nДобавим строку', (err) => {
        //.appendFile() добавляет данные в конец существующего файла
        if (err) throw err;
        console.log('Data добавлена');
    });

    //Чтение данных
    fs.readFile('testFile2.txt', 'utf8', (err, data) => {
        if (err) throw err;

        console.log('--------- [File Data] ---------');
        console.log(data);
        console.log('--------- [File Data] ---------');
    })

    /*
    //Переименование файла
    fs.rename('old name.txt', 'new name.txt', (err) => {
        if (err) throw err;
        console.log('Файл переименован');
    });
    
    //Удаление файла
    fs.unlink('newTestFile.txt', (err) => {
        if (err) throw err;
        console.log('Файл удален');
    });
    */
})();
