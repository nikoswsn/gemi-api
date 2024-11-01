// src/index.ts
import { init } from "./api";
import companiesService from "./api/companies.api";
import downloadFilesService from "./api/downloadFiles.api";
import healthService from "./api/health.api";
import metadataService from "./api/metadata.api";
export type * as gemiTypes from "./types";

// Initialize GEMI API Wrapper
export const gemi = {
  companies: companiesService,
  files: downloadFilesService,
  health: healthService,
  metadata: metadataService,
  init,
};

// Default export
export default gemi;
