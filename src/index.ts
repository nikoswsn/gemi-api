import { init } from "./api";
import companiesService from "./api/companies.api";
import downloadFilesService from "./api/downloadFiles.api";
import healthService from "./api/health.api";
import metadataService from "./api/metadata.api";

const gemi = {
    companies: companiesService,
    metadata: metadataService,
    files: downloadFilesService,
    health: healthService,
    init
  };

export default gemi;