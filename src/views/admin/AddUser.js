import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Button from "@material-tailwind/react/Button";
import Input from "@material-tailwind/react/Input";
import { useState } from "react";
import { addUser } from "api";
import { toast } from "react-toastify";

export default function AddUser() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    corporate_entity: "",
    address: "",
    bank: "",
    account_no: "",
    ifsc_code: "",
    corporate_account_name: "",
    rm_name: "",
    rm_contact_no: "",
    rm_email: "",
    rm_address: "",
    client_code: "",
    portfolio_unique_code: "",
    fund_sac: "",
    dp_address_id: "",
  });

  const handleAddUser = async (e) => {
    e.preventDefault();

    if (profile.email === "") return toast.error("Enter a Valid a Email");
    if (profile.password === "") return toast.error("Please Enter Password");
    if (profile.phone === "")
      return toast.error("Please Enter Valid Phone Number");
    if (profile.name === "") return toast.error("Please Enter Name");

    addUser(profile)
      .then((res) => {
        toast.success("Login successful");
      })
      .catch((err) => console.log(err.json));
  };

  return (
    <>
      <div className="px-3 md:px-8 h-auto mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-0">
            <div className="xl:col-start-1 xl:col-end-5 px-4 mb-16">
              <Card>
                <CardHeader color="purple" contentPosition="none">
                  <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-2xl">Add New User</h2>
                  </div>
                </CardHeader>
                <CardBody>
                  <div onSubmit={handleAddUser}>
                    <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase">
                      Personal Details
                    </h6>
                    <div className="flex flex-wrap mt-10">
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                          value={profile.corporate_entity}
                          type=""
                          color="purple"
                          placeholder="Corporate Entity"
                          onChange={(e) =>
                            setProfile({
                              ...profile,
                              corporate_entity: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                        <Input
                          type="text"
                          value={profile.email}
                          color="purple"
                          placeholder="E-mail"
                          onChange={(e) =>
                            setProfile({ ...profile, email: e.target.value })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                          value={profile.name}
                          type="text"
                          color="purple"
                          placeholder="Contact Person"
                          onChange={(e) =>
                            setProfile({ ...profile, name: e.target.value })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                        <Input
                          type="number"
                          value={profile.phone}
                          color="purple"
                          placeholder="Mobile No"
                          onChange={(e) =>
                            setProfile({ ...profile, phone: e.target.value })
                          }
                        />
                      </div>

                      <div className="w-full lg:w-12/12 pr-4 mb-10 font-light">
                        <Input
                          value={profile.address}
                          type="text"
                          color="purple"
                          placeholder="Address"
                          onChange={(e) =>
                            setProfile({ ...profile, address: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase">
                      Bank Details
                    </h6>
                    <div className="flex flex-wrap mt-10">
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                          value={profile.bank}
                          type=""
                          color="purple"
                          placeholder="Bank"
                          onChange={(e) =>
                            setProfile({ ...profile, bank: e.target.value })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                        <Input
                          type="text"
                          value={profile.account_no}
                          color="purple"
                          placeholder="Corporate Acc. No"
                          onChange={(e) =>
                            setProfile({
                              ...profile,
                              account_no: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                          value={profile.ifsc_code}
                          type="text"
                          color="purple"
                          placeholder="IFSC Code"
                          onChange={(e) =>
                            setProfile({
                              ...profile,
                              ifsc_code: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                        <Input
                          type="text"
                          value={profile.corporate_account_name}
                          color="purple"
                          placeholder="Corporate Acc Name"
                          onChange={(e) =>
                            setProfile({
                              ...profile,
                              corporate_account_name: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase">
                      RM Details
                    </h6>
                    <div className="flex flex-wrap mt-10">
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                          value={profile.rm_name}
                          type=""
                          color="purple"
                          placeholder="RM Name"
                          onChange={(e) =>
                            setProfile({ ...profile, rm_name: e.target.value })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                        <Input
                          type="text"
                          value={profile.rm_contact_no}
                          color="purple"
                          placeholder="RM Contact No."
                          onChange={(e) =>
                            setProfile({
                              ...profile,
                              rm_contact_no: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                          value={profile.rm_email}
                          type="text"
                          color="purple"
                          placeholder="RM E-mail Address"
                          onChange={(e) =>
                            setProfile({ ...profile, rm_email: e.target.value })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                        <Input
                          type="text"
                          value={profile.rm_address}
                          color="purple"
                          placeholder="Regd. Branch Address"
                          onChange={(e) =>
                            setProfile({
                              ...profile,
                              rm_address: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase">
                      System Acc Details
                    </h6>
                    <div className="flex flex-wrap mt-10">
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                          value={profile.client_code}
                          type=""
                          color="purple"
                          placeholder="Client Code"
                          onChange={(e) =>
                            setProfile({
                              ...profile,
                              client_code: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                        <Input
                          type="text"
                          value={profile.portfolio_unique_code}
                          color="purple"
                          placeholder="Portfolio Unique Code"
                          onChange={(e) =>
                            setProfile({
                              ...profile,
                              portfolio_unique_code: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                          value={profile.fund_sac}
                          type="text"
                          color="purple"
                          placeholder="Fund S.A.C"
                          onChange={(e) =>
                            setProfile({ ...profile, fund_sac: e.target.value })
                          }
                        />
                      </div>
                      <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                        <Input
                          type="text"
                          value={profile.dp_address_id}
                          color="purple"
                          placeholder="DP Access ID"
                          onChange={(e) =>
                            setProfile({
                              ...profile,
                              dp_address_id: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase">
                      Password
                    </h6>
                    <div className="flex flex-wrap mt-10">
                      <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                        <Input
                          type="text"
                          color="purple"
                          placeholder="Password"
                          onChange={(e) =>
                            setProfile({ ...profile, password: e.target.value })
                          }
                        />
                      </div>

                      <div className="w-full lg:w-6/12  mb-10 font-light">
                        <Button
                          color="lightBlue"
                          buttonType="filled"
                          size="lg"
                          rounded={false}
                          block={true}
                          iconOnly={false}
                          ripple="light"
                          id="submit"
                          onClick={handleAddUser}
                        >
                          Create
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
