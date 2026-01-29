"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

type Source = { section: string; score: number };
type ChatResp = { answer: string; sources: Source[] };
type Msg = { who: "you" | "bot"; text: string };

export default function BotWidget() {
  const API = "https://bot-backend-byvn.onrender.com/chat";

  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      who: "bot",
      text: "هلا والله! أنا صقر🦅 مساعد النادي السعودي في جامعة كاليفورنيا سان دييقو. كيف أقدر أساعدك؟",
    },
  ]);
  const [sources, setSources] = useState<Source[]>([]);
  const [input, setInput] = useState("");

  const boxRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll
  useEffect(() => {
    if (!boxRef.current) return;
    boxRef.current.scrollTop = boxRef.current.scrollHeight;
  }, [msgs, sources, open]);

  async function ask(q: string) {
    const question = q.trim();
    if (!question) return;

    setMsgs((m) => [
      ...m,
      { who: "you", text: question },
      { who: "bot", text: "• • •" },
    ]);
    setInput("");
    setSources([]);

    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question }),
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
        copy[copy.length - 1] = {
          who: "bot",
          text: "⚠️ صار خطأ في الاتصال بالسيرفر",
        };
        return copy;
      });
    }
  }

  return (
    <>
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
          border: "none",
          cursor: "pointer",
          boxShadow: "0 6px 18px rgba(0,0,0,.2)",
          zIndex: 999999,
          fontSize: 24,
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
            width: 360,
            height: 520,
            background: "white",
            border: "1px solid #ddd",
            borderRadius: 12,
            boxShadow: "0 12px 28px rgba(0,0,0,.15)",
            zIndex: 999999,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "12px 14px",
              fontWeight: 700,
              background: "#f6f8fa",
              borderBottom: "1px solid #eee",
            }}
          >
            Saqr🦅 — SSA Assistant
          </div>

          <div
            ref={boxRef}
            style={{
              flex: 1,
              overflowY: "auto",
              padding: 12,
              fontFamily: "system-ui, Arial",
              fontSize: 14,
            }}
          >
            {msgs.map((m, idx) => {
              const isBot = m.who === "bot";

              return (
                <div
                  key={idx}
                  style={{
                    margin: "8px 0",
                    display: "flex",
                    justifyContent: isBot ? "flex-end" : "flex-start",
                  }}
                >
                  <div
                    dir="auto"
                    style={{
                      padding: "8px 10px",
                      borderRadius: 12,
                      background: isBot ? "#f2f4f7" : "#1f6feb",
                      color: isBot ? "black" : "white",
                      maxWidth: 300,
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-word",
                      unicodeBidi: "isolate",
                      textAlign: "start",
                      lineHeight: 1.4,
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
                  color: "#6a737d",
                  fontSize: 12,
                  marginTop: 6,
                  whiteSpace: "pre-wrap",
                }}
              >
                <div style={{ fontWeight: 600, marginBottom: 4 }}>
                  Sources 📖
                </div>
                {sources.map((s, i) => (
                  <div key={i}>• {s.section}</div>
                ))}
              </div>
            )}
          </div>

          <div style={{ display: "flex", borderTop: "1px solid #eee" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="...اسألني عن أي شي" // "اسألني عن أي شي..."
              dir="auto"
              style={{
                flex: 1,
                padding: 10,
                border: 0,
                outline: 0,
                textAlign: "start",
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
                background: "#1f6feb",
                color: "white",
                cursor: "pointer",
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
