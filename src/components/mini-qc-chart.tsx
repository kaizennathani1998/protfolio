"use client";

import { useEffect, useState } from "react";
import { Area, AreaChart, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { cycle: "01", coverage: 98, artifact: 5 },
  { cycle: "02", coverage: 94, artifact: 7 },
  { cycle: "03", coverage: 101, artifact: 4 },
  { cycle: "04", coverage: 87, artifact: 14 },
  { cycle: "05", coverage: 91, artifact: 9 },
  { cycle: "06", coverage: 104, artifact: 3 },
];

export function MiniQcChart() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setMounted(true), 0);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div className="h-44 w-full overflow-hidden">
      {mounted ? (
        <AreaChart width={360} height={176} data={data} margin={{ left: -28, right: 8, top: 12, bottom: 0 }}>
          <defs>
            <linearGradient id="coverage" x1="0" x2="0" y1="0" y2="1">
              <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.55} />
              <stop offset="95%" stopColor="var(--primary)" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <XAxis dataKey="cycle" tickLine={false} axisLine={false} fontSize={11} />
          <YAxis tickLine={false} axisLine={false} fontSize={11} />
          <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 8 }} />
          <Area type="monotone" dataKey="coverage" stroke="var(--primary)" fill="url(#coverage)" strokeWidth={2} />
        </AreaChart>
      ) : (
        <div className="h-full rounded-md bg-primary/10" />
      )}
    </div>
  );
}
