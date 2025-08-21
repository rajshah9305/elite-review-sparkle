import { useState } from "react"
import { Button } from "@/components/ui/enhanced-button"
import { Card } from "@/components/ui/enhanced-card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Play, Upload, Wand2, FileCode, Sparkles } from "lucide-react"

export function CodeInputSection() {
  const [code, setCode] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleReview = async () => {
    if (!code.trim()) return
    
    setIsAnalyzing(true)
    // Simulate API call
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
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="gradient-text">Paste Your Code</span> for Analysis
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Submit your code and get instant AI-powered feedback on performance, 
            best practices, security, and optimization opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Code Input */}
          <Card variant="glass" className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FileCode className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Your Code</h3>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload File
                </Button>
              </div>
            </div>

            <div className="relative">
              <Textarea
                placeholder="// Paste your code here for AI-powered review
function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="min-h-[300px] font-mono text-sm bg-code-bg border-code-border resize-none"
              />
              
              {/* Line numbers overlay */}
              <div className="absolute left-3 top-3 text-xs text-foreground-muted font-mono pointer-events-none">
                {Array.from({ length: 10 }, (_, i) => (
                  <div key={i} className="h-5 leading-5">{i + 1}</div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-sm text-foreground-muted">Quick examples:</span>
              {codeExamples.map((example, index) => (
                <Button
                  key={index}
                  variant="code"
                  size="sm"
                  onClick={() => setCode(example.value)}
                >
                  {example.label}
                </Button>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-6">
              <Button 
                variant="gradient" 
                onClick={handleReview}
                disabled={!code.trim() || isAnalyzing}
                className="flex-1"
              >
                {isAnalyzing ? (
                  <>
                    <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                    Analyzing Code...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Review Code
                  </>
                )}
              </Button>
              <Button variant="ghost" size="icon">
                <Wand2 className="w-4 h-4" />
              </Button>
            </div>
          </Card>

          {/* AI Configuration & Features */}
          <Card variant="floating" className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Wand2 className="w-5 h-5 text-accent-electric" />
              <h3 className="font-semibold">AI Configuration</h3>
              <Badge variant="secondary" className="ml-auto">
                No AI provider configured
              </Badge>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-background-secondary border border-card-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">AI Provider</span>
                  <Button variant="hero" size="sm">
                    Configure AI
                  </Button>
                </div>
                <p className="text-sm text-foreground-muted">
                  Connect your preferred AI model for code analysis
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-sm">Analysis Features</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Performance Issues",
                    "Security Vulnerabilities", 
                    "Code Quality",
                    "Best Practices",
                    "Type Safety",
                    "Optimization Tips"
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-2 p-2 rounded-lg bg-background-secondary/50">
                      <div className="w-2 h-2 bg-accent-success rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="font-medium text-sm">Pro Tip</span>
                </div>
                <p className="text-xs text-foreground-muted">
                  Include context about your codebase for more accurate suggestions
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}