import { type Request, type Response } from "express";
import { getAllFiles } from "@/services/files-services";

export async function handleGetFiles(_req: Request, res: Response) {
  const files = await getAllFiles();

  res.status(200).json(files);
}