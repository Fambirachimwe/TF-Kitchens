import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "~/components/ui/Button";
import { SERVICES } from "~/data/content";
import { cn } from "~/utils/cn";

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  location: string;
  description: string;
  budget?: string;
  contactMethod?: string;
}

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (_data: ContactFormData) => {
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    reset();
    setTimeout(() => setStatus("idle"), 5000);
  };

  const inputClass =
    "w-full rounded-2xl border border-border bg-white px-4 py-3.5 text-text transition-colors placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

  if (status === "success") {
    return (
      <div
        className={cn(
          "rounded-[var(--radius-section)] bg-light p-10 text-center",
          className,
        )}
        role="status"
      >
        <p className="font-display text-2xl text-primary">Thank You!</p>
        <p className="mt-3 text-muted">
          Your quotation request has been received. Our team will contact you shortly.
        </p>
        <Button
          type="button"
          variant="primary"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send Another Request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-5", className)}
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-text">
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            className={inputClass}
            aria-invalid={!!errors.fullName}
            {...register("fullName", { required: "Full name is required" })}
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-accent" role="alert">
              {errors.fullName.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-text">
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            type="email"
            className={inputClass}
            aria-invalid={!!errors.email}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-accent" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-text">
            Phone Number <span className="text-accent">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            className={inputClass}
            aria-invalid={!!errors.phone}
            {...register("phone", { required: "Phone number is required" })}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-accent" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-medium text-text">
            Service Required <span className="text-accent">*</span>
          </label>
          <select
            id="service"
            className={inputClass}
            aria-invalid={!!errors.service}
            defaultValue=""
            {...register("service", { required: "Please select a service" })}
          >
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-sm text-accent" role="alert">
              {errors.service.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="location" className="mb-2 block text-sm font-medium text-text">
          Project Location <span className="text-accent">*</span>
        </label>
        <input
          id="location"
          type="text"
          className={inputClass}
          placeholder="e.g. Randburg, Johannesburg"
          aria-invalid={!!errors.location}
          {...register("location", { required: "Project location is required" })}
        />
        {errors.location && (
          <p className="mt-1 text-sm text-accent" role="alert">
            {errors.location.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="budget" className="mb-2 block text-sm font-medium text-text">
          Budget Range <span className="text-muted">(optional)</span>
        </label>
        <select id="budget" className={inputClass} {...register("budget")}>
          <option value="">Select budget range</option>
          <option value="under-50k">Under R50,000</option>
          <option value="50k-100k">R50,000 – R100,000</option>
          <option value="100k-250k">R100,000 – R250,000</option>
          <option value="250k-plus">R250,000+</option>
        </select>
      </div>

      <div>
        <label htmlFor="description" className="mb-2 block text-sm font-medium text-text">
          Project Description <span className="text-accent">*</span>
        </label>
        <textarea
          id="description"
          rows={5}
          className={cn(inputClass, "resize-y")}
          aria-invalid={!!errors.description}
          {...register("description", {
            required: "Please describe your project",
            minLength: { value: 20, message: "Please provide at least 20 characters" },
          })}
        />
        {errors.description && (
          <p className="mt-1 text-sm text-accent" role="alert">
            {errors.description.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="images" className="mb-2 block text-sm font-medium text-text">
          Upload Reference Images <span className="text-muted">(optional)</span>
        </label>
        <input
          id="images"
          type="file"
          accept="image/*"
          multiple
          className="w-full rounded-2xl border border-dashed border-border bg-light px-4 py-6 text-sm text-muted file:mr-4 file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:text-white"
        />
      </div>

      <div>
        <span className="mb-2 block text-sm font-medium text-text">
          Preferred Contact Method
        </span>
        <div className="flex flex-wrap gap-4">
          {["Phone", "Email", "WhatsApp"].map((method) => (
            <label key={method} className="flex cursor-pointer items-center gap-2 text-sm">
              <input
                type="radio"
                value={method}
                className="accent-primary"
                {...register("contactMethod")}
              />
              {method}
            </label>
          ))}
        </div>
      </div>

      {status === "error" && (
        <p className="text-sm text-accent" role="alert">
          Something went wrong. Please try again or contact us on WhatsApp.
        </p>
      )}

      <Button type="submit" variant="primary" size="lg" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? "Sending..." : "Submit Quotation Request"}
      </Button>
    </form>
  );
}
