import Image from "next/image";

// Mock Data for Demonstration Only
const mockVenueRepo = new Map([
  ["001", { name: "The Bloom Pavilion", image: "/img/bloom.jpg" }],
  ["002", { name: "Spark Space", image: "/img/sparkspace.jpg" }],
  ["003", { name: "The Grand Table", image: "/img/grandtable.jpg" }],
]);

export async function generateStaticParams() {
  return [{ vid: "001" }, { vid: "002" }, { vid: "003" }];
}

export default async function VenueDetailPage({
  params,
}: {
  params: Promise<{ vid: string }>;
}) {
  const { vid } = await params;
  const venue = mockVenueRepo.get(vid);

  if (!venue) {
    return (
      <main className="text-center p-5">
        <h1 className="text-lg font-medium">Venue not found</h1>
      </main>
    );
  }

  return (
    <main className="text-center p-5">
      <h1 className="text-lg font-medium mb-4">Venue ID {vid}</h1>
      <div className="flex flex-row items-center gap-5 justify-center">
        <div className="relative w-[300px] h-[200px] rounded-lg overflow-hidden bg-black">
          <Image
            src={venue.image}
            alt={venue.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="text-md">{venue.name}</div>
      </div>
    </main>
  );
}