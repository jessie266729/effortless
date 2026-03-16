// 预定义的关键帧动画
export const PREDEFINED_KEYFRAMES = {
  "fade-in": "@keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }",
  "fade-out": "@keyframes fade-out { from { opacity: 1; } to { opacity: 0; } }",
  "slide-in-up":
    "@keyframes slide-in-up { from { transform: translateY(100%); } to { transform: translateY(0); } }",
  "slide-in-down":
    "@keyframes slide-in-down { from { transform: translateY(-100%); } to { transform: translateY(0); } }",
  "slide-in-left":
    "@keyframes slide-in-left { from { transform: translateX(-100%); } to { transform: translateX(0); } }",
  "slide-in-right":
    "@keyframes slide-in-right { from { transform: translateX(100%); } to { transform: translateX(0); } }",
  bounce:
    "@keyframes bounce { 0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); } 40%, 43% { transform: translate3d(0,-30px,0); } 70% { transform: translate3d(0,-15px,0); } 90% { transform: translate3d(0,-4px,0); } }",
  spin: "@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }",
  pulse: "@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }",
  ping: "@keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }",
  wiggle:
    "@keyframes wiggle { 0%, 7% { transform: rotateZ(0); } 15% { transform: rotateZ(-15deg); } 20% { transform: rotateZ(10deg); } 25% { transform: rotateZ(-10deg); } 30% { transform: rotateZ(6deg); } 35% { transform: rotateZ(-4deg); } 40%, 100% { transform: rotateZ(0); } }",
};

export const DEFAULT_ANIMATION = {
  "fade-in": "fade-in 0.3s ease-in-out ",
  "fade-out": "fade-out 0.3s ease-in-out",
  "slide-in-up": "slide-in-up 0.3s ease-in-out",
  "slide-in-down": "slide-in-down 0.3s ease-in-out",
  "slide-in-left": "slide-in-left 0.3s ease-in-out",
  "slide-in-right": "slide-in-right 0.3s ease-in-out",
  bounce: "bounce 1s infinite",
  spin: "spin 1s linear infinite",
  pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
  ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
  wiggle: "wiggle 0.5s ease-in-out",
};
