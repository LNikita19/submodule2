import { Card, Label, TextInput, Checkbox, Button, Dropdown, DropdownItem } from "flowbite-react";
import { HiEye, HiLockClosed, HiMail, HiChevronDown } from "react-icons/hi";

export default function LoginPage() {
  return (
    <div className="flex h-screen">
      {/* Left Side with Blue Background */}
      <div className="relative flex w-1/2 bg-[#1C398E] flex-col text-white p-6">
        {/* Logo at top-left */}
        <div className="absolute top-8 left-[10rem] flex items-center gap-2 text-white font-bold text-lg">
          <img src="/spoc.png" alt="Logo" className="w-[586px] h-[30px]" />
        </div>

        {/* Center Illustration */}
        <div className="flex-1 flex items-center justify-center">
          <img src="/side.png" alt="Illustration" className="w-[470px] " />
        </div>

        {/* Footer */}
        <p className="text-sm text-center">
          Copyright © 2025 Pinnacle Teleservices Pvt. Ltd.
        </p>
      </div>

      {/* Right Side (Login Form) */}
      <div className="relative flex w-1/2 items-center justify-center">
        {/* Language Dropdown at top-right of the entire page */}
        <div className="absolute top-4 right-4 flex justify-end">
          <Dropdown className="border-1 border-gray-300 text-black  ml-[36rem]" label="🇺🇸 English" dismissOnClick={false}>
            <DropdownItem>🇮🇳 Hindi</DropdownItem>
            <DropdownItem>🇫🇷 French</DropdownItem>
            <DropdownItem>🇩🇪 German</DropdownItem>


          </Dropdown>
        </div>

        <Card className="w-full max-w-md shadow-lg space-y-4 p-6">
          <h2 className="text-2xl font-bold text-[#0A0A0A]">Sign In</h2>
          <p className="text-sm text-[#737373]">Please enter valid details</p>

          <div>
            <Label htmlFor="email" className="text-[#09090B] font-medium">
              Email <span className="text-red-500">*</span>
            </Label>
            <TextInput
              id="email"
              type="email"
              placeholder="example@mail.com"
              icon={HiMail}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="password" className="text-[#09090B] font-medium">
              Password <span className="text-red-500">*</span>
            </Label>

            <div className="relative mt-1">
              <TextInput
                id="password"
                type="password"
                placeholder="********"
                icon={HiLockClosed}
                required
                className="pr-12" // give extra padding so icon doesn’t overlap text
              />

              {/* Adjust right icon position */}
              <HiEye size={20} className="absolute right-[1rem] top-3 text-gray-500 pointer-events-none" />
            </div>
          </div>


          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="mb-0 text-[#0A0A0A]">
                Remember for 15 Days
              </Label>
            </div>
            <a href="#" className="text-sm text-[#0A0A0A] hover:underline">
              Forgot password?
            </a>
          </div>

          <Button className="w-full bg-[#171717]">Login</Button>
        </Card>
      </div>
    </div>
  );
}