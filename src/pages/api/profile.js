import { NextApiRequest, NextApiResponse } from "next";

// Dummy user profile data
let userProfiles = {
  "attri2707@gmail.com": {
    points: 0,
  },
};

// API to handle fetching the profile
export default function handler(req, res) {
  const { method } = req;

  if (method === "GET") {
    const { email } = req.query;

    if (userProfiles[email]) {
      res.status(200).json({ profile: userProfiles[email] });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
