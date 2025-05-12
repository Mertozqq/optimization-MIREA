
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface CodeComparisonProps {
  beforeCode: string;
  afterCode: string;
  beforeTitle?: string;
  afterTitle?: string;
}

const CodeComparison = ({
  beforeCode,
  afterCode,
  beforeTitle = "До оптимизации",
  afterTitle = "После оптимизации"
}: CodeComparisonProps) => {
  return (
    <Tabs defaultValue="before" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="before">{beforeTitle}</TabsTrigger>
        <TabsTrigger value="after">{afterTitle}</TabsTrigger>
      </TabsList>
      <TabsContent value="before" className="mt-2">
        <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
          <pre className="text-sm">
            <code>{beforeCode}</code>
          </pre>
        </div>
      </TabsContent>
      <TabsContent value="after" className="mt-2">
        <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
          <pre className="text-sm">
            <code>{afterCode}</code>
          </pre>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default CodeComparison;
