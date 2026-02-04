"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import "katex/dist/katex.min.css";
import { table } from "console";

type Source = { section: string; score: number };
type Msg = { who: "you" | "bot"; text: string };

type ChatResp = { answer: string; fwd_question: boolean };
type Decision = "confirmed" | "refused" | "cancelled";

type DecisionReq = {
  session_id: string;
  page_instance_id: string;
  decision: Decision;
  name?: string;
  email?: string;
  chat?: string;
};

function getSessionId() {
  const KEY = "bot_session_id";
  let sid = localStorage.getItem(KEY);

  if (!sid) {
    sid = crypto.randomUUID();
    localStorage.setItem(KEY, sid);
  }

  return sid;
}

export default function BotWidget() {
  const API_BASE = "https://bot-backend-byvn.onrender.com";
  const CHAT_API = `${API_BASE}/chat`;
  const DECISION_API = `${API_BASE}/decision`;

  const theme = {
    bg: "rgba(29, 30, 30, 0.6)",
    fg: "#E8DAC3",
    gold: "#AE8336",
    panelBorder: "rgba(232,218,195,.18)",
    headerBg: "rgba(29, 30, 30, 0.6)",
    botBubbleBg: "rgba(232,218,195,.045)",
    inputBg: "rgba(232,218,195,.06)",
    shadow: "0 18px 60px rgba(0,0,0,.55)",
    radius: 16,
    z: 999999,
    w: 360,
    h: 520,
    wMobile: "calc(100vw - 32px)",
    hMobile: "min(70vh, 560px)",
    font: "Poppins, system-ui, Arial",
  };

  const userBubbleButton: React.CSSProperties = {
    borderRadius: 999,
    padding: "8px 12px",
    border: "1px solid rgba(174, 131, 54, 0.25)",
    background: "rgba(174, 131, 54, 0.075)",
    color: theme.gold,
    fontFamily: theme.font,
    fontWeight: 800,
  };


  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      who: "bot",
      text: "هلا والله! أنا صقر🦅 مساعد النادي السعودي في جامعة كاليفورنيا سان دييقو. كيف أقدر أساعدك؟",
    },
  ]);

  const [sources, setSources] = useState<Source[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  type ForwardStep = null | "ask" | "contact";
  const [forwardStep, setForwardStep] = useState<ForwardStep>(null);

  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const emailInputRef = useRef<HTMLInputElement | null>(null);

const pageInstanceIdRef = useRef<string>(crypto.randomUUID());
  const sessionIdRef = useRef<string | null>(null);
  if (!sessionIdRef.current) sessionIdRef.current = getSessionId();

  const boxRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll
  useEffect(() => {
    if (!boxRef.current) return;
    boxRef.current.scrollTop = boxRef.current.scrollHeight;
  }, [msgs, sources, open, forwardStep]);

  // ✅ KEY FIX:
  // - Chat is locked while forward UI is visible or while loading
  // - Decision is locked only while loading (so No/Cancel/Submit still work)
  const chatLocked = isLoading || forwardStep !== null;
  const decisionLocked = isLoading;

  const sendDisabled = chatLocked || !input.trim();

const canSubmitContact =
  contactName.trim().length > 0 &&
  contactEmail.trim().length > 0 &&
  emailValid;

  function buildChatHtml(currentMsgs: Msg[]) {
    const esc = (s: string) =>
      s
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;")
        .replaceAll("\n", "<br/>");

    const whoLabel = (who: Msg["who"]) => (who === "bot" ? "Saqr" : "User");

    const lines = currentMsgs
      .filter((m) => m.text !== "• • •")
      .map((m) => {
        return `
          <div style="margin:10px 0;">
            <div style="font-weight:700;">${whoLabel(m.who)}:</div>
            <div>${esc(m.text)}</div>
          </div>
        `;
      });

    return `
      <div style="font-family: system-ui, Arial; line-height:1.4;">
        ${lines.join("")}
      </div>
    `.trim();
  }

  async function ask(q: string) {
    const question = q.trim();
    if (!question) return;
    if (chatLocked) return;

    // reset forward UI state
    setForwardStep(null);
    setContactName("");
    setContactEmail("");
    setEmailValid(false);

    setIsLoading(true);

    setMsgs((m) => [
      ...m,
      { who: "you", text: question },
      { who: "bot", text: "• • •" },
    ]);
    setInput("");
    setSources([]);

    try {
      const res = await fetch(CHAT_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: question,
          session_id: sessionIdRef.current,
          page_instance_id: pageInstanceIdRef.current,
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = (await res.json()) as ChatResp;

      setMsgs((m) => {
        const copy = [...m];
        copy[copy.length - 1] = { who: "bot", text: data.answer };
        return copy;
      });

      setForwardStep(data.fwd_question ? "ask" : null);
      setSources([]);
    } catch {
      setMsgs((m) => {
        const copy = [...m];
        copy[copy.length - 1] = { who: "bot", text: "⚠️ صار خطأ في الاتصال بالسيرفر" };
        return copy;
      });
      setForwardStep(null);
    } finally {
      setIsLoading(false);
    }
  }

  async function sendDecision(payload: DecisionReq) {
    if (decisionLocked) return;

    // ✅ close the UI immediately (no waiting)
    setForwardStep(null);
    setContactName("");
    setContactEmail("");
    setEmailValid(false);

    setIsLoading(true);

    // show assistant typing bubble
    setMsgs((m) => [...m, { who: "bot", text: "• • •" }]);
    setSources([]);

    try {
      const res = await fetch(DECISION_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = (await res.json()) as ChatResp;

      setMsgs((m) => {
        const copy = [...m];
        copy[copy.length - 1] = { who: "bot", text: data.answer };
        return copy;
      });

      // end flow
      setForwardStep(null);
      setContactName("");
      setContactEmail("");
    } catch {
      setMsgs((m) => {
        const copy = [...m];
        copy[copy.length - 1] = { who: "bot", text: "⚠️ صار خطأ أثناء إرسال الطلب للفريق" };
        return copy;
      });
      setForwardStep(null);
    } finally {
      setIsLoading(false);
    }
  }

  function onForwardNo() {
    const sid = sessionIdRef.current;
    if (!sid) return;
    sendDecision({
      session_id: sid,
      page_instance_id: pageInstanceIdRef.current,
      decision: "refused" 
    });
  }

  function onForwardYes() {
    setEmailValid(false);          // ← ADD HERE
    setForwardStep("contact");
    setTimeout(() => emailInputRef.current?.focus(), 0);
  }


  function onContactCancel() {
    const sid = sessionIdRef.current;
    if (!sid) return;
    sendDecision({ 
      session_id: sid, 
      page_instance_id: pageInstanceIdRef.current, 
      decision: "cancelled"
    });
  }

  function onContactSubmit() {
    if (!canSubmitContact) return;

    const sid = sessionIdRef.current;
    if (!sid) return;

    const chat_html = buildChatHtml(msgs);

    sendDecision({
      session_id: sid,
      page_instance_id: pageInstanceIdRef.current,
      decision: "confirmed",
      name: contactName.trim(),
      email: contactEmail.trim(),
      chat: chat_html,
    });
  }

  return (
    <>
      <style>{`
        .bot-scroll::-webkit-scrollbar,
        .md pre::-webkit-scrollbar,
        .md .katex-display::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        .bot-scroll::-webkit-scrollbar-thumb,
        .md pre::-webkit-scrollbar-thumb,
        .md .katex-display::-webkit-scrollbar-thumb {
          background: #2b2b2b;
          border-radius: 8px;
        }

        .bot-scroll::-webkit-scrollbar-track,
        .md pre::-webkit-scrollbar-track,
        .md .katex-display::-webkit-scrollbar-track {
          background: transparent;
        }

        .md a {
          color: #AE8336;
          font-weight: 600;
          text-decoration: underline;
          text-underline-offset: 3px;
          cursor: pointer;
        }

        .md a:hover {
          opacity: 0.85;
        }

        .md pre {
          max-width: 100%;
          overflow-x: auto;
          overflow-y: hidden;
          white-space: pre;
          padding: 12px;
          border-radius: 12px;
          border: 1px solid rgba(232,218,195,.18);
          background: rgba(232,218,195,.06);
        }

        .md pre code {
          white-space: inherit;
          display: block;
        }

        .md .katex-display {
          display: block;
          max-width: 100%;
          overflow-x: auto;
          overflow-y: hidden;
          padding: 12px;
          border-radius: 12px;
          border: 1px solid rgba(232,218,195,.18);
          background: rgba(232,218,195,.06);
          margin: 10px 0;
        }

        .md .katex-display > .katex {
          display: inline-block;
        }

        .md .katex {
          display: inline-block;
          max-width: 100%;
          overflow-x: auto;
          overflow-y: hidden;
          vertical-align: bottom;
          white-space: nowrap;
        }

        .md .katex,
        .md .katex-display,
        .md .katex * {
          direction: ltr;
          unicode-bidi: isolate;
        }

        .pill-input::placeholder {
          color: rgba(232, 218, 195, 0.55);
          opacity: 1;
        }
      `}</style>

      {/* Floating Button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          width: 56,
          height: 56,
          borderRadius: 999,
          border: `1px solid ${theme.panelBorder}`,
          cursor: "pointer",
          boxShadow: theme.shadow,
          zIndex: theme.z,
          background: theme.gold,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-label="Open Saqr"
      >
        <img
          src="/saqr-icon-black.png"
          alt="Saqr"
          draggable={false}
          style={{ width: 30, height: 30, display: "block" }}
        />
      </button>

      {/* Panel */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 96,
            right: 24,
            width: theme.w,
            height: theme.h,
            background: theme.bg,
            border: `1px solid ${theme.panelBorder}`,
            borderRadius: theme.radius,
            boxShadow: theme.shadow,
            zIndex: theme.z,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            maxWidth: theme.wMobile,
            maxHeight: theme.hMobile,
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "12px 14px",
              background: theme.headerBg,
              color: theme.fg,
              fontFamily: theme.font,
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontWeight: 800,
                justifySelf: "start",
                color: theme.gold,
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <span>Saqr</span>

              <img
                src="/saqr-icon-gold.png"
                alt="Saqr"
                draggable={false}
                style={{
                  width: 30,
                  height: 30,
                  position: "absolute",
                  left: 42,
                  top: "50%",
                  transform: "translateX(-27.5%) translateY(-55%)",
                  pointerEvents: "none",
                }}
              />
            </div>

            <div style={{ fontWeight: 600, opacity: 0.25, justifySelf: "center" }}>
              SSA Assistant
            </div>
            <div />
          </div>

          {/* Messages */}
          <div
            ref={boxRef}
            className="bot-scroll"
            style={{
              background: theme.bg,
              flex: 1,
              overflowY: "auto",
              padding: 12,
              fontFamily: theme.font,
              fontSize: 14,
              color: theme.fg,
            }}
          >
            {msgs.map((m, idx) => {
              const isBot = m.who === "bot";
              return (
                <div
                  key={idx}
                  style={{
                    margin: "10px 0",
                    display: "flex",
                    justifyContent: isBot ? "flex-end" : "flex-start",
                  }}
                >
                  <div
                    dir="auto"
                    style={{
                      padding: "10px 12px",
                      borderRadius: 14,
                      background: isBot ? theme.botBubbleBg : "rgba(174, 131, 54, 0.075)",
                      color: isBot ? theme.fg : theme.gold,
                      maxWidth: 300,
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-word",
                      unicodeBidi: "isolate",
                      textAlign: "start",
                      fontWeight: isBot ? 400 : 500,
                      lineHeight: 1.5,
                      border: `1px solid ${
                        isBot ? theme.panelBorder : "rgba(174, 131, 54, 0.25)"
                      }`,
                    }}
                  >
                    <div className="md">
                      <ReactMarkdown
                        remarkPlugins={[remarkMath, remarkGfm]}
                        rehypePlugins={[rehypeKatex]}
                        components={{
                          a: ({ node, ...props }) => (
                            <a {...props} target="_blank" rel="noopener noreferrer" />
                          ),
                        }}
                      >
                        {m.text}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Forward ask bubble */}
            {forwardStep === "ask" && (
              <div style={{ margin: "10px 0", display: "flex", justifyContent: "flex-end" }}>
                <div
                  dir="auto"
                  style={{
                    padding: "10px 12px",
                    borderRadius: 14,
                    background: theme.botBubbleBg,
                    color: theme.fg,
                    maxWidth: 300,
                    border: `1px solid ${theme.panelBorder}`,
                  }}
                >
                  <div style={{ marginBottom: 10 }}>
                    Forward this chat to the SSA team?
                  </div>

                  <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
                    <button
                      type="button"
                      onClick={onForwardNo}
                      disabled={decisionLocked}
                      style={{
                        borderRadius: 999,
                        padding: "8px 12px",
                        border: `1px solid ${theme.panelBorder}`,
                        background: "transparent",
                        color: theme.fg,
                        cursor: decisionLocked ? "default" : "pointer",
                        opacity: decisionLocked ? 0.5 : 1,
                        fontFamily: theme.font,
                        fontWeight: 600,
                      }}
                    >
                      No
                    </button>

                    <button
                      type="button"
                      onClick={onForwardYes}
                      disabled={decisionLocked}
                      style={{
                        ...userBubbleButton,
                        cursor: decisionLocked ? "default" : "pointer",
                        opacity: decisionLocked ? 0.5 : 1,
                      }}
                    >
                      Yes
                    </button>

                  </div>
                </div>
              </div>
            )}

            {/* Contact form bubble */}
            {forwardStep === "contact" && (
              <div style={{ margin: "10px 0", display: "flex", justifyContent: "flex-end" }}>
                <div
                  dir="auto"
                  style={{
                    padding: "10px 12px",
                    borderRadius: 14,
                    background: theme.botBubbleBg,
                    color: theme.fg,
                    maxWidth: 300,
                    border: `1px solid ${theme.panelBorder}`,
                  }}
                >
                  <div style={{ marginBottom: 10 }}>Please provide your contact info</div>

                  <div style={{ display: "grid", gap: 10 }}>
                    {/* Name input */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        background: theme.inputBg,
                        border: `1px solid ${theme.panelBorder}`,
                        borderRadius: 999,
                        padding: "10px 12px",
                      }}
                    >
                      <input
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Name"
                        dir="auto"
                        style={{
                          width: "100%",
                          border: 0,
                          outline: 0,
                          background: "transparent",
                          color: theme.fg,
                          fontFamily: theme.font,
                          fontSize: 14,
                          textAlign: "start",
                        }}
                      />
                    </div>

                    {/* Email input (HTML5 validation) */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        background: theme.inputBg,
                        border: `1px solid ${theme.panelBorder}`,
                        borderRadius: 999,
                        padding: "10px 12px",
                      }}
                    >
                      <input
                        ref={emailInputRef}
                        type="email"
                        inputMode="email"
                        required
                        value={contactEmail}
                        onChange={(e) => {
                          setContactEmail(e.target.value);
                          setEmailValid(e.currentTarget.validity.valid);
                        }}
                        onBlur={(e) => setEmailValid(e.currentTarget.validity.valid)}
                        placeholder="Email"
                        dir="auto"
                        style={{
                          width: "100%",
                          border: 0,
                          outline: 0,
                          background: "transparent",
                          color: theme.fg,
                          fontFamily: theme.font,
                          fontSize: 14,
                          textAlign: "start",
                        }}
                      />
                    </div>

                    <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
                      <button
                        type="button"
                        onClick={onContactCancel}
                        disabled={decisionLocked}
                        style={{
                          borderRadius: 999,
                          padding: "8px 12px",
                          border: `1px solid ${theme.panelBorder}`,
                          background: "transparent",
                          color: theme.fg,
                          cursor: decisionLocked ? "default" : "pointer",
                          opacity: decisionLocked ? 0.5 : 1,
                          fontFamily: theme.font,
                          fontWeight: 600,
                        }}
                      >
                        Cancel
                      </button>

                      <button
                        type="button"
                        onClick={onContactSubmit}
                        disabled={decisionLocked || !canSubmitContact}
                        style={{
                          ...userBubbleButton,
                          cursor: !decisionLocked && canSubmitContact ? "pointer" : "default",
                          opacity: !decisionLocked && canSubmitContact ? 1 : 0.4,
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {sources.length > 0 && (
              <div
                style={{
                  color: "rgba(232,218,195,.75)",
                  fontSize: 12,
                  marginTop: 10,
                  whiteSpace: "pre-wrap",
                  fontFamily: theme.font,
                }}
              >
                <div style={{ fontWeight: 620, marginBottom: 6, color: theme.fg }}>
                  Sources
                </div>
                {sources.map((s, i) => (
                  <div key={i} style={{ marginBottom: 4 }}>
                    • {s.section}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Input bar */}
          <div
            style={{
              background: theme.headerBg,
              paddingLeft: "10px",
              paddingRight: "12px",
              paddingTop: "5px",
              paddingBottom: "10px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  background: theme.inputBg,
                  border: `1px solid ${theme.panelBorder}`,
                  borderRadius: 999,
                  padding: "10px 12px",
                }}
              >
                <input
                  className="pill-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="...اسألني عن أي شي"
                  dir="auto"
                  style={{
                    width: "100%",
                    border: 0,
                    outline: 0,
                    background: "transparent",
                    color: theme.fg,
                    fontFamily: theme.font,
                    fontSize: 14,
                    textAlign: "start",
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !sendDisabled) ask(input);
                  }}
                />
              </div>

              <button
                type="button"
                onClick={() => ask(input)}
                aria-label="Send"
                disabled={sendDisabled}
                style={{
                  width: 36,
                  height: 36,
                  padding: 0,
                  border: "none",
                  background: "transparent",
                  cursor: !sendDisabled ? "pointer" : "default",
                  opacity: !sendDisabled ? 1 : 0.4,
                  flexShrink: 0,
                }}
              >
                <img
                  src="/send-button-icon.png"
                  alt="Send"
                  draggable={false}
                  style={{ width: "100%", height: "100%", display: "block" }}
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
