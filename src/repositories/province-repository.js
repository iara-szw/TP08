import pkg from 'pg'
import config from './../config/db-config.js';      // Traigo la configuracion de la base de datos.
import LogHelper from './../helpers/log-helper.js'

const { Pool }  = pkg;

export default class ProvinceRepository {
    constructor() {
        // Se ejecuta siempre, (al instanciar la clase)
        this.DBPool     = null;
    }

    getDBPool = () => {
        if (this.DBPool == null){
            this.DBPool = new Pool(config);
        }
        return this.DBPool;
    }

    getAllAsync = async () => {
        console.log(`ProvinceRepository.getAllAsync()`);
        let returnArray = null;
        
        try {
            const sql = `SELECT * FROM provinces`;
            const resultPg = await this.getDBPool().query(sql);
            returnArray = resultPg.rows;
        } catch (error) {
            LogHelper.logError(error);
        }
        return returnArray;
    }

    getByIdAsync = async (id) => {
        let returnEntity = null;
        try {
            const sql = `SELECT * FROM provinces WHERE id=$1`;
            const values = [id];
            const resultPg = await this.getDBPool().query(sql, values);
            if (resultPg.rows.length > 0){
                returnEntity = resultPg.rows[0];
            }
        } catch (error) {
            LogHelper.logError(error);
        }
        return returnEntity;
    }

    isValidProvincePayload = (entity) => {
        return entity != null
            && typeof entity.name === 'string' && entity.name.trim() !== ''
            && typeof entity.full_name === 'string' && entity.full_name.trim() !== ''
            && typeof entity.latitude === 'number' && !Number.isNaN(entity.latitude)
            && typeof entity.longitude === 'number' && !Number.isNaN(entity.longitude)
            && typeof entity.display_order === 'number' && !Number.isNaN(entity.display_order);
    }

    createAsync = async (entity) => {
        let newId = 0;

        try {
            if (!this.isValidProvincePayload(entity)) {
                return newId;
            }

            const sql = `INSERT INTO provinces (name, full_name, latitude, longitude, display_order) VALUES ($1, $2, $3, $4, $5) RETURNING id`;
            const values = [
                entity.name.trim(),
                entity.full_name.trim(),
                entity.latitude,
                entity.longitude,
                entity.display_order
            ];
            const resultPg = await this.getDBPool().query(sql, values);
            newId = resultPg.rows[0].id;
        } catch (error) {
            console.error('ERROR CREATE:', error);
            LogHelper.logError(error);
        }
        return newId;
    }

    updateAsync = async (entity) => {
        let rowsAffected = 0;
        let id = entity.id;

        try {
            const sql = `UPDATE provinces SET name = $2, full_name = $3, latitude = $4, longitude = $5, display_order = $6 WHERE id = $1`;
            const values = [
                id,
                entity?.name ?? '',
                entity?.full_name ?? '',
                entity?.latitude ?? 0,
                entity?.longitude ?? 0,
                entity?.display_order ?? 0
            ];
            const resultPg = await this.getDBPool().query(sql, values);
            rowsAffected = resultPg.rowCount;
        } catch (error) {
            LogHelper.logError(error);
        }
        return rowsAffected;
    }

    deleteByIdAsync = async (id) => {
        let rowsAffected = 0;

        try {
            const sql = `DELETE FROM provinces WHERE id=$1`;
            const values = [id];
            const resultPg = await this.getDBPool().query(sql, values);
            rowsAffected = resultPg.rowCount;
        } catch (error) {
            LogHelper.logError(error);
        }
        return rowsAffected;
    }
}