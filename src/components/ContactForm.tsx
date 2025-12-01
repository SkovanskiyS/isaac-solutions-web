"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle, User, Phone, X, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

// Country codes with flags and example formats
const COUNTRY_CODES = [
  { code: "+998", country: "Uzbekistan", flag: "🇺🇿", placeholder: "90 123 45 67", example: "90 123 45 67" },
  { code: "+7", country: "Russia/Kazakhstan", flag: "🇷🇺", placeholder: "912 123 45 67", example: "912 123 45 67" },
  { code: "+1", country: "USA/Canada", flag: "🇺🇸", placeholder: "(555) 123-4567", example: "(555) 123-4567" },
  { code: "+44", country: "United Kingdom", flag: "🇬🇧", placeholder: "7700 900123", example: "7700 900123" },
  { code: "+91", country: "India", flag: "🇮🇳", placeholder: "98765 43210", example: "98765 43210" },
  { code: "+86", country: "China", flag: "🇨🇳", placeholder: "138 0013 8000", example: "138 0013 8000" },
  { code: "+49", country: "Germany", flag: "🇩🇪", placeholder: "151 23456789", example: "151 23456789" },
  { code: "+33", country: "France", flag: "🇫🇷", placeholder: "6 12 34 56 78", example: "6 12 34 56 78" },
  { code: "+81", country: "Japan", flag: "🇯🇵", placeholder: "90-1234-5678", example: "90-1234-5678" },
  { code: "+82", country: "South Korea", flag: "🇰🇷", placeholder: "10-1234-5678", example: "10-1234-5678" },
  { code: "+971", country: "UAE", flag: "🇦🇪", placeholder: "50 123 4567", example: "50 123 4567" },
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦", placeholder: "50 123 4567", example: "50 123 4567" },
  { code: "+90", country: "Turkey", flag: "🇹🇷", placeholder: "532 123 45 67", example: "532 123 45 67" },
  { code: "other", country: "Other", flag: "🌍", placeholder: "123456789", example: "123456789" },
];

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
  const [selectedCountryCode, setSelectedCountryCode] = useState("+998");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [customCountryCode, setCustomCountryCode] = useState("");
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

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (showCountryDropdown && !target.closest('.country-selector')) {
        setShowCountryDropdown(false);
      }
    };

    if (showCountryDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCountryDropdown]);

  // Form validation
  const validateForm = () => {
    const newErrors = { name: "", phone: "" };
    let isValid = true;

    // Check custom country code if "Other" is selected
    if (selectedCountryCode === "other") {
      if (!customCountryCode.trim() || !customCountryCode.startsWith("+")) {
        newErrors.phone = "Please enter a valid country code starting with +";
        setErrors(newErrors);
        return false;
      }
    }

    // Name validation - only letters, spaces, and common name characters
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    } else if (!/^[a-zA-Z\s\u0400-\u04FF\u0600-\u06FF'-]+$/.test(formData.name)) {
      newErrors.name = "Name can only contain letters and spaces";
      isValid = false;
    }

    // Phone validation - only digits
    const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, "");
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d+$/.test(cleanPhone)) {
      newErrors.phone = "Phone number can only contain digits";
      isValid = false;
    } else if (cleanPhone.length < 7) {
      newErrors.phone = "Phone number must be at least 7 digits";
      isValid = false;
    } else if (cleanPhone.length > 15) {
      newErrors.phone = "Phone number is too long";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle input changes
  const handleInputChange = (field: "name" | "phone", value: string) => {
    if (field === "name") {
      // Only allow letters, spaces, and common name characters (including Cyrillic and Arabic)
      const sanitizedValue = value.replace(/[^a-zA-Z\s\u0400-\u04FF\u0600-\u06FF'-]/g, "");
      setFormData((prev) => ({ ...prev, [field]: sanitizedValue }));
    } else if (field === "phone") {
      // Only allow digits, spaces, parentheses, and hyphens for formatting
      const sanitizedValue = value.replace(/[^\d\s\(\)\-]/g, "");
      setFormData((prev) => ({ ...prev, [field]: sanitizedValue }));
    }
    // Clear errors as user types
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  // Handle country code selection
  const handleCountryCodeSelect = (code: string) => {
    if (code === "other") {
      setSelectedCountryCode("other");
      setCustomCountryCode("");
    } else {
      setSelectedCountryCode(code);
      setCustomCountryCode("");
    }
    setShowCountryDropdown(false);
  };

  // Handle custom country code input
  const handleCustomCountryCodeChange = (value: string) => {
    // Only allow + and digits
    const sanitized = value.replace(/[^\d\+]/g, "");
    if (sanitized.startsWith("+") || sanitized === "") {
      setCustomCountryCode(sanitized);
    }
  };

  // Get the current placeholder for phone number based on selected country
  const getPhonePlaceholder = () => {
    const country = COUNTRY_CODES.find(c => c.code === selectedCountryCode);
    return country?.placeholder || "123456789";
  };

  // Get the full phone number with country code
  const getFullPhoneNumber = () => {
    const code = selectedCountryCode === "other" ? customCountryCode : selectedCountryCode;
    return `${code} ${formData.phone}`;
  };

  // Close modal and reset state
  const closeModal = () => {
    setIsModalOpen(false);
    setShowCountryDropdown(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "" });
      setErrors({ name: "", phone: "" });
      setSelectedCountryCode("+998");
      setCustomCountryCode("");
    }, 300); // Wait for fade-out animation
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const fullPhone = getFullPhoneNumber();
      
      // Submit to Supabase API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: fullPhone.trim(),
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
          className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-corporate-lg w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0"
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
                      <div className="flex gap-2">
                        {/* Country Code Selector */}
                        <div className="relative country-selector">
                          <button
                            type="button"
                            onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                            className="h-10 px-3 py-2 border border-input bg-background rounded-md hover:bg-accent hover:text-accent-foreground transition-colors flex items-center gap-2 min-w-[120px]"
                            disabled={isSubmitting}
                          >
                            <span className="text-lg">
                              {selectedCountryCode === "other" 
                                ? "🌍" 
                                : COUNTRY_CODES.find(c => c.code === selectedCountryCode)?.flag}
                            </span>
                            <span className="text-sm font-medium">
                              {selectedCountryCode === "other" 
                                ? customCountryCode || "Other" 
                                : selectedCountryCode}
                            </span>
                            <ChevronDown className="w-4 h-4 ml-auto text-muted-foreground" />
                          </button>

                          {/* Dropdown Menu */}
                          {showCountryDropdown && (
                            <div className="absolute top-full left-0 mt-1 w-[280px] bg-card border border-border rounded-lg shadow-lg z-50 max-h-[300px] overflow-y-auto">
                              {COUNTRY_CODES.map((country) => (
                                <button
                                  key={country.code}
                                  type="button"
                                  onClick={() => handleCountryCodeSelect(country.code)}
                                  className="w-full px-4 py-2.5 text-left hover:bg-accent transition-colors flex items-center gap-3 border-b border-border/50 last:border-0"
                                >
                                  <span className="text-xl">{country.flag}</span>
                                  <div className="flex-1">
                                    <div className="text-sm font-medium text-foreground">
                                      {country.country}
                                    </div>
                                    {country.code !== "other" && (
                                      <div className="text-xs text-muted-foreground">
                                        {country.code}
                                      </div>
                                    )}
                                  </div>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Custom Country Code Input (only shown when "Other" is selected) */}
                        {selectedCountryCode === "other" && (
                          <div className="relative w-24">
                            <Input
                              type="text"
                              value={customCountryCode}
                              onChange={(e) => handleCustomCountryCodeChange(e.target.value)}
                              placeholder="+123"
                              className="w-full text-center"
                              disabled={isSubmitting}
                              maxLength={5}
                            />
                          </div>
                        )}

                        {/* Phone Number Input */}
                        <div className="relative flex-1">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            id="modal-phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              handleInputChange("phone", e.target.value)
                            }
                            placeholder={getPhonePlaceholder()}
                            className={`pl-10 w-full transition-all duration-200 ${
                              errors.phone
                                ? "border-red-500 focus:ring-red-500"
                                : "focus:ring-blue-500"
                            }`}
                            disabled={isSubmitting}
                            inputMode="numeric"
                          />
                        </div>
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
                        className="w-full group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0"
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
