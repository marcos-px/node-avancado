export default function parseFiles(file:string){
    const extensao = file.split('.').pop();
    switch(extensao){
        case 'xlsx':

        // **ler arquivo xlsx
        break;

        default:
            return console.log("Extensão não mapeada");
    }
}