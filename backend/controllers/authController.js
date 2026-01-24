const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../database/models/User");

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "Email and password required" });

    const existing = await User.findOne({ where: { email } });
    if (existing)
      return res.status(400).json({ message: "User already exists" });

    const hashed = bcrypt.hashSync(password, 10);

    const user = await User.create({
      email,
      password: hashed,
    });

    return res.status(201).json({ message: "User created", userId: user.id });
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user)
      return res.status(401).json({ message: "Invalid credentials" });

    const valid = bcrypt.compareSync(password, user.password);
    if (!valid)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.json({ token });
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err });
  }
};
