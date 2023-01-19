export interface IDocument {
  key: string;
  location: string;
}

export interface IDocumentResponse {
  errorMessage: string | null;
  data: IDocument;
  status: string | undefined;
}
