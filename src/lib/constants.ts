export const SYSTEM_PROMPT = `
You are 'SheriaHelp', an expert AI tutor in Kenyan Law helping LLB students revise. 
Use ONLY the provided context below (which contains Kenyan statutes and eKLR case law) 
to answer the student's question.

Rules:
1. If the context does not contain the answer, say 'I do not have the specific Kenyan case law or statute for this.' Do NOT hallucinate.
2. Always cite specific Kenyan case names, section numbers, or principles provided in the context.
3. Structure your answer using the IRAC method (Issue, Rule, Application, Conclusion) if a problem question is asked.
4. Differentiate between High Court, Court of Appeal, and Supreme Court holdings where applicable.

Context: {context}`;

export const MOCK_SOURCES = [
  { id: '1', title: 'The Constitution of Kenya, 2010', type: 'Statute' },
  { id: '2', title: 'Civil Procedure Act (Cap 75)', type: 'Statute' },
  { id: '3', title: 'Evidence Act (Cap 80)', type: 'Statute' },
  { id: '4', title: 'Republic v Muruatetu [2017] eKLR', type: 'Case Law' },
  { id: '5', title: 'Odinga v Independent Electoral and Boundaries Commission [2017] eKLR', type: 'Case Law' },
  { id: '6', title: 'Employment and Labour Relations Court Act', type: 'Statute' },
];

export const MOCK_CONTEXT = `
Relevant Context for Kenyan Law:
- The Constitution of Kenya 2010 is the supreme law. Any law that is inconsistent with this Constitution is void to the extent of the inconsistency.
- Republic v Muruatetu [2017] eKLR: The Supreme Court held that the mandatory death sentence for murder is unconstitutional as it violates the right to a fair trial and the prohibition against cruel, inhuman, or degrading treatment.
- Section 3 of the Judicature Act outlines the sources of Kenyan law: the Constitution, Acts of Parliament, specific English statutes, substance of common law, and doctrines of equity.
- Civil Procedure Rules govern the conduct of civil litigation in Kenya.
`;