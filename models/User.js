const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'User' },
    about: { type: String, default: '' },
    phone: { type: String, default: '' },
    email: { type: String, default: '' },
    linkedin: { type: String, default: '' },
    github: { type: String, default: '' },
    projects: [{
        name: { type: String, required: true },
        description: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true }
    }],

    skills: { type: [String], default: [] },

    certificates: [{
        name: { type: String, required: true },
        issuer: { type: String, required: true }
    }],

    workExp: [{
        companyName: { type: String, required: true },
        role: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true }
    }],

}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);  
