// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'mysql',
//         host: env('DATABASE_HOST', 'localhost'),
//         port: env.int('DATABASE_PORT', 3306),
//         database: env('DATABASE_NAME', 'master'),
//         username: env('DATABASE_USERNAME', 'root'),
//         password: env('DATABASE_PASSWORD', 'root'),
//         ssl: env.bool('DATABASE_SSL', false),
//       },
//       options: {}
//     },
//   },
// });


module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'remotemysql.com'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'OH5gMg7P5G'),
        username: env('DATABASE_USERNAME', 'OH5gMg7P5G'),
        password: env('DATABASE_PASSWORD', 'fU6NzI364G'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
