import "../config/database_connection";
import { Request, Response } from "express";
import books from "../models/books";
import redisClient from "../config/redis_client";

const insertRecord = async (req: Request, res: Response) => {
  try {
    const data = new books(req.body);
    const result = await data.save();

    res.status(200).send({
      Status: {
        StatusType: "Success",
        StatusSeverity: "Information",
      },
      result,
    });
  } catch (error) {
    res.status(500).json({
      status: { statusType: "failure", error: error },
    });
  }
};

const getData = async (req: Request, res: Response) => {
  try {
    const cacheValue = await redisClient.get("myKey");
    if (cacheValue) return res.status(200).json(JSON.parse(cacheValue));

    const result = await books.find();

    await redisClient.set("myKey", JSON.stringify(result));
    await redisClient.expire("myKey", 30);

    res.send({
      Status: {
        StatusCode: 200,
        StatusType: "Success",
        StatusSeverity: "Information",
      },
      result,
    });
   } catch (error) {
    res.status(500).json({
      status: { statusType: "failure", error: error },
    });
  }
};

const updatebyBookId = async (req: Request, res: Response) => {
  try {
    const result = await books.updateOne(req.params, {
      $set: req.body,
    });
    res.send({
      Status: {
        StatusCode: 200,
        StatusType: "Success",
        StatusSeverity: "Information",
      },
      result,
    });
  } catch (error) {
    res.status(500).json({
      status: { statusType: "failure", error: error },
    });
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    const result = await books.deleteOne(req.body);
    res.send({
      Status: {
        StatusCode: 200,
        StatusType: "Success",
        StatusSeverity: "Information",
      },
      result,
    });
  } catch (error) {
    res.status(500).json({
      status: { statusType: "failure", error: error },
    });
  }
};

const findbyId = async (req: Request, res: Response) => {
  try {
    const result = await books.find(req.params);

    res.send({
      Status: {
        StatusCode: 200,
        StatusType: "Success",
        StatusSeverity: "Information",
      },
      result,
    });
  } catch (error) {
    res.status(500).json({
      status: { statusType: "failure", error: error },
    });
  }
};

export {
  insertRecord,
  getData,
  updatebyBookId,
  remove,
  findbyId,
}
