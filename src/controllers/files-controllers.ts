import { type Request, type Response } from "express";
import { getAllFiles, addFile } from "@/services/files-services";

export async function handleGetFiles(_req: Request, res: Response) {
  const files = await getAllFiles();

  res.status(200).json(files);
}

export async function handleAddFile(req: Request, res: Response) {
  if(!req.file) {
    res.status(400);
  } else {
    addFile(req.file);
    res.status(200);
  }
}