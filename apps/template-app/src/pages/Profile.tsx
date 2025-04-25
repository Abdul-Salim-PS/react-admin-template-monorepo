import { LuPencil } from "react-icons/lu";
import { useUserStore } from "../store/userStore";
import { Avatar, Button, ChangePassword, ProfileForm } from "ileaf-ui";
import { useState } from "react";

const Profile = () => {
  const { user } = useUserStore();
  const [showEditForm, setShowEditForm] = useState(false);

  const handleSubmit = async (values: any) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Mocked async function called with values:", values);
        resolve(values);
      }, 1000);
    });
  };

  const handleChangePassword = async (values: any) => {
    console.log("first");
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Mocked async function called with values:", values);
        resolve(values);
      }, 1000);
    });
  };

  const handleFileUpload = async (file: File) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Mocked async function called with values:", file);
        resolve(file);
      }, 1000);
    });
  };

  return (
    <>
      <div className="flex gap-6 lg:gap-10 border-b border-gray-200 w-full p-5 items-center">
        <Avatar
          handleUpload={handleFileUpload}
          imageUrl={
            user?.avatar ??
            "https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg"
          }
        />
        <div className="flex w-full flex-col gap-3">
          <div className="flex gap-3">
            <p className="text-xl font-bold">
              {user?.first_name ?? ""} {user?.last_name ?? ""}
            </p>
            <Button
              onClick={() => {
                setShowEditForm((prev) => !prev);
              }}
              variant="transparent"
              className="border-none p-0 cursor-pointer"
            >
              <LuPencil />
            </Button>
          </div>
          <p>{user?.email ?? ""}</p>
          <p>{user?.phone ?? ""}</p>
        </div>
      </div>
      {showEditForm ? (
        <div className="p-5 lg:py-10 border-b border-gray-200">
          <ProfileForm initialValues={user} handleSubmit={handleSubmit} />
        </div>
      ) : (
        ""
      )}
      <div className="p-5 lg:py-10">
        <h2 className="font-bold text-xl">Change Password</h2>
        <ChangePassword handleChangePassword={handleChangePassword} />
      </div>
    </>
  );
};

export default Profile;
