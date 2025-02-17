import { type Router } from "express";
import { createRouter } from "@/utils/create";
import { handleGetFiles } from "@/controllers/files-controllers";

export default createRouter((router: Router) => {
  router.get('/', handleGetFiles);
});

