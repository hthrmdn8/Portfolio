interface IUser {
    readonly id: number;
    username: string;
    email: string;
    createdAt: Date;
}

function getIUserById(id: number): IUser {
    // fetch user from database and return as IUser object
    return {
        id,
        username: "john_doe",
        email: "john.doe@example.com",
        createdAt: new Date(),
    };
}

const userData: IUser = getIUserById(123);

console.log(userData.username); // Output: john_doe

// The following line will cause a type error
// user.id = 456;

// Interfaces can be extended to create new interfaces
interface IAdmin extends IUser {
    readonly isSuperAdmin: boolean;
}

const admin: IAdmin = {
    id: 123,
    username: "admin",
    email: "admin@example.com",
    createdAt: new Date(),
    isSuperAdmin: true,
};

console.log(admin.isSuperAdmin); // Output: true


export default IAdmin;