import { mongoose } from '../database/index';

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  actie: {
    type: Boolean,
    required: true,
  },
});

const userModel = mongoose.model('User', UserSchema);

export default userModel;
