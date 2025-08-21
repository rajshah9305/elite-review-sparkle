import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/enhanced-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/enhanced-button"
import { 
  FileText, 
  AlertTriangle, 
  CheckCircle, 
  Zap, 
  Shield, 
  TrendingUp,
  Copy,
  Download,
  Share
} from "lucide-react"

export function ResultsSection() {
  const mockResults = [
    {
      category: "Performance",
      icon: Zap,
      color: "accent-warning",
      issues: [
        {
          severity: "medium",
          title: "Inefficient array iteration",
          description: "Consider using array methods like .reduce() instead of manual loops for better performance.",
          line: 3,
          suggestion: "const total = items.reduce((sum, item) => sum + item.price, 0);"
        }
      ]
    },
    {
      category: "Security", 
      icon: Shield,
      color: "accent-error",
      issues: [
        {
          severity: "high",
          title: "Potential XSS vulnerability",
          description: "User input should be sanitized before rendering to prevent cross-site scripting attacks.",
          line: 7,
          suggestion: "Use a sanitization library or proper escaping methods."
        }
      ]
    },
    {
      category: "Best Practices",
      icon: CheckCircle,
      color: "accent-success", 
      issues: [
        {
          severity: "low",
          title: "Missing TypeScript types",
          description: "Adding proper types will improve code maintainability and catch errors early.",
          line: 1,
          suggestion: "function calculateTotal(items: Array<{price: number}>): number"
        }
      ]
    }
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-accent-error text-background'
      case 'medium': return 'bg-accent-warning text-background'
      case 'low': return 'bg-accent-success text-background'
      default: return 'bg-muted'
    }
  }

  return (
    <div className="py-20 px-6 bg-background-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="gradient-text">Code Analysis</span> Results
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Your code analysis results will appear here. Paste your code above and click "Review Code" to start.
          </p>
        </div>

        {/* Results Header */}
        <Card variant="glass" className="p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Analysis Complete</h3>
                <p className="text-foreground-muted">Found 3 suggestions across 3 categories</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm">
                <Copy className="w-4 h-4 mr-2" />
                Copy
              </Button>
              <Button variant="ghost" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button variant="gradient" size="sm">
                <Share className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </Card>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {mockResults.map((category, index) => (
            <Card key={index} variant="floating" className="group">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-${category.color}/10 border border-${category.color}/20`}>
                    <category.icon className={`w-5 h-5 text-${category.color}`} />
                  </div>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                  <Badge variant="secondary" className="ml-auto">
                    {category.issues.length}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.issues.map((issue, issueIndex) => (
                  <div key={issueIndex} className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Badge className={`text-xs ${getSeverityColor(issue.severity)}`}>
                        {issue.severity}
                      </Badge>
                      <span className="text-xs text-foreground-muted">Line {issue.line}</span>
                    </div>
                    <h4 className="font-medium text-sm">{issue.title}</h4>
                    <p className="text-xs text-foreground-muted leading-relaxed">
                      {issue.description}
                    </p>
                    {issue.suggestion && (
                      <div className="code-area p-3 rounded-lg">
                        <p className="text-xs text-foreground-muted mb-1">Suggested fix:</p>
                        <code className="text-xs font-mono text-accent-success">
                          {issue.suggestion}
                        </code>
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Score */}
        <Card variant="glow" className="p-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="p-4 rounded-full bg-primary/10 border border-primary/20">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-1">8.5/10</div>
              <p className="text-foreground-muted">Code Quality Score</p>
            </div>
          </div>
          <p className="text-foreground-muted max-w-md mx-auto">
            Great job! Your code follows most best practices. Address the suggestions above to reach perfection.
          </p>
        </Card>
      </div>
    </div>
  )
}