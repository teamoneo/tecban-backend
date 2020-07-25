interface User {
  accountId: string[];
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
    accountId: ['', 'çdlkfjçdlfkjhçdlfkjhçdlfkjç', ''],
    email: '',
    name: '',
    password: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  if (email === user.email && password === user.password) {
    return user;
  }

  return undefined;
}
