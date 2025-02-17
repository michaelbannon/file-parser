import type { Router } from "express";
import { createRouter } from "@/utils/create";
import filesRoutes from "./files-routes";

export default createRouter((router: Router) => {
  router.use('/files', filesRoutes);
});