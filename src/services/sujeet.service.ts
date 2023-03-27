import { SujeetDTO } from "../dtos/sujeet.dto";
import AppDataSource from "../config/database.config";
import { Sujeet } from "../entities/sujeet.entity";

class SujeetService{
    constructor (private sujeetRepository = AppDataSource.getRepository(Sujeet)){}
    async createSujeet(sujeetData:SujeetDTO): Promise<Sujeet>{
        const {name, age} = sujeetData;
        const sujeet = this.sujeetRepository.create({
            name,
            age
        })
        return await this.sujeetRepository.save(sujeet);
    }
}

export default SujeetService;