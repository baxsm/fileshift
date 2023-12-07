"use client";

import { trpc } from "@/server/client";

export default function Home() {
  const { data, error } = trpc.hello.useQuery();
  console.log(data?.value, error);

  return <div className="">Welcome</div>;
}
