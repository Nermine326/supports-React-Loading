

module.exports.connections = {
    /***************************************************************************
     *                                                                          *
     * Local disk storage for DEVELOPMENT ONLY                                  *
     *                                                                          *
     * Installed by default.                                                    *
     *                                                                          *
     ***************************************************************************/
    localDiskDb: {
        adapter: "sails-disk"
    },

    /***************************************************************************
     *                                                                          *
     * MySQL is the world's most popular relational database.                   *
     * http://en.wikipedia.org/wiki/MySQL                                       *
     *                                                                          *
     * Run: npm install sails-mysql                                             *
     *                                                                          *
     ***************************************************************************/

    // NOTE: Here is the connection for your local / dev Database
    // The production connection is defined within /config/env/production.js

    mysql: {
        adapter: "sails-mysql",
        host: "127.0.0.1",
        user: "root",
        password: "root",
        database: "bedrock"
    }

    /***************************************************************************
     *                                                                          *
     * MongoDB is the leading NoSQL database.                                   *
     * http://en.wikipedia.org/wiki/MongoDB                                     *
     *                                                                          *
     * Run: npm install sails-mongo                                             *
     *                                                                          *
     ***************************************************************************/
    // someMongodbServer: {
    //   adapter: 'sails-mongo',
    //   host: 'localhost',
    //   port: 27017,
    //   // user: 'username',
    //   // password: 'password',
    //   // database: 'your_mongo_db_name_here'
    // },

    /***************************************************************************
     *                                                                          *
     * PostgreSQL is another officially supported relational database.          *
     * http://en.wikipedia.org/wiki/PostgreSQL                                  *
     *                                                                          *
     * Run: npm install sails-postgresql                                        *
     *                                                                          *
     *                                                                          *
     ***************************************************************************/
    // somePostgresqlServer: {
    //   adapter: 'sails-postgresql',
    //   host: 'YOUR_POSTGRES_SERVER_HOSTNAME_OR_IP_ADDRESS',
    //   user: 'YOUR_POSTGRES_USER',
    //   password: 'YOUR_POSTGRES_PASSWORD',
    //   database: 'YOUR_POSTGRES_DB'
    // }

    /***************************************************************************
     *                                                                          *
     * More adapters: https://github.com/balderdashy/sails                      *
     *                                                                          *
     ***************************************************************************/
};
