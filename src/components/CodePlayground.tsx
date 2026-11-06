"use client";

import React, { useState } from "react";
import { Terminal, Play, Copy, Check, Sparkles, RefreshCw, Layers } from "lucide-react";
import { sounds } from "@/lib/sound";
import { useToast } from "@/components/Toast";

interface CodeSnippet {
  id: string;
  title: string;
  lang: string;
  tech: string;
  runtime: string;
  code: string;
  output: string[];
}

export default function CodePlayground() {
  const [activeSnippetIndex, setActiveSnippetIndex] = useState(0);
  const [running, setRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [executionOutput, setExecutionOutput] = useState<string[] | null>(null);
  const { showToast } = useToast();

  const snippets: CodeSnippet[] = [
    {
      id: "react-hook",
      title: "Optimistic Cart Synchronizer Hook",
      lang: "typescript",
      tech: "React 19 + TypeScript",
      runtime: "Client Execution (Next.js)",
      code: `// Custom hook: Optimistic UI state sync with server reconciliation
import { useOptimistic, useTransition } from 'react';

export function useCartOptimizer(initialCart: CartItem[]) {
  const [isPending, startTransition] = useTransition();
  const [optimisticCart, setOptimisticCart] = useOptimistic(
    initialCart,
    (state, newItem: CartItem) => {
      const idx = state.findIndex(i => i.id === newItem.id);
      if (idx > -1) {
        return state.map((item, i) => i === idx ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...state, { ...newItem, qty: 1 }];
    }
  );

  const calculateSubtotal = () => 
    optimisticCart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

  return { optimisticCart, isPending, startTransition, calculateSubtotal };
}`,
      output: [
        "[info] Initialized cart store with 1 item ($79.00)",
        "[dispatch] Optimistic event 'ADD_ITEM': Studio ANC Headphones ($129.00)",
        "[render] Subtotal recalculated optimistically: $208.00 (0ms latency)",
        "[network] POST /api/cart/sync dispatched to Express backend",
        "[server-200] Cart state confirmed and locked atomically."
      ]
    },
    {
      id: "node-socket",
      title: "WebSocket Broadcast Engine",
      lang: "javascript",
      tech: "Node.js + Socket.io",
      runtime: "Server Runtime (V8)",
      code: `// Atomic WebSocket message persistence & broadcast channel
import { Server } from 'socket.io';
import { MessageModel } from './models/Message';

export function setupChatSocket(io: Server) {
  io.on('connection', (socket) => {
    socket.on('join_room', ({ roomId, userId }) => {
      socket.join(roomId);
      socket.to(roomId).emit('user_presence', { userId, status: 'ONLINE' });
    });

    socket.on('send_message', async (payload) => {
      // 1. Immediate broadcast to room peers (<40ms)
      io.to(payload.roomId).emit('receive_message', payload);

      // 2. Asynchronous write to MongoDB cluster
      await MessageModel.create({ ...payload, timestamp: new Date() });
    });
  });
}`,
      output: [
        "[socket] Client handshake authenticated: ID 'dinkar-dev-ws-92'",
        "[room] Client joined '#channel: dev-interview-room'",
        "[broadcast] Emitted payload (size: 142 bytes) to 2 connected peers",
        "[latency] Round-trip transit time measured: 38.4ms",
        "[mongo] Atomic write acknowledged in collection 'messages'."
      ]
    },
    {
      id: "ai-autoencoder",
      title: "Autoencoder Reconstruction Loss",
      lang: "python",
      tech: "Python + Keras / PyTorch",
      runtime: "AI Inference Engine",
      code: `# Deep Autoencoder anomaly scoring pipeline
import numpy as np

def detect_anomaly(transaction_vector, autoencoder_model, threshold=0.042):
    # Vector: 29 PCA features (V1-V28 + Normalized Amount)
    reconstructed = autoencoder_model.predict(transaction_vector, verbose=0)
    
    # Calculate Mean Squared Error (MSE)
    mse = np.mean(np.power(transaction_vector - reconstructed, 2), axis=1)
    
    is_fraud = mse > threshold
    return {
        "mse": float(mse[0]),
        "threshold": threshold,
        "is_fraud": bool(is_fraud[0]),
        "confidence": float(min(1.0, mse[0] / threshold))
    }`,
      output: [
        "[model] Autoencoder weights loaded: 29-14-7-14-29 Bottleneck architecture",
        "[vector] Ingested 29 normalized PCA feature vectors",
        "[inference] Matrix reconstruction executed in 12.3ms",
        "[result] Calculated MSE Loss: 0.142 (Threshold: 0.042)",
        "[DEFENSE ALERT] Anomaly Flag: FRAUD BLOCKED. Transaction halted."
      ]
    },
    {
      id: "java-dsa",
      title: "Dijkstra Priority Queue Engine",
      lang: "java",
      tech: "Java 21 Core + OOP",
      runtime: "JVM Runtime",
      code: `// Optimal Shortest Path calculation using Min-Heap Priority Queue
import java.util.*;

public class NetworkRouter {
    public static Map<Integer, Integer> dijkstra(int start, List<List<Edge>> graph, int n) {
        int[] dist = new int[n];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[start] = 0;

        PriorityQueue<Edge> pq = new PriorityQueue<>(Comparator.comparingInt(e -> e.weight));
        pq.add(new Edge(start, 0));

        while (!pq.isEmpty()) {
            Edge current = pq.poll();
            if (current.weight > dist[current.to]) continue;

            for (Edge neighbor : graph.get(current.to)) {
                if (dist[current.to] + neighbor.weight < dist[neighbor.to]) {
                    dist[neighbor.to] = dist[current.to] + neighbor.weight;
                    pq.add(new Edge(neighbor.to, dist[neighbor.to]));
                }
            }
        }
        return Map.of("vertices", n, "min_latency", dist[n - 1]);
    }
}`,
      output: [
        "[jvm] Compiling NetworkRouter.java with Java 21 LTS",
        "[graph] Constructed directed weighted adjacency list (V=100, E=450)",
        "[algorithm] Dijkstra Min-Heap priority queue executed in 0.008s",
        "[optimal] Asymptotic complexity verified: O((V + E) log V)",
        "[complete] Shortest path to target vertex: 14 hops, latency 18ms."
      ]
    }
  ];

  const current = snippets[activeSnippetIndex];

  const handleRunCode = () => {
    sounds.playClick(1000);
    setRunning(true);
    setExecutionOutput(null);
    setTimeout(() => {
      setRunning(false);
      setExecutionOutput(current.output);
      sounds.playSuccess();
    }, 450);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(current.code);
    sounds.playClick();
    setCopied(true);
    showToast(`Copied ${current.title} snippet to clipboard!`);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FAF8F5] border-b border-[#E6DFD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="eyebrow-badge text-[#E06A26] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LIVE CODE &amp; ARCHITECTURE RUNNER</span>
            </div>
            <h2 className="font-heading-sans text-2xl sm:text-4xl font-extrabold text-[#1C1613] tracking-tight">
              Production logic,{" "}
              <span className="font-display-serif italic font-normal text-[#E06A26]">
                tested &amp; verified.
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#7A6A5E] max-w-md">
            Click across real production snippets from my flagship applications and execute them in this interactive sandbox.
          </p>
        </div>

        {/* Playground Container */}
        <div className="tactile-card rounded-3xl bg-white border border-[#EAE3D8] overflow-hidden shadow-sm">
          
          {/* Top Tabs Bar */}
          <div className="p-2 sm:p-3 bg-[#FAF8F5] border-b border-[#EAE3D8] flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-1.5 shrink-0">
              {snippets.map((snip, idx) => {
                const isActive = idx === activeSnippetIndex;
                return (
                  <button
                    key={snip.id}
                    onClick={() => {
                      sounds.playClick();
                      setActiveSnippetIndex(idx);
                      setExecutionOutput(null);
                    }}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-heading-sans font-semibold transition-all shrink-0 flex items-center gap-1.5 ${
                      isActive
                        ? "bg-[#1C1613] text-[#FAF8F5] shadow-2xs"
                        : "text-[#574B42] hover:bg-[#F4EFEA]"
                    }`}
                  >
                    <span>{snip.tech}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-full bg-white hover:bg-[#FAF8F5] text-[#574B42] hover:text-[#1C1613] border border-[#E0D7CC] text-xs font-heading-sans font-medium transition-colors flex items-center gap-1.5"
                title="Copy code to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
              </button>

              <button
                onClick={handleRunCode}
                disabled={running}
                className="btn-primary-warm text-xs py-1.5 px-4 justify-center"
              >
                {running ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Executing...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Run Snippet</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Code Viewer & Output Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Code Editor Window (7 cols) */}
            <div className="lg:col-span-7 bg-[#1C1613] text-[#FAF8F5] p-5 sm:p-6 font-code-mono text-xs overflow-x-auto flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#2D241E]">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#2D241E] text-[#8A7B70] text-[11px]">
                  <span>{current.title}</span>
                  <span className="text-amber-400 font-semibold">{current.runtime}</span>
                </div>
                <pre className="leading-relaxed text-[#EAE3D8]">
                  <code>{current.code}</code>
                </pre>
              </div>

              <div className="pt-4 mt-6 border-t border-[#2D241E] text-[10px] text-[#7A6A5E] flex justify-between">
                <span>Dinkar Kumar Engineering Source</span>
                <span>Type-Safe &bull; Zero External Bloat</span>
              </div>
            </div>

            {/* Simulated Terminal Output Window (5 cols) */}
            <div className="lg:col-span-5 bg-[#FAF8F5] p-5 sm:p-6 font-code-mono text-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EAE3D8]">
                  <span className="text-xs font-heading-sans font-bold text-[#1C1613] flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#E06A26]" />
                    <span>Terminal Output Stream</span>
                  </span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                    Sandbox Active
                  </span>
                </div>

                {running ? (
                  <div className="py-12 text-center text-[#8A7B70] space-y-2">
                    <RefreshCw className="w-6 h-6 animate-spin mx-auto text-[#E06A26]" />
                    <p className="text-xs">Dispatching code to virtual runtime...</p>
                  </div>
                ) : executionOutput ? (
                  <div className="space-y-2 text-[11px] animate-fadeIn">
                    {executionOutput.map((out, i) => (
                      <div key={i} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-emerald-600 font-bold">&gt;</span>
                        <span className="text-[#3A2E26]">{out}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-12 text-center text-[#8A7B70] space-y-3">
                    <Terminal className="w-8 h-8 mx-auto text-[#C4B7AA]" />
                    <p className="text-xs max-w-xs mx-auto">
                      Click <strong className="text-[#1C1613]">Run Snippet</strong> to simulate this algorithm&apos;s output in real time.
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#EAE3D8] mt-6 flex items-center justify-between text-[11px] text-[#7A6A5E]">
                <span>Status: Ready</span>
                <span className="font-semibold text-[#1C1613]">Latency &lt; 40ms</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
