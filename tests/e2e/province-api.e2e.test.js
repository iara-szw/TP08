import test from 'node:test';
import assert from 'node:assert/strict';

const BASE_URL = 'http://localhost:3000/api/province';

test('E2E - GET /api/province devuelve 200 y un array', async () => {
    // ARRANGE
    const url = BASE_URL;

    // ACT
    const response = await fetch(url);
    const data = await response.json();

    // ASSERT
    assert.equal(response.status, 200);
    assert.ok(Array.isArray(data));
});
test('E2E - GET /api/province/:id devuelve una provincia', async () => {
    // ARRANGE
    const createResponse = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'E2E Province',
            full_name: 'E2E Province Full',
            latitude: -30,
            longitude: -60,
            display_order: 998
        })
    });

    const id = await createResponse.json();

    // ACT
    const response = await fetch(`${BASE_URL}/${id}`);
    const data = await response.json();

    // ASSERT
    assert.equal(createResponse.status, 201);
    assert.ok(id > 0);
    assert.equal(response.status, 200);
    assert.equal(data.id, id);
    assert.equal(data.name, 'E2E Province');

    // CLEANUP
    await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    });
});
test('E2E - POST /api/province crea una provincia', async () => {
    // ARRANGE
    const province = {
        name: 'E2E Created Province',
        full_name: 'E2E Created Province Full',
        latitude: -31,
        longitude: -61,
        display_order: 997
    };

    // ACT
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(province)
    });

    const id = await response.json();

    // ASSERT
    assert.equal(response.status, 201);
    assert.ok(id > 0);

    // CLEANUP
    await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    });
});
test('E2E - PUT /api/province actualiza una provincia', async () => {
    // ARRANGE - crear una provincia
    const createResponse = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'E2E Province Before',
            full_name: 'E2E Province Before Full',
            latitude: -32,
            longitude: -62,
            display_order: 996
        })
    });

    const id = await createResponse.json();

    assert.equal(createResponse.status, 201);
    assert.ok(id > 0);

    // ACT - actualizar la provincia
    const updatedProvince = {
        id: id,
        name: 'E2E Province Updated',
        full_name: 'E2E Province Updated Full',
        latitude: -33,
        longitude: -63,
        display_order: 995
    };

    const updateResponse = await fetch(BASE_URL, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedProvince)
    });

    const rowsAffected = await updateResponse.json();

    // ASSERT - PUT
    assert.equal(updateResponse.status, 200);
    assert.equal(rowsAffected, 1);

    // ACT - consultar nuevamente la provincia
    const getResponse = await fetch(`${BASE_URL}/${id}`);
    const province = await getResponse.json();

    // ASSERT - verificar que realmente se actualizó
    assert.equal(getResponse.status, 200);
    assert.equal(province.id, id);
    assert.equal(province.name, 'E2E Province Updated');
    assert.equal(province.full_name, 'E2E Province Updated Full');
    assert.equal(Number(province.latitude), -33);
    assert.equal(Number(province.longitude), -63);
    assert.equal(Number(province.display_order), 995);

    // CLEANUP
    await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    });
});
test('E2E - DELETE /api/province/:id elimina una provincia', async () => {
    // ARRANGE - crear una provincia
    const createResponse = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'E2E Province To Delete',
            full_name: 'E2E Province To Delete Full',
            latitude: -34,
            longitude: -64,
            display_order: 994
        })
    });

    const id = await createResponse.json();

    assert.equal(createResponse.status, 201);
    assert.ok(id > 0);

    // ACT - eliminar
    const deleteResponse = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    });

    // ASSERT - DELETE
    assert.equal(deleteResponse.status, 200);

    // ACT - intentar obtener la provincia eliminada
    const getResponse = await fetch(`${BASE_URL}/${id}`);

    // ASSERT - ya no debe existir
    assert.equal(getResponse.status, 404);
});
test('E2E - GET /api/province/:id devuelve 404 si no existe', async () => {
    // ACT
    const response = await fetch(`${BASE_URL}/999999`);

    // ASSERT
    assert.equal(response.status, 404);
});
test('E2E - PUT /api/province devuelve 400 si no se envía id', async () => {
    // ARRANGE
    const province = {
        name: 'Province Without Id',
        full_name: 'Province Without Id Full',
        latitude: -30,
        longitude: -60,
        display_order: 993
    };

    // ACT
    const response = await fetch(BASE_URL, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(province)
    });

    // ASSERT
    assert.equal(response.status, 400);
});
test('E2E - POST /api/province devuelve 400 con payload inválido', async () => {
    // ARRANGE
    const invalidProvince = {
        name: '',
        full_name: '',
        latitude: -30,
        longitude: -60,
        display_order: 993
    };

    // ACT
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(invalidProvince)
    });

    // ASSERT
    assert.equal(response.status, 400);
});
test('E2E - DELETE /api/province/:id devuelve 404 si no existe', async () => {
    // ACT
    const response = await fetch(`${BASE_URL}/999999`, {
        method: 'DELETE'
    });

    // ASSERT
    assert.equal(response.status, 404);
});