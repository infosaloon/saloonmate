"use server"

export async function submitLead(formData: FormData) {
  const payload = Object.fromEntries(formData.entries())
  console.log("[Lead] New submission:", payload)
  await new Promise((r) => setTimeout(r, 600))
  return { ok: true }
}
