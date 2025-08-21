import { Button } from "@/components/ui/enhanced-button"
import { Settings, Github, Sparkles, Code2, Zap } from "lucide-react"
import heroCodeBg from "@/assets/hero-code-bg.jpg"

export function HeroSection() {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroCodeBg})` }}
      />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-accent-electric rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-accent-success rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-accent-warning rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 p-6 z-10">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <Code2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">Sparkle Review Hub</h1>
              <p className="text-xs text-foreground-muted">AI-powered code analysis and optimization</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Features
            </Button>
            <Button variant="ghost" size="sm">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button variant="hero" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Configure AI
            </Button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <Zap className="w-4 h-4 text-accent-electric" />
            <span className="text-sm">Powered by Advanced AI Models</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">Elite Code</span><br />
          <span className="text-foreground">Review Platform</span>
        </h1>
        
        <p className="text-xl text-foreground-muted mb-12 max-w-2xl mx-auto leading-relaxed">
          Transform your code with AI-powered analysis, optimization suggestions, 
          and real-time feedback from cutting-edge language models.
        </p>

        {/* Animated Code Preview */}
        <div className="relative mb-12">
          <div className="code-area p-6 rounded-xl max-w-2xl mx-auto text-left overflow-hidden">
            <div className="flex items-center gap-2 mb-4 text-foreground-muted">
              <div className="w-3 h-3 bg-accent-error rounded-full" />
              <div className="w-3 h-3 bg-accent-warning rounded-full" />
              <div className="w-3 h-3 bg-accent-success rounded-full" />
              <span className="text-xs ml-2 font-mono">review-example.ts</span>
            </div>
            <pre className="text-sm font-mono text-foreground-muted overflow-hidden">
              <code className="animate-code-typing whitespace-nowrap">
{`function optimizePerformance(data: any[]) {
  // AI will suggest improvements here
  return data.filter(item => item.active);
}`}
              </code>
            </pre>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" className="group">
            <Code2 className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            Start Code Review
          </Button>
          <Button variant="glass" size="xl">
            <Github className="w-5 h-5 mr-2" />
            View on GitHub
          </Button>
        </div>
      </div>
    </div>
  )
}