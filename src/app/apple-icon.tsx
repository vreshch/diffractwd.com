import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1e3a5f',
          borderRadius: 32,
        }}
      >
        <svg
          viewBox="0 0 32 32"
          width="140"
          height="140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline
            points="4 13 8 10.5 11 6 13.5 10.5 16 13 20 8.5 22.5 13 26 10.5 28 13"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <polyline
            points="4 22 8 19.5 11 15 13.5 19.5 16 22 20 17.5 22.5 22 26 19.5 28 22"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            strokeDasharray="4 2"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
