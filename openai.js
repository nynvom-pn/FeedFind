fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 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"
    },
    body: JSON.stringify({
        model: "text-davinci-003",
        prompt: "Gợi ý nội dung cho người thích thời trang.",
        max_tokens: 100
    })
})
.then(response => response.json())
.then(data => {
    const suggestionElement = document.getElementById("suggestion");
    if (suggestionElement) {
        suggestionElement.innerText = data.choices[0].text;
    }
})
.catch(error => console.error('Error:', error));