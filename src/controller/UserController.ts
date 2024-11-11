import { Request, Response } from "express";
import UserService from "../services/userService";
import ErrorInternal from "../utils/errorInternal";
import { responseSuccess } from "../utils/jsonResponse";

export default class UserController {
  private _userService = new UserService();

  async create(req: Request, res: Response) {
    try {
      const user = await this._userService.create(req.body);

      return res.status(201).json(user);
    } catch (error) {
      if (error instanceof ErrorInternal)
        throw new ErrorInternal(error.message);
      throw error;
    }
  }

  async getUser(_: Request, res: Response) {
    console.log("getUser");
    try {
      const response = await this._userService.getUser();
      console.log(response);

      return res.status(200).json(responseSuccess("Success", response));
    } catch (error) {
      if (error instanceof ErrorInternal)
        throw new ErrorInternal(error.message);
      throw error;
      console.log(error);
    }
  }
}
