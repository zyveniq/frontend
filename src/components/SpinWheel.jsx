import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

export default function SpinWheel() {
  const rewards = [
    "🎉 VIP Access",
    "💎 10% OFF",
    "🎁 Free Shipping",
    "⭐ Early Access Pass",
    "🔥 ₹100 Credit",
    "🙌 Virtual High Five",
  ];

  const [showFormModal, setShowFormModal] = useState(false);
  const [showWheelModal, setShowWheelModal] = useState(false);
  const [showRewardModal, setShowRewardModal] = useState(false);

  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState("");
  const [spinning, setSpinning] = useState(false);
  const [winningIndex, setWinningIndex] = useState(null);
  const [email, setEmail] = useState("");
  const saveSpinResult = async (reward) => {
  try {
    await fetch(
      "https://backend-7a2m.onrender.com/api/spin-wheel/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          reward,
        }),
      }
    );
  } catch (err) {
    console.error(err);
  }
};

  // Direct 3-Second Auto Popup on every single page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFormModal(true);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  // Prevent background scrolling when modals are active
  useEffect(() => {
    if (showFormModal || showWheelModal || showRewardModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showFormModal, showWheelModal, showRewardModal]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setShowFormModal(false);
    setShowWheelModal(true);
  };

  const spin = () => {
    if (spinning) return;

    setSpinning(true);

    const index = Math.floor(Math.random() * rewards.length);
    setWinningIndex(index);

    const sliceAngle = 360 / rewards.length;
    
    // Base 5 full spins for momentum + calculating the precise counter-rotation
    // so that the chosen index stops perfectly dead-center under the top pointer (▼)
    const extraSpins = 360 * 5; 
    const targetRotation = extraSpins + (360 - (index * sliceAngle) - (sliceAngle / 2));

    // Cumulative rotation tracking to keep smooth continuous forward spinning
    const currentFullSpins = Math.floor(rotation / 360) * 360;
    setRotation(currentFullSpins + targetRotation);
  };

  const closeEverything = () => {
    setShowRewardModal(false);
    setShowWheelModal(false);
    setShowFormModal(false);
    setEmail("");
  };

  return (
    <>
<div
  onClick={() => setShowFormModal(true)}
  className="
  fixed
bottom-20
right-3
  md:bottom-8
  md:right-8
  z-[9999]
  cursor-pointer
  group
  "
>

  {/* Glow */}

  <div className="
    absolute
    inset-0
    bg-[#FFB703]/30
    blur-2xl
    rounded-full
    scale-110
  " />

  {/* Wheel */}

  <div
    className="
    relative
w-[70px]
h-[70px]
md:w-[100px]
md:h-[100px]
    rounded-full
border-[6px]
border-[#D4A017]
    shadow-[0_0_50px_rgba(212,160,23,0.45)]
    animate-[spin_10s_linear_infinite]
    animate-[float_3s_ease-in-out_infinite]
    overflow-hidden
    group-hover:scale-110
    transition-all
    duration-500
    "
    style={{
      background:
        "conic-gradient(#023047 0deg 60deg,#FFB703 60deg 120deg,#023047 120deg 180deg,#FFB703 180deg 240deg,#023047 240deg 300deg,#FFB703 300deg 360deg)",
    }}
  >

    <div className="
      absolute
      inset-0
      flex
      items-center
      justify-center
    ">

    </div>

  </div>

<div className="
absolute
-bottom-2
left-1/2
-translate-x-1/2
bg-[#FFB703]
text-[#023047]
text-[10px]
font-black
px-3
py-1
rounded-full
shadow-lg
">
WIN
</div>

</div>
      {/* Email Popup */}
      {showFormModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[99999]">
          <div className="bg-white p-8 rounded-3xl w-[90%] max-w-md relative">
            <button
              onClick={closeEverything}
              className="absolute top-4 right-4 text-xl font-bold text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-3xl font-bold text-center mb-3 text-slate-800">
              Join Waitlist
            </h2>

            <p className="text-center text-gray-500 mb-6">
              Enter your email and spin the wheel to win a reward.
            </p>

            <form onSubmit={handleFormSubmit}>
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-xl p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#0B2341]"
              />

              <button
                type="submit"
                className="w-full bg-[#0B2341] hover:bg-[#12335c] text-white py-3 rounded-xl font-semibold transition-colors"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Wheel Popup */}
      {showWheelModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[99999]">
          <div className="bg-white rounded-3xl p-8 w-[95%] max-w-2xl relative text-center flex flex-col items-center">
            <button
              onClick={closeEverything}
              className="absolute top-4 right-4 text-xl font-bold text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-3xl font-bold mb-4 text-slate-800">
              🎰 Spin & Win
            </h2>

            {/* Visual Indicator Pin */}
            <div className="text-yellow-500 text-4xl mb-1 drop-shadow-md z-10 animate-bounce">
              ▼
            </div>

            <div className="flex justify-center relative">
              <div
                className="relative w-[360px] h-[360px] rounded-full overflow-hidden border-[12px] border-yellow-400 shadow-2xl"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition: spinning
                    ? "transform 4.5s cubic-bezier(0.15, 0.85, 0.2, 1)"
                    : "none",
                  background:
                    "conic-gradient(#0B2341 0deg 60deg, #D4AF37 60deg 120deg, #0B2341 120deg 180deg, #D4AF37 180deg 240deg, #0B2341 240deg 300deg, #D4AF37 300deg 360deg)",
                }}
onTransitionEnd={async () => {
  if (winningIndex !== null) {
    const reward = rewards[winningIndex];

    setResult(reward);

    await saveSpinResult(reward);

    setShowRewardModal(true);
  }

  setSpinning(false);
}}
              >
                {/* Reward Labels */}
                {rewards.map((reward, index) => {
                  const angle = index * 60 + 30;
                  const isGoldBackground = index % 2 !== 0;

                  return (
                    <div
                      key={index}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 origin-center"
                      style={{
                        transform: `rotate(${angle}deg) translateY(-110px)`,
                      }}
                    >
                      <div 
                        className={`w-24 text-center font-bold text-[11px] leading-tight select-none ${
                          isGoldBackground ? "text-slate-900" : "text-white"
                        }`}
                      >
                        {reward}
                      </div>
                    </div>
                  );
                })}

                {/* Center Container & Logo Patch */}
                <div 
                  className="absolute left-1/2 top-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg z-20 border-4 border-yellow-400"
                  style={{ transform: 'translate(-50%, -50%)' }}
                >
                  <img
                    src={logo}
                    alt="Logo"
                    className="w-76 h-76 object-contain"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={spin}
              disabled={spinning}
              className={`mt-8 px-10 py-4 rounded-xl font-extrabold text-lg shadow-md transition-transform active:scale-95 ${
                spinning 
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
                  : "bg-yellow-400 hover:bg-yellow-500 text-slate-900"
              }`}
            >
              {spinning ? "Spinning..." : "Spin Now"}
            </button>
          </div>
        </div>
      )}

      {/* Reward Popup */}
      {showRewardModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[999999]">
          <div className="bg-white rounded-3xl p-8 w-[90%] max-w-md text-center shadow-2xl transform transition-all scale-100">
            <h2 className="text-3xl font-extrabold mb-4 text-emerald-600">
              🎉 Congratulations!
            </h2>

            <p className="text-gray-500 text-sm mb-2">You won:</p>
            <div className="text-2xl font-black text-slate-800 bg-gray-50 py-4 px-6 rounded-2xl border border-gray-100 inline-block mb-6 shadow-inner">
              {result}
            </div>

            <button
              onClick={closeEverything}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-8 py-3.5 rounded-xl font-bold shadow-md transition-colors"
            >
              Claim Reward
            </button>
          </div>
        </div>
      )}
    </>
  );
}