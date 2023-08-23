import { join } from 'path';
import { loadPackageDefinition, Server, ServerCredentials } from '@grpc/grpc-js';
import { load } from '@grpc/proto-loader';

const wrapServerWithReflection = require('grpc-node-server-reflection').default;

const authors = [
  {
    editor: 'Gallimard',
    id: '0',
    name: 'Jean France',
  },
  {
    id: '1',
    editor: 'Pearson',
    name: 'James State',
  },
];


async function startServer() {
  const server: Server = wrapServerWithReflection(new Server());

  const packageDefinition = await load('./service.proto', {
    includeDirs: [__dirname],
  });
  const grpcObject = loadPackageDefinition(packageDefinition);
  server.addService(grpcObject.authors.v1.AuthorsService.service, {
    getAuthor: (call, callback) => {
      const author = authors.find(a => a.id === call.request.id);
      if (author) {
        callback(null, author);
      } else {
        callback({ code: 5 });
      }
    },
    listAuthors: (_, callback) => {
      callback(null, { items: authors });
    },
  });
  return new Promise<Server>((resolve, reject) => {
    server.bindAsync('0.0.0.0:3003', ServerCredentials.createInsecure(), (error, port) => {
      if (error) {
        reject(error);
        return;
      }
      server.start();

      console.log('Authors Server started, listening: 0.0.0.0:' + port);
      resolve(server);
    });
  });
}

startServer().catch(e => {
  console.error(e);
  process.exit(1);
});
