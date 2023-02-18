import { type Request, type Response } from "express";
import Robot from "../../database/models/Robot.js";
import { getRobotsId } from "./robotsControllers.js";

beforeEach(() => jest.clearAllMocks());

const res: Partial<Response> = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn().mockReturnThis(),
};
const next = jest.fn();

describe("Given a robotsControllers", () => {
  describe("When it receives a request and response with the method find by id", () => {
    test("Then it should return a status code 201", async () => {
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      const req = {} as Request;
      const statusCode = 201;

      Robot.find = jest.fn();
      await getRobotsId(req, res as Response);

      expect(res.status).toHaveBeenCalledWith(statusCode);
    });
  });
});
