// controllers/certificationController.js
import Certification from '../Models/Certifications.Model.js';

export const getAllCertifications = async (req, res) => {
  const certifications = await Certification.find();
  res.json({ certifications });
};

export const createCertification = async (req, res) => {
  const cert = new Certification(req.body);
  await cert.save();
  res.status(201).json(cert);
};

import mongoose from "mongoose";

export const getCertificationById = async (req, res) => {
  const { certificationId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(certificationId)) {
    return res.status(400).json({ error: "Invalid certification ID" });
  }

  try {
    const cert = await Certification.findById(certificationId);
    if (!cert) {
      return res.status(404).json({ error: "Certification not found" });
    }
    res.status(200).json(cert);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

