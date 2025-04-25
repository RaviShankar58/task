const User = require('../models/User');
const jwt = require('jsonwebtoken');

// ---------------------------------------------------------------------------
// Generate JWT Token
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );
};

// ---------------------------------------------------------------------------
// for registering a new user

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: 'This user already exists' });

    user = await User.create({ name, email, password, role });
    const token = generateToken(user);

    res.status(201).json({
      token,
      user: { name: user.name, email: user.email, role: user.role }
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error || Can not create user now' });
  }
};
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
// for logging in an existing user

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user);
    res.status(200).json({
      token,
      user: { name: user.name, email: user.email, role: user.role }
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error || Login Failed' });
  }
};
