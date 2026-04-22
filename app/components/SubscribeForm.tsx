"use client";

interface SubscribeFormProps {
  inputClassName?: string;
  buttonClassName?: string;
  formClassName?: string;
  placeholder?: string;
  buttonLabel?: string;
}

export default function SubscribeForm({
  inputClassName = "flex-1 rounded-lg border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/35 outline-none focus:border-orange/50 focus:ring-2 focus:ring-orange/20",
  buttonClassName = "rounded-lg bg-orange px-6 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:bg-warm-orange hover:scale-105",
  formClassName = "mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row",
  placeholder = "Enter your email",
  buttonLabel = "Subscribe",
}: SubscribeFormProps) {
  return (
    <form className={formClassName} onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder={placeholder}
        className={inputClassName}
      />
      <button type="submit" className={buttonClassName}>
        {buttonLabel}
      </button>
    </form>
  );
}
