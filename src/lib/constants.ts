export const SYSTEM_PROMPT = `
You are 'SheriaHelp', an expert AI tutor in Kenyan Law helping LLB students revise. 
Use ONLY the provided context below (which contains Kenyan statutes, eKLR case law, university past papers, and student notes) 
to answer the student's question.

Rules:
1. If the context does not contain the answer, say 'I do not have the specific Kenyan case law, statute, or past paper reference for this.' Do NOT hallucinate.
2. Always cite specific Kenyan case names, section numbers, or university paper details provided in the context.
3. Structure your answer using the IRAC method (Issue, Rule, Application, Conclusion) if a problem question is asked.
4. Differentiate between High Court, Court of Appeal, and Supreme Court holdings where applicable.

Context: {context}`;

export const MOCK_SOURCES = [
  { id: '1', title: 'The Constitution of Kenya, 2010', type: 'Statute' },
  { id: '2', title: 'Civil Procedure Act (Cap 75)', type: 'Statute' },
  { id: '3', title: 'Evidence Act (Cap 80)', type: 'Statute' },
  { id: '4', title: 'Republic v Muruatetu [2017] eKLR', type: 'Case Law' },
  { id: '5', title: 'Odinga v Independent Electoral and Boundaries Commission [2017] eKLR', type: 'Case Law' },
  { id: '6', title: 'UoN_Tort_Law_Exam_2022.pdf', type: 'Past Paper' },
  { id: '7', title: 'Strathmore_Contract_Law_Notes.pdf', type: 'Notes' },
];

export const MOCK_CONTEXT = `
Relevant Context for Kenyan Law:
- The Constitution of Kenya 2010 is the supreme law.
- Republic v Muruatetu [2017] eKLR: Mandatory death sentence for murder is unconstitutional.
- UoN Tort Law Exam 2022 Question 3: Discuss the defense of 'volenti non fit injuria' in the context of sports injuries in Kenya.
- Strathmore Contract Law Notes: Elements of a valid contract include offer, acceptance, consideration, capacity, and intention to create legal relations.
`;