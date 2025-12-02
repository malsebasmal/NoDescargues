const Footer = () => {
  const currentYear = new Date().getFullYear()
  const currentUrl = window.location.href;

  return (
    <footer className="w-full h-20 flex items-center justify-center bg-purple-300">
      <p>
        © {currentYear} <a className="hover:font-bold transition-all duration-150 ease-in-out" href={currentUrl}>No Descargues</a>. Casi todos los derechos reservados.
      </p>
    </footer>
  )
}

export default Footer