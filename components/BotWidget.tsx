"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

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
          fontSize: 24,
          background: theme.gold,
          color: theme.bg,
          fontFamily: theme.font,
        }}
        aria-label="Open Saqr"
      >
        🦅
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
              borderBottom: `1px solid ${theme.panelBorder}`,
              color: theme.fg,
              fontFamily: theme.font,
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              alignItems: "center",
            }}
          >
            <div style={{ fontWeight: 800, justifySelf: "start" }}>
              Saqr🦅
            </div>

            <div style={{ fontWeight: 600, opacity: 0.85, justifySelf: "center" }}>
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
                      lineHeight: 1.5,
                      border: `1px solid ${isBot ? theme.panelBorder : "rgba(0,0,0,.12)"}`,
                    }}
                  >
                    <ReactMarkdown>{m.text}</ReactMarkdown>
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
              display: "flex",
              borderTop: `1px solid ${theme.panelBorder}`,
              background: theme.headerBg,
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="...اسألني عن أي شي" // "اسألني عن أي شي..."
              dir="auto"
              style={{
                flex: 1,
                padding: 12,
                border: 0,
                outline: 0,
                textAlign: "start",
                background: theme.inputBg,
                color: theme.fg,
                fontFamily: theme.font,
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") ask(input);
              }}
            />
            <button
              onClick={() => ask(input)}
              style={{
                width: 90,
                border: 0,
                background: theme.gold,
                color: theme.bg,
                cursor: "pointer",
                fontWeight: 800,
                fontFamily: theme.font,
              }}
            >
              ارسل
            </button>
          </div>
        </div>
      )}
    </>
  );
}
