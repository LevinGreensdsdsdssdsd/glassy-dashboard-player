
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Video Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="backdrop-blur-md bg-card/50 border border-border/50">
          <CardHeader>
            <CardTitle>Video Editor</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Access the Remotion video editor to view and modify video sequences.</p>
            <Link to="/editor">
              <Button className="w-full">Open Editor</Button>
            </Link>
          </CardContent>
        </Card>
        
        <Card className="backdrop-blur-md bg-card/50 border border-border/50">
          <CardHeader>
            <CardTitle>Video Assets</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">5 demo videos available in the sequence.</p>
            <Button variant="outline" className="w-full">View Assets</Button>
          </CardContent>
        </Card>
        
        <Card className="backdrop-blur-md bg-card/50 border border-border/50">
          <CardHeader>
            <CardTitle>Project Info</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Remotion-powered video editing project with glassmorphism UI.</p>
            <Button variant="secondary" className="w-full">View Details</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
