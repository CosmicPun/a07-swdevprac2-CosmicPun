import Banner from "@/components/Banner";
import CardPanel from "@/components/CardPanel";
 
export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Banner />
      <CardPanel />
    </main>
  );
}