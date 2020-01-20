import React from 'react';
import {allUsers} from '../scripts/queries';


describe('queries functions', () => {
    it('should return all users from the database', () => {
        let users = allUsers();
        expect(users.length).toEqual(3);
        expect(users()[0]).toHaveProperty('fn', 'Jade')
        expect(users()[0]).toHaveProperty('ln', 'Suzarte')
        expect(users()[0]).toHaveProperty('username', 'jszrt')
        expect(users()[0]).toHaveProperty('password', '1234')
    })
})