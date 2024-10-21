import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from 'lucide-react';

const ProjectInfo = () => {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Project Name</CardTitle>
        <CardDescription>A brief description of your project</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          This is where you can provide more detailed information about your GitHub project. 
          Describe its features, purpose, and any other relevant details.
        </p>
        <Button className="w-full sm:w-auto">
          <Github className="mr-2 h-4 w-4" /> View on GitHub
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectInfo;