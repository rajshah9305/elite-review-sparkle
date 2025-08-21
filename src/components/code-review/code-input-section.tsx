import { useState } from "react"
import { Button } from "@/components/ui/enhanced-button"
import { Card } from "@/components/ui/enhanced-card"
import { CodeEditor } from "@/components/ui/code-editor"
import { Badge } from "@/components/ui/badge"
import { Play, Upload, Wand2, FileCode, Sparkles, Brain, Cpu, Zap } from "lucide-react"

export function CodeInputSection() {
  const [code, setCode] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleReview = async () => {
    if (!code.trim()) return
    
    setIsAnalyzing(true)
    setTimeout(() => {
      setIsAnalyzing(false)
    }, 3000)
  }

  const codeExamples = [
    { label: "React Hook", value: "function useCustomHook() {\n  const [state, setState] = useState();\n  return state;\n}" },
    { label: "TypeScript Function", value: "const processData = (items: any[]) => {\n  return items.map(item => item.id);\n}" },
    { label: "Async Operation", value: "async function fetchData() {\n  const response = await fetch('/api/data');\n  return response.json();\n}" },
  ]

  return (
    <div className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Neural Code Analysis</span><br />
            <span className="text-foreground">Engine</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
            Deploy elite AI models to analyze your codebase with quantum-level precision. 
            Get real-time intelligence on performance, architecture, security, and optimization vectors.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <Card variant="neural" className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/20 border border-primary/30">
                    <Brain className="w-6 h-6 text-primary animate-neural-pulse" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Neural Code Editor</h3>
                    <p className="text-sm text-foreground-muted">Elite AI-powered analysis</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="matrix" size="sm">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload
                  </Button>
                  <Button variant="neural" size="sm">
                    <Wand2 className="w-4 h-4 mr-2" />
                    Auto-format
                  </Button>
                </div>
              </div>

              <CodeEditor
                value={code}
                onChange={setCode}
                placeholder="// Welcome to the Neural Code Analysis Engine"
                language="typescript"
                className="min-h-[500px]"
              />

              <div className="flex items-center gap-4 mt-8">
                <Button 
                  variant="hero" 
                  onClick={handleReview}
                  disabled={!code.trim() || isAnalyzing}
                  className="flex-1 relative overflow-hidden"
                >
                  {isAnalyzing ? (
                    <>
                      <Brain className="w-5 h-5 mr-3 animate-neural-pulse" />
                      Neural Analysis in Progress...
                    </>
                  ) : (
                    <>
                      <Cpu className="w-5 h-5 mr-3" />
                      Deploy Neural Analysis
                    </>
                  )}
                </Button>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Card variant="premium" className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent-electric/20 border border-accent-electric/30">
                  <Brain className="w-6 h-6 text-accent-electric animate-neural-pulse" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">Neural AI Engine</h3>
                  <Badge variant="secondary" className="mt-1 bg-accent-electric/20 text-accent-electric border-accent-electric/30">
                    Elite Models Activated
                  </Badge>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent-electric" />
                  Neural Analysis Vectors
                </h4>
                <div className="grid gap-3">
                  {[
                    { name: "Quantum Performance", color: "accent-electric" },
                    { name: "Security Scanning", color: "accent-error" },
                    { name: "Code Architecture", color: "accent-success" },
                    { name: "Best Practices", color: "accent-warning" },
                    { name: "Type Safety", color: "primary" },
                    { name: "AI Refactoring", color: "accent-electric" }
                  ].map((feature) => (
                    <div key={feature.name} className="flex items-center gap-3 p-3 rounded-lg ultra-glass">
                      <div className={`w-2 h-2 bg-${feature.color} rounded-full animate-glow-pulse`} />
                      <span className="text-sm font-medium">{feature.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}