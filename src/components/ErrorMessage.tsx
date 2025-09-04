

export default function ErrorMessage({children}: React.PropsWithChildren) {
  return (
    <div className="border-2 border-red-700 text-red-500/80 p-4 rounded-lg">
      <i className="fa-solid fa-circle-exclamation"></i> {' '}
      {children}
    </div>
  )
}
