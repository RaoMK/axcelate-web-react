import SettingsForm from "../../components/SettingsForm";
import TopStats from "./components/TopStats";

export default function Profile() {
  return (
    <>
      <div className="px-3 md:px-8 h-auto mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-0">
            <div className="xl:col-start-1 xl:col-end-5 px-4 mb-16">
              <SettingsForm />
            </div>
            {/* <div className="xl:col-start-5 xl:col-end-7 px-4 mb-16 mt-14">
              <ProfileCard />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
