import 'dotenv/config';

import { rsAPIFirstBank, rsAPISecondBank } from '../../services/api/axios';

interface Extract {
  CreditDebitIndicator: 'Credit' | 'Debit';
  Amount: number;
  BookingDateTime: Date;
  TransactionInformation: string;
}

interface ResponseExtract {
  Data: {
    Transaction: UsefulExtract[];
  };
}

interface UsefulExtract {
  CreditDebitIndicator: 'Credit' | 'Debit';
  Amount: {
    Amount: number;
  };
  BookingDateTime: Date;
  TransactionInformation: string;
}

interface ExtractEspecificAccountProps {
  accountId: string;
  bank: number;
}

export async function getAllExtracts(): Promise<Extract[] | undefined> {
  try {
    const response = await rsAPISecondBank.get<ResponseExtract>(
      '/open-banking/v3.1/aisp/transactions',
    );
    console.log(response.data);
    const extractFiltered = response.data.Data.Transaction.map(item => {
      const {
        Amount,
        BookingDateTime,
        CreditDebitIndicator,
        TransactionInformation,
      } = item;

      return {
        Amount: Amount.Amount,
        BookingDateTime,
        CreditDebitIndicator,
        TransactionInformation,
      };
    });

    return extractFiltered;
  } catch (error) {
    console.log(error);
  }

  return undefined;
}

export async function getExtractsByAccount(
  _: void,
  { input: props }: { [argName: string]: ExtractEspecificAccountProps },
): Promise<string> {
  try {
    const response =
      props.bank === 1
        ? await rsAPIFirstBank.get(
            `/open-banking/v3.1/aisp/accounts/${props.accountId}/transactions`,
          )
        : await rsAPISecondBank.get(
            `/open-banking/v3.1/aisp/accounts/${props.accountId}/transactions`,
          );
    return JSON.stringify(response.data.Data);
  } catch (error) {
    console.log(error);
  }

  return 'sei la que caso é esse';
}

/**

  O devemos pegar da api?

  - CreditDebitIndicator
  - Amount => { Amount }
  - BookingDateTime
  - TransactionInformation

 *
 */
