interface Account {
  accountId: string;
  bank: number;
}

interface User {
  accounts: Account[];
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

interface LoginProps {
  email: string;
  password: string;
}

export default function login(
  _: void,
  { input: props }: { [argName: string]: LoginProps },
): User | undefined {
  const { email, password } = props;

  const user: User = {
    accounts: [
      { accountId: '5f1865287af45c38b664d7f4', bank: 1 },
      { accountId: '5f1868d1a807e83a2e41c9ec', bank: 2 },
      { accountId: '5f1868d3a807e83a2e41cb35', bank: 2 },
      { accountId: '5f1868d4a807e83a2e41cc7e', bank: 2 },
    ],
    email: 'teste@teste.com',
    name: 'Teste Câmara',
    password: 'teste123',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  if (email === user.email && password === user.password) {
    return user;
  }

  return undefined;
}
