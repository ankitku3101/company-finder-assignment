"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { FaBuilding, FaIndustry, FaMapMarkerAlt, FaGlobe, FaUsers, FaStar } from "react-icons/fa";

interface CompanyForm {
  name: string;
  industry: string;
  location: string;
  size?: number;
  foundedYear?: number;
  domain?: string;
  isHiring: boolean;
  rating?: number;
}

export default function Page() {
  const [form, setForm] = useState<CompanyForm>({
    name: "",
    industry: "",
    location: "",
    size: undefined,
    foundedYear: undefined,
    domain: "",
    isHiring: false,
    rating: undefined,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // <-- Success message state

  const handleChange = (field: keyof CompanyForm, value: any) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setSuccess(""); // Reset success message
    try {
      const res = await fetch("http://localhost:5000/api/companies/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to add company");
      }

      // Reset form after successful submission
      setForm({
        name: "",
        industry: "",
        location: "",
        size: undefined,
        foundedYear: undefined,
        domain: "",
        isHiring: false,
        rating: undefined,
      });

      setSuccess("Company added successfully!"); // <-- Show success message
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Add New Company</h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="flex items-center gap-2 font-medium text-gray-700">
            <FaBuilding /> Name
          </label>
          <Input
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Company Name"
          />
        </div>

        <div className="flex flex-col">
          <label className="flex items-center gap-2 font-medium text-gray-700">
            <FaIndustry /> Industry
          </label>
          <Input
            value={form.industry}
            onChange={(e) => handleChange("industry", e.target.value)}
            placeholder="Industry"
          />
        </div>

        <div className="flex flex-col">
          <label className="flex items-center gap-2 font-medium text-gray-700">
            <FaMapMarkerAlt /> Location
          </label>
          <Input
            value={form.location}
            onChange={(e) => handleChange("location", e.target.value)}
            placeholder="Location"
          />
        </div>

        <div className="flex flex-col">
          <label className="flex items-center gap-2 font-medium text-gray-700">
            <FaUsers /> Size
          </label>
          <Input
            type="number"
            value={form.size ?? ""}
            onChange={(e) => handleChange("size", Number(e.target.value))}
            placeholder="Number of employees"
          />
        </div>

        <div className="flex flex-col">
          <label className="flex items-center gap-2 font-medium text-gray-700">
            Founded Year
          </label>
          <Input
            type="number"
            value={form.foundedYear ?? ""}
            onChange={(e) => handleChange("foundedYear", Number(e.target.value))}
            placeholder="Year"
          />
        </div>

        <div className="flex flex-col">
          <label className="flex items-center gap-2 font-medium text-gray-700">
            <FaGlobe /> Domain
          </label>
          <Input
            value={form.domain}
            onChange={(e) => handleChange("domain", e.target.value)}
            placeholder="Domain / website"
          />
        </div>

        <div className="flex flex-col">
          <label className="flex items-center gap-2 font-medium text-gray-700">
            <FaStar /> Rating
          </label>
          <Input
            type="number"
            min={0}
            max={5}
            value={form.rating ?? ""}
            onChange={(e) => handleChange("rating", Number(e.target.value))}
            placeholder="0-5"
          />
        </div>

        <div className="flex flex-col">
          <label className="flex items-center gap-2 font-medium text-gray-700">
            Hiring?
          </label>
          <Select
            value={form.isHiring ? "true" : "false"}
            onValueChange={(val) => handleChange("isHiring", val === "true")}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Hiring Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="true">Yes</SelectItem>
              <SelectItem value="false">No</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {error && <p className="text-red-600">{error}</p>}
        {success && <p className="text-green-600">{success}</p>} 

        <Button onClick={handleSubmit} disabled={loading} className="mt-4">
          {loading ? "Adding..." : "Add Company"}
        </Button>
      </div>
    </div>
  );
}
