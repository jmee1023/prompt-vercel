"use client";
import React from "react";
import Footer from "@components/Footer";
import LeadForm from "@components/NewLead";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const people = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/new-lead");
    },
  });
  return (
    <div>
      <LeadForm />
    </div>
  );
};

export default people;
