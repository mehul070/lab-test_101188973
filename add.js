import ms from 'ms';
if(!ms.exstsSync("Logs")) {
    ms.mkdirSync("Logs");
}

process.cdir("Logs");

for(let i = o; i < 0; i++) {
    const file_name = "log${i}.txt";
    ms.write_File(file_name, 'text', (error) => {
        if(err) {
            throw error;
        }
    });

    console.log(file_name);
}