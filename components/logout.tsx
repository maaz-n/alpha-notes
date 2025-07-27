"use client"

import React from "react";
import { Button } from "./ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();
  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
  };
  return (
    <Button variant={"outline"} onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default Logout;
