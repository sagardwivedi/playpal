"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { useSearchParams } from "next/navigation";

const UserDetailsForm = () => {
  const searchParams = useSearchParams();
  const role = searchParams.get("role");

  const handleSubmit = async (formData: FormData) => {
    // User Information
    const first_name = String(formData.get("first_name"));
    const last_name = String(formData.get("last_name"));
    const bio = String(formData.get("bio"));

    // Company Information
    const company_name = String(formData.get("company_name"));
    const company_address = String(formData.get("company_address"));
  };

  return (
    <form
      className="flex w-full flex-row items-start gap-x-10"
      action={handleSubmit}
    >
      <div className="flex flex-1 flex-col gap-y-5">
        <div className="flex flex-col gap-y-1">
          <Label htmlFor="first_name" text="First Name" />
          <Input id="first_name" name="first_name" required />
        </div>
        <div className="flex flex-col gap-y-1">
          <Label htmlFor="last_name" text="Last Name" />
          <Input id="last_name" name="last_name" required />
        </div>

        {role === "owner" ? (
          <>
            <div className="flex flex-col gap-y-1">
              <Label htmlFor="company_name" text="Company Name" />
              <Input name="company_name" id="company_name" required />
            </div>
            <div className="flex flex-col gap-y-1">
              <Label htmlFor="company_address" text="Company Address" />
              <Input name="company_address" id="company_address" required />
            </div>
          </>
        ) : null}
        <div>
          <Button
            text="Submit"
            type="submit"
            className="w-full bg-secondary/80 text-white transition hover:bg-secondary"
          />
        </div>
      </div>
      <div className="flex-shrink cursor-pointer space-y-1">
        <Label htmlFor="profile" text="Profile Picture (Optional)" />
        <div className="flex h-[200px] w-[200px] items-center justify-center rounded-md bg-gray-400 text-white transition hover:bg-gray-500">
          Pick a profile picture
        </div>
      </div>
    </form>
  );
};

export default UserDetailsForm;
