import 'dotenv/config';

import { rsAPIFirstBank, rsAPISecondBank } from '../../services/api/axios';

interface IDataAMT {
  [key: string]: {
    Brand: IBrandAMT[];
  };
}

interface IBrandAMT {
  ATM: BankPointAMTExtract[];
}

interface ResponseExtractAMT {
  data: IDataAMT;
}

interface BankPointAMTExtract {
  Identification: string;
  Location: {
    PostalAddress: {
      GeoLocation: {
        GeographicCoordinates: {
          Latitude: string;
          Longitude: string;
        };
      };
    };
  };
}

interface BankPointATM {
  Identification: string;
  Latitude: string;
  Longitude: string;
}

interface IDataAgency {
  [key: string]: {
    Brand: IBranchAgency[];
  };
}

interface IBranchAgency {
  Branch: BankPointAgencyExtract;
}

interface ResponseExtractAgency {
  data: IDataAgency;
}

interface BankPointAgencyExtract {
  Identification: string;
  PostalAddress: {
    GeoLocation: {
      GeographicCoordinates: {
        Latitude: string;
        Longitude: string;
      };
    };
  };
  ContactInfo: IContactInfo[];
}

interface IContactInfo {
  ContactContent: string;
}

interface BankPointAgency {
  Identification: string;
  Latitude: string;
  Longitude: string;
  Contact: string;
}

export async function getAtms(): Promise<BankPointATM[] | undefined> {
  try {
    console.log('start');
    const response = await rsAPISecondBank.get<ResponseExtractAMT>(
      '/open-banking/v2.3/branches',
    );

    const extractFiltered = response.data.data[0].Brand[0].ATM.map(item => {
      const {
        Identification,
        Location: {
          PostalAddress: {
            GeoLocation: {
              GeographicCoordinates: { Latitude, Longitude },
            },
          },
        },
      } = item;

      return {
        Identification,
        Latitude,
        Longitude,
      };
    });

    return extractFiltered;
  } catch (error) {
    console.log(error);
  }

  return undefined;
}

export async function getAgencys(): Promise<BankPointAgency | undefined> {
  try {
    const response = await rsAPISecondBank.get<ResponseExtractAgency>(
      '/open-banking/v2.3/branches',
    );

    const {
      Identification,
      PostalAddress: {
        GeoLocation: {
          GeographicCoordinates: { Latitude, Longitude },
        },
      },
      ContactInfo,
    } = response.data.data[0].Brand[0].Branch;

    const extractFiltered = {
      Identification,
      Latitude,
      Longitude,
      Contact: ContactInfo[0].ContactContent,
    };

    return extractFiltered;
  } catch (error) {
    console.log(error);
  }

  return undefined;
}
