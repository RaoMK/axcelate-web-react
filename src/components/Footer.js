export default function Footer() {
  return (
    <footer className="bg-white lg:left-64  right-0 py-2 px-16 border-t border-gray-200 font-light flex flex-col lg:flex-row justify-between items-center">
      <p className="text-gray-700 mb-6 lg:mb-0">
        Copyright &copy; {new Date().getFullYear()} Axcelate Capital LLP
      </p>

      <ul className="list-unstyled flex">
        <li className="mr-6">
          <p className="text-gray-700 hover:text-purple-700">
            Building Capabilities : Fostering Investment
            <br />
            (Your preferred Wealth Partner)
          </p>
        </li>
      </ul>
    </footer>
  );
}
