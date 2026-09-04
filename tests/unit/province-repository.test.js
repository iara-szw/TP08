import test from 'node:test';
import assert from 'node:assert/strict';

import ProvinceRepository from '../../src/repositories/province-repository.js';


test('isValidProvincePayload - payload válido', () => {
    // Arrange
    const repository = new ProvinceRepository();

    const province = {
        name: 'Buenos Aires',
        full_name: 'Provincia de Buenos Aires',
        latitude: -36.67,
        longitude: -60.56,
        display_order: 1
    };

    // Act
    const result = repository.isValidProvincePayload(province);

    // Assert
    assert.equal(result, true);
});


test('isValidProvincePayload - null es inválido', () => {
    // Arrange
    const repository = new ProvinceRepository();

    // Act
    const result = repository.isValidProvincePayload(null);

    // Assert
    assert.equal(result, false);
});


test('isValidProvincePayload - undefined es inválido', () => {
    // Arrange
    const repository = new ProvinceRepository();

    // Act
    const result = repository.isValidProvincePayload(undefined);

    // Assert
    assert.equal(result, false);
});


test('isValidProvincePayload - name vacío es inválido', () => {
    // Arrange
    const repository = new ProvinceRepository();

    const province = {
        name: '',
        full_name: 'Provincia de Buenos Aires',
        latitude: -36.67,
        longitude: -60.56,
        display_order: 1
    };

    // Act
    const result = repository.isValidProvincePayload(province);

    // Assert
    assert.equal(result, false);
});


test('isValidProvincePayload - name con espacios es inválido', () => {
    // Arrange
    const repository = new ProvinceRepository();

    const province = {
        name: '   ',
        full_name: 'Provincia de Buenos Aires',
        latitude: -36.67,
        longitude: -60.56,
        display_order: 1
    };

    // Act
    const result = repository.isValidProvincePayload(province);

    // Assert
    assert.equal(result, false);
});


test('isValidProvincePayload - name que no es string es inválido', () => {
    // Arrange
    const repository = new ProvinceRepository();

    const province = {
        name: 123,
        full_name: 'Provincia de Buenos Aires',
        latitude: -36.67,
        longitude: -60.56,
        display_order: 1
    };

    // Act
    const result = repository.isValidProvincePayload(province);

    // Assert
    assert.equal(result, false);
});


test('isValidProvincePayload - full_name vacío es inválido', () => {
    // Arrange
    const repository = new ProvinceRepository();

    const province = {
        name: 'Buenos Aires',
        full_name: '',
        latitude: -36.67,
        longitude: -60.56,
        display_order: 1
    };

    // Act
    const result = repository.isValidProvincePayload(province);

    // Assert
    assert.equal(result, false);
});


test('isValidProvincePayload - full_name que no es string es inválido', () => {
    // Arrange
    const repository = new ProvinceRepository();

    const province = {
        name: 'Buenos Aires',
        full_name: 123,
        latitude: -36.67,
        longitude: -60.56,
        display_order: 1
    };

    // Act
    const result = repository.isValidProvincePayload(province);

    // Assert
    assert.equal(result, false);
});


test('isValidProvincePayload - latitude que no es number es inválida', () => {
    // Arrange
    const repository = new ProvinceRepository();

    const province = {
        name: 'Buenos Aires',
        full_name: 'Provincia de Buenos Aires',
        latitude: 'incorrecta',
        longitude: -60.56,
        display_order: 1
    };

    // Act
    const result = repository.isValidProvincePayload(province);

    // Assert
    assert.equal(result, false);
});


test('isValidProvincePayload - latitude NaN es inválida', () => {
    // Arrange
    const repository = new ProvinceRepository();

    const province = {
        name: 'Buenos Aires',
        full_name: 'Provincia de Buenos Aires',
        latitude: NaN,
        longitude: -60.56,
        display_order: 1
    };

    // Act
    const result = repository.isValidProvincePayload(province);

    // Assert
    assert.equal(result, false);
});


test('isValidProvincePayload - longitude que no es number es inválida', () => {
    // Arrange
    const repository = new ProvinceRepository();

    const province = {
        name: 'Buenos Aires',
        full_name: 'Provincia de Buenos Aires',
        latitude: -36.67,
        longitude: 'incorrecta',
        display_order: 1
    };

    // Act
    const result = repository.isValidProvincePayload(province);

    // Assert
    assert.equal(result, false);
});


test('isValidProvincePayload - longitude NaN es inválida', () => {
    // Arrange
    const repository = new ProvinceRepository();

    const province = {
        name: 'Buenos Aires',
        full_name: 'Provincia de Buenos Aires',
        latitude: -36.67,
        longitude: NaN,
        display_order: 1
    };

    // Act
    const result = repository.isValidProvincePayload(province);

    // Assert
    assert.equal(result, false);
});


test('isValidProvincePayload - display_order que no es number es inválido', () => {
    // Arrange
    const repository = new ProvinceRepository();

    const province = {
        name: 'Buenos Aires',
        full_name: 'Provincia de Buenos Aires',
        latitude: -36.67,
        longitude: -60.56,
        display_order: 'primero'
    };

    // Act
    const result = repository.isValidProvincePayload(province);

    // Assert
    assert.equal(result, false);
});


test('isValidProvincePayload - display_order NaN es inválido', () => {
    // Arrange
    const repository = new ProvinceRepository();

    const province = {
        name: 'Buenos Aires',
        full_name: 'Provincia de Buenos Aires',
        latitude: -36.67,
        longitude: -60.56,
        display_order: NaN
    };

    // Act
    const result = repository.isValidProvincePayload(province);

    // Assert
    assert.equal(result, false);
});