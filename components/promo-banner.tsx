import { Shield, CreditCard, RefreshCcw } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Verified Tickets",
    description: "Every ticket is 100% verified and guaranteed authentic",
  },
  {
    icon: CreditCard,
    title: "Secure Checkout",
    description: "Industry-leading encryption protects your payment info",
  },
  {
    icon: RefreshCcw,
    title: "Refund Policy",
    description: "If your event is canceled, you'll get a full refund",
  },
]

export function PromoBanner() {
  return (
    <section className="w-full bg-secondary/50 py-10" aria-label="Trust features">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="flex items-start gap-4 rounded-lg border border-border bg-card p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-card-foreground">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
