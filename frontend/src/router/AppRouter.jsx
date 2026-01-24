import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import CandidatesListPage from "../pages/CandidatesListPage";
import CandidateFormPage from "../pages/CandidateFormPage";
import ImportLinkedInPage from "../pages/ImportLinkedInPage";
import ProtectedRoute from "../components/ProtectedRoute";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <CandidatesListPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/candidates/new"
          element={
            <ProtectedRoute>
              <CandidateFormPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/candidates/:id"
          element={
            <ProtectedRoute>
              <CandidateFormPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/import-linkedin"
          element={
            <ProtectedRoute>
              <ImportLinkedInPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
