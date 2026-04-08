export default function JerseyPreview({ playerName, playerNumber, emblem, productName }) {
  const hasName = playerName && playerName.trim().length > 0;
  const hasNumber = playerNumber !== '' && playerNumber !== undefined && playerNumber !== null;
  const showClubEmblem = emblem === 'club';
  const displayName = hasName ? playerName.toUpperCase() : '';
  const displayNumber = hasNumber ? playerNumber : '';

  // Dynamic font size for name based on length
  const nameFontSize = displayName.length > 10 ? 10 : displayName.length > 7 ? 12 : 14;

  return (
    <div className="w-full">
      <div className="flex gap-4 sm:gap-6 justify-center items-start">
        {/* === FRONT VIEW === */}
        <div className="flex-1 max-w-[180px]">
          <p className="text-[10px] font-bold text-[#999] uppercase tracking-widest text-center mb-2">חזית</p>
          <svg viewBox="0 0 200 280" className="w-full drop-shadow-md">
            {/* Jersey body - front */}
            <path
              d="M40 55 L22 78 L22 100 L40 92 L40 260 L160 260 L160 92 L178 100 L178 78 L160 55 L132 32 L122 48 Q112 60 100 60 Q88 60 78 48 L68 32 L40 55Z"
              fill="white"
              stroke="#ccc"
              strokeWidth="1"
            />
            {/* Side panels */}
            <path d="M40 92 L40 260" stroke="#888" strokeWidth="0.5" opacity="0.3" />
            <path d="M160 92 L160 260" stroke="#888" strokeWidth="0.5" opacity="0.3" />
            {/* Shoulder panels */}
            <path d="M40 55 L22 78 L22 100 L40 92Z" fill="#333" opacity="0.9" />
            <path d="M160 55 L178 78 L178 100 L160 92Z" fill="#333" opacity="0.9" />
            {/* V-neck collar */}
            <path
              d="M78 48 Q88 60 100 60 Q112 60 122 48 L112 35 Q106 45 100 45 Q94 45 88 35Z"
              fill="#333"
              stroke="#555"
              strokeWidth="0.5"
            />
            {/* Collar V outline */}
            <path d="M82 42 L100 58 L118 42" fill="none" stroke="#666" strokeWidth="1.5" />

            {/* Pinstripes */}
            {[55, 65, 75, 85, 95, 105, 115, 125, 135, 145].map((x) => (
              <line key={x} x1={x} y1="65" x2={x} y2="258" stroke="#ddd" strokeWidth="0.6" opacity="0.5" />
            ))}

            {/* ON Logo - top right */}
            <text
              x="68"
              y="95"
              textAnchor="middle"
              fill="#222"
              fontSize="13"
              fontWeight="900"
              fontFamily="sans-serif"
              letterSpacing="-0.5"
            >
              ON
            </text>

            {/* Club emblem - top left */}
            {showClubEmblem && (
              <g>
                <circle cx="132" cy="88" r="11" fill="none" stroke="#D62828" strokeWidth="1.2" />
                <circle cx="132" cy="85" r="5" fill="#F5A623" opacity="0.9" />
                <path d="M126 92 L132 96 L138 92" fill="none" stroke="#2563EB" strokeWidth="1" />
              </g>
            )}

            {/* Player number - center chest */}
            {hasNumber && (
              <text
                x="100"
                y="185"
                textAnchor="middle"
                fill="#111"
                fontSize="58"
                fontWeight="900"
                fontFamily="'Arial Black', sans-serif"
                stroke="#333"
                strokeWidth="0.5"
              >
                {displayNumber}
              </text>
            )}

            {/* Size label bottom */}
            <rect x="135" y="245" width="20" height="10" rx="1" fill="#D62828" opacity="0.8" />
            <rect x="129" y="245" width="8" height="10" rx="1" fill="#eee" />
          </svg>
        </div>

        {/* === BACK VIEW === */}
        <div className="flex-1 max-w-[180px]">
          <p className="text-[10px] font-bold text-[#999] uppercase tracking-widest text-center mb-2">גב</p>
          <svg viewBox="0 0 200 280" className="w-full drop-shadow-md">
            {/* Jersey body - back (slightly different neckline) */}
            <path
              d="M40 55 L22 78 L22 100 L40 92 L40 260 L160 260 L160 92 L178 100 L178 78 L160 55 L132 38 Q116 48 100 48 Q84 48 68 38 L40 55Z"
              fill="#D62828"
              stroke="#B71C1C"
              strokeWidth="1"
            />
            {/* Shoulder panels */}
            <path d="M40 55 L22 78 L22 100 L40 92Z" fill="#111" />
            <path d="M160 55 L178 78 L178 100 L160 92Z" fill="#111" />
            {/* Back neckline */}
            <path
              d="M68 38 Q84 48 100 48 Q116 48 132 38"
              fill="#111"
              stroke="#222"
              strokeWidth="0.5"
            />

            {/* Pinstripes */}
            {[55, 65, 75, 85, 95, 105, 115, 125, 135, 145].map((x) => (
              <line key={x} x1={x} y1="55" x2={x} y2="258" stroke="#111" strokeWidth="0.6" opacity="0.25" />
            ))}

            {/* Player name - arched above number */}
            {hasName && (
              <g>
                <defs>
                  <path id="nameArc" d="M50 100 Q100 85 150 100" />
                </defs>
                <text
                  fill="white"
                  fontSize={nameFontSize}
                  fontWeight="800"
                  fontFamily="'Arial Black', sans-serif"
                  letterSpacing="3"
                  stroke="#111"
                  strokeWidth="0.8"
                  paintOrder="stroke"
                >
                  <textPath href="#nameArc" startOffset="50%" textAnchor="middle">
                    {displayName}
                  </textPath>
                </text>
              </g>
            )}

            {/* Player number - center back */}
            {hasNumber && (
              <text
                x="100"
                y={hasName ? "175" : "165"}
                textAnchor="middle"
                fill="white"
                fontSize="62"
                fontWeight="900"
                fontFamily="'Arial Black', sans-serif"
                stroke="#111"
                strokeWidth="1.5"
                paintOrder="stroke"
              >
                {displayNumber}
              </text>
            )}

            {/* Shorts area hint */}
            <line x1="40" y1="260" x2="160" y2="260" stroke="#B71C1C" strokeWidth="0.5" />
          </svg>
        </div>
      </div>

      {/* Legend */}
      {(hasName || hasNumber) && (
        <div className="mt-4 flex justify-center gap-4 text-[10px] text-[#999]">
          {hasNumber && <span>מספר: <strong className="text-[#111]">{displayNumber}</strong></span>}
          {hasName && <span>שם: <strong className="text-[#111]">{displayName}</strong></span>}
        </div>
      )}
    </div>
  );
}
