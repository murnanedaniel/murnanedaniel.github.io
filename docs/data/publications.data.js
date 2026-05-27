import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default {
  load() {
    const raw = readFileSync(resolve(__dirname, 'publications.json'), 'utf-8')
    return JSON.parse(raw)
  }
}
