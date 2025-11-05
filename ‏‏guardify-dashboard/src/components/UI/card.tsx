import React, { ReactNode } from "react";

export const Card = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={`bg-white shadow rounded p-4 ${className}`}>{children}</div>
);

export const CardHeader = ({ children }: { children: ReactNode }) => <div className="mb-2">{children}</div>;

export const CardTitle = ({ children, className }: { children: ReactNode; className?: string }) => (
  <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>
);

export const CardContent = ({ children }: { children: ReactNode }) => <div>{children}</div>;
