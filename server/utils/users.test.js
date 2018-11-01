const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            is: '1',
            name: 'Mike',
            room: 'Node Course'
        }, {
            id: '2', 
            name: 'Jen',
            room: 'React Course'
        }, {
            id: '3',
            name: 'Julie',
            room: 'Node Course'
        }];
    }); 

    it('should add new user', () => {
        const users = new Users();
        const user = {
            id: '123',
            name: 'burt',
            room: 'the escape room'
        };
        const responseUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        const userId = users.users[0].id;
        const initialUserCount = users.users.length;
        const removedUser = users.removeUser(userId);
        expect(removedUser).toEqual({
            is: '1',
            name: 'Mike',
            room: 'Node Course'
        });
        expect(users.users.length).toBe(initialUserCount - 1);
    });

    it('should not remove user', () => {
        const userId = 123456;
        const removedUser = users.removeUser(userId);
        expect(removedUser).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        const foundUser = users.getUser(users.users[1].id);
        expect(foundUser).toBe(users.users[1]);
        expect(users.users.length).toBe(3);
    });

    it('should not find user', () => {
        const foundUser = users.getUser(283429);
        expect(foundUser).toBeFalsy();
    });

    it('should return names for node course', () => {
        const userList = users.getUserList('Node Course');
        expect(userList).toEqual(['Mike', 'Julie']);
    });

    it('should return names for react course', () => {
        const userList = users.getUserList('React Course');
        expect(userList).toEqual(['Jen']);
    });
});