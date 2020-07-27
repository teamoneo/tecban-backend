import app from './app';

const portNumber = process.env.PORT;

app.listen({ port: portNumber }).then(() => {
  console.log(
    `server is 🏃‍♂️ on 🚪 ${portNumber} like a relampago marquinhos ⚡ 🏎️`,
  );
});
