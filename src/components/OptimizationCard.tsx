
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface OptimizationCardProps {
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  djangoSpecific: boolean;
  learnMoreLink?: string;
}

const OptimizationCard = ({ 
  title, 
  description, 
  impact,
  djangoSpecific,
  learnMoreLink 
}: OptimizationCardProps) => {
  const impactColors = {
    high: 'bg-red-100 text-red-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-green-100 text-green-800',
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>{title}</CardTitle>
          <div className="flex gap-2">
            <span className={`text-xs px-2 py-1 rounded-full ${impactColors[impact]}`}>
              {impact === 'high' ? 'Высокий эффект' : impact === 'medium' ? 'Средний эффект' : 'Низкий эффект'}
            </span>
            {djangoSpecific && (
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                Django
              </span>
            )}
          </div>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-gray-600">
          {/* Content can be added here */}
        </div>
      </CardContent>
      <CardFooter>
        {learnMoreLink && (
          <Link to={learnMoreLink}>
            <Button variant="outline">Подробнее</Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default OptimizationCard;
