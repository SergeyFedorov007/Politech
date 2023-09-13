import { userArray } from "./users";
import { usersInfoArray } from "./userinfo.js";
function getUsersJobPositions(usrArray) {
    usrArray.forEach((user) => {
        const userInfo = usersInfoArray.find((userInfo) => user.userid === userInfo.userid);
        if (userInfo) {
            user["position"] = userInfo.organization.position;
            user["age"] = userInfo.age;
            delete user.userid;
        }
    });
    return usrArray;
}
const usersPositions = getUsersJobPositions(userArray);
console.log(usersPositions);
//# sourceMappingURL=index.js.map