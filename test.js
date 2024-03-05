const prompt = "Como puedo enamorar a Luisa";

const jsonbody = JSON.stringify({
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "user",
      content: prompt,
    },
  ],
  temperature: 1,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});

const sendRequest = async () => {
  const resp = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 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",
    },
    body: jsonbody,
  });
  const mjson = await resp.json();
  console.log(mjson.choices[0].message.content);
};

sendRequest();
