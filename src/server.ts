import app from './app';

const portNumber = 4000;

app.listen({ port: portNumber }).then(() => {
  console.log(
    `server is 🏃‍♂️ on 🚪 ${portNumber} like a relampago marquinhos ⚡ 🏎️`,
  );
});
