import { Card, Label, TextInput, Checkbox, Button, Dropdown, DropdownItem } from "flowbite-react";
import { HiEye, HiLockClosed, HiMail, HiChevronDown } from "react-icons/hi";

export default function LoginPage() {
    return (
        <div className="flex h-screen">
            {/* Left Side with Blue Background */}
            <div className="relative flex w-1/2 bg-[#1C398E] pt-[18rem] text-white pl-[8rem]">
                <div className="flex flex-col justify-center h-full max-w-lg space-y-6">
                    <h1 className="text-4xl font-bold leading-snug">
                        We invest in the world’s potential
                    </h1>
                    <p className="text-base text-gray-200 leading-relaxed">
                        Here at flowbite we focus on markets where technology, innovation,
                        and capital can unlock long-term value and drive economic growth.
                    </p>
                    <a href="/dashboard" className="flex items-center gap-2 text-white font-medium hover:underline">
                        Read more about our app →
                    </a>

                    {/* Illustration */}
                    <div className="mt-4">
                        <img src="/woman.png" alt="Illustration" className="w-[580px]" />
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="relative flex w-1/2 flex-col items-center justify-center">
                {/* Logo at Top-Left */}
                <div className="flex flex-row  justify-around">

                    <div className="absolute top-6 left-8">
                        <img src="/Logo.png" alt="Logo" className="h-[30px]" />
                    </div>

                    {/* Language Dropdown at Top-Right */}
                    <div className="absolute top-6 right-8 ml-[36rem] border-1 border-gray-100 text-black rounded-lg p-2">
                        <Dropdown
                            dismissOnClick={false}
                            renderTrigger={() => (
                                <button className="flex items-center gap-1 text-gray-700 text-sm hover:underline">
                                    <span className="text-lg">🇺🇸</span> English (US)
                                    <HiChevronDown className="h-4 w-4" />
                                </button>
                            )}
                        >
                            <DropdownItem>🇮🇳 Hindi</DropdownItem>
                            <DropdownItem>🇫🇷 French</DropdownItem>
                            <DropdownItem>🇩🇪 German</DropdownItem>
                        </Dropdown>
                    </div>
                </div>

                {/* Login Card */}
                <Card className="w-full max-w-md shadow-lg space-y-4 p-6">
                    <h2 className="text-2xl font-bold text-[#0A0A0A]">Sign in</h2>
                    <div>
                        <Label htmlFor="email" className="text-[#101828] font-medium">
                            Email <span className="text-red-500">*</span>
                        </Label>
                        <TextInput
                            id="email"
                            type="email"
                            placeholder="Enter your email"
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
                            <Label htmlFor="remember" className="mb-0 text-[#101828]">
                                Remember me
                            </Label>
                        </div>
                        <a href="#" className="text-sm text-[#1447E6] hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    <Button className="w-full bg-[#1447E6]">Sign In</Button>
                </Card>

                {/* Footer */}
                <p className="absolute bottom-4 text-sm text-gray-500">
                    Copyright © 2025 Pinnacle Teleservices Pvt. Ltd.
                </p>
            </div>
        </div>
    );
}
