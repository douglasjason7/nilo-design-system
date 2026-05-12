import { useState } from "react";
import { Badge, Button, Input, Logo, Toggle, Tooltip } from "../design-system/atoms";
import { Body, Caption, Heading, Label } from "../design-system/atoms/Typography";
import { Alert, Breadcrumb, Card, FormGroup, Pagination, Tabs } from "../design-system/molecules";
import { AppHeader, AppShell, Column, Dropdown, Sidebar, Stepper, Table } from "../design-system/organisms";

interface Quota {
  id:     string;
  client: string;
  plan:   "Starter" | "Pro" | "Enterprise";
  amount: number;
  status: "active" | "pending" | "overdue" | "draft";
  due:    string;
}

/* Dates anchored to 2026-05-12 (today). */
const mockQuotas: Quota[] = [
  { id: "Q-1046", client: "Tailwind Labs", plan: "Pro",        amount: 4800,  status: "active",  due: "2026-05-28" },
  { id: "Q-1045", client: "Bun",           plan: "Starter",    amount: 1200,  status: "overdue", due: "2026-04-22" },
  { id: "Q-1044", client: "Raycast",       plan: "Pro",        amount: 4800,  status: "pending", due: "2026-05-20" },
  { id: "Q-1043", client: "Linear",        plan: "Enterprise", amount: 12500, status: "active",  due: "2026-05-15" },
  { id: "Q-1042", client: "Vercel",        plan: "Pro",        amount: 4800,  status: "active",  due: "2026-05-12" },
];

const navItems = [
  { id: "overview", label: "Overview", icon: <DashIcon /> },
  { id: "quotas",   label: "Quotas",   icon: <ChartIcon />, badge: <Badge size="sm">{mockQuotas.length}</Badge> },
  { id: "clients",  label: "Clients",  icon: <UsersIcon /> },
  { id: "billing",  label: "Billing",  icon: <CardIcon /> },
  { id: "settings", label: "Settings", icon: <CogIcon /> },
];

export function Dashboard() {
  const [activeNav, setActiveNav]       = useState("quotas");
  const [page, setPage]                 = useState(1);
  const [showArchived, setShowArchived] = useState(false);
  const [filter, setFilter]             = useState("");

  const filtered = mockQuotas.filter(
    (q) => !filter || q.client.toLowerCase().includes(filter.toLowerCase()) || q.id.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <AppShell
      sidebar={
        <Sidebar
          items={navItems}
          activeId={activeNav}
          onSelect={setActiveNav}
          header={<Logo variant="full" size="md" />}
          footer={
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full bg-elevated ring-2 ring-border shrink-0"
                aria-hidden
              />
              <div className="min-w-0 flex-1">
                <Body size="sm" as="p" className="text-fg truncate">Douglas Jason</Body>
                <Caption>douglas@nilo.app</Caption>
              </div>
            </div>
          }
        />
      }
      header={
        <AppHeader
          left={
            <Breadcrumb items={[{ label: "Workspace", href: "#" }, { label: "Quotas" }]} />
          }
          right={
            <>
              <Tooltip content="Search (⌘K)" placement="bottom">
                <Button variant="ghost" size="sm" icon={<SearchIcon />}>Search</Button>
              </Tooltip>
              <Dropdown
                align="end"
                trigger={
                  <span className="inline-flex h-9 items-center rounded-full border border-border bg-surface px-3 font-body text-body-sm text-fg-muted hover:text-fg transition-colors duration-base">
                    Actions ▾
                  </span>
                }
                items={[
                  { id: "new",     label: "New quota",   onSelect: () => {} },
                  { id: "import",  label: "Import CSV",  onSelect: () => {} },
                  { id: "export",  label: "Export…",     onSelect: () => {} },
                  { id: "archive", label: "Archive all", destructive: true, onSelect: () => {} },
                ]}
              />
              <Button variant="accent" size="sm">+ New quota</Button>
            </>
          }
        />
      }
    >
      <div className="flex flex-col gap-6">
        <header className="flex items-end justify-between gap-4 flex-wrap">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Heading size="xl" as="h1">Quotas</Heading>
              <Badge size="sm" variant="outline" className="text-brand-olive border-brand-olive">
                v2
              </Badge>
            </div>
            <Body size="sm" muted as="p">Manage active subscriptions and billing cycles.</Body>
          </div>
          <Stepper
            steps={[
              { id: "draft",   label: "Draft"   },
              { id: "review",  label: "Review"  },
              { id: "billed",  label: "Billed"  },
              { id: "settled", label: "Settled" },
            ]}
            current={2}
            className="w-full max-w-md"
          />
        </header>

        <Alert variant="info" title="A new pricing plan is available">
          Renewals after May 14 will switch to the v2 pricing structure.{" "}
          <a href="#pricing" className="underline underline-offset-4 hover:text-fg">View changes</a>
        </Alert>

        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <KpiCard label="Monthly Revenue" value="$48,200" delta="+12.4%" trend="up" />
          <KpiCard label="Active Quotas"   value="3,842"   delta="+8.1%"  trend="up" />
          <KpiCard label="Avg. Cycle"      value="14.2d"   delta="-1.2d"  trend="up" />
          <KpiCard label="Overdue"         value="12"      delta="+3"     trend="down" />
        </section>

        <Card className="p-0 overflow-hidden">
          <div className="flex items-center justify-between gap-4 px-5 pt-5 flex-wrap">
            <Tabs
              tabs={[
                { id: "all",     label: "All",     badge: <Badge size="sm">{filtered.length}</Badge> },
                { id: "active",  label: "Active"  },
                { id: "pending", label: "Pending" },
                { id: "overdue", label: "Overdue", badge: <Badge size="sm" variant="error">1</Badge> },
              ]}
              defaultId="all"
            />
            <Toggle
              size="sm"
              label="Show archived"
              checked={showArchived}
              onChange={(e) => setShowArchived(e.target.checked)}
            />
          </div>

          <div className="px-5 pb-5">
            <FormGroup label="Filter by client" hint="Type to search by name or ID" className="max-w-sm mb-4">
              {(p) => (
                <Input
                  placeholder="e.g. Vercel"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  {...p}
                />
              )}
            </FormGroup>

            <Table<Quota>
              columns={columns}
              data={filtered}
              rowKey={(r) => r.id}
              onRowClick={(r) => console.log("open", r.id)}
            />

            <div className="flex items-center justify-between pt-4">
              <Caption>
                Showing 1–{filtered.length} of {mockQuotas.length * 5}
              </Caption>
              <Pagination page={page} totalPages={5} onChange={setPage} />
            </div>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}

const TODAY = "2026-05-12";

function relativeDue(due: string): { label: string; tone: "muted" | "warning" | "error" } {
  const d  = new Date(due).getTime();
  const t  = new Date(TODAY).getTime();
  const dd = Math.round((d - t) / (1000 * 60 * 60 * 24));
  if (dd < 0)       return { label: `${Math.abs(dd)}d overdue`,  tone: "error"   };
  if (dd === 0)     return { label: "Due today",                  tone: "warning" };
  if (dd <= 3)      return { label: `In ${dd}d`,                  tone: "warning" };
  return { label: `In ${dd}d`, tone: "muted" };
}

const columns: Column<Quota>[] = [
  { id: "id",     header: "ID",     width: "10%", cell: (r) => <Label uppercase>{r.id}</Label> },
  { id: "client", header: "Client", cell: (r) => <span className="font-medium text-fg">{r.client}</span> },
  { id: "plan",   header: "Plan",   cell: (r) => <span className="text-fg-muted">{r.plan}</span> },
  {
    id: "amount", header: "Amount", align: "right",
    cell: (r) => (
      <span className="font-mono text-fg">
        {r.amount.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })}
      </span>
    ),
  },
  { id: "status", header: "Status", cell: (r) => <StatusBadge status={r.status} /> },
  {
    id: "due", header: "Due", cell: (r) => {
      const rel = relativeDue(r.due);
      const tone =
        rel.tone === "error"   ? "text-error-400"   :
        rel.tone === "warning" ? "text-warning-400" :
        "text-fg-muted";
      return (
        <Tooltip content={r.due} placement="top">
          <span className={`font-body text-body-sm ${tone}`}>{rel.label}</span>
        </Tooltip>
      );
    },
  },
  {
    id: "actions", header: "", width: "60px", align: "right",
    cell: () => <Button variant="ghost" size="sm">Edit</Button>,
  },
];

function StatusBadge({ status }: { status: Quota["status"] }) {
  const variant =
    status === "active"  ? "success" :
    status === "pending" ? "warning" :
    status === "draft"   ? "outline" :
    "error";
  const label =
    status === "active"  ? "Active"  :
    status === "pending" ? "Pending" :
    status === "draft"   ? "Draft"   :
    "Overdue";
  return <Badge variant={variant} size="sm">{label}</Badge>;
}

function KpiCard({ label, value, delta, trend }: { label: string; value: string; delta: string; trend: "up" | "down" }) {
  return (
    <Card className="p-5 flex flex-col gap-2">
      <Caption>{label}</Caption>
      <Heading size="lg" as="p">{value}</Heading>
      <div
        className={`inline-flex items-center gap-1 font-body text-body-sm ${
          trend === "up" ? "text-success-400" : "text-error-400"
        }`}
      >
        <span aria-hidden>{trend === "up" ? "↗" : "↘"}</span>
        {delta}
      </div>
    </Card>
  );
}

function DashIcon()   { return <Box>▦</Box>; }
function ChartIcon()  { return <Box>▤</Box>; }
function UsersIcon()  { return <Box>◉</Box>; }
function CardIcon()   { return <Box>▭</Box>; }
function CogIcon()    { return <Box>✦</Box>; }
function SearchIcon() { return <Box>⌕</Box>; }
function Box({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex w-4 h-4 items-center justify-center text-current">{children}</span>;
}
