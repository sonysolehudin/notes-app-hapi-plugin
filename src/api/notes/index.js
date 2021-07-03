/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
const NotesHandler = require('./handler');
const routes = require('./routes');
 
module.exports = {
  name: 'notes',
  version: '1.0.0',
  register: async (server, { service }) => {
    const notesHandler = new NotesHandler(service);
    server.route(routes(notesHandler));
  },
};