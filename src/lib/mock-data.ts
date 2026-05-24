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

export const MOCK_NO_DATA_RESPONSE = {
  answer: "I do not have the specific Kenyan case law or statute for this in the current database.",
  sources: []
};