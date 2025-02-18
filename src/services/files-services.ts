import { parsePdf } from "@/utils/file-parser";


export async function getAllFiles() {
  const files = [
    {
      file_id: 1,
      file_url: 'mock'
    },
    {
      file_id: 2,
      file_url: 'mock2'
    }
  ];

  return files;
}

export async function addFile(pdfFile: Express.Multer.File) {
  parsePdf(pdfFile.buffer);
}