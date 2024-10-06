const openai = require('../config/openaiConfig');

const generateMeta = async (title) => {

  const description = await openai.chat.completions.create({
    model:"gpt-4o-mini",
    messages: [
      {
        role: 'user',
        content: `Come up with a description for a YouTube video called ${title}`
      }
    ],
    max_tokens: 100
  });

  console.log(description.choices[0].message);

  const tags = await openai.chat.completions.create({
    model:"gpt-4o-mini",
    messages: [
      {
        role: 'user',
        content: `Come up with 10 keywords for a YouTube video called ${title}`
      }
    ],
    max_tokens: 100
  });

  console.log(tags.choices[0].message);
}

module.exports = {generateMeta};