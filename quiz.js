function gradequiz() {
    let score = 0;
    let result= "";

    const answers = {
        q1: "c",
        q2: "a",
        q3: "c",
        q4: "The One-Line Protocol",
        q5: ["a", "c", "d"]

    };
    
    for (let i = 1; i <= 3; i++) {
        const user = document.querySelector(`input[name="q${i}"]:checked`);
        if (user && user.value === answers[`q${i}`]) {
            score++;
            result += `<p>Q${i} Correct</p>`;
        } else {
            result += `<p>Q${i} Wrong</p>`;
        }
    }

    // Question 4 (text input)
    const q4 = document.querySelector('input[name="q4"]').value.trim().toLowerCase();
    if (q4 === answers.q4) {
        score++;
        result += "<p>Q4 Correct</p>";
    } else {
        result += "<p>Q4 Wrong</p>";
    }

    // Question 5 (checkboxes)
    const selected = Array.from(document.querySelectorAll('input[name="q5"]:checked')).map(e => e.value);
    const match = selected.length === answers.q5.length && selected.every(v => answers.q5.includes(v));
    if (match) {
        score++;
        result += "<p>Q5 Correct</p>";
    } else {
        result += "<p>Q5 Wrong</p>";
    }

    // Show score
    result += `<h3>Score: ${score}/5 — ${score >= 3 ? "PASS" : "FAIL"}</h3>`;
    document.getElementById("result").innerHTML = result;
}