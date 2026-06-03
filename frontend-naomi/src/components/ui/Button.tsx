type ButtonProps = {
  children: React.ReactNode
}

export function Button({ children }: ButtonProps) {
  return (
    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl transition-colors">
      {children}
    </button>
  )
}