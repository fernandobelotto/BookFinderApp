export interface BookResponse {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: {´[key: string]: string}
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
}

interface AccessInfo {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub: Epub;
  pdf: Epub;
  webReaderLink: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
}

interface Epub {
  isAvailable: boolean;
}

interface SaleInfo {
  country: string;
  saleability: string;
  isEbook: boolean;
}

export interface VolumeInfo {
  title: string;
  subtitle: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  industryIdentifiers: IndustryIdentifier[];
  readingModes: ReadingModes;
  pageCount: number;
  printedPageCount: number;
  dimensions: Dimensions;
  printType: string;
  categories: string[];
  averageRating: number;
  ratingsCount: number;
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary: PanelizationSummary;
  imageLinks: ImageLinks;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
}

interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
}

interface PanelizationSummary {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
}

interface Dimensions {
  height: string;
  width: string;
  thickness: string;
}

interface ReadingModes {
  text: boolean;
  image: boolean;
}

interface IndustryIdentifier {
  type: string;
  identifier: string;
}