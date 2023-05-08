type Username = string;
type UserId = number;

type User = {
    id: UserId;
    username: Username;
    email: string;
    createdAt: Date;
};

type UserFetcher = (id: UserId) => User;

const getUserById: UserFetcher = (id) => {
    // fetch user from database and return as User object
    return {
        id,
        username: "john_doe",
        email: "john.doe@example.com",
        createdAt: new Date(),
    };
};

const userId: UserId = 123;
const user = getUserById(userId);

console.log(user.username);

export default User;