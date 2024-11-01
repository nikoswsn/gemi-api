
import gemi from '../index';
import { Company } from '../types';


describe('companiesService', () => {
  const existing_arGemi = "160036704000"
  const nonexisting_arGemi = "1100"

  test('getByArGemi returns company details for valid arGemi', async () => {
    const mockCompany: Company = {
      // Mock company data structure
      arGemi: existing_arGemi,
      afm: '',
      coNameEl: '',
      coNamesEn: [],
      coTitlesEl: [],
      coTitlesEn: [],
      municipality: {
        id: 1,
        prefectureId: "1",
        descr: "unknown"
      },
      prefecture: {
        id: 1,
        descr: "unknown"
      },
      city: '',
      street: '',
      streetNumber: '',
      zipCode: '',
      isBranch: false,
      objective: '',
      legalType: {
        id: 1,
        descr: "unknown"
      },
      gemiOffice: {
        id: 1,
        descr: "unknown"
      },
      assemblySubjects: {
        id: 1,
        descr: "unknown"
      },
      incorporationDate: '',
      lastStatusChange: '',
      status: {
        id: 1,
        descr: "unknown"
      },
      autoRegistered: false,
      activities: [],
      persons: []
    };


    const company = await gemi.companies.getByArGemi(existing_arGemi);
    expect(company.arGemi).toEqual(mockCompany.arGemi);
  });

  test('getByArGemi throws 404 error on not found arGemi', async () => {

    await expect(gemi.companies.getByArGemi(nonexisting_arGemi)).rejects.toThrow("API error 404: Not Found");
  })


});
