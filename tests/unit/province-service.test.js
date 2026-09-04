import test from 'node:test';
import assert from 'node:assert/strict';

import ProvinceService from './src/services/province-service.js';

test('ProvinceService - getAllAsync devuelve todas las provincias', async () => {
    // Arrange
    const service = new ProvinceService();

    const provinces = [
        {
            id: 1,
            name: 'Buenos Aires'
        },
        {
            id: 2,
            name: 'Catamarca'
        }
    ];

    service.ProvinceRepository.getAllAsync = async () => {
        return provinces;
    };

    // Act
    const result = await service.getAllAsync();

    // Assert
    assert.deepEqual(result, provinces);
});

test('ProvinceService - getByIdAsync devuelve una provincia', async () => {
    // Arrange
    const service = new ProvinceService();

    const province = {
        id: 1,
        name: 'Buenos Aires'
    };

    service.ProvinceRepository.getByIdAsync = async (id) => {
        assert.equal(id, 1);
        return province;
    };

    // Act
    const result = await service.getByIdAsync(1);

    // Assert
    assert.deepEqual(result, province);
});

test('ProvinceService - getByIdAsync devuelve null si la provincia no existe', async () => {
    // Arrange
    const service = new ProvinceService();

    service.ProvinceRepository.getByIdAsync = async () => {
        return null;
    };

    // Act
    const result = await service.getByIdAsync(999);

    // Assert
    assert.equal(result, null);
});

test('ProvinceService - createAsync devuelve el id creado', async () => {
    // Arrange
    const service = new ProvinceService();

    const province = {
        name: 'Buenos Aires',
        full_name: 'Provincia de Buenos Aires',
        latitude: -36.67,
        longitude: -60.56,
        display_order: 1
    };

    service.ProvinceRepository.createAsync = async (entity) => {
        assert.deepEqual(entity, province);
        return 15;
    };

    // Act
    const result = await service.createAsync(province);

    // Assert
    assert.equal(result, 15);
});
test('ProvinceService - updateAsync devuelve la cantidad de filas afectadas', async () => {
    // Arrange
    const service = new ProvinceService();

    const province = {
        id: 1,
        name: 'Buenos Aires',
        full_name: 'Provincia de Buenos Aires',
        latitude: -36.67,
        longitude: -60.56,
        display_order: 1
    };

    service.ProvinceRepository.updateAsync = async (entity) => {
        assert.deepEqual(entity, province);
        return 1;
    };

    // Act
    const result = await service.updateAsync(province);

    // Assert
    assert.equal(result, 1);
});
test('ProvinceService - deleteByIdAsync devuelve la cantidad de filas eliminadas', async () => {
    // Arrange
    const service = new ProvinceService();

    service.ProvinceRepository.deleteByIdAsync = async (id) => {
        assert.equal(id, 1);
        return 1;
    };

    // Act
    const result = await service.deleteByIdAsync(1);

    // Assert
    assert.equal(result, 1);
});