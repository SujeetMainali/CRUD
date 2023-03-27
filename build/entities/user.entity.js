var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity } from "typeorm";
import CommonEntity from "./common.entities";
let User = class User extends CommonEntity {
    firstName;
    middleName;
    lastName;
    email;
    password;
};
__decorate([
    Column({
        name: "first_name"
    }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    Column({
        name: "middle_name",
        nullable: true
    }),
    __metadata("design:type", String)
], User.prototype, "middleName", void 0);
__decorate([
    Column({
        name: "last_name"
    }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    Column({
        name: "email",
        unique: true
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    Column({
        name: "password",
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
User = __decorate([
    Entity({
        name: "user",
    })
], User);
export default User;
