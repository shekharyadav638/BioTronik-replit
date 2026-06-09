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
import "./index.css";

function Router() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <div style={{ flex: 1 }}>
        <Switch>
          {/* Home */}
          <Route path="/en-us" component={HomePage} />
          <Route path="/en-us/" component={HomePage} />

          {/* Company section */}
          <Route path="/en-us/company" component={CompanyPage} />
          <Route path="/en-us/company/:rest*" component={GenericPage} />

          {/* Patients section */}
          <Route path="/en-us/patients" component={PatientsPage} />
          <Route path="/en-us/patients/:rest*" component={GenericPage} />

          {/* Products section */}
          <Route path="/en-us/products" component={ProductsPage} />
          <Route path="/en-us/products/:rest*" component={GenericPage} />

          {/* Professionals section */}
          <Route path="/en-us/professionals" component={ProfessionalsPage} />
          <Route path="/en-us/professionals/:rest*" component={GenericPage} />

          {/* Newsroom */}
          <Route path="/en-us/newsroom" component={NewsroomPage} />
          <Route path="/en-us/newsroom/:rest*" component={GenericPage} />

          {/* Careers */}
          <Route path="/en-us/careers" component={CareersPage} />
          <Route path="/en-us/careers/:rest*" component={GenericPage} />

          {/* Article / press release pages (slug directly under /en-us/) */}
          <Route path="/en-us/biotronik-achieves-first-human-implantations-liviq-leadless-pacemaker" component={ArticlePage} />
          <Route path="/en-us/biotronik-and-micare-path-announce-first-its-kind-partnership" component={ArticlePage} />
          <Route path="/en-us/biotronik-and-university-sydney-partner-transform-cardiac-care-through-digital-innovation" component={ArticlePage} />
          <Route path="/en-us/biotronik-announces-fda-approval-acticor-sky-and-rivacor-sky-icd-and-crt-d-systems" component={ArticlePage} />
          <Route path="/en-us/biotronik-announces-first-us-commercial-implant-solia-csp-s-worlds-first-pacing-lead-specifically" component={ArticlePage} />
          <Route path="/en-us/biotronik-announces-first-us-implant-investigational-next-generation-leadless-pacemaker" component={ArticlePage} />
          <Route path="/en-us/biotronik-leaps-forward-next-generation-leadless-pacing" component={ArticlePage} />
          <Route path="/en-us/BIOTRONIK-Driving-the-Future-of-Active-Device-Business" component={ArticlePage} />

          {/* All other /en-us/* pages — distributors, legal, misc */}
          <Route path="/en-us/:slug" component={GenericPage} />
          <Route path="/en-us/:a/:b" component={GenericPage} />
          <Route path="/en-us/:a/:b/:c" component={GenericPage} />
          <Route path="/en-us/:a/:b/:c/:d" component={GenericPage} />

          {/* Redirect root to /en-us */}
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
