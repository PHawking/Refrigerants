import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
SOURCES = [
    ("EPA608_Core_Questions.md", "EPA 608 Core", "core"),
    ("EPA608_Type1_Questions.md", "Type I", "type1"),
    ("EPA608_Type2_Questions.md", "Type II", "type2"),
    ("EPA608_TYPE3_Questions.md", "Type III", "type3"),
]


def section(block, heading, next_headings):
    next_pattern = "|".join(re.escape(item) for item in next_headings)
    match = re.search(
        rf"\*\*{re.escape(heading)}\*\*\s*\n(.*?)(?=\n\*\*(?:{next_pattern})\*\*|\Z)",
        block,
        re.S,
    )
    return match.group(1).strip() if match else ""


def clean(text):
    return re.sub(r"\s*\n\s*", " ", text).strip()


cards = []
for filename, category, slug in SOURCES:
    content = (ROOT / filename).read_text(encoding="utf-8-sig")
    blocks = re.split(r"(?=^## Question[^\n]*$)", content, flags=re.M)[1:]
    for index, block in enumerate(blocks, 1):
        question = clean(section(block, "Question", ["Answer choices", "Correct Answer", "Explanation"]))
        choices_raw = section(block, "Answer choices", ["Correct Answer", "Explanation"])
        choices = [clean(line) for line in choices_raw.splitlines() if line.strip()]
        correct = clean(section(block, "Correct Answer", ["Explanation"]))
        explanation = clean(section(block, "Explanation", []))
        if not question or not correct:
            raise ValueError(f"Incomplete question in {filename}, block {index}")
        front = question
        if choices:
            front += "\n\n" + "\n".join(choices)
        answer = "Correct answer: " + correct
        if explanation:
            answer += "\n\nExplanation: " + explanation
        cards.append(
            {
                "id": f"exam-{slug}-{index}",
                "category": category,
                "question": front,
                "answer": answer,
            }
        )

output = "// Generated from the EPA608_*_Questions.md source files.\n"
output += "const examCards = " + json.dumps(cards, indent=2, ensure_ascii=False) + ";\n"
(ROOT / "epa608-questions.js").write_text(output, encoding="utf-8")
print(f"Generated {len(cards)} cards in epa608-questions.js")
