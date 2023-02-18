import Robot from "../../database/models/Robots";
import { getRobots } from "./robotsControllers";
import { type Request, type Response, type NextFunction } from "express";

beforeEach(() => jest.restoreAllMocks());

describe("Given a getRobots controller", () => {
  describe("When it receives a response object", () => {
    test("Then it should call this status method with 201", async () => {
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockResolvedValue({}),
      } as Partial<Response>;
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      const req = {} as Request;
      const next = jest.fn();
      const expectedStatusCode = 201;

      Robot.find = jest.fn().mockReturnValue({});

      await getRobots(req, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });
  });
});
