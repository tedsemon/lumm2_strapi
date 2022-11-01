module.exports = ({ env }) => ({
    connection: {
      client: 'mysql',
      connection: {
        host: env('DATABASE_HOST', 'db-mysql-nyc1-68977-do-user-10983917-0.b.db.ondigitalocean.com'),
        port: env.int('DATABASE_PORT', 25060),
        database: env('DATABASE_NAME', 'defaultdb'),
        user: env('DATABASE_USERNAME', 'doadmin'),
        password: env('DATABASE_PASSWORD', 'AVNS_yTL7ZLCDTEA8yClUbek'),
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  });
  