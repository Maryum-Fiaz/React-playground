import React from "react";

function Message({ dismiss }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-gray-950 via-zinc-900 to-[#3b2d42] px-4">
      
      <div className="backdrop-blur-xl bg-white/10 border border-white/15 shadow-2xl rounded-3xl px-8 py-10 max-w-md w-full text-center">
        
        <div className="mb-6">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-[#b08ead]/20 border border-[#d6bcd4]/20 flex items-center justify-center shadow-inner">
            <span className="text-2xl">💻</span>
          </div>
        </div>

        <h1 className="text-2xl font-semibold text-gray-100 mb-3 tracking-tight">
          Better on Desktop
        </h1>

        <p className="text-gray-300/90 text-sm leading-relaxed mb-8">
          Currently designed for desktop screens for the best viewing experience.
        </p>

        <button
          onClick={dismiss}
          className="px-5 py-2.5 rounded-xl bg-[#8f6f8f] hover:bg-[#9b7b9b] text-white font-medium transition-all duration-300 shadow-lg hover:shadow-[#8f6f8f]/30 cursor-pointer active:scale-[0.98]"
        >
          Dismiss
        </button>
      </div>
    </div>
  )
}

export default Message;