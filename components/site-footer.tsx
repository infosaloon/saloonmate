"use client"

export default function SiteFooter() {
  return (
    <footer className="border-t bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 py-8 flex items-center justify-center">
        <p className="text-sm text-neutral-600">
          Powered By{" "}
          <a 
            href="https://www.botivate.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-900 hover:underline font-medium"
          >
            Botivate
          </a>
        </p>
      </div>
    </footer>
  )
}

