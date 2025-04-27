import { colors as tokenColors } from './tokens/colors'

export default {
  theme: {
    extend: {
      colors: {
        primary: tokenColors.primary,
        secondary: tokenColors.secondary,
        background: tokenColors.background,
        backgroundMuted: tokenColors.backgroundMuted,
        text: tokenColors.text,
        textMuted: tokenColors.textMuted,
        success: tokenColors.success,
        warning: tokenColors.warning,
        error: tokenColors.error,
        info: tokenColors.info,
        stroke: tokenColors.stroke,
      },
    },
  },
  plugins: [],
}