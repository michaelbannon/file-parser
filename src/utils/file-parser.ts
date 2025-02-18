import { getDocument } from "pdfjs-dist";

export async function parsePdf(pdfBuffer: Buffer<ArrayBufferLike>) {
  const pdfData = new Uint8Array(pdfBuffer);
  const loadingTask = getDocument(pdfData);

  try {
    const pdfDocument = await loadingTask.promise;
    return pdfDocument;
  } catch(error) {
    console.error(error);
    return error;
  }
}