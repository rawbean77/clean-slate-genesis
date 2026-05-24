# Implementation Plan: SheriaHelp (React Migration)

Migration of the provided Streamlit-based Kenyan Law AI Tutor into a React-based frontend application.

## Scope Summary
- Replicate the SheriaHelp UI (Kenyan Law Study Companion) using React, Tailwind CSS, and Shadcn UI components.
- Implement a chat/query interface for legal analysis.
- **Critical Limitation**: Since this environment has no server-side or Supabase access, the actual LangChain/Chroma backend from the Python script cannot be executed directly in the browser.
- **Approach**: Create the frontend architecture and UI. For the RAG (Retrieval-Augmented Generation) functionality, provide a mock implementation or a structure that can call an external API (like OpenAI) if a key is provided by the user in the UI.

## Assumptions & Open Questions
- **Assumption**: The user wants a functional *UI* that looks and behaves like the Streamlit app but in React.
- **Constraint**: ChromaDB and Python LangChain chains cannot run in a browser-only React app.
- **Alternative**: I will implement the UI and a "Simulation Mode" or "API Mode" where the user can enter an OpenAI API key to get responses, but vector retrieval will be mocked or simplified unless an external retrieval service is provided.

## Affected Areas
- `src/App.tsx`: Main application structure.
- `src/components/`: New components for Chat, Sidebar, and Legal Analysis results.
- `src/lib/ai-service.ts`: (New) Logic for handling AI queries.

## Phases

### Phase 1: Foundation & Layout (frontend_engineer)
- Set up the main layout with a sidebar (System Status) and a main content area (Ask the AI Tutor).
- Implement the "SheriaHelp" branding and header.
- Deliverables: Functional layout with `App.tsx` updated.

### Phase 2: Query Interface & Components (frontend_engineer)
- Use Shadcn `Textarea` for the legal query input.
- Use Shadcn `Button` for the "Analyze & Search" action.
- Build the "Analysis" display section (using IRAC structure formatting).
- Build the "Legal Sources Cited" list component.
- Deliverables: Interactive UI components.

### Phase 3: System Status & State (frontend_engineer)
- Implement the sidebar status indicators (Database connection, Online/Offline status).
- Manage application state (loading, error, response data).
- Deliverables: Visual feedback for system status.

### Phase 4: Mock AI Integration (quick_fix_engineer)
- Implement a service layer that simulates the LangChain response based on the Python logic.
- If the user provides an API key via a UI setting (optional), add a basic Fetch call to OpenAI.
- Deliverables: Functional (mocked) query loop.

## Downstream Ownership
1. **frontend_engineer**: Primary owner for Phases 1-3.
2. **quick_fix_engineer**: Final polish and mock integration logic.
