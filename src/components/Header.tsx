import { Button } from "@/components/ui/button";
const Header = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal to-teal-light" />
            <span className="text-xl font-semibold tracking-tight text-foreground">Guardian Tech Pros </span>
          </div>
          <Button variant="outline" className="rounded-full px-6" asChild>
            <a href="mailto:contact@guardiantechpros.com">Contact Us</a>
          </Button>
        </div>
      </div>
    </header>;
};
export default Header;