export const metadata= {
  title: "about - us"
}

export default function RootLayout({ children }: {  children: React.ReactNode}) {
  return (
    <div>
        {children}
        <span>next js is great</span>
    </div>
  )
}
