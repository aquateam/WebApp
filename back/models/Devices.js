const mongoose = require('mongoose');

const DevicesSchema = mongoose.Schema({
    name: String,
    description: String,
});

const DevicesModel = mongoose.model('Devices', DevicesSchema);

module.exports = DevicesModel;

