import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-sacred text-lg text-accent tracking-wide">
            Sacred Sanctum
          </Link>
          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Overview
            </Link>
            <Link 
              to="/blueprint" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Blueprint
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
