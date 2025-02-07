import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function OnboardingRoute() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>
            Welcome to <span className="text-primary">Slot</span>Ify
          </CardTitle>
          <CardDescription>
            We need your following information to set up your profile!
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-y-5">
          <div className="grid gap-y-2">
            <Label>Full name</Label>
            <Input placeholder="Virat Kohli"></Input>
          </div>
          <div className="grid gap-y-2">
            <Label>Username</Label>
            <div className="flex rounded-md">
              <span className="inline-flex items-center px-3 rounded-l-md border-r-0 border-muted bg-muted text-sm text-muted-foreground ">
                Slotify.com/
              </span>
              <Input placeholder="GoatLM10" className="rounded-l-none"></Input>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
