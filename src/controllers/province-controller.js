import { Router } from 'express'; 
import { StatusCodes } from 'http-status-codes'; 
import ProvinceService from './../services/province-service.js' 

const router = Router(); 
const currentService = new ProvinceService(); 

// 1. GET ALL
router.get('/', async (req, res) => {
    /*  #swagger.tags = ['Provinces']
        #swagger.description = 'Obtiene un listado completo de todas las provincias registradas.'
        #swagger.responses[200] = {
            description: 'Lista de provincias obtenida con éxito.',
            schema: [{ id: 1, name: 'Buenos Aires' }]
        }
        #swagger.responses[500] = { description: 'Error interno del servidor.' }
    */
    try { 
        const returnArray = await currentService.getAllAsync(); 
        if (returnArray != null){ 
            res.status(StatusCodes.OK).json(returnArray); 
        } else { 
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(`Error interno.`); 
        } 
    } catch (error) { 
        console.log(error); 
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(`Error: ${error.message}`); 
    } 
}); 

// 2. GET BY ID
router.get('/:id', async (req, res) => {
    /*  #swagger.tags = ['Provinces']
        #swagger.description = 'Busca y devuelve una provincia específica a partir de su ID de ruta.'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID único numérico de la provincia',
            required: true,
            type: 'integer'
        }
        #swagger.responses[200] = {
            description: 'Provincia encontrada.',
            schema: { id: 1, name: 'Buenos Aires' }
        }
        #swagger.responses[404] = { description: 'No se encontró la provincia con el ID especificado.' }
        #swagger.responses[500] = { description: 'Error interno del servidor.' }
    */
    try { 
        let id = req.params.id; 
        const returnEntity = await currentService.getByIdAsync(id); 
        if (returnEntity != null){ 
            res.status(StatusCodes.OK).json(returnEntity); 
        } else { 
            res.status(StatusCodes.NOT_FOUND).send(`No se encontro la provincia (id:${id}).`); 
        } 
    } catch (error) { 
        console.log(error); 
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(`Error: ${error.message}`); 
    } 
}); 

// 3. POST (CREATE)
router.post('/', async (req, res) => {
    /*  #swagger.tags = ['Provinces']
        #swagger.description = 'Registra una nueva provincia en el sistema.'
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Datos requeridos para crear la provincia',
            required: true,
            schema: { name: 'Córdoba' }
        }
        #swagger.responses[201] = {
            description: 'Provincia creada con éxito. Devuelve el ID generado.',
            schema: 2
        }
        #swagger.responses[400] = { description: 'Solicitud incorrecta o datos inválidos.' }
    */
    try { 
        let entity = req.body; 
        const newId = await currentService.createAsync(entity); 
        if (newId > 0 ){ 
            res.status(StatusCodes.CREATED).json(newId); 
        } else { 
            res.status(StatusCodes.BAD_REQUEST).json(null); 
        } 
    } catch (error) { 
        console.log(error); 
        res.status(StatusCodes.BAD_REQUEST).send(`Error: ${error.message}`); 
    } 
}); 

// 4. PUT (UPDATE)
router.put('/', async (req, res) => {
    /*  #swagger.tags = ['Provinces']
        #swagger.description = 'Actualiza los datos de una provincia existente enviando sus propiedades en el cuerpo de la solicitud.'
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Entidad completa de la provincia a modificar, incluyendo obligatoriamente su ID numérico.',
            required: true,
            schema: { id: 1, name: 'Buenos Aires Modificado' }
        }
        #swagger.responses[200] = {
            description: 'Provincia actualizada. Devuelve la cantidad de filas afectadas.',
            schema: 1
        }
        #swagger.responses[400] = { description: 'El ID es inválido o no fue enviado en el cuerpo.' }
        #swagger.responses[404] = { description: 'No se encontró la provincia con el ID provisto.' }
    */
    try { 
        let entity = req.body; 
        let id = parseInt(entity?.id); 
        if (!entity?.id || Number.isNaN(id)) { 
            return res.status(StatusCodes.BAD_REQUEST).send(`El id debe ser enviado en el body y debe ser un número válido.`); 
        } 
        entity.id = id; 
        const rowsAffected = await currentService.updateAsync(entity); 
        if (rowsAffected != 0){ 
            res.status(StatusCodes.OK).json(rowsAffected); 
        } else { 
            res.status(StatusCodes.NOT_FOUND).send(`No se encontro la entidad (id:${id}).`); 
        } 
    } catch (error) { 
        console.log(error); 
        res.status(StatusCodes.BAD_REQUEST).send(`Error: ${error.message}`); 
    } 
}); 

// 5. DELETE
router.delete('/:id', async (req, res) => {
    /*  #swagger.tags = ['Provinces']
        #swagger.description = 'Elimina de forma permanente una provincia por su ID de ruta.'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID de la provincia a eliminar',
            required: true,
            type: 'integer'
        }
        #swagger.responses[200] = { description: 'Provincia eliminada exitosamente.' }
        #swagger.responses[404] = { description: 'No se encontró la provincia con el ID especificado.' }
        #swagger.responses[500] = { description: 'Error interno del servidor.' }
    */
    try { 
        let id = req.params.id; 
        const rowCount = await currentService.deleteByIdAsync(id); 
        if (rowCount != 0){ 
            res.status(StatusCodes.OK).json(null); 
        } else { 
            res.status(StatusCodes.NOT_FOUND).send(`No se encontro la entidad (id:${id}).`); 
        } 
    } catch (error) { 
        console.log(error); 
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(`Error: ${error.message}`); 
    } 
}); 

export default router;
