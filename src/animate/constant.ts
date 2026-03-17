// 预定义的关键帧动画
export const PREDEFINED_KEYFRAMES = {
  // 淡入淡出效果
  "fade-in": "@keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }",
  "fade-out": "@keyframes fade-out { from { opacity: 1; } to { opacity: 0; } }",
  "fade-in-up": "@keyframes fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }",
  "fade-in-down": "@keyframes fade-in-down { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }",
  "fade-in-left": "@keyframes fade-in-left { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }",
  "fade-in-right": "@keyframes fade-in-right { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }",
  
  // 滑动效果
  "slide-in-up": "@keyframes slide-in-up { from { transform: translateY(100%); } to { transform: translateY(0); } }",
  "slide-in-down": "@keyframes slide-in-down { from { transform: translateY(-100%); } to { transform: translateY(0); } }",
  "slide-in-left": "@keyframes slide-in-left { from { transform: translateX(-100%); } to { transform: translateX(0); } }",
  "slide-in-right": "@keyframes slide-in-right { from { transform: translateX(100%); } to { transform: translateX(0); } }",
  "slide-out-up": "@keyframes slide-out-up { from { transform: translateY(0); } to { transform: translateY(-100%); } }",
  "slide-out-down": "@keyframes slide-out-down { from { transform: translateY(0); } to { transform: translateY(100%); } }",
  "slide-out-left": "@keyframes slide-out-left { from { transform: translateX(0); } to { transform: translateX(-100%); } }",
  "slide-out-right": "@keyframes slide-out-right { from { transform: translateX(0); } to { transform: translateX(100%); } }",
  
  // 缩放效果
  "zoom-in": "@keyframes zoom-in { from { opacity: 0; transform: scale(0.5); } to { opacity: 1; transform: scale(1); } }",
  "zoom-out": "@keyframes zoom-out { from { opacity: 1; transform: scale(1); } to { opacity: 0; transform: scale(0.5); } }",
  "zoom-in-up": "@keyframes zoom-in-up { from { opacity: 0; transform: scale(0.5) translateY(30px); } to { opacity: 1; transform: scale(1) translateY(0); } }",
  "zoom-in-down": "@keyframes zoom-in-down { from { opacity: 0; transform: scale(0.5) translateY(-30px); } to { opacity: 1; transform: scale(1) translateY(0); } }",
  "zoom-in-left": "@keyframes zoom-in-left { from { opacity: 0; transform: scale(0.5) translateX(-30px); } to { opacity: 1; transform: scale(1) translateX(0); } }",
  "zoom-in-right": "@keyframes zoom-in-right { from { opacity: 0; transform: scale(0.5) translateX(30px); } to { opacity: 1; transform: scale(1) translateX(0); } }",
  
  // 弹跳效果
  "bounce": "@keyframes bounce { 0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); } 40%, 43% { transform: translate3d(0,-30px,0); } 70% { transform: translate3d(0,-15px,0); } 90% { transform: translate3d(0,-4px,0); } }",
  "bounce-in": "@keyframes bounce-in { 0% { opacity: 0; transform: scale(0.3); } 50% { opacity: 1; transform: scale(1.05); } 70% { transform: scale(0.9); } 100% { opacity: 1; transform: scale(1); } }",
  "bounce-out": "@keyframes bounce-out { 20% { transform: scale3d(0.9, 0.9, 0.9); } 50%, 55% { opacity: 1; transform: scale3d(1.1, 1.1, 1.1); } 100% { opacity: 0; transform: scale3d(0.3, 0.3, 0.3); } }",
  
  // 旋转效果
  "spin": "@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }",
  "spin-reverse": "@keyframes spin-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }",
  "rotate-in": "@keyframes rotate-in { from { opacity: 0; transform: rotate(-180deg); } to { opacity: 1; transform: rotate(0deg); } }",
  "rotate-out": "@keyframes rotate-out { from { opacity: 1; transform: rotate(0deg); } to { opacity: 0; transform: rotate(180deg); } }",
  
  // 脉动效果
  "pulse": "@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }",
  "pulse-strong": "@keyframes pulse-strong { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }",
  "ping": "@keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }",
  
  // 特殊效果
  "wiggle": "@keyframes wiggle { 0%, 7% { transform: rotateZ(0); } 15% { transform: rotateZ(-15deg); } 20% { transform: rotateZ(10deg); } 25% { transform: rotateZ(-10deg); } 30% { transform: rotateZ(6deg); } 35% { transform: rotateZ(-4deg); } 40%, 100% { transform: rotateZ(0); } }",
  "shake": "@keyframes shake { 0%, 100% { transform: translateX(0); } 10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); } 20%, 40%, 60%, 80% { transform: translateX(10px); } }",
  "tada": "@keyframes tada { 0% { transform: scale(1); } 10%, 20% { transform: scale(0.9) rotate(-3deg); } 30%, 50%, 70%, 90% { transform: scale(1.1) rotate(3deg); } 40%, 60%, 80% { transform: scale(1.1) rotate(-3deg); } 100% { transform: scale(1) rotate(0); } }",
  "flip": "@keyframes flip { from { transform: perspective(400px) rotateY(0); } to { transform: perspective(400px) rotateY(360deg); } }",
  "flip-in-x": "@keyframes flip-in-x { from { transform: perspective(400px) rotateX(90deg); opacity: 0; } to { transform: perspective(400px) rotateX(0); opacity: 1; } }",
  "flip-in-y": "@keyframes flip-in-y { from { transform: perspective(400px) rotateY(90deg); opacity: 0; } to { transform: perspective(400px) rotateY(0); opacity: 1; } }",
  
  // 背景和颜色效果
  "gradient-shift": "@keyframes gradient-shift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }",
  "color-shift": "@keyframes color-shift { 0% { background-color: #ff6b6b; } 25% { background-color: #4ecdc4; } 50% { background-color: #45b7d1; } 75% { background-color: #96ceb4; } 100% { background-color: #ff6b6b; } }",
  
  // 加载和进度效果
  "progress": "@keyframes progress { 0% { width: 0%; } 100% { width: 100%; } }",
  "loading-spin": "@keyframes loading-spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }",
  "loading-pulse": "@keyframes loading-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }",
  
  // 现代UI效果
  "float": "@keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }",
  "sink": "@keyframes sink { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(10px); } }",
  "jello": "@keyframes jello { 11.1% { transform: none; } 22.2% { transform: skewX(-12.5deg) skewY(-12.5deg); } 33.3% { transform: skewX(6.25deg) skewY(6.25deg); } 44.4% { transform: skewX(-3.125deg) skewY(-3.125deg); } 55.5% { transform: skewX(1.5625deg) skewY(1.5625deg); } 66.6% { transform: skewX(-0.78125deg) skewY(-0.78125deg); } 77.7% { transform: skewX(0.390625deg) skewY(0.390625deg); } 88.8% { transform: skewX(-0.1953125deg) skewY(-0.1953125deg); } 100% { transform: none; } }",
  "rubber-band": "@keyframes rubber-band { 0% { transform: scale(1); } 30% { transform: scaleX(1.25) scaleY(0.75); } 40% { transform: scaleX(0.75) scaleY(1.25); } 60% { transform: scaleX(1.15) scaleY(0.85); } 100% { transform: scale(1); } }",
  "wobble": "@keyframes wobble { 0% { transform: none; } 15% { transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg); } 30% { transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg); } 45% { transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg); } 60% { transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg); } 75% { transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg); } 100% { transform: none; } }",
};

export const DEFAULT_ANIMATION = {
  // 淡入淡出效果默认参数
  "fade-in": "fade-in 0.3s ease-in-out",
  "fade-out": "fade-out 0.3s ease-in-out",
  "fade-in-up": "fade-in-up 0.4s ease-out",
  "fade-in-down": "fade-in-down 0.4s ease-out",
  "fade-in-left": "fade-in-left 0.4s ease-out",
  "fade-in-right": "fade-in-right 0.4s ease-out",
  
  // 滑动效果默认参数
  "slide-in-up": "slide-in-up 0.3s ease-in-out",
  "slide-in-down": "slide-in-down 0.3s ease-in-out",
  "slide-in-left": "slide-in-left 0.3s ease-in-out",
  "slide-in-right": "slide-in-right 0.3s ease-in-out",
  "slide-out-up": "slide-out-up 0.3s ease-in-out",
  "slide-out-down": "slide-out-down 0.3s ease-in-out",
  "slide-out-left": "slide-out-left 0.3s ease-in-out",
  "slide-out-right": "slide-out-right 0.3s ease-in-out",
  
  // 缩放效果默认参数
  "zoom-in": "zoom-in 0.3s ease-out",
  "zoom-out": "zoom-out 0.3s ease-in",
  "zoom-in-up": "zoom-in-up 0.4s ease-out",
  "zoom-in-down": "zoom-in-down 0.4s ease-out",
  "zoom-in-left": "zoom-in-left 0.4s ease-out",
  "zoom-in-right": "zoom-in-right 0.4s ease-out",
  
  // 弹跳效果默认参数
  "bounce": "bounce 1s infinite",
  "bounce-in": "bounce-in 0.6s ease-out",
  "bounce-out": "bounce-out 0.6s ease-in",
  
  // 旋转效果默认参数
  "spin": "spin 1s linear infinite",
  "spin-reverse": "spin-reverse 1s linear infinite",
  "rotate-in": "rotate-in 0.6s ease-out",
  "rotate-out": "rotate-out 0.6s ease-in",
  
  // 脉动效果默认参数
  "pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
  "pulse-strong": "pulse-strong 1s ease-in-out infinite",
  "ping": "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
  
  // 特殊效果默认参数
  "wiggle": "wiggle 0.5s ease-in-out",
  "shake": "shake 0.5s ease-in-out",
  "tada": "tada 0.8s ease-in-out",
  "flip": "flip 1s ease-in-out infinite",
  "flip-in-x": "flip-in-x 0.6s ease-out",
  "flip-in-y": "flip-in-y 0.6s ease-out",
  
  // 背景和颜色效果默认参数
  "gradient-shift": "gradient-shift 3s ease-in-out infinite",
  "color-shift": "color-shift 4s ease-in-out infinite",
  
  // 加载和进度效果默认参数
  "progress": "progress 2s linear",
  "loading-spin": "loading-spin 1s linear infinite",
  "loading-pulse": "loading-pulse 1.5s ease-in-out infinite",
  
  // 现代UI效果默认参数
  "float": "float 3s ease-in-out infinite",
  "sink": "sink 3s ease-in-out infinite",
  "jello": "jello 0.9s ease-in-out",
  "rubber-band": "rubber-band 0.8s ease-in-out",
  "wobble": "wobble 1s ease-in-out",
};

// 动画分类，便于按类别使用
export const ANIMATION_CATEGORIES = {
  "fade": ["fade-in", "fade-out", "fade-in-up", "fade-in-down", "fade-in-left", "fade-in-right"],
  "slide": ["slide-in-up", "slide-in-down", "slide-in-left", "slide-in-right", "slide-out-up", "slide-out-down", "slide-out-left", "slide-out-right"],
  "zoom": ["zoom-in", "zoom-out", "zoom-in-up", "zoom-in-down", "zoom-in-left", "zoom-in-right"],
  "bounce": ["bounce", "bounce-in", "bounce-out"],
  "rotate": ["spin", "spin-reverse", "rotate-in", "rotate-out"],
  "pulse": ["pulse", "pulse-strong", "ping"],
  "special": ["wiggle", "shake", "tada", "flip", "flip-in-x", "flip-in-y"],
  "background": ["gradient-shift", "color-shift"],
  "loading": ["progress", "loading-spin", "loading-pulse"],
  "modern": ["float", "sink", "jello", "rubber-band", "wobble"],
};

// 动画使用建议（用于文档或提示）
export const ANIMATION_USAGE_TIPS = {
  "页面进入": ["fade-in", "slide-in-up", "zoom-in", "bounce-in"],
  "页面离开": ["fade-out", "slide-out-down", "zoom-out", "bounce-out"],
  "加载状态": ["loading-spin", "loading-pulse", "progress"],
  "强调效果": ["pulse", "ping", "shake", "tada"],
  "循环动画": ["spin", "bounce", "pulse", "float"],
  "交互反馈": ["wiggle", "jello", "rubber-band", "wobble"],
};