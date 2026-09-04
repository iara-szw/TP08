import test from 'node:test';
import assert from 'node:assert/strict';

import ProvinceRepository from '../../src/repositories/province-repository.js';

test('ProvinceRepository - CRUD completo', async () => {
    const repository = new ProvinceRepository();

    // ARRANGE
   const province = {
    name: 'Test Province',
    full_name: 'Test Province Full',
    latitude: -30,
    longitude: -60,
    display_order: 999
};

    // ACT - CREATE
    const id = await repository.createAsync(province);

    // ASSERT
    assert.ok(id > 0);

    // ACT - READ
    const created = await repository.getByIdAsync(id);

    // ASSERT
    assert.notEqual(created, null);
    assert.equal(created.name, 'Test Province');
    assert.equal(created.full_name, 'Test Province Full');
    assert.equal(Number(created.latitude), -30);
assert.equal(Number(created.longitude), -60);
    assert.equal(Number(created.display_order), 999);

    // ACT - UPDATE
    created.name = 'Updated Province';

    const updatedRows = await repository.updateAsync(created);

    // ASSERT
    assert.equal(updatedRows, 1);

    // ACT - READ después del UPDATE
    const updated = await repository.getByIdAsync(id);

    // ASSERT
    assert.notEqual(updated, null);
    assert.equal(updated.name, 'Updated Province');

    // ACT - DELETE
    const deletedRows = await repository.deleteByIdAsync(id);

    // ASSERT
    assert.equal(deletedRows, 1);

    // ACT - READ después del DELETE
    const deleted = await repository.getByIdAsync(id);

    // ASSERT
    assert.equal(deleted, null);
});