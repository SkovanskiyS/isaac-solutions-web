"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle, User, Phone, X } from "lucide-react";
import { useTranslations } from "next-intl";

interface ContactFormProps {
  variant?: "default" | "outline";
  size?: "sm" | "default" | "lg" | "xl";
  className?: string;
  buttonText?: string;
}

export default function ContactForm({
  variant = "default",
  size = "xl",
  className = "",
  buttonText,
}: ContactFormProps) {
  const t = useTranslations("contactForm");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
  });

  // Ensure component is mounted (client-side only)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      // Prevent body scrolling when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  // Form validation
  const validateForm = () => {
    const newErrors = { name: "", phone: "" };
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    // Phone validation
    // Remove formatting characters for validation
    const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, "");
    const phoneRegex = /^\+998[0-9]{9}$|^998[0-9]{9}$|^[0-9]{9}$/; // Uzbek format: +998XXXXXXXXX or 998XXXXXXXXX or XXXXXXXXX
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (cleanPhone.length < 9) {
      newErrors.phone = "Please enter a valid phone number";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle input changes
  const handleInputChange = (field: "name" | "phone", value: string) => {
    // For phone field, only allow numbers, +, spaces, parentheses, and hyphens
    if (field === "phone") {
      // Remove any characters that are not digits, +, space, (, ), or -
      const sanitizedValue = value.replace(/[^\d\+\s\(\)\-]/g, "");
      setFormData((prev) => ({ ...prev, [field]: sanitizedValue }));
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
    // Clear errors as user types
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  // Close modal and reset state
  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "" });
      setErrors({ name: "", phone: "" });
    }, 300); // Wait for fade-out animation
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Submit to Supabase API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
        }),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result.error || "Failed to send message");
      }

      const result = await response.json();
      console.log("Form submitted successfully:", result);
      setIsSubmitted(true);

      // Auto-close modal after 3 seconds
      setTimeout(() => {
        closeModal();
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      // Show user-friendly error message
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again.";

      // You could add a state for showing error to user
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle button click to open modal
  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  // Handle overlay click to close modal
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <div className={`flex justify-center w-full ${className}`}>
        <Button
          size={size}
          variant={variant}
          onClick={handleButtonClick}
          className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto"
        >
          <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
          {buttonText}
        </Button>
      </div>

      {/* Modal Overlay - Rendered using Portal */}
      {mounted &&
        isModalOpen &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-in fade-in-0 duration-300"
            onClick={handleOverlayClick}
          >
            {/* Modal Content */}
            <div
              className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-md mx-auto animate-in zoom-in-95 duration-300 relative"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              {/* Header with Close Button */}
              <div className="flex justify-between items-center p-6 pb-4">
                <h2 className="text-xl font-semibold text-foreground">
                  {isSubmitted ? t("modal.thankYouTitle") : t("modal.title")}
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeModal}
                  className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Success Message */}
              {isSubmitted ? (
                <div className="px-6 pb-6">
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Thank you, {formData.name}!
                    </h3>
                    <p className="text-muted-foreground">
                      We've received your contact information and will call you
                      at {formData.phone} soon.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      This window will close automatically in a few seconds.
                    </p>
                  </div>
                </div>
              ) : (
                /* Contact Form */
                <div className="px-6 pb-6">
                  <p className="text-sm text-muted-foreground mb-6">
                    Leave your contact details and we'll get in touch with you!
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="modal-name"
                        className="text-sm font-medium text-foreground"
                      >
                        Full Name *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="modal-name"
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          placeholder="Enter your full name"
                          className={`pl-10 w-full transition-all duration-200 ${
                            errors.name
                              ? "border-red-500 focus:ring-red-500"
                              : "focus:ring-blue-500"
                          }`}
                          disabled={isSubmitting}
                          autoFocus
                        />
                      </div>
                      {errors.name && (
                        <p className="text-sm text-red-500 animate-in slide-in-from-top-1 duration-200">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone Field */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="modal-phone"
                        className="text-sm font-medium text-foreground"
                      >
                        Phone Number *
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="modal-phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          placeholder="+998 (90) 123-45-67"
                          className={`pl-10 w-full transition-all duration-200 ${
                            errors.phone
                              ? "border-red-500 focus:ring-red-500"
                              : "focus:ring-blue-500"
                          }`}
                          disabled={isSubmitting}
                          inputMode="numeric"
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-sm text-red-500 animate-in slide-in-from-top-1 duration-200">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button
                        type="submit"
                        className="w-full group relative overflow-hidden"
                        disabled={isSubmitting}
                        size="lg"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                            {t("modal.buttons.sending")}
                          </>
                        ) : (
                          <>
                            <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                            {t("modal.buttons.sendMessage")}
                          </>
                        )}
                      </Button>
                    </div>
                  </form>

                  {/* Footer */}
                  <div className="mt-4 text-center">
                    <p className="text-xs text-muted-foreground">
                      {t("modal.footer")}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
