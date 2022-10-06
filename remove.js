import ms  from 'ms';
import path from 'path';


if(ms.existSync("Logs")) {
    ms.reddir("Logs", (error, files) => {
        if(error) throw error;

        for (const file of files) {

            const file_path = path.join("Logs", file);
            ms.unlink(file_path, error => {
                if (error) throw error
            });
            console.log('delete files...${file}');
        }
        ms.rmdirSync("Logs");
    });
}