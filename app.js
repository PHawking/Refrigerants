const refrigerants = [
  {
    id: "r11",
    name: "R-11",
    chemical: "Trichlorofluoromethane",
    type: "CFC",
    safety: "A1: lower toxicity, no flame propagation",
    hook: "Low-pressure chiller refrigerant; ozone-depleting CFC."
  },
  {
    id: "r12",
    name: "R-12",
    chemical: "Dichlorodifluoromethane",
    type: "CFC",
    safety: "A1: lower toxicity, no flame propagation",
    hook: "Older domestic refrigeration and MVAC; high ODP, phased out."
  },
  {
    id: "r22",
    name: "R-22",
    chemical: "Chlorodifluoromethane",
    type: "HCFC",
    safety: "A1: lower toxicity, no flame propagation",
    hook: "Older residential A/C; HCFC with ozone depletion, phaseout restrictions."
  },
  {
    id: "r123",
    name: "R-123",
    chemical: "2,2-dichloro-1,1,1-trifluoroethane",
    type: "HCFC",
    safety: "B1: higher toxicity, no flame propagation",
    hook: "Low-pressure chiller refrigerant; toxicity matters more than flammability."
  },
  {
    id: "r134a",
    name: "R-134a",
    chemical: "1,1,1,2-tetrafluoroethane",
    type: "HFC",
    safety: "A1: lower toxicity, no flame propagation",
    hook: "No chlorine and zero ODP, but high GWP."
  },
  {
    id: "r404a",
    name: "R-404A",
    chemical: "HFC blend: R-125, R-143a, R-134a",
    type: "HFC blend",
    safety: "A1: lower toxicity, no flame propagation",
    hook: "Commercial refrigeration blend; high GWP, zeotropic blend handling."
  },
  {
    id: "r407c",
    name: "R-407C",
    chemical: "HFC blend: R-32, R-125, R-134a",
    type: "HFC blend",
    safety: "A1: lower toxicity, no flame propagation",
    hook: "R-22 retrofit candidate; has temperature glide and should be charged as liquid."
  },
  {
    id: "r410a",
    name: "R-410A",
    chemical: "Near-azeotropic HFC blend: R-32, R-125",
    type: "HFC blend",
    safety: "A1: lower toxicity, no flame propagation",
    hook: "Common modern high-pressure residential A/C refrigerant."
  },
  {
    id: "r32",
    name: "R-32",
    chemical: "Difluoromethane",
    type: "HFC",
    safety: "A2L: lower toxicity, lower flammability",
    hook: "Used in newer A/C equipment; lower GWP than R-410A but mildly flammable."
  },
  {
    id: "r1234yf",
    name: "R-1234yf",
    chemical: "2,3,3,3-tetrafluoropropene",
    type: "HFO",
    safety: "A2L: lower toxicity, lower flammability",
    hook: "Low-GWP MVAC refrigerant; know A2L handling precautions."
  },
  {
    id: "r1234ze",
    name: "R-1234ze(E)",
    chemical: "trans-1,3,3,3-tetrafluoropropene",
    type: "HFO",
    safety: "A2L: lower toxicity, lower flammability",
    hook: "Low-GWP HFO used in chillers and blends."
  },
  {
    id: "r290",
    name: "R-290",
    chemical: "Propane",
    type: "Natural hydrocarbon",
    safety: "A3: lower toxicity, higher flammability",
    hook: "Very low GWP and zero ODP; charge limits and ignition control are critical."
  },
  {
    id: "r600a",
    name: "R-600a",
    chemical: "Isobutane",
    type: "Natural hydrocarbon",
    safety: "A3: lower toxicity, higher flammability",
    hook: "Common in small domestic refrigerators; highly flammable."
  },
  {
    id: "r717",
    name: "R-717",
    chemical: "Ammonia",
    type: "Natural refrigerant",
    safety: "B2L: higher toxicity, lower flammability",
    hook: "Industrial refrigeration workhorse; toxic and pungent, zero ODP and very low GWP."
  },
  {
    id: "r744",
    name: "R-744",
    chemical: "Carbon dioxide",
    type: "Natural refrigerant",
    safety: "A1: lower toxicity, no flame propagation",
    hook: "Very high pressure systems; zero ODP and GWP defined as 1."
  },
  {
    id: "r718",
    name: "R-718",
    chemical: "Water",
    type: "Natural refrigerant",
    safety: "A1: lower toxicity, no flame propagation",
    hook: "Used in special chillers; safe but limited by freezing and vacuum operation."
  }
];

const conceptCards = [
  {
    id: "class-a1",
    category: "Safety Codes",
    question: "What does ASHRAE safety class A1 mean?",
    answer: "A means lower toxicity. 1 means no flame propagation under the test conditions."
  },
  {
    id: "class-a2l",
    category: "Safety Codes",
    question: "What does A2L mean?",
    answer: "Lower toxicity with lower flammability and a low burning velocity. Many newer HFOs and some HFCs are A2L."
  },
  {
    id: "class-a3",
    category: "Safety Codes",
    question: "What does A3 mean?",
    answer: "Lower toxicity but higher flammability. Propane R-290 and isobutane R-600a are common examples."
  },
  {
    id: "class-b",
    category: "Safety Codes",
    question: "What does the letter B mean in a refrigerant safety group?",
    answer: "Higher toxicity. Ammonia R-717 is a common EPA 608 example."
  },
  {
    id: "cfc",
    category: "Families",
    question: "Why are CFC refrigerants a major EPA 608 topic?",
    answer: "CFCs contain chlorine, have high ozone depletion potential, and were phased out for new production."
  },
  {
    id: "hcfc",
    category: "Families",
    question: "How are HCFCs different from CFCs?",
    answer: "HCFCs contain hydrogen, chlorine, fluorine, and carbon. They generally have lower ODP than CFCs but still deplete ozone."
  },
  {
    id: "hfc",
    category: "Families",
    question: "What is the EPA 608 memory hook for HFCs?",
    answer: "HFCs have no chlorine and zero ODP, but many have high global warming potential."
  },
  {
    id: "hfo",
    category: "Families",
    question: "What makes HFOs different?",
    answer: "HFOs are unsaturated fluorocarbons designed for low GWP. Many are A2L mildly flammable refrigerants."
  },
  {
    id: "recover",
    category: "EPA 608 Core",
    question: "What does recover mean?",
    answer: "Remove refrigerant from an appliance and store it in an external container without necessarily testing or processing it."
  },
  {
    id: "recycle",
    category: "EPA 608 Core",
    question: "What does recycle mean?",
    answer: "Clean recovered refrigerant for reuse, usually with oil separation and filter-driers, without meeting full reclamation requirements."
  },
  {
    id: "reclaim",
    category: "EPA 608 Core",
    question: "What does reclaim mean?",
    answer: "Process used refrigerant to meet new-product purity specifications, typically by an EPA-certified reclaimer."
  },
  {
    id: "venting",
    category: "EPA 608 Core",
    question: "What is the venting rule memory hook?",
    answer: "Do not knowingly vent regulated refrigerants during service, maintenance, repair, or disposal."
  }
];

var refrigerantCards = [];

refrigerants.forEach(function (item) {
  refrigerantCards.push({
    id: item.id + "-chemical",
    category: "Chemical Names",
    question: "What is the chemical name or blend for " + item.name + "?",
    answer: item.chemical
  });
  refrigerantCards.push({
    id: item.id + "-type",
    category: "Refrigerant Types",
    question: "What refrigerant family is " + item.name + "?",
    answer: item.type + ". " + item.hook
  });
  refrigerantCards.push({
    id: item.id + "-safety",
    category: "Safety Codes",
    question: "What toxicity and flammability class is " + item.name + "?",
    answer: item.safety
  });
});

var cards = conceptCards.concat(refrigerantCards);
var cardOrder = cards.map(function (_, index) { return index; });
let currentIndex = 0;
let showingAnswer = false;
const storageKey = "refrigerantFlashcardProgress";

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(storageKey) || "{}");
  } catch (error) {
    return {};
  }
}

const progress = loadProgress();

const elements = {
  categoryFilter: document.querySelector("#category-filter"),
  modeFilter: document.querySelector("#mode-filter"),
  shuffleButton: document.querySelector("#shuffle-button"),
  resetButton: document.querySelector("#reset-button"),
  flashcard: document.querySelector("#flashcard"),
  cardCategory: document.querySelector("#card-category"),
  cardPosition: document.querySelector("#card-position"),
  cardLabel: document.querySelector("#card-label"),
  cardText: document.querySelector("#card-text"),
  previousButton: document.querySelector("#previous-button"),
  nextButton: document.querySelector("#next-button"),
  reviewButton: document.querySelector("#review-button"),
  knownButton: document.querySelector("#known-button"),
  knownCount: document.querySelector("#known-count"),
  reviewCount: document.querySelector("#review-count"),
  cheatSheet: document.querySelector("#cheat-sheet")
};

function saveProgress() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(progress));
  } catch (error) {
    // Some iPad file-browser modes block localStorage. Cards still work without saved progress.
  }
}

function populateFilters() {
  const categoryMap = {};
  const categories = ["All Categories"];

  cards.forEach(function (card) {
    if (!categoryMap[card.category]) {
      categoryMap[card.category] = true;
      categories.push(card.category);
    }
  });

  elements.categoryFilter.innerHTML = categories
    .map(function (category) {
      return "<option value=\"" + category + "\">" + category + "</option>";
    })
    .join("");
}

function getFilteredOrder() {
  const category = elements.categoryFilter.value;
  const mode = elements.modeFilter.value;

  return cardOrder.filter((cardIndex) => {
    const card = cards[cardIndex];
    const cardProgress = progress[card.id];
    const categoryMatches = category === "All Categories" || card.category === category;
    const modeMatches =
      mode === "all" ||
      (mode === "known" && cardProgress === "known") ||
      (mode === "review" && cardProgress === "review");
    return categoryMatches && modeMatches;
  });
}

function renderCard() {
  const filteredOrder = getFilteredOrder();
  const total = filteredOrder.length;

  if (total === 0) {
    elements.cardCategory.textContent = "No cards";
    elements.cardPosition.textContent = "0 / 0";
    elements.cardLabel.textContent = "Empty";
    elements.cardText.textContent = "No cards match the current filters.";
    return;
  }

  currentIndex = Math.min(currentIndex, total - 1);
  const card = cards[filteredOrder[currentIndex]];
  elements.cardCategory.textContent = card.category;
  elements.cardPosition.textContent = `${currentIndex + 1} / ${total}`;
  elements.cardLabel.textContent = showingAnswer ? "Answer" : "Question";
  elements.cardText.textContent = showingAnswer ? card.answer : card.question;
  updateCounts();
}

function updateCounts() {
  let known = 0;
  let review = 0;

  Object.keys(progress).forEach(function (key) {
    if (progress[key] === "known") known += 1;
    if (progress[key] === "review") review += 1;
  });

  elements.knownCount.textContent = known;
  elements.reviewCount.textContent = review;
}

function setProgress(value) {
  const filteredOrder = getFilteredOrder();
  if (filteredOrder.length === 0) return;

  const card = cards[filteredOrder[currentIndex]];
  progress[card.id] = value;
  saveProgress();
  updateCounts();
  goToCard(1);
}

function goToCard(direction) {
  const filteredOrder = getFilteredOrder();
  if (filteredOrder.length === 0) return;

  currentIndex = (currentIndex + direction + filteredOrder.length) % filteredOrder.length;
  showingAnswer = false;
  renderCard();
}

function shuffleCards() {
  for (let index = cardOrder.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [cardOrder[index], cardOrder[swapIndex]] = [cardOrder[swapIndex], cardOrder[index]];
  }
  currentIndex = 0;
  showingAnswer = false;
  renderCard();
}

function renderCheatSheet() {
  elements.cheatSheet.innerHTML = refrigerants
    .map(function (item) {
      return "<tr>" +
        "<td><strong>" + item.name + "</strong></td>" +
        "<td>" + item.chemical + "</td>" +
        "<td><span class=\"pill\">" + item.type + "</span></td>" +
        "<td>" + item.safety + "</td>" +
        "<td>" + item.hook + "</td>" +
      "</tr>";
    })
    .join("");
}

elements.flashcard.addEventListener("click", () => {
  showingAnswer = !showingAnswer;
  renderCard();
});

elements.previousButton.addEventListener("click", () => goToCard(-1));
elements.nextButton.addEventListener("click", () => goToCard(1));
elements.reviewButton.addEventListener("click", () => setProgress("review"));
elements.knownButton.addEventListener("click", () => setProgress("known"));
elements.shuffleButton.addEventListener("click", shuffleCards);
elements.categoryFilter.addEventListener("change", () => {
  currentIndex = 0;
  showingAnswer = false;
  renderCard();
});
elements.modeFilter.addEventListener("change", () => {
  currentIndex = 0;
  showingAnswer = false;
  renderCard();
});
elements.resetButton.addEventListener("click", () => {
  Object.keys(progress).forEach((key) => delete progress[key]);
  saveProgress();
  currentIndex = 0;
  showingAnswer = false;
  renderCard();
});

populateFilters();
renderCheatSheet();
renderCard();
