const nl = String.fromCharCode(10);

export const MOCK_LEGAL_RESPONSE = {
  answer: [
    "Issue: Whether a tenant in a controlled tenancy can be evicted without the notice prescribed by Section 4 of Cap 301.",
    "",
    "Rule: The Landlord and Tenant (Shops, Hotels and Catering Establishments) Act, Cap 301, provides protection to tenants in controlled tenancies. Section 4(1) mandates that a landlord shall not terminate a controlled tenancy except by giving a notice in the prescribed form and manner.",
    "",
    "Application: If the premises qualify as a 'controlled tenancy', the landlord must serve a formal 'Form A' notice. Without this, the eviction is procedurally flawed.",
    "",
    "Conclusion: Purported eviction is unlawful. The tenant should seek an injunction from the Business Premises Rent Tribunal (BPRT)."
  ].join(nl),
  sources: [
    "Landlord and Tenant Act (Cap 301).pdf",
    "Republic v Business Premises Rent Tribunal [2014].pdf",
    "Heptulla v Kassam [2010] eKLR.pdf"
  ]
};

export const MOCK_PAST_PAPER_RESPONSE = {
  answer: [
    "Question Analysis: You are asking about Question 3 from the University of Nairobi 2022 Tort Law Examination regarding sports injuries.",
    "",
    "Rule: The defense of 'volenti non fit injuria' (voluntary assumption of risk) applies when a person knowingly and voluntarily accepts the risk of harm. In Kenyan sports law, this is often cited in cases where spectators or players are injured during the normal course of a game.",
    "",
    "Application: According to the 2022 UoN Exam Guidelines, a student must demonstrate that the plaintiff was aware of the specific risk and consented to it either expressly or by implication through participation.",
    "",
    "Conclusion: For injuries sustained within the rules of the sport, the defense typically succeeds. However, it does not cover reckless or intentional foul play outside the standard rules of the game."
  ].join(nl),
  sources: [
    "UoN_Tort_Law_Exam_2022.pdf",
    "Kenya_Sports_Act_Notes.pdf",
    "Wanyama v Athletics Kenya [2018] eKLR.pdf"
  ]
};

export const MOCK_NO_DATA_RESPONSE = {
  answer: "I do not have the specific Kenyan case law, statute, or past paper reference for this in the current database.",
  sources: []
};