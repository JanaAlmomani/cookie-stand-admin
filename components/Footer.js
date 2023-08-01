export default function Footer({ numLocations }) {
  return (
      <footer  className="p-6 mt-24 bg-green-400 text-gray-30 text-center">
        <h1 className="text-2xl"> {numLocations}  Locations World Wide </h1>
      </footer>
  );
}