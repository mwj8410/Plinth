/* global module, require */

const params = require('../Utilities/params');
const StandardResponses = require('../Utilities/StandardResponses/standardResponses');

const UserController = require('../Controllers/User.controller');

module.exports = {

  create: (req, res) => {
    let values = params.extract(req.params, [
      { valueName: 'loginName', dataType: 'string', required: true },
      { valueName: 'email', dataType: 'email', required: true },

      { valueName: 'firstName', dataType: 'string', required: false },
      { valueName: 'lastNAme', dataType: 'string', required: false },
      { valueName: 'dateOfBirth', dataType: 'date', required: false },

      { valueName: 'creationMethod', dataType: 'string', required: false }
    ]);


    UserController.create((error, newUser) => {
      if (error) {
        // check the error to see if we can decide what to tell the client
        if (error.inernalCode && error.inernalCode === 422) {
          return res.status(422).send(StandardResponses.malformed);
        }
        return res.status(500).send(StandardResponses.server);
      }
      return res.status(200).send(newUser);
    });
  },

  delete: (req, res) => {
    let values = params.extract(req.params, [
      { valueName: 'id', dataType: 'number', required: true }
    ]);

    if (values === false) {
      return res.status(422).send(StandardResponses.malformed);
    }

    return res.status(200).send();
  },

  get: (req, res) => {
    let values = params.extract(req.params, [
      { valueName: 'id', dataType: 'number', required: true }
    ]);

    if (values === false) {
      return res.status(422).send(StandardResponses.malformed);
    }

    return res.status(200).send();
  },

  patch: (req, res) => {
    return res.status(200).send();
  },

  update: (req, res) => {
    return res.status(200).send();
  }
};
