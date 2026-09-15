"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["USER"] = 2] = "USER";
    Role[Role["GUEST"] = 3] = "GUEST";
})(Role || (Role = {}));
let role = Role.ADMIN;
console.log(role);
//# sourceMappingURL=enums.js.map