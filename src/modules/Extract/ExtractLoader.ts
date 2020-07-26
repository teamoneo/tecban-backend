import 'dotenv/config';

import { endOfMonth } from 'date-fns';

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
): Promise<Extract[] | undefined> {
  try {
    const response =
      props.bank === 1
        ? await rsAPIFirstBank.get<ResponseExtract>(
            `/open-banking/v3.1/aisp/accounts/${props.accountId}/transactions`,
          )
        : await rsAPISecondBank.get<ResponseExtract>(
            `/open-banking/v3.1/aisp/accounts/${props.accountId}/transactions`,
          );
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

/*

  O que já temos:

  - Login (Usuario Fake)

  - Busca de todas as Transações do cliente

  - Busca de transações especificas de uma conta

  ========================================

  O que podemos acrescentar?

  - Uma forma para analisar o risco do cliente.

  - Uma pontuação fake (Score)

  - Sorteios fake.

  - Mostrar locais para pagamento de contas.

  - Mostrar vantagens baseadas nas informações do usuário.

*/
