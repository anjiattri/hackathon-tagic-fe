import { NextApiRequest, NextApiResponse } from "next";

// Dummy user profile data
let userProfiles = {
  "attri2707@gmail.com": {
    points: 0,
  },
};

// API to handle updating points
export default function handler(req, res) {
  const { method } = req;
  const { email } = req.body;

  if (method === "POST") {
    if (userProfiles[email]) {
      userProfiles[email].points += 10; // Add points to the user profile
      res
        .status(200)
        .json({ message: "Points added", profile: userProfiles[email] });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
