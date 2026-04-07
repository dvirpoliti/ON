export default function JerseyPreview({ playerName, playerNumber, emblem, productName }) {
  const hasName = playerName && playerName.trim().length > 0;
  const hasNumber = playerNumber !== '' && playerNumber !== undefined && playerNumber !== null;
  const showClubEmblem = emblem === 'club';
  const showOnLogo = emblem === 'on_logo' || emblem === 'club';

  return (
    <div className="relative w-full max-w-[220px] mx-auto">
      {/* Jersey shape */}
      <svg viewBox="0 0 200 260" className="w-full drop-shadow-lg">
        {/* Jersey body */}
        <path
          d="M40 50 L25 70 L25 90 L40 85 L40 240 L160 240 L160 85 L175 90 L175 70 L160 50 L130 30 L120 45 Q110 55 100 55 Q90 55 80 45 L70 30 L40 50Z"
          fill="#111"
          stroke="#333"
          strokeWidth="1.5"
        />
        {/* Collar */}
        <path
          d="M80 45 Q90 55 100 55 Q110 55 120 45"
          fill="none"
          stroke="#E63946"
          strokeWidth="3"
        />
        {/* Shoulder stripes */}
        <line x1="42" y1="52" x2="68" y2="32" stroke="#E63946" strokeWidth="3" />
        <line x1="158" y1="52" x2="132" y2="32" stroke="#E63946" strokeWidth="3" />
        {/* Side stripes */}
        <line x1="40" y1="90" x2="40" y2="240" stroke="#E63946" strokeWidth="2" opacity="0.5" />
        <line x1="160" y1="90" x2="160" y2="240" stroke="#E63946" strokeWidth="2" opacity="0.5" />

        {/* ON Logo */}
        {showOnLogo && (
          <text
            x="100"
            y="100"
            textAnchor="middle"
            fill="white"
            fontSize="16"
            fontWeight="900"
            fontFamily="sans-serif"
            letterSpacing="-1"
            opacity="0.9"
          >
            ON
          </text>
        )}

        {/* Club emblem circle */}
        {showClubEmblem && (
          <g>
            <circle cx="100" cy="125" r="15" fill="none" stroke="#E63946" strokeWidth="1.5" opacity="0.8" />
            <text x="100" y="128" textAnchor="middle" fill="#E63946" fontSize="8" fontWeight="700" fontFamily="sans-serif">
              CLUB
            </text>
          </g>
        )}

        {/* Player number */}
        {hasNumber && (
          <text
            x="100"
            y={showClubEmblem ? "185" : "170"}
            textAnchor="middle"
            fill="white"
            fontSize="52"
            fontWeight="900"
            fontFamily="sans-serif"
          >
            {playerNumber}
          </text>
        )}

        {/* Player name */}
        {hasName && (
          <text
            x="100"
            y={hasNumber ? (showClubEmblem ? "210" : "200") : "170"}
            textAnchor="middle"
            fill="white"
            fontSize={playerName.length > 10 ? "11" : playerName.length > 7 ? "13" : "15"}
            fontWeight="700"
            fontFamily="sans-serif"
            letterSpacing="2"
          >
            {playerName.toUpperCase()}
          </text>
        )}
      </svg>

      {/* Product label */}
      <p className="text-center text-xs text-gray-400 mt-2">{productName}</p>
    </div>
  );
}
