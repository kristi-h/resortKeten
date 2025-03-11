export default function Navbar() {
  const navigation = [
    { name: "The Villa", href: "/villa" },
    { name: "Book Us", href: "/book" },
    { name: "Local Life", href: "/local" },
    { name: "Our Story", href: "/story" },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex flex-col items-center p-6 lg:px-8"
      >
        <div className="flex lg:flex-1 w-full justify-center">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Logo</span>
            <img
              alt=""
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="hidden lg:flex justify-center items-center lg:gap-x-12 mt-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
