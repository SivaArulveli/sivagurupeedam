import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-sacred text-xl gold-text-gradient tracking-wide">
            Sacred Sanctum
          </Link>
          <div className="flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Overview
            </Link>
            <Link 
              to="/blueprint" 
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/blueprint' 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
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
