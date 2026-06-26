import ProvinceRepository from '../repositories/province-repository.js';

export default class CursosService {
    constructor() {
        this.ProvinceRepository = new ProvinceRepository();
    }

    getAllAsync = async () => {
        const returnArray = await this.ProvinceRepository.getAllAsync();
        return returnArray;
    }

    getByIdAsync = async (id) => {
        const returnEntity = await this.ProvinceRepository.getByIdAsync(id);
        return returnEntity;
    }

    createAsync = async (entity) => {
        const rowsAffected = await this.ProvinceRepository.createAsync(entity);
        return rowsAffected;
    }

    updateAsync = async (entity) => {
        const rowsAffected = await this.ProvinceRepository.updateAsync(entity);
        return rowsAffected;
    }
    
    deleteByIdAsync = async (id) => {
        const rowsAffected = await this.ProvinceRepository.deleteByIdAsync(id);
        return rowsAffected;
    }


}
