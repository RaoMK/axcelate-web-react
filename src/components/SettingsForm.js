import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Button from "@material-tailwind/react/Button";
import Input from "@material-tailwind/react/Input";
import { useSelector } from "react-redux";
import { updateProfile } from "api";
import { useState } from "react";
import { toast } from "react-toastify";

export default function SettingsForm() {
  const currentUser = useSelector((state) => state.user.currentUser);

  const [profile, setProfile] = useState({
    name: currentUser?.name,
    email: currentUser?.email,
    password: "",
    phone: currentUser?.phone,
    corporate_entity: currentUser?.corporate_entity,
    address: currentUser?.address,
    bank: currentUser?.bank,
    account_no: currentUser?.account_no,
    ifsc_code: currentUser?.ifsc_code,
    corporate_account_name: currentUser?.corporate_account_name,
    rm_name: currentUser?.rm_name,
    rm_contact_no: currentUser?.rm_contact_no,
    rm_email: currentUser?.rm_email,
    rm_address: currentUser?.rm_address,
    client_code: currentUser?.client_code,
    portfolio_unique_code: currentUser?.portfolio_unique_code,
    fund_sac: currentUser?.fund_sac,
    dp_address_id: currentUser?.dp_address_id,
  });

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    if (
      profile.password === "" ||
      profile.password.length < 6 ||
      !profile.password
    ) {
      toast.error("Password Must be 6 digit");
    } else {
      try {
        const response = updateProfile(currentUser?._id);
        console.log(response);
        toast.success("Updated Password Successfully");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Card>
      <CardHeader color="purple" contentPosition="none">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-white text-2xl">My Account</h2>
          {/* <Button
                        color="transparent"
                        buttonType="link"
                        size="lg"
                        style={{ padding: 0 }}
                    >
                        Settings
                    </Button> */}
        </div>
      </CardHeader>
      <CardBody>
        <div>
          <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase">
            Personal Details
          </h6>
          <div className="flex flex-wrap mt-10">
            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
              <Input
                value={currentUser?.corporate_entity}
                disabled
                type=""
                color="purple"
                placeholder="Corporate Entity"
              />
            </div>
            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
              <Input
                type="text"
                disabled
                value={currentUser?.email}
                color="purple"
                placeholder="E-mail"
              />
            </div>
            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
              <Input
                disabled
                value={currentUser?.name}
                type="text"
                color="purple"
                placeholder="Contact Person"
              />
            </div>
            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
              <Input
                type="number"
                disabled
                value={currentUser?.phone}
                color="purple"
                placeholder="Mobile No"
              />
            </div>

            <div className="w-full lg:w-12/12 pr-4 mb-10 font-light">
              <Input
                disabled
                value={currentUser?.address}
                type="text"
                color="purple"
                placeholder="Address"
              />
            </div>
          </div>
          {currentUser?.role === 0 ? (
            <>
              <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase">
                Bank Details
              </h6>
              <div className="flex flex-wrap mt-10">
                <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                  <Input
                    value={currentUser?.bank}
                    disabled
                    type=""
                    color="purple"
                    placeholder="Bank"
                  />
                </div>
                <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                  <Input
                    type="text"
                    disabled
                    value={currentUser?.account_no}
                    color="purple"
                    placeholder="Corporate Acc. No"
                  />
                </div>
                <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                  <Input
                    disabled
                    value={currentUser?.ifsc_code}
                    type="text"
                    color="purple"
                    placeholder="IFSC Code"
                  />
                </div>
                <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                  <Input
                    type="text"
                    disabled
                    value={currentUser?.corporate_account_names}
                    color="purple"
                    placeholder="Corporate Acc Name"
                  />
                </div>
              </div>
              <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase">
                RM Details
              </h6>
              <div className="flex flex-wrap mt-10">
                <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                  <Input
                    value={currentUser?.rm_name}
                    disabled
                    type=""
                    color="purple"
                    placeholder="RM Name"
                  />
                </div>
                <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                  <Input
                    type="text"
                    disabled
                    value={currentUser?.rm_contact_no}
                    color="purple"
                    placeholder="RM Contact No."
                  />
                </div>
                <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                  <Input
                    disabled
                    value={currentUser?.rm_email}
                    type="text"
                    color="purple"
                    placeholder="RM E-mail Address"
                  />
                </div>
                <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                  <Input
                    type="text"
                    disabled
                    value={currentUser?.rm_address}
                    color="purple"
                    placeholder="Regd. Branch Address"
                  />
                </div>
              </div>

              <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase">
                System Acc Details
              </h6>
              <div className="flex flex-wrap mt-10">
                <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                  <Input
                    value={currentUser?.client_code}
                    disabled
                    type=""
                    color="purple"
                    placeholder="Client Code"
                  />
                </div>
                <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                  <Input
                    type="text"
                    disabled
                    value={currentUser?.portfolio_unique_code}
                    color="purple"
                    placeholder="Portfolio Unique Code"
                  />
                </div>
                <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                  <Input
                    disabled
                    value={currentUser?.fund_sac}
                    type="text"
                    color="purple"
                    placeholder="Fund S.A.C"
                  />
                </div>
                <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                  <Input
                    type="text"
                    disabled
                    value={currentUser?.dp_address_id}
                    color="purple"
                    placeholder="DP Access ID"
                  />
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
          {/* <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase">
            Change Password
          </h6>
          <div className="flex flex-wrap mt-10">
            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
              <Input
                type="text"
                color="purple"
                placeholder="Current Password"

              />
            </div>
            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
            //   <Input type="email" color="purple" placeholder="New Password" />
            // </div>
            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
              <Input
                onChange={(e) =>
                  setProfile({ ...profile, password: e.target.value })
                }
                type="email"
                color="purple"
                placeholder="New Password "
              />
            </div>
            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
              <Button
                color="lightBlue"
                buttonType="filled"
                size="lg"
                rounded={false}
                block={true}
                iconOnly={false}
                ripple="light"
                onClick={handleUpdateProfile}
              >
                Change Password
              </Button>
            </div>
          </div> */}
        </div>
      </CardBody>
    </Card>
  );
}
