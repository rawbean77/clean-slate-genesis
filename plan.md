# Plan: Integrate University Past Papers and Notes

The goal is to expand the SheriaHelp AI tutor's knowledge base to include Kenyan university law past papers and notes, updating both the AI's internal "logic" (prompting/mocking) and the UI to reflect these new resources.

## 1. Update Constants and Prompting
- Modify `src/lib/constants.ts` to update the `SYSTEM_PROMPT` to explicitly include "university past papers and notes".
- Add mock sources representing these new categories.

## 2. Enhance Mock Data
- Update `src/lib/mock-data.ts` with a new mock response specifically tailored to a past paper question (e.g., Tort Law exam paper from a major Kenyan university).
- Ensure mock sources include a variety of file types (e.g., `.pdf` for papers, `.docx` or `.pdf` for notes).

## 3. Improve UI for Source Identification
- Modify `src/components/AnalysisResult.tsx` to dynamically label and style badges for sources (e.g., "eKLR" for judgments, "Exam" for past papers, "Notes" for study material).
- Use a helper function to infer the source type from the filename string.

## 4. Update Main Interface
- Update `src/App.tsx` header tagline to mention the inclusion of university resources.
- Update the textarea placeholder to give examples of past paper queries.
- Update the button loading state to reflect searching across the expanded database.
