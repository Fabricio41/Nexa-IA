'use client';
import { useState } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 sm:right-6 sm:bottom-6 sm:inset-x-auto">
      {/* Janela do Chat */}
      {isOpen && (
        <div className="mb-4 w-full max-w-md sm:w-96 h-[min(100vh-5rem,600px)] bg-slate-900 border border-blue-500 rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all">
          <div className="bg-blue-600 p-4 text-white font-bold flex justify-between items-center">
            <span>Atendimento IA</span>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-700 p-1 rounded"
            >
              ✕
            </button>
          </div>
          
          {/* Aqui está o seu iframe */}
          <iframe 
            src="https://app.gptmaker.ai/widget/3F52262341C8C3A1F0ADA2087A03D8E4/iframe" 
            width="100%" 
            style={{ height: '100%', minHeight: '420px' }}
            allow="microphone;" 
            frameBorder="0"
          ></iframe>
        </div>
      )}

      {/* Botão para abrir/fechar */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 p-4 rounded-full shadow-lg hover:scale-110 transition flex items-center justify-center text-white"
      >
        {isOpen ? '✕' : '🤖 Conversar'}
      </button>
    </div>
  );
}
