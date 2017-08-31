var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var filterSchema   = new Schema({
    cities:{
        type: Array,
        name:{
            type: String
        },
        value:{
            type: String
        },
        important:{
            type: Boolean
        },
        schools:{
            type: Array,
            name:{
                type: String
            },
            value:{
                type: String
            }
        },
        univers:{
            type: Array,
            name:{
                type: String
            },
            value:{
                type: String
            }
        }

    },
    name:{
        type: String,
        required: true
    }
});

var Filter = module.exports = mongoose.model('Filter', filterSchema);

// Get Users
module.exports.getFilters = function (callback, limit) {
    Filter.find(callback).limit();
};