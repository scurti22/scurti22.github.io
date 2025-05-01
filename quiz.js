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
        const input = document.querySelector(`input[name="q${i}"]:checked`);
        if (input && input.value === answers[`q${i}`]) {
            score++;
            result += `Q${i} Correct\n`;
        } else {
            result += `Q${i} Wrong\n`;
        }
    }

    const q4 = document.querySelector('input[name="q4"]').value.trim().toLowerCase();
    if (q4 === answers.q4.toLowerCase()) {
        score++;
        result += "Q4 Correct\n";
    } else {
        result += "Q4 Wrong\n";
    }

    const selected = Array.from(document.querySelectorAll('input[name="q5"]:checked')).map(e => e.value);
    const correct = selected.length === answers.q5.length && selected.every(v => answers.q5.includes(v));
    if (correct) {
        score++;
        result += "Q5 Correct\n";
    } else {
        result += "Q5 Wrong\n";
    }

    result += `Score: ${score}/5 — ${score >= 3 ? "PASS" : "FAIL"}`;
    console.log(result);
}