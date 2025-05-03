"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/context/language-context"

export default function ContactForm() {
  const { t } = useLanguage()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      message: "",
    })
    alert("Thank you for your inquiry! We'll get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, serviceType: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          {t("form.name")}
        </label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={t("form.placeholder.name")}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            {t("form.email")}
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t("form.placeholder.email")}
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            {t("form.phone")}
          </label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={t("form.placeholder.phone")}
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="serviceType" className="block text-sm font-medium mb-1">
          {t("form.serviceType")}
        </label>
        <Select onValueChange={handleSelectChange} value={formData.serviceType}>
          <SelectTrigger>
            <SelectValue placeholder={t("form.select.placeholder")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="residential">{t("form.select.residential")}</SelectItem>
            <SelectItem value="commercial">{t("form.select.commercial")}</SelectItem>
            <SelectItem value="industrial">{t("form.select.industrial")}</SelectItem>
            <SelectItem value="maintenance">{t("form.select.maintenance")}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          {t("form.message")}
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={t("form.placeholder.message")}
          rows={4}
        />
      </div>

      <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600">
        {t("form.submit")}
      </Button>
    </form>
  )
}
