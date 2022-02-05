import OrderTable from "./components/OrderTable";
import TopStats from "./components/TopStats";

export default function Orders() {
  return (
    <>
      <div className="px-3 md:px-8 h-auto mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 px-4 mb-16">
            <OrderTable />
          </div>
        </div>
      </div>
    </>
  );
}
