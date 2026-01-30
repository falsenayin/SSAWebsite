"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

type Source = { section: string; score: number };
type ChatResp = { answer: string; sources: Source[] };
type Msg = { who: "you" | "bot"; text: string };

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
  const API = "https://bot-backend-byvn.onrender.com/chat";

  // ✅ SSA theme styles ONLY (no logic changes)
  const theme = {
    bg: "#1D1E1E",
    fg: "#E8DAC3",
    gold: "#AE8336",
    panelBorder: "rgba(232,218,195,.18)",
    headerBg: "rgba(232,218,195,.06)",
    botBubbleBg: "rgba(232,218,195,.08)",
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
  theme.headerBg = theme.bg;
  // theme.inputBg = theme.bg;

  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      who: "bot",
      text: "هلا والله! أنا صقر🦅 مساعد النادي السعودي في جامعة كاليفورنيا سان دييقو. كيف أقدر أساعدك؟",
    },
  ]);
  const [sources, setSources] = useState<Source[]>([]);
  const [input, setInput] = useState("");

  const sessionIdRef = useRef<string | null>(null);
  if (!sessionIdRef.current) {
    sessionIdRef.current = getSessionId();
  }


  const boxRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll
  useEffect(() => {
    if (!boxRef.current) return;
    boxRef.current.scrollTop = boxRef.current.scrollHeight;
  }, [msgs, sources, open]);

  async function ask(q: string) {
    const question = q.trim();
    if (!question) return;

    setMsgs((m) => [...m, { who: "you", text: question }, { who: "bot", text: "• • •" }]);
    setInput("");
    setSources([]);

    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: question,
          session_id: sessionIdRef.current,
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = (await res.json()) as ChatResp;

      setMsgs((m) => {
        const copy = [...m];
        copy[copy.length - 1] = { who: "bot", text: data.answer };
        return copy;
      });

      setSources(data.sources || []);
    } catch (e: any) {
      setMsgs((m) => {
        const copy = [...m];
        copy[copy.length - 1] = { who: "bot", text: "⚠️ صار خطأ في الاتصال بالسيرفر" };
        return copy;
      });
    }
  }

  return (
    <>
      <style>{`
        .bot-scroll::-webkit-scrollbar {
          width: 8px;
        }

        .bot-scroll::-webkit-scrollbar-thumb {
          background: #2b2b2b;
          border-radius: 8px;
        }

        .bot-scroll::-webkit-scrollbar-thumb:hover {
          background: #404040;
        }

        .bot-scroll::-webkit-scrollbar-track {
          background: transparent;
        }

        .bot-scroll {
          scrollbar-color: #2b2b2b transparent;
        }


        .md a {
          color: #AE8336;                 /* SSA gold */
          font-weight: 600;
          text-decoration: underline;
          text-underline-offset: 3px;
          cursor: pointer;
        }

        .md a:hover {
          opacity: 0.85;
        }

        /* --- Markdown code blocks: scroll horizontally, never overflow bubble --- */
        .md pre {
          max-width: 100%;
          overflow-x: auto;
          overflow-y: hidden;
          white-space: pre;          /* IMPORTANT: override any pre-wrap from parent */
          padding: 12px;
          border-radius: 12px;
          border: 1px solid rgba(232,218,195,.18);
          background: rgba(232,218,195,.06);
        }

        .md pre code {
          white-space: inherit;      /* keep pre behavior */
          display: block;
        }

        /* Optional: nicer horizontal scrollbar just for code blocks */
        .md pre::-webkit-scrollbar {
          height: 8px;
        }
        .md pre::-webkit-scrollbar-thumb {
          background: #2b2b2b;
          border-radius: 8px;
        }
        .md pre::-webkit-scrollbar-thumb:hover {
          background: #404040;
        }
        .md pre::-webkit-scrollbar-track {
          background: transparent;
        }


        /* --- KaTeX display math ( $$ ... $$ ): make it look like a code block + horizontal scroll --- */
        .md .katex-display {
          display: block;                 /* span -> block so padding works like a block */
          max-width: 100%;
          overflow-x: auto;
          overflow-y: hidden;

          padding: 12px;
          border-radius: 12px;
          border: 1px solid rgba(232,218,195,.18);
          background: rgba(232,218,195,.06);

          /* optional spacing */
          margin: 10px 0;
        }

        /* KaTeX display internal container sometimes has inline sizing; keep it contained */
        .md .katex-display > .katex {
          display: inline-block;          /* ensures scroll works properly */
        }

        /* scrollbar styling for display math blocks */
        .md .katex-display::-webkit-scrollbar {
          height: 8px;
        }
        .md .katex-display::-webkit-scrollbar-thumb {
          background: #2b2b2b;
          border-radius: 8px;
        }
        .md .katex-display::-webkit-scrollbar-thumb:hover {
          background: #404040;
        }
        .md .katex-display::-webkit-scrollbar-track {
          background: transparent;
        }


        /* --- Inline KaTeX ( $ ... $ ): prevent overflow by making it scrollable --- */
        .md .katex {
          display: inline-block;          /* needed for max-width + overflow */
          max-width: 100%;
          overflow-x: auto;
          overflow-y: hidden;
          vertical-align: bottom;         /* nicer baseline */

          /* keep KaTeX default behavior (no wrapping), but scroll instead of overflow */
          white-space: nowrap;
        }

        /* inline scrollbar styling */
        .md .katex::-webkit-scrollbar {
          height: 6px;
        }
        .md .katex::-webkit-scrollbar-thumb {
          background: #2b2b2b;
          border-radius: 8px;
        }
        .md .katex::-webkit-scrollbar-track {
          background: transparent;
        }


        /* --- Force all KaTeX output to render LTR even inside Arabic/RTL UI --- */
        .md .katex,
        .md .katex-display,
        .md .katex * {
          direction: ltr;
          unicode-bidi: isolate;
        }


        /* Pill input placeholder styling */
          .pill-input::placeholder {
            color: rgba(232, 218, 195, 0.55);
            opacity: 1; /* important: overrides browser default faded placeholder */
          }
      `}</style>
      {/* Floating Button */}
      <button
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
          style={{
            width: 30,
            height: 30,
            display: "block",
          }}
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
          <div
            style={{
              padding: "12px 14px",
              background: theme.headerBg,
              // borderBottom: `1px solid ${theme.panelBorder}`,
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
                position: "relative",          // anchor for the absolute icon
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

                  position: "absolute",        // ✅ removed from flow (won’t affect border/height)
                  left: 42,                    // tweak this
                  top: "50%",
                  transform: "translateX(-27.5%) translateY(-55%)", // tweak this
                  pointerEvents: "none",       // optional
                }}
              />
            </div>

            <div style={{ fontWeight: 600, opacity: 0.25, justifySelf: "center" }}>
              SSA Assistant
            </div>
            {/* spacer column to keep center truly centered */}
            <div />
          </div>


          <div
            ref={boxRef}
            className="bot-scroll"
            style={{
              flex: 1,
              overflowY: "auto",
              padding: 12,
              fontFamily: theme.font,
              fontSize: 14,
              // fontWeight: 500,  // specified per isBot
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
                      background: isBot ? theme.botBubbleBg : theme.gold,
                      color: isBot ? theme.fg : theme.bg,
                      maxWidth: 300,
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-word",
                      unicodeBidi: "isolate",
                      textAlign: "start",
                      fontWeight: isBot ? 400 : 500,
                      lineHeight: 1.5,
                      border: `1px solid ${isBot ? theme.panelBorder : "rgba(0,0,0,.12)"}`,
                    }}
                  >
                    <div className="md">
                      <ReactMarkdown
                        remarkPlugins={[remarkMath]}
                        rehypePlugins={[rehypeKatex]}
                        components={{
                          a: ({ node, ...props }) => (
                            <a
                              {...props}
                              target="_blank"
                              rel="noopener noreferrer"
                            />
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
                <div style={{ fontWeight: 700, marginBottom: 6, color: theme.fg }}>
                  Sources 📖
                </div>
                {sources.map((s, i) => (
                  <div key={i} style={{ marginBottom: 4 }}>
                    • {s.section}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div
  style={{
    // borderTop: `1px solid ${theme.panelBorder}`,
    background: theme.headerBg,
    paddingLeft: "10px",
    paddingRight: "12px",
    paddingTop: "5px",
    paddingBottom: "10px",
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 10,
    }}
  >
    {/* Pill input */}
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
          if (e.key === "Enter") ask(input);
        }}
      />
    </div>

    {/* Circle send button */}
    <button
      onClick={() => ask(input)}
      aria-label="Send"
      disabled={!input.trim()}
      style={{
        width: 36,
        height: 36,
        padding: 0,
        border: "none",
        background: "transparent",
        cursor: input.trim() ? "pointer" : "default",
        opacity: input.trim() ? 1 : 0.4,
        flexShrink: 0,
      }}
    >
      <img
        src="/send-button-icon.png"
        alt="Send"
        draggable={false}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </button>
  </div>
</div>

        </div>
      )}
    </>
  );
}
