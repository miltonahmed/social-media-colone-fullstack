const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    text: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    text: true,
  },
  userName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    text: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    default: '',
  },
  cover: {
    type: String,
    trim: true,
  },
  birthMonth: {
    type: Number,
    required: true,
  },
  birthDay: {
    type: Number,
    required: true,
  },
  birthYear: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  friends: [{ type: ObjectId, ref: 'User' }],
  followers: [{ type: ObjectId, ref: 'User' }],
  request: [{ type: ObjectId, ref: 'User' }],
  search: [
    {
      user: {
        type: ObjectId,
        ref: 'User',
        required: true,
      },
      createdAt: {
        type: Date,
        required: true,
      },
    },
  ],
  details: {
    bio: {
      type: String,
    },
    otherName: {
      type: String,
    },
    job: {
      type: String,
    },
    currentCity: {
      type: String,
    },
    workPlace: {
      type: String,
    },
    highschool: {
      type: String,
    },
    homeTown: {
      type: String,
    },
    relationship: {
      type: String,
      enum: [
        'Single',
        'In A Relationship',
        'its Completed',
        'Married',
        'Divorced',
      ],
    },
    instagram: {
      type: String,
    },
  },
  savePost: [
    {
      post: {
        type: ObjectId,
        ref:"Post"
      },
      savedAt: {
        type: Date,
        required:true,
      }
    }
  ]
}, {
  timestamps:true
}
  
);

module.exports = mongoose.model('User', userSchema);
