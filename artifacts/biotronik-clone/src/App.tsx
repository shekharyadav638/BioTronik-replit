import { Switch, Route, Router as WouterRouter } from "wouter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import NewsroomPage from "./pages/NewsroomPage";
import CompanyPage from "./pages/CompanyPage";
import PatientsPage from "./pages/PatientsPage";
import ProductsPage from "./pages/ProductsPage";
import ProfessionalsPage from "./pages/ProfessionalsPage";
import CareersPage from "./pages/CareersPage";
import ArticlePage from "./pages/ArticlePage";
import GenericPage from "./pages/GenericPage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutUsPage from "./pages/AboutUsPage";
import HistoryPage from "./pages/HistoryPage";
import MissionPage from "./pages/MissionPage";
import FAQPage from "./pages/FAQPage";
import DXTechnologyPage from "./pages/DXTechnologyPage";
import ClinicalStudiesPage from "./pages/ClinicalStudiesPage";
import PrivacyPage from "./pages/PrivacyPage";
import GTCPage from "./pages/GTCPage";
import "./index.css";

function Router() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <div style={{ flex: 1 }}>
        <Switch>
          {/* ── Home ── */}
          <Route path="/en-us" component={HomePage} />
          <Route path="/en-us/" component={HomePage} />

          {/* ── Company ── */}
          <Route path="/en-us/company" component={CompanyPage} />
          <Route path="/en-us/company/about-us" component={AboutUsPage} />
          <Route path="/en-us/company/about-us/our-history" component={HistoryPage} />
          <Route path="/en-us/company/about-us/mission-vision-values" component={MissionPage} />
          <Route path="/en-us/company/:rest*" component={GenericPage} />

          {/* ── Patients ── */}
          <Route path="/en-us/patients" component={PatientsPage} />
          <Route path="/en-us/patients/faq" component={FAQPage} />
          <Route path="/en-us/patients/:rest*" component={GenericPage} />

          {/* ── Products ── */}
          <Route path="/en-us/products" component={ProductsPage} />
          <Route path="/en-us/products/:rest*" component={GenericPage} />

          {/* ── Professionals ── */}
          <Route path="/en-us/professionals" component={ProfessionalsPage} />
          <Route path="/en-us/professionals/clinical-studies" component={ClinicalStudiesPage} />
          <Route path="/en-us/professionals/clinical-studies/:rest*" component={ClinicalStudiesPage} />
          <Route path="/en-us/professionals/featured-technologies/dx-technology" component={DXTechnologyPage} />
          <Route path="/en-us/professionals/:rest*" component={GenericPage} />

          {/* ── Newsroom ── */}
          <Route path="/en-us/newsroom" component={NewsroomPage} />
          <Route path="/en-us/newsroom/:rest*" component={GenericPage} />

          {/* ── Careers ── */}
          <Route path="/en-us/careers" component={CareersPage} />
          <Route path="/en-us/careers/:rest*" component={GenericPage} />

          {/* ── Legal ── */}
          <Route path="/en-us/privacy-statement" component={PrivacyPage} />
          <Route path="/en-us/general-terms-and-conditions" component={GTCPage} />

          {/* ── Named article / press-release pages ── */}
          <Route path="/en-us/biotronik-achieves-first-human-implantations-liviq-leadless-pacemaker" component={ArticlePage} />
          <Route path="/en-us/biotronik-and-micare-path-announce-first-its-kind-partnership" component={ArticlePage} />
          <Route path="/en-us/biotronik-and-university-sydney-partner-transform-cardiac-care-through-digital-innovation" component={ArticlePage} />
          <Route path="/en-us/biotronik-announces-fda-approval-acticor-sky-and-rivacor-sky-icd-and-crt-d-systems" component={ArticlePage} />
          <Route path="/en-us/biotronik-announces-first-us-commercial-implant-solia-csp-s-worlds-first-pacing-lead-specifically" component={ArticlePage} />
          <Route path="/en-us/biotronik-announces-first-us-implant-investigational-next-generation-leadless-pacemaker" component={ArticlePage} />
          <Route path="/en-us/biotronik-leaps-forward-next-generation-leadless-pacing" component={ArticlePage} />
          <Route path="/en-us/BIOTRONIK-Driving-the-Future-of-Active-Device-Business" component={ArticlePage} />

          {/* ── Wildcard /en-us/* (distributors, misc flat slugs) ── */}
          <Route path="/en-us/:slug" component={GenericPage} />
          <Route path="/en-us/:a/:b" component={GenericPage} />
          <Route path="/en-us/:a/:b/:c" component={GenericPage} />
          <Route path="/en-us/:a/:b/:c/:d" component={GenericPage} />

          {/* Redirect bare root to /en-us */}
          <Route path="/">
            {() => { window.location.replace("/en-us"); return null; }}
          </Route>

          <Route component={NotFoundPage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;
