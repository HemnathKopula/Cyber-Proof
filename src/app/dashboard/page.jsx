/**
 * v0 by Vercel.
 * @see https://v0.dev/t/n5ZJlRINwhB
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between bg-background border-b">
        <Link href="/dashboard" className="flex items-center justify-center" prefetch={false}>
          <div className="flex items-center gap-4">
            <MountainIcon className="h-6 w-6" />
            <h1 className="text-2xl font-bold text-muted">Cyber Proof</h1>
          </div>
          <span className="sr-only">Drug Trafficking Monitoring Dashboard</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            href="/dashboard"
            className="text-sm font-medium hover:underline underline-offset-4 text-foreground"
            prefetch={false}
          >
            Dashboard
          </Link>
          <Link
            href="/investigations"
            className="text-sm font-medium hover:underline underline-offset-4 text-foreground"
            prefetch={false}
          >
            Investigations
          </Link>
          <Link
            href="/analytics"
            className="text-sm font-medium hover:underline underline-offset-4 text-foreground"
            prefetch={false}
          >
            Analytics
          </Link>
          <Link
            href="/settings"
            className="text-sm font-medium hover:underline underline-offset-4 text-foreground"
            prefetch={false}
          >
            Settings
          </Link>
        </nav>
      </header>
      <main className="flex-1 overflow-y-auto">
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="space-y-6 md:space-y-8 lg:space-y-10">
              <div className="text-center">
                <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Drug Trafficking Monitoring Dashboard</h1>
                <p className="mt-3 text-muted-foreground md:text-lg lg:text-xl">
                  Gain insights into drug trafficking activities across multiple platforms.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Total Users</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-4xl font-bold">12,345</div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Suspicious Accounts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-4xl font-bold">1,234</div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Identified Trackers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-4xl font-bold">789</div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Active Investigations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-4xl font-bold">45</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-6 md:space-y-8 lg:space-y-10">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>WhatsApp Drug Trafficking</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Suspicious Activities</div>
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 bg-red-500 rounded-full animate-pulse" />
                          <div className="text-4xl font-bold">123</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Ongoing Investigations</div>
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 bg-red-500 rounded-full animate-pulse" />
                          <div className="text-4xl font-bold">12</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Instagram Drug Trafficking</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Suspicious Activities</div>
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
                          <div className="text-4xl font-bold">456</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Ongoing Investigations</div>
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
                          <div className="text-4xl font-bold">18</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Telegram Drug Trafficking</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Suspicious Activities</div>
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
                          <div className="text-4xl font-bold">789</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Ongoing Investigations</div>
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
                          <div className="text-4xl font-bold">15</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Case #123</CardTitle>
                      <CardDescription>Suspected Telegram drug trafficking network</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">User ABC123</div>
                          <Badge variant="outline" className="bg-red-500 text-red-50">
                            High Risk
                          </Badge>
                        </div>
                        <div className="text-muted-foreground">
                          Suspicious drug trafficking activities detected in Telegram group "Narcotics Exchange".
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="font-medium">User XYZ456</div>
                          <Badge variant="outline" className="bg-yellow-500 text-yellow-50">
                            Medium Risk
                          </Badge>
                        </div>
                        <div className="text-muted-foreground">
                          Potential drug-related content shared in Telegram channel "Illicit Goods".
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
                        <div className="font-medium">Ongoing Investigation</div>
                      </div>
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
                          <Badge variant="outline" className="bg-red-500 text-red-50">
                            High Risk
                          </Badge>
                        </div>
                        <div className="text-muted-foreground">
                          Suspicious drug-related keywords detected in WhatsApp group "Narcotics Network".
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="font-medium">User 456XYZ</div>
                          <Badge variant="outline" className="bg-yellow-500 text-yellow-50">
                            Medium Risk
                          </Badge>
                        </div>
                        <div className="text-muted-foreground">
                          Potential drug trafficking activities identified in WhatsApp chat "Illicit Goods Exchange".
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 bg-red-500 rounded-full animate-pulse" />
                        <div className="font-medium">Ongoing Investigation</div>
                      </div>
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
                          <Badge variant="outline" className="bg-red-500 text-red-50">
                            High Risk
                          </Badge>
                        </div>
                        <div className="text-muted-foreground">
                          Suspicious drug-related content detected on Instagram account "narcotics_exchange".
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="font-medium">User_XYZ456</div>
                          <Badge variant="outline" className="bg-yellow-500 text-yellow-50">
                            Medium Risk
                          </Badge>
                        </div>
                        <div className="text-muted-foreground">
                          Potential drug trafficking activities identified on Instagram profile "illicit_goods_hub".
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
                        <div className="font-medium">Ongoing Investigation</div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Investigation
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20 bg-muted">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="space-y-6 md:space-y-8 lg:space-y-10">
              <div className="text-center">
                <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">Recent News on Drug Trafficking</h2>
                <p className="mt-3 text-muted-foreground md:text-lg lg:text-xl">
                  Stay up-to-date with the latest developments in the fight against drug trafficking.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <Link href="#" className="hover:underline" prefetch={false}>
                        Major Drug Bust Uncovers International Cartel
                      </Link>
                    </CardTitle>
                    <CardDescription>
                      Law enforcement agencies across multiple countries collaborate to dismantle a large-scale drug
                      trafficking network.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-muted-foreground">Published: September 1, 2024</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <Link href="#" className="hover:underline" prefetch={false}>
                        New AI-Powered Tool Helps Identify Drug Trafficking Patterns
                      </Link>
                    </CardTitle>
                    <CardDescription>
                      A cutting-edge analytics platform is revolutionizing the way authorities track and disrupt drug
                      trafficking operations.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-muted-foreground">Published: August 15, 2024</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <Link href="#" className="hover:underline" prefetch={false}>
                        Darknet Crackdown: Authorities Seize Millions in Cryptocurrency
                      </Link>
                    </CardTitle>
                    <CardDescription>
                      International law enforcement agencies target the financial backbone of online drug trafficking,
                      leading to significant asset seizures.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-muted-foreground">Published: July 30, 2024</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
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