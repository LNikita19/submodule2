"use client";
import { Button } from "flowbite-react";

export default function Page() {
  return (
    <div className="flex gap-4 p-6">
      <Button color="blue">Blue</Button>
      <Button color="red">Red</Button>
      <Button color="green">Green</Button>
      <Button color="purple">Purple</Button>
      <Button color="gray">Gray</Button>
      <Button color="dark">Dark</Button>
      <Button color="light">Light</Button>
      <Button color="failure">Failure</Button>
      <Button color="warning">Warning</Button>
      <Button color="success">Success</Button>
      <Button color="info">Info</Button>
    </div>
  );
}
