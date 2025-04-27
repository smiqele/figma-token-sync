import fs from 'fs'
import path from 'path'
import { colors } from '../tokens/colors'

// Путь куда сохранять tailwind.config.ts
const outputPath = path.resolve(__dirname, '../tailwind.config.ts')

// Генерируем контент
const configContent = `
// ⚡️ Сгенерировано автоматически скриптом
export default {
  theme: {
    extend: {
      colors: ${JSON.stringify(colors, null, 2)}
    }
  },
  plugins: [],
}
`

// Сохраняем файл
fs.writeFileSync(outputPath, configContent.trim())

console.log('✅ Tailwind config успешно сгенерирован из токенов!')