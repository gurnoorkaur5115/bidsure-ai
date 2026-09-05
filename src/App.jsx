import { useState } from "react";
import "./App.css";

const menuItems = [
  { name: "Dashboard", icon: "▦" },
  { name: "Tenders", icon: "⌑" },
  { name: "Bidders", icon: "♙" },
  { name: "Documents", icon: "▤" },
  { name: "EMD Verification", icon: "₹" },
  { name: "AI Verification", icon: "✦" },
  { name: "Compliance & Risk", icon: "◈" },
  { name: "Evidence", icon: "⌕" },
  { name: "Reports", icon: "▥" },
  { name: "AI Assistant", icon: "✧" },
  { name: "Audit Trail", icon: "◷" },
];

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState("Dashboard");

  const navigate = (page) => {
    setActivePage(page);
  };

  /* ================= LOGIN ================= */

  if (!loggedIn) {
    return (
      <div className="login-page">

        <div className="login-brand-section">
          <div className="login-brand">
            <div className="brand-logo">✓</div>

            <div>
              <h1>BidSure AI</h1>
              <p>Procurement Intelligence Platform</p>
            </div>
          </div>

          <div className="login-message">
            <div className="eyebrow">AI-POWERED PROCUREMENT</div>

            <h2>
              Smarter bid verification.
              <br />
              Better procurement decisions.
            </h2>

            <p>
              Analyze bidder documents, verify EMD, identify compliance
              gaps and provide evidence-backed insights to procurement
              officers.
            </p>

            <div className="login-points">
              <div>
                <span>✓</span>
                <div>
                  <strong>AI Document Verification</strong>
                  <small>Extract and validate important information</small>
                </div>
              </div>

              <div>
                <span>✓</span>
                <div>
                  <strong>EMD Verification</strong>
                  <small>Verify amount, bidder and payment details</small>
                </div>
              </div>

              <div>
                <span>✓</span>
                <div>
                  <strong>Human-in-the-Loop Decision</strong>
                  <small>Final decision remains with the officer</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="login-form-section">
          <div className="login-card">

            <div className="mobile-brand">
              <div className="brand-logo">✓</div>
              <strong>BidSure AI</strong>
            </div>

            <h2>Welcome back</h2>

            <p className="login-description">
              Sign in to access the procurement verification dashboard.
            </p>

            <div className="form-group">
              <label>Employee ID / Email</label>
              <input
                type="text"
                placeholder="Enter employee ID or email"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
              />
            </div>

            <div className="form-group">
              <label>Role</label>

              <select defaultValue="Procurement Officer">
                <option>Procurement Officer</option>
              </select>
            </div>

            <button
              className="login-button"
              onClick={() => setLoggedIn(true)}
            >
              Sign In
              <span>→</span>
            </button>

            <p className="secure-text">
              🔒 Secure access for authorized users
            </p>

          </div>
        </div>
      </div>
    );
  }

  /* ================= MAIN APPLICATION ================= */

  return (
    <div className="app">

      {/* SIDEBAR */}

      <aside className="sidebar">

        <div className="sidebar-brand">
          <div className="brand-logo">✓</div>

          <div>
            <h2>BidSure AI</h2>
            <p>Procurement Intelligence</p>
          </div>
        </div>

        <div className="sidebar-section-title">
          WORKSPACE
        </div>

        <nav className="sidebar-nav">

          {menuItems.map((item) => (
            <button
              key={item.name}
              className={
                activePage === item.name
                  ? "nav-item active"
                  : "nav-item"
              }
              onClick={() => navigate(item.name)}
            >
              <span className="nav-icon">
                {item.icon}
              </span>

              <span>{item.name}</span>
            </button>
          ))}

        </nav>

        <div className="sidebar-footer">
          <button
            className="nav-item"
            onClick={() => setActivePage("Settings")}
          >
            <span className="nav-icon">⚙</span>
            <span>Settings</span>
          </button>
        </div>

      </aside>


      {/* MAIN AREA */}

      <main className="main-area">

        {/* HEADER */}

        <header className="top-header">

          <div className="header-title">

            <div className="breadcrumb">
              Workspace / {activePage}
            </div>

            <h1>{activePage}</h1>

          </div>


          <div className="header-right">

            <div className="search-box">
              <span>⌕</span>
              <input
                type="text"
                placeholder="Search bids, tenders..."
              />
            </div>

            <button className="notification-button">
              ♢
            </button>

            <div className="officer-profile">

              <div className="officer-avatar">
                PO
              </div>

              <div className="officer-details">
                <strong>Procurement Officer</strong>
                <span>Authorized User</span>
              </div>

            </div>

          </div>

        </header>


        {/* PAGE CONTENT */}

        <div className="page-content">

          {activePage === "Dashboard" && (
            <Dashboard navigate={navigate} />
          )}

          {activePage === "Tenders" && (
            <Tenders navigate={navigate} />
          )}

          {activePage === "Bidders" && (
            <Bidders navigate={navigate} />
          )}

          {activePage === "Documents" && (
            <Documents navigate={navigate} />
          )}

          {activePage === "EMD Verification" && (
            <EMDVerification navigate={navigate} />
          )}

          {activePage === "AI Verification" && (
            <AIVerification />
          )}

          {activePage === "Compliance & Risk" && (
            <Compliance navigate={navigate} />
          )}

          {activePage === "Evidence" && (
            <Evidence navigate={navigate} />
          )}

          {activePage === "Reports" && (
            <Reports />
          )}

          {activePage === "AI Assistant" && (
            <AIAssistant />
          )}

          {activePage === "Audit Trail" && (
            <AuditTrail />
          )}

          {activePage === "Officer Decision" && (
            <OfficerDecision navigate={navigate} />
          )}

          {activePage === "Settings" && (
            <SimplePage
              title="Settings"
              text="Manage account and platform preferences."
            />
          )}

        </div>

      </main>

    </div>
  );
}


/* =========================================================
   DASHBOARD
========================================================= */

function Dashboard({ navigate }) {
  return (
    <>

      <div className="dashboard-heading">

        <div>
          <h2>Procurement Overview</h2>

          <p>
            Monitor tender compliance and verification activity.
          </p>
        </div>

        <button
          className="primary-button"
          onClick={() => navigate("Tenders")}
        >
          + View Tenders
        </button>

      </div>


      {/* STATISTICS */}

      <div className="stats-grid">

        <StatCard
          icon="⌑"
          title="Active Tenders"
          value="24"
          change="+4.2%"
        />

        <StatCard
          icon="▤"
          title="Bids Under Verification"
          value="87"
          change="+8.7%"
        />

        <StatCard
          icon="✓"
          title="Fully Compliant"
          value="61"
          change="+12.4%"
        />

        <StatCard
          icon="!"
          title="Pending Review"
          value="18"
          change="Requires action"
          warning
        />

        <StatCard
          icon="!"
          title="High Risk"
          value="8"
          change="Needs attention"
          danger
        />

        <StatCard
          icon="◈"
          title="Average Compliance"
          value="86.4%"
          change="+3.1%"
        />

      </div>


      {/* MAIN DASHBOARD GRID */}

      <div className="dashboard-main-grid">

        {/* RECENT TENDERS */}

        <section className="dashboard-card recent-tenders">

          <div className="card-header">

            <div>
              <h3>Recent Tenders</h3>
              <p>Latest procurement activity</p>
            </div>

            <button
              className="view-link"
              onClick={() => navigate("Tenders")}
            >
              View all →
            </button>

          </div>


          <div className="table-wrapper">

            <table>

              <thead>
                <tr>
                  <th>Tender</th>
                  <th>Bids</th>
                  <th>Compliance</th>
                  <th>Risk</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>
                    <strong>Industrial Safety Equipment</strong>
                    <small>GEM/2026/001</small>
                  </td>

                  <td>12</td>
                  <td>91%</td>

                  <td>
                    <span className="badge low">
                      Low
                    </span>
                  </td>

                  <td>
                    <span className="table-status">
                      Under Evaluation
                    </span>
                  </td>
                </tr>


                <tr>
                  <td>
                    <strong>IT Infrastructure</strong>
                    <small>GEM/2026/002</small>
                  </td>

                  <td>18</td>
                  <td>84%</td>

                  <td>
                    <span className="badge medium">
                      Medium
                    </span>
                  </td>

                  <td>
                    <span className="table-status blue">
                      Verification
                    </span>
                  </td>
                </tr>


                <tr>
                  <td>
                    <strong>Laboratory Equipment</strong>
                    <small>GEM/2026/003</small>
                  </td>

                  <td>8</td>
                  <td>96%</td>

                  <td>
                    <span className="badge low">
                      Low
                    </span>
                  </td>

                  <td>
                    <span className="table-status green">
                      Completed
                    </span>
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </section>


        {/* ALERTS */}

        <section className="dashboard-card alerts-card">

          <div className="card-header">

            <div>
              <h3>Critical Alerts</h3>
              <p>Items requiring attention</p>
            </div>

          </div>


          <Alert
            type="warning"
            title="OEM Authorization mismatch"
            company="ABC Industrial Solutions"
          />

          <Alert
            type="danger"
            title="EMD amount mismatch"
            company="National Safety Systems"
          />

          <Alert
            type="info"
            title="Document missing"
            company="Prime Tech Solutions"
          />

        </section>

      </div>


      {/* BOTTOM CARDS */}

      <div className="bottom-grid">

        <section className="dashboard-card">

          <div className="card-header">

            <div>
              <h3>Officer Reviews</h3>
              <p>Pending human decisions</p>
            </div>

          </div>


          <Review
            name="ABC Industrial Solutions"
            issue="OEM Authorization clarification"
            onClick={() => navigate("Evidence")}
          />

          <Review
            name="National Safety Systems"
            issue="EMD amount mismatch"
            onClick={() => navigate("EMD Verification")}
          />

        </section>


        <section className="dashboard-card">

          <div className="card-header">

            <div>
              <h3>Verification Activity</h3>
              <p>Today's system activity</p>
            </div>

          </div>


          <Activity
            title="EMD verification completed"
            text="ABC Industrial Solutions · 10:14 AM"
          />

          <Activity
            title="AI discrepancy detected"
            text="OEM Authorization · 10:15 AM"
          />

          <Activity
            title="Clarification requested"
            text="Procurement Officer · 10:18 AM"
          />

        </section>

      </div>

    </>
  );
}


/* =========================================================
   TENDERS
========================================================= */

function Tenders({ navigate }) {
  return (
    <PageHeading
      title="Tender Management"
      subtitle="Manage procurement tenders and requirements."
    >
      <section className="large-content-card">

        <div className="tender-header">

          <div>
            <span className="eyebrow blue-text">
              ACTIVE TENDER
            </span>

            <h2>
              Industrial Safety Equipment Procurement
            </h2>

            <p>GEM/2026/001</p>
          </div>

          <span className="badge low">
            Under Evaluation
          </span>

        </div>


        <div className="details-grid">

          <Detail title="Bids Received" value="12" />
          <Detail title="EMD Required" value="₹2,00,000" />
          <Detail title="Minimum Turnover" value="₹5 Crore" />
          <Detail title="Required Documents" value="12" />

        </div>


        <h3 className="section-heading">
          Tender Requirements
        </h3>


        <div className="requirements-grid">

          <Requirement text="Valid GST Registration" />
          <Requirement text="Udyam / MSME Registration" />
          <Requirement text="Minimum 50% Local Content" />
          <Requirement text="OEM Authorization Required" />
          <Requirement text="EMD of ₹2,00,000" />
          <Requirement text="No active blacklisting record" />

        </div>


        <button
          className="primary-button"
          onClick={() => navigate("Bidders")}
        >
          View Bidders →
        </button>

      </section>
    </PageHeading>
  );
}


/* =========================================================
   BIDDERS
========================================================= */

function Bidders({ navigate }) {
  return (
    <PageHeading
      title="Bidder List"
      subtitle="Review bidder compliance and risk status."
    >

      <section className="dashboard-card">

        <div className="card-header">

          <div>
            <h3>Industrial Safety Equipment Procurement</h3>
            <p>12 bids received</p>
          </div>

        </div>


        <div className="table-wrapper">

          <table>

            <thead>
              <tr>
                <th>Bidder</th>
                <th>Compliance</th>
                <th>Risk</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              <BidderRow
                name="ABC Industrial Solutions"
                score="92%"
                risk="Low"
                status="Verified"
                navigate={navigate}
              />

              <BidderRow
                name="Bharat Engineering Works"
                score="87%"
                risk="Medium"
                status="Verified"
                navigate={navigate}
              />

              <BidderRow
                name="National Safety Systems"
                score="74%"
                risk="High"
                status="Mismatch"
                navigate={navigate}
              />

              <BidderRow
                name="Prime Tech Solutions"
                score="96%"
                risk="Low"
                status="Exempted"
                navigate={navigate}
              />

            </tbody>

          </table>

        </div>

      </section>

    </PageHeading>
  );
}


/* =========================================================
   DOCUMENTS
========================================================= */

function Documents({ navigate }) {
  return (
    <PageHeading
      title="Document Verification"
      subtitle="Verify bidder documents using AI-assisted analysis."
    >

      <div className="bidder-profile-card">

        <div className="company-avatar">
          A
        </div>

        <div>
          <h2>ABC Industrial Solutions Pvt. Ltd.</h2>
          <p>
            Bidder ID: BID-001 · 11 of 12 documents available
          </p>
        </div>

        <div className="profile-score">
          <strong>92/100</strong>
          <span>Compliance Score</span>
        </div>

      </div>


      <div className="document-grid">

        <DocumentCard
          title="GST Certificate"
          status="Verified"
          detail="GST data matched successfully"
        />

        <DocumentCard
          title="PAN Certificate"
          status="Verified"
          detail="PAN details matched"
        />

        <DocumentCard
          title="Udyam Registration"
          status="Verified"
          detail="Registration verified"
        />

        <DocumentCard
          title="OEM Authorization"
          status="Manual Review"
          detail="Expiry: 30 Oct 2026"
          warning
        />

        <DocumentCard
          title="Income Tax Certificate"
          status="Verified"
          detail="Government data matched"
        />

        <DocumentCard
          title="Blacklisting Declaration"
          status="Verified"
          detail="No active record found"
        />

      </div>


      <button
        className="primary-button"
        onClick={() => navigate("EMD Verification")}
      >
        Continue to EMD Verification →
      </button>

    </PageHeading>
  );
}


/* =========================================================
   EMD
========================================================= */

function EMDVerification({ navigate }) {
  return (
    <PageHeading
      title="EMD Verification"
      subtitle="Verify Earnest Money Deposit against tender requirements."
    >

      <div className="two-column">

        <section className="large-content-card">

          <div className="verified-heading">

            <div className="success-circle">
              ✓
            </div>

            <div>
              <span>VERIFICATION RESULT</span>
              <h2>EMD VERIFIED</h2>
            </div>

          </div>


          <div className="details-grid">

            <Detail title="Required Amount" value="₹2,00,000" />
            <Detail title="Submitted Amount" value="₹2,00,000" />
            <Detail title="Transaction ID" value="TXN458921" />
            <Detail title="Payment Date" value="02 Sep 2026" />

          </div>


          <div className="check-list">

            <Requirement text="Amount matches tender requirement" />
            <Requirement text="Bidder identity matched" />
            <Requirement text="Payment successfully verified" />
            <Requirement text="Accepted payment mode" />

          </div>


          <button
            className="primary-button"
            onClick={() => navigate("Compliance & Risk")}
          >
            View Compliance & Risk →
          </button>

        </section>


        <section className="dashboard-card">

          <h3>EMD Evidence</h3>

          <div className="evidence-mini">

            <strong>Bank Transaction Record</strong>

            <span>Transaction: TXN458921</span>
            <span>Amount: ₹2,00,000</span>
            <span>Status: Successful</span>

          </div>

          <p className="muted-text">
            AI verifies the submitted EMD against the tender
            requirement and payment evidence.
          </p>

        </section>

      </div>

    </PageHeading>
  );
}


/* =========================================================
   AI VERIFICATION
========================================================= */

function AIVerification() {
  const steps = [
    "Documents",
    "OCR Extraction",
    "Government Data Matching",
    "Tender Rule Checking",
    "EMD Verification",
    "Discrepancy Detection",
    "Risk Analysis",
    "Compliance Score",
  ];

  return (
    <PageHeading
      title="AI Verification"
      subtitle="AI-assisted compliance analysis pipeline."
    >

      <div className="ai-introduction">

        <div className="ai-symbol">✦</div>

        <div>
          <h2>AI Compliance Analysis</h2>

          <p>
            The system analyzes bidder documents against tender
            requirements and identifies potential discrepancies.
          </p>
        </div>

      </div>


      <div className="pipeline-grid">

        {steps.map((step, index) => (
          <div className="pipeline-card" key={step}>

            <span>
              {(index + 1).toString().padStart(2, "0")}
            </span>

            <h3>{step}</h3>

            <p>
              {index === 0
                ? "Document collection"
                : index === 1
                ? "Extract important information"
                : index === 2
                ? "Verify statutory details"
                : index === 3
                ? "Compare tender rules"
                : index === 4
                ? "Verify EMD"
                : index === 5
                ? "Find compliance gaps"
                : index === 6
                ? "Calculate risk indicators"
                : "Generate compliance score"}
            </p>

            <b>✓</b>

          </div>
        ))}

      </div>


      <div className="analysis-summary">

        <Detail title="Requirements Checked" value="12" />
        <Detail title="Verified" value="10" />
        <Detail title="Manual Review" value="1" />
        <Detail title="Issues Found" value="1" />

      </div>

    </PageHeading>
  );
}


/* =========================================================
   COMPLIANCE
========================================================= */

function Compliance({ navigate }) {
  return (
    <PageHeading
      title="Compliance & Risk"
      subtitle="Understand bidder compliance score and risk indicators."
    >

      <div className="risk-summary">

        <div className="score-ring">
          <strong>92</strong>
          <span>/100</span>
          <small>Compliance</small>
        </div>

        <div>
          <span className="badge low">LOW RISK</span>

          <h2>Bidder appears substantially compliant</h2>

          <p>
            Most statutory, financial and EMD requirements have
            been successfully verified.
          </p>
        </div>

      </div>


      <div className="compliance-grid">

        <ComplianceItem title="GST Registration" />
        <ComplianceItem title="PAN" />
        <ComplianceItem title="Udyam / MSME" />
        <ComplianceItem title="Income Tax" />
        <ComplianceItem title="EPFO / ESIC" />
        <ComplianceItem title="Make in India" />
        <ComplianceItem title="EMD" />
        <ComplianceItem title="Blacklisting" />

        <ComplianceItem
          title="OEM Authorization"
          warning
        />

      </div>


      <button
        className="primary-button"
        onClick={() => navigate("Evidence")}
      >
        View Evidence →
      </button>

    </PageHeading>
  );
}


/* =========================================================
   EVIDENCE
========================================================= */

function Evidence({ navigate }) {
  return (
    <PageHeading
      title="Evidence & Findings"
      subtitle="Review AI findings and supporting evidence."
    >

      <section className="finding-card">

        <div className="finding-title">

          <div className="warning-circle">
            !
          </div>

          <div>
            <span className="badge medium">
              AI FINDING
            </span>

            <h2>
              Potential OEM Authorization Issue
            </h2>
          </div>

        </div>


        <div className="evidence-grid">

          <EvidenceItem
            title="Submitted Document"
            value="OEM Authorization.pdf"
          />

          <EvidenceItem
            title="Document Expiry"
            value="30 Oct 2026"
          />

          <EvidenceItem
            title="Tender Requirement"
            value="Minimum 90-day validity"
          />

          <EvidenceItem
            title="Analysis Timestamp"
            value="05 Sep 2026 · 10:15 AM"
          />

        </div>


        <div className="finding-note">

          <strong>Why was this flagged?</strong>

          <p>
            The AI detected that the authorization validity may
            not satisfy the tender requirement. Procurement Officer
            review is required before a final decision.
          </p>

        </div>


        <button
          className="primary-button"
          onClick={() => navigate("Officer Decision")}
        >
          Proceed to Officer Decision →
        </button>

      </section>

    </PageHeading>
  );
}


/* =========================================================
   REPORTS
========================================================= */

function Reports() {
  const reports = [
    "Tender Compliance Report",
    "Bidder Verification Report",
    "EMD Verification Report",
    "Risk Analysis Report",
    "Discrepancy Report",
    "Audit Report",
  ];

  return (
    <PageHeading
      title="Reports"
      subtitle="Generate procurement verification reports."
    >

      <div className="reports-grid">

        {reports.map((report) => (
          <div className="report-card" key={report}>

            <div className="report-icon">
              ▥
            </div>

            <h3>{report}</h3>

            <p>
              Generate detailed procurement report.
            </p>

            <button>
              Download PDF →
            </button>

          </div>
        ))}

      </div>

    </PageHeading>
  );
}


/* =========================================================
   AI ASSISTANT
========================================================= */

function AIAssistant() {
  return (
    <PageHeading
      title="AI Compliance Assistant"
      subtitle="Ask questions about bidder verification results."
    >

      <section className="assistant-card">

        <div className="assistant-header">

          <div className="ai-symbol">
            ✦
          </div>

          <div>
            <h2>BidSure AI Assistant</h2>
            <p>
              Ask questions about bids, documents, EMD or risk.
            </p>
          </div>

        </div>


        <Question
          question="Why is ABC Industrial Solutions medium risk?"
          answer="The bidder has successfully passed major statutory and EMD checks. One unresolved issue remains regarding OEM authorization validity. Therefore, officer review is recommended."
        />

        <Question
          question="What documents are missing?"
          answer="11 of 12 required documents are currently available. OEM authorization requires manual verification."
        />

        <Question
          question="Why did the compliance score decrease?"
          answer="The score was reduced because the OEM authorization validity could not be automatically confirmed."
        />


        <div className="chat-box">

          <input
            placeholder="Ask about a bid, document, EMD or risk..."
          />

          <button>
            Ask
          </button>

        </div>

      </section>

    </PageHeading>
  );
}


/* =========================================================
   AUDIT TRAIL
========================================================= */

function AuditTrail() {
  const activities = [
    ["10:12 AM", "Bid uploaded", "ABC Industrial Solutions"],
    ["10:13 AM", "AI document verification completed", "12 documents analyzed"],
    ["10:14 AM", "GST verified", "Government data matched"],
    ["10:14 AM", "EMD verified", "₹2,00,000 successfully matched"],
    ["10:15 AM", "OEM discrepancy detected", "Manual review required"],
    ["10:18 AM", "Clarification requested", "Procurement Officer"],
    ["11:02 AM", "Clarification received", "Additional OEM evidence uploaded"],
  ];

  return (
    <PageHeading
      title="Audit Trail"
      subtitle="Complete history of verification activity."
    >

      <section className="audit-card">

        {activities.map((item, index) => (
          <div
            className={
              index === 4
                ? "audit-item warning-audit"
                : "audit-item"
            }
            key={index}
          >

            <span>{item[0]}</span>

            <div>
              <strong>{item[1]}</strong>
              <p>{item[2]}</p>
            </div>

          </div>
        ))}

      </section>

    </PageHeading>
  );
}


/* =========================================================
   OFFICER DECISION
========================================================= */

function OfficerDecision({ navigate }) {
  const [selected, setSelected] = useState("");

  return (
    <PageHeading
      title="Officer Decision"
      subtitle="Final procurement decision by the authorized officer."
    >

      <section className="decision-card">

        <span className="badge medium">
          PROCUREMENT OFFICER REVIEW
        </span>

        <h2>
          ABC Industrial Solutions Pvt. Ltd.
        </h2>

        <p>
          AI Recommendation: Bidder appears substantially compliant,
          with one OEM authorization issue requiring review.
        </p>


        <div className="decision-options">

          {[
            "✓ Approve",
            "✕ Reject",
            "↻ Request Clarification",
            "◈ Committee Review",
          ].map((option) => (
            <button
              key={option}
              className={
                selected === option
                  ? "selected-decision"
                  : ""
              }
              onClick={() => setSelected(option)}
            >
              {option}
            </button>
          ))}

        </div>


        <label>Mandatory Reason / Comment</label>

        <textarea
          rows="5"
          placeholder="Enter your decision reason..."
        />


        <button
          className="primary-button"
          onClick={() => navigate("Audit Trail")}
        >
          Submit Decision
        </button>

      </section>

    </PageHeading>
  );
}


/* =========================================================
   SMALL COMPONENTS
========================================================= */

function StatCard({
  icon,
  title,
  value,
  change,
  warning,
  danger,
}) {
  return (
    <div className="stat-card">

      <div
        className={
          warning
            ? "stat-icon warning"
            : danger
            ? "stat-icon danger"
            : "stat-icon"
        }
      >
        {icon}
      </div>

      <div className="stat-content">

        <p>{title}</p>

        <h3>{value}</h3>

        <small>{change}</small>

      </div>

    </div>
  );
}


function Alert({ type, title, company }) {
  return (
    <div className={`alert ${type}`}>

      <div className="alert-icon">
        !
      </div>

      <div>
        <strong>{title}</strong>
        <span>{company}</span>
      </div>

    </div>
  );
}


function Review({ name, issue, onClick }) {
  return (
    <div className="review">

      <div>
        <strong>{name}</strong>
        <span>{issue}</span>
      </div>

      <button onClick={onClick}>
        Review
      </button>

    </div>
  );
}


function Activity({ title, text }) {
  return (
    <div className="activity">

      <div className="activity-dot"></div>

      <div>
        <strong>{title}</strong>
        <span>{text}</span>
      </div>

    </div>
  );
}


function PageHeading({ title, subtitle, children }) {
  return (
    <>

      <div className="page-heading">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      {children}

    </>
  );
}


function Detail({ title, value }) {
  return (
    <div className="detail-box">

      <span>{title}</span>

      <strong>{value}</strong>

    </div>
  );
}


function Requirement({ text }) {
  return (
    <div className="requirement">
      <span>✓</span>
      {text}
    </div>
  );
}


function BidderRow({
  name,
  score,
  risk,
  status,
  navigate,
}) {
  return (
    <tr>

      <td>
        <strong>{name}</strong>
        <small>Industrial Safety Equipment</small>
      </td>

      <td>
        <strong>{score}</strong>
      </td>

      <td>
        <span
          className={`badge ${risk.toLowerCase()}`}
        >
          {risk}
        </span>
      </td>

      <td>
        <span className="table-status">
          {status}
        </span>
      </td>

      <td>
        <button
          className="review-button"
          onClick={() => navigate("Documents")}
        >
          Review →
        </button>
      </td>

    </tr>
  );
}


function DocumentCard({
  title,
  status,
  detail,
  warning,
}) {
  return (
    <div className="document-card">

      <div className="document-icon">
        ▤
      </div>

      <div className="document-info">

        <div className="document-top">

          <strong>{title}</strong>

          <span
            className={
              warning
                ? "badge medium"
                : "badge low"
            }
          >
            {status}
          </span>

        </div>

        <p>{detail}</p>

      </div>

    </div>
  );
}


function ComplianceItem({ title, warning }) {
  return (
    <div
      className={
        warning
          ? "compliance-item warning-item"
          : "compliance-item"
      }
    >

      <span>{title}</span>

      <strong>
        {warning ? "!" : "✓"}
      </strong>

      <small>
        {warning ? "Review Required" : "Verified"}
      </small>

    </div>
  );
}


function EvidenceItem({ title, value }) {
  return (
    <div className="evidence-item">

      <span>{title}</span>

      <strong>{value}</strong>

    </div>
  );
}


function Question({ question, answer }) {
  return (
    <div className="question">

      <strong>{question}</strong>

      <p>{answer}</p>

    </div>
  );
}


function SimplePage({ title, text }) {
  return (
    <div className="simple-page">

      <div className="ai-symbol">
        ✦
      </div>

      <h2>{title}</h2>

      <p>{text}</p>

    </div>
  );
}


export default App;