const Candidate = require("../database/models/Candidate");
const handleErrorResponse = require("../utils/handleErrorResponse");

exports.getAll = async (req, res) => {
  try {
    const candidates = await Candidate.findAll();
    res.json(candidates);
  } catch (err) {
    return handleErrorResponse(res, err, "Error fetching candidates");
  }
};

exports.getOne = async (req, res) => {
  try {
    const candidate = await Candidate.findByPk(req.params.id);

    if (!candidate)
      return res.status(404).json({ message: "Candidate not found" });

    res.json(candidate);
  } catch (err) {
    return handleErrorResponse(res, err, "Error fetching candidate");
  }
};

exports.create = async (req, res) => {
  try {
    const { fullName, position, company, linkedinUrl, notes } = req.body;

    if (!fullName)
      return res.status(400).json({ message: "fullName is required" });

    const candidate = await Candidate.create({
      fullName,
      position,
      company,
      linkedinUrl,
      notes,
      userId: req.user.userId, 
    });

    res.status(201).json(candidate);
  } catch (err) {
    return handleErrorResponse(res, err, "Error creating candidate");
  }
};

exports.update = async (req, res) => {
  try {
    const candidate = await Candidate.findByPk(req.params.id);

    if (!candidate)
      return res.status(404).json({ message: "Candidate not found" });

    await candidate.update(req.body);

    res.json(candidate);
  } catch (err) {
    return handleErrorResponse(res, err, "Error updating candidate");
  }
};

exports.remove = async (req, res) => {
  try {
    const candidate = await Candidate.findByPk(req.params.id);

    if (!candidate)
      return res.status(404).json({ message: "Candidate not found" });

    await candidate.destroy();

    res.status(204).send();
  } catch (err) {
    return handleErrorResponse(res, err, "Error deleting candidate");
  }
};
