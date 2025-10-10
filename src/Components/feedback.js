import React, { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Shield,
  Users,
  DollarSign,
} from "lucide-react";

const FeedbackTool = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Styles
  const cardStyle = {
    background: "#151f31",
    padding: "24px",
    borderRadius: "12px",
    border: "1px solid #475569",
    color: "#fff",
    maxWidth: "640px",
    margin: "40px auto",
  };

  const buttonStyle = (bg) => ({
    padding: "10px 16px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: bg,
    color: "#fff",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s",
  });

  const labelStyle = {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "12px",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const selectStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #475569",
    backgroundColor: "#0f172a",
    color: "#fff",
    fontSize: "14px",
  };

  const checkboxLabelStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
    color: "#d1d5db",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #475569",
    backgroundColor: "#0f172a",
    color: "#fff",
    fontSize: "14px",
  };

  // Questions
  const questions = [
    {
      key: "user_type",
      label: "Which best describes you?",
      type: "select",
      options: ["Individual", "Business owner", "Developer", "Investor", "Other"],
      icon: <Users size={20} color="#22d3ee" />,
    },
    {
      key: "transaction_frequency",
      label: "How often do you make digital transactions?",
      type: "select",
      options: ["Daily", "Weekly", "Monthly", "Rarely"],
      icon: <TrendingUp size={20} color="#f59e0b" />,
    },
    {
      key: "monthly_volume",
      label: "What is your typical monthly transaction volume?",
      type: "select",
      options: ["Below $100", "$100 - $500", "$500 - $1,000", "Above $1,000"],
      icon: <TrendingUp size={20} color="#22d3ee" />,
    },
    {
      key: "top_problems",
      label: "What are the biggest issues you face with online payments?",
      type: "checkbox",
      options: [
        "High fees",
        "Slow transactions",
        "Trust/security concerns",
        "Poor customer support",
      ],
      icon: <AlertCircle size={20} color="#ef4444" />,
    },
    {
      key: "problem_intensity",
      label: "How painful are these problems?",
      type: "select",
      options: ["Minor", "Moderate", "Severe", "Business critical"],
      icon: <AlertCircle size={20} color="#facc15" />,
    },
    {
      key: "desired_features",
      label: "What features would make you switch to a new platform?",
      type: "checkbox",
      options: [
        "Lower fees",
        "Faster settlement",
        "Better security",
        "Integration with my bank",
        "Group savings (Chama) support",
      ],
      icon: <Shield size={20} color="#22c55e" />,
    },
    {
      key: "value_proposition",
      label: "What’s most valuable in a financial service?",
      type: "select",
      options: [
        "Cost savings",
        "Security & trust",
        "Ease of use",
        "Community/group features",
      ],
      icon: <DollarSign size={20} color="#22c55e" />,
    },
    {
      key: "switching_barriers",
      label: "What would prevent you from switching services?",
      type: "checkbox",
      options: ["Trust issues", "Learning curve", "Costs", "Existing commitments"],
      icon: <Shield size={20} color="#a855f7" />,
    },
    {
      key: "willingness_to_pay",
      label: "Would you pay a small fee for faster/secure transactions?",
      type: "select",
      options: ["Yes, definitely", "Maybe", "No"],
      icon: <DollarSign size={20} color="#16a34a" />,
    },
    {
      key: "early_adopter",
      label:
        "Would you be interested in testing our solution early and giving feedback?",
      type: "select",
      options: ["Yes", "Maybe", "No"],
      icon: <Users size={20} color="#6366f1" />,
    },
    {
      key: "privacy_importance",
      label: "How important is financial privacy to you?",
      type: "select",
      options: [
        "Not important",
        "Somewhat important",
        "Very important",
        "Critical",
      ],
      icon: <Shield size={20} color="#94a3b8" />,
    },
    {
      key: "defi_interest",
      label:
        "Would you be open to using blockchain/DeFi-based solutions if they are easier & cheaper?",
      type: "select",
      options: ["Yes", "Maybe", "No"],
      icon: <TrendingUp size={20} color="#f97316" />,
    },
    {
      key: "chama_user",
      label: "Are you part of a Chama (savings group)?",
      type: "select",
      options: ["Yes", "No"],
      icon: <Users size={20} color="#ec4899" />,
    },
    {
      key: "chama_problems",
      label: "If yes, what problems does your Chama face?",
      type: "checkbox",
      options: [
        "Transparency",
        "Trust",
        "Collection difficulties",
        "Access to loans",
      ],
      icon: <Users size={20} color="#db2777" />,
    },
    {
      key: "contact_email",
      label: "Leave your email if you’d like updates (optional)",
      type: "text",
      placeholder: "you@example.com",
      icon: <CheckCircle size={20} color="#14b8a6" />,
    },
  ];

  // Handle field change
  const handleChange = (key, value) => {
    setResponses((prev) => ({ ...prev, [key]: value }));
  };

  // ✅ Updated handleSubmit for NocodeAPI
  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/vivianmuthoni/google_sheets/JBlkoUkHBlrhvXPp?tabId=Sheet1",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify([
            [
              responses.user_type || "",
              responses.transaction_frequency || "",
              responses.monthly_volume || "",
              (responses.top_problems || []).join("; "),
              responses.problem_intensity || "",
              (responses.desired_features || []).join("; "),
              responses.value_proposition || "",
              (responses.switching_barriers || []).join("; "),
              responses.willingness_to_pay || "",
              responses.early_adopter || "",
              responses.privacy_importance || "",
              responses.defi_interest || "",
              responses.chama_user || "",
              (responses.chama_problems || []).join("; "),
              responses.contact_email || "",
            ],
          ]),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Failed to send feedback.");
      }
    } catch (error) {
      console.error("Error submitting:", error);
      alert("Error submitting feedback. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderQuestion = (q) => {
    switch (q.type) {
      case "select":
        return (
          <select
            style={selectStyle}
            value={responses[q.key] || ""}
            onChange={(e) => handleChange(q.key, e.target.value)}
          >
            <option value="">Select one</option>
            {q.options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        );
      case "checkbox":
        return (
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {q.options.map((opt) => (
              <label key={opt} style={checkboxLabelStyle}>
                <input
                  type="checkbox"
                  checked={(responses[q.key] || []).includes(opt)}
                  onChange={(e) => {
                    const prev = responses[q.key] || [];
                    if (e.target.checked) {
                      handleChange(q.key, [...prev, opt]);
                    } else {
                      handleChange(
                        q.key,
                        prev.filter((item) => item !== opt)
                      );
                    }
                  }}
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        );
      case "text":
        return (
          <input
            type="email"
            placeholder={q.placeholder}
            style={inputStyle}
            value={responses[q.key] || ""}
            onChange={(e) => handleChange(q.key, e.target.value)}
          />
        );
      default:
        return null;
    }
  };

  // Submitted View
  if (isSubmitted) {
    return (
      <div style={{ ...cardStyle, textAlign: "center" }}>
        <CheckCircle
          size={48}
          color="#22c55e"
          style={{ margin: "0 auto 16px" }}
        />
        <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "8px" }}>
          Thank you for your feedback!
        </h2>
        <p style={{ color: "#9ca3af", marginBottom: "16px" }}>
          Your input will help shape our product.
        </p>
        <button
          style={buttonStyle("#6366f1")}
          onClick={() => {
            setResponses({});
            setCurrentStep(0);
            setIsSubmitted(false);
          }}
        >
          Start Over
        </button>
      </div>
    );
  }

  const q = questions[currentStep];

  return (
    <div style={cardStyle}>
      <div style={labelStyle}>
        {q.icon}
        <span>{q.label}</span>
      </div>

      {renderQuestion(q)}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "24px",
        }}
      >
        <button
          style={{ ...buttonStyle("#475569"), opacity: currentStep === 0 ? 0.5 : 1 }}
          onClick={() => setCurrentStep((s) => s - 1)}
          disabled={currentStep === 0}
        >
          <ChevronLeft size={16} /> Back
        </button>

        {currentStep < questions.length - 1 ? (
          <button
            style={buttonStyle("#4f46e5")}
            onClick={() => setCurrentStep((s) => s + 1)}
          >
            Next <ChevronRight size={16} />
          </button>
        ) : (
          <button
            style={{ ...buttonStyle("#22c55e"), opacity: isSubmitting ? 0.5 : 1 }}
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        )}
      </div>

      <div
        style={{
          marginTop: "16px",
          fontSize: "14px",
          color: "#9ca3af",
          textAlign: "center",
        }}
      >
        Step {currentStep + 1} of {questions.length}
      </div>
    </div>
  );
};

export default FeedbackTool;
