export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
          <div className='bg-green-300'>
          {children}
          </div>
    )
  }