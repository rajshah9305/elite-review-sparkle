import { Button } from "@/components/ui/enhanced-button"
import { ParticleSystem } from "@/components/ui/particle-system"
import { NeuralBackground } from "@/components/ui/neural-background"
import { Settings, Github, Sparkles, Code2, Zap, Brain, Cpu } from "lucide-react"
import heroCodeBg from "@/assets/hero-code-bg.jpg"

export function HeroSection() {
  return (
    <div className="relative min-h-[100vh] flex items-center justify-center overflow-hidden grid-pattern">
      {/* Neural Network Background */}
      <NeuralBackground className="opacity-30" />
      
      {/* Particle System */}
      <ParticleSystem count={25} className="opacity-40" />
      
      {/* Animated Background */}
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroCodeBg})` }}
      />
      
      {/* Elite Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 p-2 bg-primary/20 rounded-lg animate-float opacity-60 backdrop-blur-sm border border-primary/30">
          <Code2 className="w-4 h-4 text-primary" />
        </div>
        <div className="absolute top-40 right-32 p-2 bg-accent-electric/20 rounded-lg animate-float backdrop-blur-sm border border-accent-electric/30" style={{ animationDelay: '1s' }}>
          <Brain className="w-3 h-3 text-accent-electric" />
        </div>
        <div className="absolute bottom-32 left-1/4 p-2 bg-accent-success/20 rounded-lg animate-float backdrop-blur-sm border border-accent-success/30" style={{ animationDelay: '2s' }}>
          <Cpu className="w-4 h-4 text-accent-success" />
        </div>
        <div className="absolute top-1/3 right-1/4 p-1 bg-accent-warning/20 rounded-lg animate-float backdrop-blur-sm border border-accent-warning/30" style={{ animationDelay: '0.5s' }}>
          <Zap className="w-3 h-3 text-accent-warning" />
        </div>
        
        {/* Matrix Rain Effect */}
        <div className="absolute top-0 left-1/4 w-px h-20 bg-gradient-to-b from-transparent via-accent-electric to-transparent animate-matrix-rain" style={{ animationDelay: '3s' }} />
        <div className="absolute top-0 right-1/3 w-px h-16 bg-gradient-to-b from-transparent via-primary to-transparent animate-matrix-rain" style={{ animationDelay: '5s' }} />
        <div className="absolute top-0 left-2/3 w-px h-12 bg-gradient-to-b from-transparent via-accent-success to-transparent animate-matrix-rain" style={{ animationDelay: '7s' }} />
      </div>

      {/* Elite Header */}
      <header className="absolute top-0 left-0 right-0 p-6 z-20">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl ultra-glass border border-primary/30 animate-glow-pulse">
              <Code2 className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text tracking-tight">Sparkle Review Hub</h1>
              <p className="text-sm text-foreground-muted font-medium">Elite AI-powered code analysis & optimization</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="neural" size="sm" className="neural-glow">
              <Sparkles className="w-4 h-4 mr-2" />
              Features
            </Button>
            <Button variant="matrix" size="sm">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button variant="hero" size="sm" className="animate-glow-pulse">
              <Brain className="w-4 h-4 mr-2" />
              Configure AI
            </Button>
          </div>
        </nav>
      </header>

      {/* Elite Main Content */}
      <div className="text-center z-20 max-w-5xl mx-auto px-6 animate-slide-up">
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full ultra-glass mb-12 animate-scale-in border border-accent-electric/30">
            <div className="p-1 rounded-full bg-accent-electric/20">
              <Brain className="w-5 h-5 text-accent-electric animate-neural-pulse" />
            </div>
            <span className="text-sm font-medium tracking-wide">Powered by Elite AI Models</span>
            <div className="w-1 h-1 bg-accent-electric rounded-full animate-glow-pulse" />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[0.9] tracking-tight">
          <span className="gradient-text animate-shimmer bg-clip-text">Elite Code</span><br />
          <span className="text-foreground relative">
            Review Platform
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-primary opacity-30 blur-sm" />
          </span>
        </h1>
        
        <p className="text-2xl text-foreground-muted mb-16 max-w-3xl mx-auto leading-relaxed font-light">
          Transform your codebase with neural-powered analysis, quantum optimization suggestions, 
          and real-time intelligence from the most advanced language models.
        </p>

        {/* Elite Animated Code Preview */}
        <div className="relative mb-16">
          <div className="ultra-glass p-8 rounded-2xl max-w-4xl mx-auto text-left overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-500 magnetic-field">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3 text-foreground-muted">
                <div className="w-4 h-4 bg-accent-error rounded-full animate-glow-pulse" />
                <div className="w-4 h-4 bg-accent-warning rounded-full animate-glow-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="w-4 h-4 bg-accent-success rounded-full animate-glow-pulse" style={{ animationDelay: '1s' }} />
                <span className="text-sm ml-3 font-mono font-medium">neural-optimizer.ts</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="px-3 py-1 rounded-full bg-accent-electric/20 border border-accent-electric/30">
                  <span className="text-xs text-accent-electric font-mono">AI Enhanced</span>
                </div>
              </div>
            </div>
            
            <pre className="text-base font-mono text-foreground-muted overflow-hidden leading-6">
              <code className="animate-code-typing whitespace-nowrap syntax-highlight">
{`async function <span class="syntax-function">optimizeCodebase</span>(<span class="syntax-variable">files</span>: <span class="syntax-keyword">CodeFile</span>[]) {
  <span class="syntax-comment">// Neural AI analyzes patterns and suggests optimizations</span>
  <span class="syntax-keyword">const</span> <span class="syntax-variable">analysis</span> = <span class="syntax-keyword">await</span> <span class="syntax-function">neuralAnalyzer</span>.<span class="syntax-function">process</span>(<span class="syntax-variable">files</span>);
  
  <span class="syntax-keyword">return</span> <span class="syntax-variable">analysis</span>.<span class="syntax-function">optimize</span>({
    <span class="syntax-variable">performance</span>: <span class="syntax-keyword">true</span>,
    <span class="syntax-variable">security</span>: <span class="syntax-string">"elite"</span>,
    <span class="syntax-variable">intelligence</span>: <span class="syntax-number">10</span>
  });
}`}
              </code>
            </pre>
            
            {/* Code Enhancement Indicator */}
            <div className="mt-6 flex items-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-success rounded-full animate-glow-pulse" />
                <span className="text-accent-success font-mono">Neural Analysis: Active</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-electric rounded-full animate-glow-pulse" style={{ animationDelay: '0.5s' }} />
                <span className="text-accent-electric font-mono">Optimization: Elite Mode</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="hero" size="xl" className="group relative overflow-hidden px-16 py-6 text-lg font-semibold">
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <Brain className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
            Launch Neural Review
            <div className="absolute inset-0 border border-primary/50 rounded-lg group-hover:border-primary transition-colors duration-300" />
          </Button>
          
          <Button variant="neural" size="xl" className="px-16 py-6 text-lg">
            <Github className="w-6 h-6 mr-3" />
            Elite GitHub Integration
          </Button>
        </div>
        
        {/* Elite Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
            <div className="text-foreground-muted font-medium">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">10M+</div>
            <div className="text-foreground-muted font-medium">Lines Analyzed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">500ms</div>
            <div className="text-foreground-muted font-medium">Average Response</div>
          </div>
        </div>
      </div>
    </div>
  )
}