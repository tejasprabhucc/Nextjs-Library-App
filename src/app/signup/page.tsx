import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/src/components/ui/card";
import { ChromeIcon } from "lucide-react";
import React from "react";
import Link from "next/link";
import SignupForm from "@/src/components/signup-form";
import GoogleLoginButton from "@/src/components/google-login";

const Signup = () => {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">
            Create an account
          </CardTitle>
          <CardDescription>Enter your details to register.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <SignupForm />
          <GoogleLoginButton />
          {/* <Button variant="outline" className="w-full">
            <ChromeIcon className="mr-2 h-4 w-4" />
            Continue with Google
          </Button> */}

          <div>
            <p>
              Already have an account?{" "}
              <Link className="font-bold" href={"/login"}>
                Login
              </Link>{" "}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
