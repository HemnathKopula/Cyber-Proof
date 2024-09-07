/**
 * v0 by Vercel.
 * @see https://v0.dev/t/y2fK4bqWRVO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between bg-background border-b">
        <Link href="/dashboard" className="flex items-center justify-center" prefetch={false}>
          <div className="flex items-center gap-4">
            <MountainIcon className="h-6 w-6" />
            <h1 className="text-2xl font-bold text-muted">Cyber Proof</h1>
          </div>
          <span className="sr-only">Illicit Drug Trafficking Analytics</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="/dashboard" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Dashboard
          </Link>
          <Link
            href="/investigations"
            className="text-sm font-medium hover:underline underline-offset-4 text-foreground"
            prefetch={false}
          >
            Investigations
          </Link>
          <Link href="/analytics" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Analytics
          </Link>
          <Link href="settings" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Settings
          </Link>
        </nav>
      </header>
      <div className="mx-auto max-w-4xl space-y-8 py-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Illicit Drug Trafficking Investigations</h1>
          <p className="text-muted-foreground">
            Dive deeper into specific drug trafficking cases and analyze user activities across multiple platforms.
          </p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="relative flex-1">
            <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search investigations..."
              className="w-full rounded-lg bg-background pl-8"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-9 gap-1 text-sm">
                <div className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only">Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>High Risk</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Medium Risk</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Low Risk</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Case #123</CardTitle>
              <CardDescription>Suspected Telegram drug trafficking network</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium">User ABC123</div>
                  <Badge variant="outline">High Risk</Badge>
                </div>
                <div className="text-muted-foreground">
                  Suspicious drug trafficking activities detected in Telegram group "Narcotics Exchange".
                </div>
                <div className="flex items-center justify-between">
                  <div className="font-medium">User XYZ456</div>
                  <Badge variant="outline">Medium Risk</Badge>
                </div>
                <div className="text-muted-foreground">
                  Potential drug-related content shared in Telegram channel "Illicit Goods".
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                View Investigation
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Case #456</CardTitle>
              <CardDescription>Suspected WhatsApp drug trafficking network</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium">User 123ABC</div>
                  <Badge variant="outline">High Risk</Badge>
                </div>
                <div className="text-muted-foreground">
                  Suspicious drug-related keywords detected in WhatsApp group "Narcotics Network".
                </div>
                <div className="flex items-center justify-between">
                  <div className="font-medium">User 456XYZ</div>
                  <Badge variant="outline">Medium Risk</Badge>
                </div>
                <div className="text-muted-foreground">
                  Potential drug trafficking activities identified in WhatsApp chat "Illicit Goods Exchange".
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                View Investigation
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Case #789</CardTitle>
              <CardDescription>Suspected Instagram drug trafficking network</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium">User_ABC123</div>
                  <Badge variant="outline">High Risk</Badge>
                </div>
                <div className="text-muted-foreground">
                  Suspicious drug-related content detected on Instagram account "narcotics_exchange".
                </div>
                <div className="flex items-center justify-between">
                  <div className="font-medium">User_XYZ456</div>
                  <Badge variant="outline">Medium Risk</Badge>
                </div>
                <div className="text-muted-foreground">
                  Potential drug trafficking activities identified on Instagram profile "illicit_goods_hub".
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                View Investigation
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Case #987</CardTitle>
              <CardDescription>Suspected cross-platform drug trafficking network</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium">User_ABC123</div>
                  <Badge variant="outline">High Risk</Badge>
                </div>
                <div className="text-muted-foreground">
                  Suspicious drug-related content and activities detected across Telegram, WhatsApp, and Instagram.
                </div>
                <div className="flex items-center justify-between">
                  <div className="font-medium">User_XYZ456</div>
                  <Badge variant="outline">High Risk</Badge>
                </div>
                <div className="text-muted-foreground">
                  Potential drug trafficking network identified with connections to multiple platforms.
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                View Investigation
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}