
import { getContrast } from 'polished'

interface ColorsdProps {
  colors: Record<string, string>;
}

export function ColorsGrid({ colors }: ColorsdProps) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      {
        Object.entries(colors).map(([key, color]) => {
          return (
            <div key={color} style={{ background: color, padding: '2rem' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'monospace',
                color: getContrast(color, '#fff') < 3.5 ? '#000' : '#fff'
              }}>
                <strong>${key}</strong>
                <span>{color}</span>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

