import { HeroSection } from "@/components/code-review/hero-section"
import { CodeInputSection } from "@/components/code-review/code-input-section"
import { ResultsSection } from "@/components/code-review/results-section"

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CodeInputSection />
      <ResultsSection />
    </div>
  );
};

export default Index;
