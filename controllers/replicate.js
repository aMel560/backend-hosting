import Replicate from "replicate";
import axios from "axios";
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export const CreateImage = async (req, res) => {
  const output = await replicate.run((input = {}));
  //   console.log(output);
  res.json({ src: output });
};

export const TextGeneration = async (req, res) => {
  const body = {
    contents: [
      {
        parts: [
          {
            text: req.body.prompt,
          },
        ],
      },
    ],
  };
  const responseGemini = await axios.post(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyB_DEzujD7idoAf3KfsdGIJg3dW48dhRTI",
    body
  );

  res.json({ response: responseGemini.data });
};
