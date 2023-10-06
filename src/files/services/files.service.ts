import { BadRequestException, Injectable } from "@nestjs/common";
import { existsSync } from "fs";
import { join } from "path";

@Injectable()
export class FilesService{
    constructor(){}

    getStaticImageName(imageName: string) {
        //agregando la ruta para encontrar el archivo
        const path = join(__dirname, '../../../static/products', imageName);

        if(!existsSync(path)){
            throw new BadRequestException(
                `No esxiste un producto con la imagen $(imageName)`,
            );
        }

        //si existe la imagen entonces que la retorne
        return path;
    }


    
}