import { Users } from "../entities/Users";
import { BaseRepository } from "./base/BaseRepository";

// This class is responsible for handling all the database operations related to the Users entity.
export class UserRepository extends BaseRepository<Users> {}
