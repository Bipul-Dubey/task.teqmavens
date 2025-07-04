"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import clsx from "clsx";

// Types
interface Column {
  label: string;
  key: string;
}

interface Row {
  [key: string]: React.ReactNode | string | number;
}

interface DataTableProps {
  title?: React.ReactNode;
  rightSlot?: React.ReactNode;
  columns: Column[];
  rows: Row[];
  showHeader?: boolean;
  showFooter?: boolean;
  footer?: React.ReactNode;
  maxHeight?: string;
}

export const DataTable = ({
  title,
  rightSlot,
  columns,
  rows,
  showHeader = true,
  showFooter = false,
  footer,
  maxHeight,
}: DataTableProps) => {
  return (
    <Card className="w-full bg-background gap-0 rounded-xl border border-border p-0 overflow-hidden">
      {/* Top Header */}
      {(title || rightSlot) && (
        <div className="p-0 px-6 flex flex-row items-center justify-between border-b h-12">
          <CardTitle className="text-lg text-foreground">{title}</CardTitle>
          {rightSlot}
        </div>
      )}

      {/* Scrollable Content Area */}
      <CardContent
        className={clsx(
          "p-0 h-[400px] scrollbar-hide overflow-auto",
          maxHeight
        )}
      >
        <div className="min-w-[700px] p-0">
          <Table>
            {showHeader && (
              <TableHeader className="bg-b-background">
                <TableRow>
                  {columns.map((col) => (
                    <TableHead
                      key={col.key}
                      className="whitespace-nowrap text-muted-foreground"
                    >
                      {col.label}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
            )}
            <TableBody>
              {rows.map((row, rowIdx) => (
                <TableRow
                  key={rowIdx}
                  className="hover:bg-muted/50 transition-colors"
                >
                  {columns.map((col) => (
                    <TableCell
                      key={col.key}
                      className="whitespace-nowrap text-sm text-foreground"
                    >
                      {row[col.key]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>

      {/* Footer */}
      {showFooter && footer && (
        <div className="px-6 py-2 border-t">{footer}</div>
      )}
    </Card>
  );
};
