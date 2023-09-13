"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var usersInfoArray = [
    {
        userid: "127e4567-e89b-12d3-a458-426614174000",
        name: "John",
        birthdate: "1982-02-17T21:00:00.000Z",
        age: 40,
        organization: {
            name: "Amazon",
            position: "General manager",
        },
    },
    {
        userid: "127e4567-e89a-12f3-a458-327395154000",
        name: "Anna",
        birthdate: "1988-02-17T21:00:00.000Z",
        age: 34,
        organization: {
            name: "Amazon",
            position: "Manager",
        },
    },
];
function getUsersJobPositions(usrArray) {
    usrArray.forEach(function (user) {
        var userInfo = usersInfoArray.find(function (userInfo) { return user.userid === userInfo.userid; });
        if (userInfo) {
            user["position"] = userInfo.organization.position;
            user["age"] = userInfo.age;
            delete user.userid;
        }
    });
    return usrArray;
}
var userArray = [
    {
        userid: "127e4567-e89b-12d3-a458-426614174000",
    },
    {
        userid: "127e4567-e89a-12f3-a458-327395154000",
    },
];
var usersPositions = getUsersJobPositions(userArray);
console.log(usersPositions);
// interface IUsers {
//   userid: string;
//   name: string;
//   birthdate: string;
//   age: number;
//   organization: IOrganization;
//   find?: void;
// }
//
// interface IOrganization {
//   name: string;
//   position: string;
// }
//
// type IUsersInfo = IUsers[];
// let usersInfoArray: IUsersInfo = [
//   {
//     userid: "127e4567-e89b-12d3-a458-426614174000",
//     name: "John",
//     birthdate: "1982-02-17T21:00:00.000Z",
//     age: 40,
//     organization: {
//       name: "Amazon",
//       position: "General manager",
//     },
//   },
//
//   {
//     userid: "127e4567-e89a-12f3-a458-327395154000",
//     name: "Anna",
//     birthdate: "1988-02-17T21:00:00.000Z",
//     age: 34,
//     organization: {
//       name: "Amazon",
//       position: "Manager",
//     },
//   },
// ];
//
// function getUsersJobPositions(usrArray: any): any {
//   usrArray.forEach((user) => {
//     const userInfo: IUsers = usersInfoArray.find(
//       (userInfo) => user.userid === userInfo.userid
//     );
//     if (userInfo) {
//       user["position"] = userInfo.organization.position;
//       user["age"] = userInfo.age;
//       delete user.userid;
//     }
//   });
//   return usrArray;
// }
//
// const usersPositions = getUsersJobPositions(userArray);
// console.log(usersPositions);
