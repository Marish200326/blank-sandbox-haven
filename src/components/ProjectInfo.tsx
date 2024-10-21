import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Star, GitFork } from 'lucide-react';

const ProjectInfo = () => {
  return (
    <Card className="w-full max-w-3xl mx-auto bg-white bg-opacity-80 backdrop-blur-md shadow-xl">
      <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-lg">
        <CardTitle className="text-3xl">Project Name</CardTitle>
        <CardDescription className="text-indigo-100">A brief description of your project</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <p className="mb-6 text-gray-700 leading-relaxed">
          This is where you can provide more detailed information about your GitHub project. 
          Describe its features, purpose, and any other relevant details. Highlight what makes 
          your project unique and why others should be interested in it.
        </p>
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center text-yellow-500">
            <Star className="mr-2 h-5 w-5" />
            <span>1.5k Stars</span>
          </div>
          <div className="flex items-center text-blue-500">
            <GitFork className="mr-2 h-5 w-5" />
            <span>230 Forks</span>
          </div>
        </div>
        <Button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white">
          <Github className="mr-2 h-5 w-5" /> View on GitHub
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectInfo;