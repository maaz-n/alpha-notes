"use client";

import { authClient } from "@/lib/auth-client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Loader2 } from "lucide-react";

export default function MenuButtons() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    async function checkSession() {
      const session = await authClient.getSession();
      if (session?.data?.user) {
        setIsLoggedIn(true);
      }
      setIsLoading(false)
    }
    checkSession();
  }, []);

  if(isLoading) return <Button variant={"outline"} disabled>
    <Loader2 className="size-4 animate-spin"/>
  </Button>;

  return (
    <div>
      {isLoggedIn ? (
        <Link href={"/dashboard"}>
          <Button variant={"outline"}>Dashboard</Button>
        </Link>
      ) : (
        <div className="flex gap-4">
          <Button asChild variant="outline" size="sm">
            <Link href="/login">
              <span>Login</span>
            </Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/signup">
              <span>Sign Up</span>
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}
