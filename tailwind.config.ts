import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sl: {
          // Couleurs principales basées sur l'image
          purple: '#8B5CF6',        // Violet principal
          magenta: '#D946EF',       // Magenta/rose vif
          deepPurple: '#581C87',    // Violet foncé
          lightPurple: '#C084FC',   // Violet clair
          
          // Couleurs d'accent
          blue: '#00D9FF',          // Bleu cyan vif
          darkBlue: '#0284C7',      // Bleu plus foncé
          
          // Couleurs de feu/énergie
          orange: '#FF8C00',        // Orange vif
          red: '#FF2D00',           // Rouge intense
          flame: '#FFB347',         // Orange flamme
          
          // Couleurs sombres et neutres
          dark: '#0F0F23',          // Très sombre avec teinte violette
          darkGray: '#1A1A2E',      // Gris foncé violacé
          gray: '#16213E',          // Gris-bleu foncé
          lightGray: '#2A2D3A',     // Gris moyen
          
          // Couleurs claires
          white: '#F8FAFC',         // Blanc légèrement teinté
          silver: '#E2E8F0',        // Argent/gris très clair
        },
        
        // Dégradés pour les effets visuels
        gradient: {
          purpleToBlue: 'linear-gradient(135deg, #8B5CF6 0%, #00D9FF 100%)',
          magentaToPurple: 'linear-gradient(135deg, #D946EF 0%, #581C87 100%)',
          fireGradient: 'linear-gradient(135deg, #FF8C00 0%, #FF2D00 100%)',
        }
      },
      fontFamily: {
        heading: ['Bebas Neue', 'Orbitron', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      boxShadow: {
        // Ombres avec les nouvelles couleurs
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.5)',
        'glow-magenta': '0 0 20px rgba(217, 70, 239, 0.5)',
        'glow-blue': '0 0 20px rgba(0, 217, 255, 0.5)',
        
        // Effets néon
        'neon-purple': '0 0 10px #8B5CF6, 0 0 20px #8B5CF6, 0 0 30px #8B5CF6',
        'neon-magenta': '0 0 10px #D946EF, 0 0 20px #D946EF, 0 0 30px #D946EF',
        'neon-blue': '0 0 10px #00D9FF, 0 0 20px #00D9FF, 0 0 30px #00D9FF',
        'neon-orange': '0 0 10px #FF8C00, 0 0 20px #FF8C00, 0 0 30px #FF8C00',
        
        // Ombres pour la profondeur
        'inner-dark': 'inset 0 2px 4px 0 rgba(15, 15, 35, 0.6)',
        'depth': '0 20px 25px -5px rgba(15, 15, 35, 0.4), 0 10px 10px -5px rgba(15, 15, 35, 0.2)',
      },
      backgroundImage: {
        'sl-gradient': 'linear-gradient(135deg, #581C87 0%, #8B5CF6 50%, #00D9FF 100%)',
        'dark-gradient': 'linear-gradient(135deg, #0F0F23 0%, #1A1A2E 100%)',
        'fire-gradient': 'linear-gradient(135deg, #FF8C00 0%, #FF2D00 100%)',
        'magic-gradient': 'linear-gradient(135deg, #D946EF 0%, #8B5CF6 100%)',
      },
      keyframes: {
        // Animations existantes améliorées
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' }
        },
        bounceBall: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        
        // Nouvelles animations pour Solo Leveling
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' 
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.6), 0 0 40px rgba(217, 70, 239, 0.3)' 
          }
        },
        
        energyFlow: {
          '0%': { 
            backgroundPosition: '0% 50%' 
          },
          '50%': { 
            backgroundPosition: '100% 50%' 
          },
          '100%': { 
            backgroundPosition: '0% 50%' 
          }
        },
        
        magicSpark: {
          '0%, 100%': { 
            transform: 'scale(1) rotate(0deg)',
            opacity: '1' 
          },
          '25%': { 
            transform: 'scale(1.1) rotate(90deg)',
            opacity: '0.8' 
          },
          '50%': { 
            transform: 'scale(0.9) rotate(180deg)',
            opacity: '1' 
          },
          '75%': { 
            transform: 'scale(1.05) rotate(270deg)',
            opacity: '0.9' 
          }
        },
        
        shadowRise: {
          '0%': { 
            transform: 'translateY(20px) scale(0.8)',
            opacity: '0' 
          },
          '50%': { 
            transform: 'translateY(-5px) scale(1.02)',
            opacity: '0.8' 
          },
          '100%': { 
            transform: 'translateY(0) scale(1)',
            opacity: '1' 
          }
        }
      },
      animation: {
        // Animations existantes
        bounce: 'bounce 1.2s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
        bounceBall: 'bounceBall 3s ease-in-out infinite',
        fadeIn: 'fadeIn 0.6s ease-out both',
        
        // Nouvelles animations Solo Leveling
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'energy-flow': 'energyFlow 3s ease-in-out infinite',
        'magic-spark': 'magicSpark 2.5s ease-in-out infinite',
        'shadow-rise': 'shadowRise 1s ease-out both',
      },
    },
  },
  plugins: [],
} satisfies Config;