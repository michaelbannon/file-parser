import { type Router } from "express";
import { createRouter } from "@/utils/create";
import { handleGetFiles, handleAddFile } from "@/controllers/files-controllers";
import multer from "multer";

const upload = multer({
  limits: {
    fileSize: 10 * 1024 * 1024
  },
  fileFilter: (_req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      console.log('is pdf file');
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed'));
    }
  }
});

export default createRouter((router: Router) => {
  router.get('/', handleGetFiles);
  router.post('/upload', upload.single('pdf'), handleAddFile);
});

