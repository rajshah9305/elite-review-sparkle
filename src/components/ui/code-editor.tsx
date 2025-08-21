import { useState, useEffect } from 'react'
import { Button } from './enhanced-button'
import { Copy, Download, Play } from 'lucide-react'

interface CodeEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  language?: string
  className?: string
  showLineNumbers?: boolean
  readOnly?: boolean
}

export function CodeEditor({
  value,
  onChange,
  placeholder = "// Your code here...",
  language = "typescript",
  className = "",
  showLineNumbers = true,
  readOnly = false
}: CodeEditorProps) {
  const [highlightedCode, setHighlightedCode] = useState('')

  // Simple syntax highlighting for demo purposes
  const highlightSyntax = (code: string) => {
    return code
      .replace(/\b(function|const|let|var|if|else|for|while|return|import|export|class|interface|type)\b/g, '<span class="syntax-keyword">$1</span>')
      .replace(/(["'`])((?:\\.|(?!\1)[^\\])*?)\1/g, '<span class="syntax-string">$1$2$1</span>')
      .replace(/\b(\d+\.?\d*)\b/g, '<span class="syntax-number">$1</span>')
      .replace(/(\/\/.*$|\/\*[\s\S]*?\*\/)/gm, '<span class="syntax-comment">$1</span>')
      .replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/g, '<span class="syntax-function">$1</span>(')
  }

  useEffect(() => {
    setHighlightedCode(highlightSyntax(value))
  }, [value])

  const lineCount = value.split('\n').length
  const lineNumbers = Array.from({ length: Math.max(lineCount, 20) }, (_, i) => i + 1)

  const handleCopy = () => {
    navigator.clipboard.writeText(value)
  }

  return (
    <div className={`relative ultra-glass rounded-xl overflow-hidden ${className}`}>
      {/* Editor Header */}
      <div className="flex items-center justify-between p-4 border-b border-glass-border bg-background-secondary/30">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-accent-error rounded-full" />
          <div className="w-3 h-3 bg-accent-warning rounded-full" />
          <div className="w-3 h-3 bg-accent-success rounded-full" />
          <span className="text-xs text-foreground-muted ml-2 font-mono">
            main.{language}
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={handleCopy}>
            <Copy className="w-3 h-3" />
          </Button>
          <Button variant="ghost" size="sm">
            <Download className="w-3 h-3" />
          </Button>
          <Button variant="electric" size="sm">
            <Play className="w-3 h-3 mr-1" />
            Run
          </Button>
        </div>
      </div>

      {/* Editor Content */}
      <div className="relative flex bg-code-bg">
        {/* Line Numbers */}
        {showLineNumbers && (
          <div className="flex-shrink-0 p-4 pr-2 bg-background-tertiary/50 border-r border-code-border">
            <div className="text-xs font-mono text-foreground-muted space-y-[1px]">
              {lineNumbers.map((num) => (
                <div key={num} className="h-5 leading-5 text-right min-w-[2rem]">
                  {num}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Code Area */}
        <div className="flex-1 relative">
          {/* Syntax Highlighted Overlay */}
          <div 
            className="absolute inset-0 p-4 text-sm font-mono leading-5 pointer-events-none whitespace-pre-wrap syntax-highlight"
            dangerouslySetInnerHTML={{ __html: highlightedCode || placeholder }}
          />

          {/* Input Textarea */}
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            readOnly={readOnly}
            className="w-full h-full p-4 text-sm font-mono leading-5 bg-transparent border-0 outline-0 resize-none text-transparent caret-foreground selection:bg-code-selection"
            style={{ 
              minHeight: '400px',
              background: 'transparent',
              color: 'transparent'
            }}
            spellCheck={false}
          />
        </div>
      </div>

      {/* Status Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-background-tertiary/30 border-t border-glass-border text-xs text-foreground-muted">
        <div className="flex items-center gap-4">
          <span>Line {value.split('\n').length}</span>
          <span>Characters {value.length}</span>
          <span className="text-accent-success">● {language}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Spaces: 2</span>
          <span>UTF-8</span>
        </div>
      </div>
    </div>
  )
}