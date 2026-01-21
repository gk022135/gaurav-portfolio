"use client";
import { useEffect, useState } from "react";

type Msg = {
  _id: string;
  name: string;
  email: string;
  message: string;
  isRead: boolean;
  createdAt: string;
};

export default function InboxList() {
  const [msgs, setMsgs] = useState<Msg[]>([]);

  async function load() {
    const res = await fetch(`/api/inbox`, {
      method: "GET",
      credentials: "same-origin",
    });
    const data = await res.json();
    setMsgs(data || []);
  }

  useEffect(() => {
    load();
  }, []);

  async function mark(id: string, isRead: boolean) {
    await fetch(`/api/inbox`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
      body: JSON.stringify({ id, isRead }),
    });
    await load();
  }

  async function del(id: string) {
    await fetch(`/api/inbox?id=${id}`, {
      method: "DELETE",
      credentials: "same-origin",
    });
    await load();
  }

  return (
    <div className="space-y-4">
      {msgs.map((m) => (
        <div
          key={m._id}
          className={`rounded-xl border p-5 transition
            ${
              m.isRead
                ? "border-white/10 bg-white/5"
                : "border-blue-500/30 bg-blue-500/10"
            }`}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="font-medium text-white">
                {m.name}
                <span className="text-white/50 ml-1">
                  &lt;{m.email}&gt;
                </span>
              </div>
              <div className="text-xs text-white/50 mt-1">
                {new Date(m.createdAt).toLocaleString()}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => mark(m._id, !m.isRead)}
                className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10 transition"
              >
                {m.isRead ? "Mark unread" : "Mark read"}
              </button>

              <button
                onClick={() => del(m._id)}
                className="rounded-md bg-red-500/80 px-3 py-1.5 text-xs text-white hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>

          {/* Message */}
          <div className="mt-4 text-sm text-white/80 whitespace-pre-wrap">
            {m.message}
          </div>
        </div>
      ))}

      {msgs.length === 0 && (
        <div className="text-center text-white/50 py-16">
          Inbox is empty
        </div>
      )}
    </div>
  );
}
